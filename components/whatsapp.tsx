"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

interface WhatsAppFloatProps {
  phoneNumber?: string
  message?: string
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
}

export default function WhatsAppFloat({
  phoneNumber = "+573161744421",
  message = "¡Hola! Me gustaría obtener más información.",
  position = "bottom-right",
}: WhatsAppFloatProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Mensaje expandido */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-in slide-in-from-bottom-2 duration-300">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-800">WhatsApp</p>
                <p className="text-xs text-gray-500">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-gray-700 mb-3">¡Hola! 👋 ¿En qué puedo ayudarte hoy?</p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Iniciar conversación
          </button>
        </div>
      )}

      {/* Botón principal */}
      <div className="relative">
        {/* Pulso animado */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-30"></div>

        {/* Botón */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group transform hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />

          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            ¡Chatea con nosotros!
          </div>
        </button>

        {/* Indicador de notificación */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </div>
    </div>
  )
}
