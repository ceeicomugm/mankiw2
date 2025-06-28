import Link from "next/link"
import { BookOpen, TrendingUp, Users, Calculator, BarChart3, Globe, Building, Coins, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const partes = [
    {
      id: "introduccion",
      titulo: "Introducción",
      descripcion: "Fundamentos básicos del pensamiento económico",
      capitulos: 3,
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      id: "mercados",
      titulo: "Cómo funcionan los mercados",
      descripcion: "Oferta, demanda y equilibrio de mercado",
      capitulos: 3,
      icon: TrendingUp,
      color: "from-emerald-500 to-emerald-600",
      textColor: "text-emerald-700",
      bgColor: "bg-emerald-50",
    },
    {
      id: "bienestar",
      titulo: "Los mercados y el bienestar",
      descripcion: "Eficiencia y aplicaciones de política económica",
      capitulos: 3,
      icon: BarChart3,
      color: "from-violet-500 to-violet-600",
      textColor: "text-violet-700",
      bgColor: "bg-violet-50",
    },
    {
      id: "sector-publico",
      titulo: "La economía del sector público",
      descripcion: "Externalidades, bienes públicos y sistema tributario",
      capitulos: 3,
      icon: Building,
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-700",
      bgColor: "bg-orange-50",
    },
    {
      id: "empresa",
      titulo: "Conducta de la empresa",
      descripcion: "Costos, competencia y estructuras de mercado",
      capitulos: 5,
      icon: Users,
      color: "from-rose-500 to-rose-600",
      textColor: "text-rose-700",
      bgColor: "bg-rose-50",
    },
    {
      id: "trabajo",
      titulo: "Mercados de trabajo",
      descripcion: "Factores de producción y distribución del ingreso",
      capitulos: 3,
      icon: Users,
      color: "from-indigo-500 to-indigo-600",
      textColor: "text-indigo-700",
      bgColor: "bg-indigo-50",
    },
    {
      id: "avanzada",
      titulo: "Temas avanzados",
      descripcion: "Teoría del consumidor y fronteras de la microeconomía",
      capitulos: 2,
      icon: Calculator,
      color: "from-pink-500 to-pink-600",
      textColor: "text-pink-700",
      bgColor: "bg-pink-50",
    },
    {
      id: "macro-datos",
      titulo: "Datos macroeconómicos",
      descripcion: "Medición del ingreso nacional y costo de vida",
      capitulos: 2,
      icon: BarChart3,
      color: "from-cyan-500 to-cyan-600",
      textColor: "text-cyan-700",
      bgColor: "bg-cyan-50",
    },
    {
      id: "largo-plazo",
      titulo: "Economía real a largo plazo",
      descripcion: "Crecimiento, ahorro, inversión y desempleo",
      capitulos: 4,
      icon: TrendingUp,
      color: "from-teal-500 to-teal-600",
      textColor: "text-teal-700",
      bgColor: "bg-teal-50",
    },
    {
      id: "dinero-precios",
      titulo: "Dinero y precios",
      descripcion: "Sistema monetario e inflación",
      capitulos: 2,
      icon: Coins,
      color: "from-amber-500 to-amber-600",
      textColor: "text-amber-700",
      bgColor: "bg-amber-50",
    },
    {
      id: "economia-abierta",
      titulo: "Economía abierta",
      descripcion: "Macroeconomía internacional",
      capitulos: 2,
      icon: Globe,
      color: "from-slate-500 to-slate-600",
      textColor: "text-slate-700",
      bgColor: "bg-slate-50",
    },
    {
      id: "fluctuaciones",
      titulo: "Fluctuaciones económicas",
      descripcion: "Demanda agregada, oferta agregada y políticas",
      capitulos: 3,
      icon: BarChart3,
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-700",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header con logo */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">EC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">EconoHub CEE ICOM</h1>
                <p className="text-sm text-slate-600">Centro de Estudiantes Ingeniería Comercial</p>
              </div>
            </div>
            <Badge variant="outline" className="text-slate-600 border-slate-300">
              Universidad Gabriela Mistral
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Aprende Economía de Forma
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Interactiva
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Plataforma educativa completa con gráficos dinámicos, ejercicios prácticos y contenido detallado para
            dominar los conceptos fundamentales de la economía
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-slate-600">35+ Capítulos</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-slate-600">500+ Ejercicios</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-slate-600">50+ Gráficos</span>
            </div>
          </div>
        </div>

        {/* Módulos del curso */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {partes.map((parte) => {
            const IconComponent = parte.icon
            return (
              <Card
                key={parte.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-white/70 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${parte.color} shadow-lg`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {parte.capitulos} cap.
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-slate-900 transition-colors">
                    {parte.titulo}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{parte.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/parte/${parte.id}`}>
                    <Button className="w-full group-hover:shadow-md transition-all duration-300" size="lg">
                      Explorar módulo
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Características destacadas */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <Card className="text-center border-0 shadow-md bg-white/70 backdrop-blur-sm">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Ejercicios Interactivos</h3>
              <p className="text-sm text-slate-600">
                Practica con retroalimentación inmediata y explicaciones detalladas
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-md bg-white/70 backdrop-blur-sm">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Gráficos Dinámicos</h3>
              <p className="text-sm text-slate-600">Visualiza conceptos económicos con simulaciones interactivas</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-md bg-white/70 backdrop-blur-sm">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Contenido Completo</h3>
              <p className="text-sm text-slate-600">Teoría detallada con ejemplos del mundo real y casos prácticos</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-md bg-white/70 backdrop-blur-sm">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Aprendizaje Adaptativo</h3>
              <p className="text-sm text-slate-600">Contenido que se adapta a tu ritmo y nivel de comprensión</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-br from-blue-50 to-violet-50">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">¿Listo para comenzar tu aprendizaje?</h3>
              <p className="text-slate-600 mb-6">
                Únete a cientos de estudiantes que ya están dominando los conceptos económicos fundamentales
              </p>
              <Link href="/parte/introduccion">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                  Comenzar ahora
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EC</span>
              </div>
              <div>
                <p className="font-semibold text-slate-800">EconoHub CEIC</p>
                <p className="text-sm text-slate-600">Universidad Gabriela Mistral</p>
              </div>
            </div>
            <p className="text-sm text-slate-500">
              © 2025 Centro de Estudiantes Ingeniería Comercial. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
