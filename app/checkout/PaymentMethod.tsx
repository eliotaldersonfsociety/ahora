"use client"
import type React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface PaymentMethodProps {
  paymentMethod: string
  setPaymentMethod: (value: string) => void
  isProcessing: boolean
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ paymentMethod, setPaymentMethod, isProcessing }) => {
  return (
    <div className="mb-6">
      <Accordion type="single" collapsible>
        <AccordionItem value="payment-method" className="border rounded-lg">
          <AccordionTrigger className="text-xl font-bold px-6 py-4 hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              Método de Pago
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-6 mt-4">
              {/* Información introductoria */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Opciones de Pago</h3>
                <p className="text-sm text-gray-600">
                  Selecciona tu método de pago preferido. Ofrecemos pago contra entrega para tu comodidad y seguridad.
                </p>
              </div>

              {/* Método de pago */}
              <div className="space-y-4">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-3"
                  disabled={isProcessing}
                >
                  <div
                    className={`border rounded-lg p-4 transition-all duration-200 cursor-pointer ${
                      paymentMethod === "contra-entrega"
                        ? "bg-purple-50 border-green-500 ring-2 ring-green-200 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                    } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <label className="flex items-center gap-4 w-full cursor-pointer">
                      <RadioGroupItem value="contra-entrega" className="mt-1" />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                              </svg>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900">Pago Contra Entrega</span>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 border border-green-200">
                                  Seguro
                                </span>
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                                  Sin riesgo
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <img
                              src="/pago.png"
                              alt="Métodos de pago aceptados"
                              className="h-6 w-auto"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.style.display = "none"
                              }}
                            />
                          </div>
                        </div>

                        <div className="text-sm text-gray-600 space-y-2">
                          <p className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-green-500 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Recibes tu producto y pagas en tu casa
                          </p>
                          <p className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-green-500 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Puedes revisar el producto antes de pagar
                          </p>
                          <p className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-green-500 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Aceptamos efectivo y tarjetas
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                </RadioGroup>

                {/* Información del método seleccionado */}
                {paymentMethod === "contra-entrega" && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-2">¿Cómo funciona el pago contra entrega?</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              1
                            </span>
                            <p>
                              Una vez realices tu pedido, nos comunicaremos contigo por WhatsApp para confirmar todos
                              los detalles.
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              2
                            </span>
                            <p>El transportista llegará a tu dirección con el producto.</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              3
                            </span>
                            <p>Puedes revisar el producto y realizar el pago si todo está correcto.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Información de seguridad */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <div className="text-sm text-red-800">
                      <p className="font-medium mb-1">Compra 100% segura:</p>
                      <p>
                        Tu dinero está protegido. Solo pagas cuando recibes y verificas que el producto esté en
                        perfectas condiciones. Si hay algún problema, no tienes que pagar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
