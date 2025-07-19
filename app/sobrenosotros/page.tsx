"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Truck, Shield, Users, MapPin, Star, Clock, Award, Heart, Target, Eye } from "lucide-react"
import Link from "next/link";

export default function AboutUs() {
  const stats = [
    { number: "10,000+", label: "Productos disponibles", icon: ShoppingCart },
    { number: "50,000+", label: "Clientes satisfechos", icon: Users },
    { number: "32", label: "Departamentos cubiertos", icon: MapPin },
    { number: "99.5%", label: "Entregas exitosas", icon: Truck },
  ]

  const values = [
    {
      icon: Shield,
      title: "Confianza",
      description:
        "Garantizamos la autenticidad y calidad de todos nuestros productos con políticas de devolución flexibles.",
    },
    {
      icon: Clock,
      title: "Rapidez",
      description: "Procesamos y enviamos tu pedido en tiempo récord para que recibas tus productos lo antes posible.",
    },
    {
      icon: Award,
      title: "Calidad",
      description: "Seleccionamos cuidadosamente cada producto para asegurar que cumpla con los más altos estándares.",
    },
    {
      icon: Heart,
      title: "Servicio",
      description: "Nuestro equipo está disponible para brindarte la mejor atención y resolver todas tus dudas.",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">
          Sobre Nosotros
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Conoce Colombia Importadora</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Somos una empresa líder en la venta de artículos diversos por internet, comprometidos con brindar la mejor
          experiencia de compra en línea para todos los colombianos.
        </p>
      </div>

      {/* Main Story */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Nuestra Historia</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Colombia Importadora</strong> nació con la visión de democratizar el
              acceso a productos de calidad en todo el territorio colombiano. Ubicados estratégicamente en Colombia,
              hemos construido una red logística robusta que nos permite llegar a cada rincón del país.
            </p>
            <p>
              Ofrecemos una amplia gama de productos cuidadosamente seleccionados, desde artículos para el hogar hasta
              tecnología de última generación, siempre manteniendo nuestro compromiso con la calidad y precios
              competitivos.
            </p>
            <p>
              Nuestra misión es proporcionar una experiencia de compra excepcional con un servicio al cliente de primera
              clase, construyendo relaciones duraderas basadas en la confianza y satisfacción de nuestros clientes.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
            <div className="text-center">
              <ShoppingCart className="h-24 w-24 text-red-800 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">Tu tienda de confianza</h4>
              <p className="text-gray-600 mt-2">Desde 2020 conectando Colombia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-red-800" />
              <div className="text-2xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="border-l-4 border-l-red-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-red-800" />
              Nuestra Misión
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Proporcionar una experiencia de compra excepcional a través de una plataforma digital confiable,
              ofreciendo productos de calidad con envíos seguros a todo Colombia, respaldados por un servicio al cliente
              de primera clase que supere las expectativas de nuestros usuarios.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-red-800" />
              Nuestra Visión
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Ser la plataforma de e-commerce líder en Colombia, reconocida por nuestra innovación, confiabilidad y
              compromiso con la satisfacción del cliente, conectando a las familias colombianas con los mejores
              productos del mundo de manera fácil, rápida y segura.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8">Nuestros Valores</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <value.icon className="h-12 w-12 mx-auto text-red-800 mb-2" />
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">¿Por qué elegir Colombia Importadora?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos diferenciamos por nuestro compromiso inquebrantable con la excelencia y la satisfacción del cliente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-sm">
                <Truck className="h-8 w-8 text-red-800" />
              </div>
              <h4 className="font-semibold mb-2">Envíos a Todo el País</h4>
              <p className="text-sm text-muted-foreground">Cobertura nacional con tiempos de entrega optimizados</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-sm">
                <Star className="h-8 w-8 text-red-800" />
              </div>
              <h4 className="font-semibold mb-2">Productos de Calidad</h4>
              <p className="text-sm text-muted-foreground">
                Selección rigurosa de productos con garantía de autenticidad
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-sm">
                <Users className="h-8 w-8 text-red-800" />
              </div>
              <h4 className="font-semibold mb-2">Atención Personalizada</h4>
              <p className="text-sm text-muted-foreground">Equipo de soporte dedicado para resolver todas tus dudas</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/" passHref>
            <Button size="lg" className="bg-red-800 hover:bg-red-900">
              Conoce Nuestros Productos
            </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
