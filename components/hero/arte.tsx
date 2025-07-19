"use client"

import { Utensils, Star, Palette } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function Arte() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    const scrollAmount = 200
    let intervalId: NodeJS.Timeout | null = null

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
      }, 5000)
    }

    const isMobile = window.innerWidth < 768
    if (isMobile) {
      startAutoScroll()
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  return (
    <section className="w-full h-52 md:h-64 bg-gradient-to-r from-red-900 via-red-900 to-red-900 relative overflow-hidden">
      {/* Imágenes de fondo flotantes */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/l1.avif"
          width="80"
          height="80"
          alt="Frutas"
          className="absolute top-4 left-20 rounded-full object-cover"
        />
        <Image
          src="/l2.jpg"
          width="60"
          height="60"
          alt="Vegetales"
          className="absolute bottom-4 left-40 rounded-full object-cover"
        />
        <Image
          src="/l3.jpg"
          width="70"
          height="70"
          alt="Granos"
          className="absolute top-6 right-32 rounded-full object-cover"
        />
        <Image
          src="/l4.jpeg"
          width="50"
          height="50"
          alt="Especias"
          className="absolute bottom-6 right-20 rounded-full object-cover"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10 flex items-center justify-center h-full">
        {/* Contenedor principal con scroll horizontal en móvil */}
        <div
          ref={carouselRef}
          className="flex flex-row items-center justify-between gap-6 hide-scrollbar overflow-x-auto pb-2 w-full"
        >
          {/* Contenido izquierdo */}
          <div className="flex items-center gap-6 min-w-max">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  Arte
                </h1>
                <p className="text-white/90 text-xs md:text-sm font-medium">
                  Color • Técnica • Emoción
                </p>
              </div>
            </div>

            {/* Productos destacados */}
            <div className="flex items-center gap-2 ml-8 min-w-max">
              <div className="flex -space-x-2">
                <Image
                  src="/y1.jpg"
                  width="32"
                  height="32"
                  alt="Manzanas"
                  className="rounded-full border-2 border-white object-cover shadow-lg"
                />
                <Image
                  src="/y2.jpg"
                  width="32"
                  height="32"
                  alt="Zanahorias"
                  className="rounded-full border-2 border-white object-cover shadow-lg"
                />
                <Image
                  src="/y3.jpg"
                  width="32"
                  height="32"
                  alt="Aguacates"
                  className="rounded-full border-2 border-white object-cover shadow-lg"
                />
              </div>
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="h-4 w-4 text-yellow-300 fill-current" />
                <span className="text-white text-sm font-medium">4.9</span>
              </div>
            </div>
          </div>

          {/* Características destacadas */}
          <div className="flex items-center gap-4 min-w-max">
            {/* Galería de productos adicional */}
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <Image
                  src="/y4.jpg"
                  width="28"
                  height="28"
                  alt="Tomates"
                  className="rounded-lg object-cover shadow-md border border-white/20"
                />
                <Image
                  src="/y5.webp"
                  width="28"
                  height="28"
                  alt="Pimientos"
                  className="rounded-lg object-cover shadow-md border border-white/20"
                />
              </div>
              <div className="flex gap-1">
                <Image
                  src="/y6.jpeg"
                  width="28"
                  height="28"
                  alt="Lechugas"
                  className="rounded-lg object-cover shadow-md border border-white/20"
                />
                <Image
                  src="/y7.png"
                  width="28"
                  height="28"
                  alt="Cebollas"
                  className="rounded-lg object-cover shadow-md border border-white/20"
                />
              </div>
            </div>

            {/* Estadísticas */}
            <div className="flex gap-2 text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 min-w-[60px]">
                <div className="text-xl font-bold text-white">500+</div>
                <div className="text-xs text-white/80">Productos</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 min-w-[60px]">
                <div className="text-xl font-bold text-white">24h</div>
                <div className="text-xs text-white/80">Entrega</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 min-w-[60px]">
                <div className="text-xl font-bold text-white">100%</div>
                <div className="text-xs text-white/80">Natural</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores adicionales */}
      <div className="flex justify-center md:justify-start items-center gap-6 mt-2 text-white/80 text-xs px-4">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
          <span>100+ Productos</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"></div>
          <span>Entrega Rápida</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
          <span>Calidad Premium</span>
        </div>
      </div>
    </section>
  )
}