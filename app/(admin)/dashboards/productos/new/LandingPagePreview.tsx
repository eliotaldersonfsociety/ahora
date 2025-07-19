// LandingPagePreview.tsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";

interface LandingData {
  titles: string[];
  texts: string[];
  callToAction: string;
}

interface Props {
  productTitle: string;
  productCategory: string;
  productImages?: string[];
  productId?: number;
  onSaveLanding?: (landingData: LandingData) => Promise<void>;
}

const customLoader = ({ src }: { src: string }) => {
  return src;
};

export default function LandingPagePreview({
  productTitle,
  productCategory,
  productImages = [],
  productId,
  onSaveLanding,
}: Props) {
  const [landingData, setLandingData] = useState<LandingData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("generated_landing");
    if (saved) {
      try {
        setLandingData(JSON.parse(saved));
      } catch (e) {
        console.error("Error al parsear datos guardados.");
      }
    }
  }, []);

  const generateLandingTexts = async (retryCount = 0) => {
    if (!productTitle || !productCategory) {
      toast({
        title: "Datos incompletos",
        description: "Por favor ingresa un título y categoría antes de generar.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/landingpage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: productTitle, category: productCategory }),
      });

      if (!res.ok) {
        // Manejo específico para modelo saturado o servidor colapsado
        if ((res.status === 503 || res.status === 500) && retryCount < 3) {
          const waitTime = (retryCount + 1) * 2000; // Aumentamos el tiempo de espera
          toast({
            title: "🔄 Servidor ocupado",
            description: `El servicio está saturado. Reintentando automáticamente en ${waitTime / 1000} segundos...`,
          });

          await new Promise(resolve => setTimeout(resolve, waitTime));
          return generateLandingTexts(retryCount + 1);
        } 
        
        // Manejo de errores después de reintentos fallidos
        let errorMessage = "⚠️ Servicio no disponible";
        let errorDescription = "El servidor está experimentando alta demanda. Por favor, intenta nuevamente en unos minutos.";
        
        if (res.status === 429) {
          errorMessage = "🚫 Límite alcanzado";
          errorDescription = "Has realizado muchas solicitudes. Espera un momento antes de intentar nuevamente.";
        } else if (res.status === 400) {
          errorMessage = "❌ Datos inválidos";
          errorDescription = "Verifica que el título y categoría sean válidos.";
        }

        toast({
          title: errorMessage,
          description: errorDescription,
          variant: "destructive",
        });

        // No lanzamos error, solo retornamos para evitar el error técnico
        return;
      }

      const data = await res.json();
      setLandingData(data);
      localStorage.setItem("generated_landing", JSON.stringify(data));
      toast({
        title: "✅ Contenido generado",
        description: "Tu landing page está lista para ver.",
      });
    } catch (error) {
      console.error("Error al generar landing:", error);
      
      // Manejo más amigable de errores de conexión
      if (error instanceof TypeError && error.message.includes('fetch')) {
        toast({
          title: "🌐 Sin conexión",
          description: "No se pudo conectar con el servidor. Verifica tu conexión a internet.",
          variant: "destructive",
        });
      } else {
        // Error genérico más amigable
        toast({
          title: "😵 Oops! Algo salió mal",
          description: "El servicio no está disponible en este momento. Intenta nuevamente en unos minutos.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const saveLandingToDB = async () => {
    if (!landingData) {
      toast({
        title: "Error",
        description: "No hay datos de landing para guardar.",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);
    try {
      if (onSaveLanding) {
        await onSaveLanding(landingData);
        toast({
          title: "Landing guardada",
          description: "El contenido de la landing page se ha guardado correctamente.",
        });
      } else if (productId) {
        const res = await fetch("/api/save-landing", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId,
            landingData,
          }),
        });

        if (!res.ok) {
          let errorMessage = "Error guardando landing page";
          if (res.status === 500) {
            errorMessage = "Error interno del servidor al guardar";
          } else if (res.status === 404) {
            errorMessage = "Producto no encontrado";
          }
          throw new Error(errorMessage);
        }

        toast({
          title: "Landing guardada",
          description: "El contenido de la landing page se ha guardado correctamente.",
        });
      } else {
        throw new Error("No hay productId definido");
      }
    } catch (error) {
      console.error("Error al guardar landing:", error);
      toast({
        title: "Error guardando landing",
        description: error instanceof Error ? error.message : "Hubo un problema al guardar en la base de datos.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const resetLanding = () => {
    localStorage.removeItem("generated_landing");
    setLandingData(null);
    toast({
      title: "Reinicio completo",
      description: "Puedes generar una nueva landing.",
    });
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Previsualización Landing Page</h2>
      {landingData ? (
        <div className="space-y-8">
          <section className="text-center py-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{landingData.titles[0]}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{landingData.texts[0]}</p>
          </section>

          <div className="space-y-12">
            {landingData.titles.slice(1).map((title, index) => (
              <section key={index} className="py-8 grid lg:grid-cols-2 gap-10 items-center">
                <div className="relative">
                  {productImages.length > 0 ? (
                    <Image
                      loader={customLoader}
                      src={productImages[index % productImages.length]}
                      alt={`Imagen ${title}`}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md object-cover w-full h-auto"
                    />
                  ) : (
                    <div className="bg-gray-100 rounded-lg flex items-center justify-center h-48">
                      <p className="text-gray-500">Sin imagen disponible</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                    Sección {index + 1}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {landingData.texts[index + 1]}
                  </p>
                </div>
              </section>
            ))}
          </div>

          <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{landingData.callToAction}</h3>
            <button className="mt-4 bg-white text-blue-600 hover:bg-blue-50 transition-colors px-6 py-3 rounded-lg font-semibold shadow-md">
              Comprar Ahora →
            </button>
          </section>

          <div className="flex justify-center gap-4">
            <button
              onClick={saveLandingToDB}
              disabled={saving || (!productId && !onSaveLanding)}
              className="mt-6 px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition disabled:bg-green-300"
            >
              {saving ? "Guardando..." : "Guardar Landing"}
            </button>
            <button
              onClick={resetLanding}
              className="mt-6 px-5 py-2 bg-red-100 hover:bg-red-200 text-red-600 font-medium rounded-lg transition"
            >
              Limpiar y generar otra
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4 py-10">
          <div className="text-center space-y-2">
            <p className="text-gray-500">No se ha generado contenido aún.</p>
            <p className="text-sm text-gray-400">
              Si el botón no responde, es posible que el servidor esté ocupado
            </p>
          </div>
          <button
            onClick={() => generateLandingTexts(0)}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Generando contenido...
              </span>
            ) : (
              "Generar Contenido para Landing"
            )}
          </button>
          {loading && (
            <p className="text-xs text-gray-500 text-center">
              Esto puede tomar unos segundos. Si el servidor está ocupado, reintentaremos automáticamente.
            </p>
          )}
        </div>
      )}
    </div>
  );
}