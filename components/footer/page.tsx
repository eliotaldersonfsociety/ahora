"use client";
import { Facebook, Instagram, Twitter, ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

const categories = [
  { name: "Electrónica", slug: "electronica" },
  { name: "Automotriz", slug: "automotriz" },
  { name: "Motos", slug: "motos" },
  { name: "Libros", slug: "libros" },
  { name: "Hogar y Jardín", slug: "hogaryjardin" },
  { name: "Tecnología", slug: "tecnologia" },
  { name: "Moda", slug: "moda" },
  { name: "Deportes", slug: "deportes" },
  { name: "Juguetes", slug: "juguetes" },
  { name: "Belleza", slug: "belleza" },
  { name: "Mascotas", slug: "mascotas" },
  { name: "Alimentos", slug: "alimentos" },
  { name: "Salud", slug: "salud" },
  { name: "Gamer", slug: "gamer" },
  { name: "Celulares", slug: "celulares" },
  { name: "Computadoras", slug: "computadoras" },
];

export default function Footer() {
  return (
    <footer className="bg-[#282c31] text-white" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <Image
              src="/tsb.webp"
              alt="Colombia Importadora Logo"
              width={200}
              height={60}
              className="mb-4"
            />
            <p className="text-sm">
              Tienda Texas es una empresa líder en la venta de artículos
              diversos por internet. Ubicados en EEUU, ofrecemos una amplia
              gama de productos de calidad con envíos a todo el país. Nuestra
              misión es proporcionar una experiencia de compra excepcional con
              un servicio al cliente de primera clase.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300">Inicio</a></li>
              <li><a href="/sobrenosotros" className="hover:text-gray-300">Sobre Nosotros</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contacto</a></li>
              <li><a href="/faq" className="hover:text-gray-300">FAQ</a></li>
            </ul>
          </div>

          {/* Categorías con colapsable */}
          <div>
            <Collapsible>
              <CollapsibleTrigger className="text-lg font-semibold mb-4 flex items-center gap-2 hover:text-gray-300">
                Categorías
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className="space-y-2 mt-2">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <a
                        href={`/categorias/${cat.slug}`}
                        className="hover:text-gray-300"
                      >
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <p>Texas, EEUU</p>
            <p>Teléfono: +12146295109</p>
            <p>Email: contacto@tiendatexas.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="" className="hover:text-gray-300">
                <Facebook />
              </a>
              <a href="https://facebook.com/tiendatexas" className="hover:text-gray-300">
                <Instagram />
              </a>
              <a href="" className="hover:text-gray-300">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer inferior */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          <p>&copy; 2025 Tienda Texas. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-4">
            <a href="/terminosycondiciones" className="hover:text-gray-300">
              Términos de Servicio
            </a>
            <a href="/politicadeprivacidad" className="hover:text-gray-300">
              Política de Privacidad
            </a>
            <a href="/politicadedevoluciones" className="hover:text-gray-300">
              Política de Devoluciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
