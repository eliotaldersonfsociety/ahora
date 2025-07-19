import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function OffersBanner() {
  return (
    <Link href="/categorias/ofertas" className="block w-full bg-red-800 text-white py-2 hover:bg-red-900 transition-colors">
      <div className="container mx-auto flex items-center justify-center">
        <span className="font-medium">Mira las últimas ofertas</span>
        <ArrowRight className="h-4 w-4 ml-2" />
      </div>
    </Link>
  )
}

