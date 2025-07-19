import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <Link
      href="/categorias/ofertas"
      className="block w-full bg-sky-500 transition-colors"
    >
      <div className="flex items-center justify-center px-4 py-4 md:px-0 container mx-auto">
        <span className="text-white text-sm sm:text-base md:text-2xl lg:text-4xl text-center font-semibold">
          Productos con más del 40% de descuento
        </span>
        <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 ml-2 text-white" />
      </div>
    </Link>
  );
}
