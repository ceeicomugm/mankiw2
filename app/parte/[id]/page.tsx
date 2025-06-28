import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen, Calculator, BarChart3, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const partesData = {
  introduccion: {
    titulo: "Parte I: Introducción",
    descripcion: "Fundamentos básicos del pensamiento económico",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    capitulos: [
      {
        id: 1,
        titulo: "Los diez principios de la economía",
        descripcion: "Principios fundamentales que rigen las decisiones económicas individuales y sociales",
        temas: ["Decisiones individuales", "Interacción en mercados", "Funcionamiento de la economía"],
        duracion: "45 min",
        completado: true,
        dificultad: "Básico",
      },
      {
        id: 2,
        titulo: "Pensando como economista",
        descripcion: "Método científico aplicado a la economía y modelos económicos fundamentales",
        temas: ["Método científico", "Modelos económicos", "Economía positiva vs normativa"],
        duracion: "50 min",
        completado: true,
        dificultad: "Básico",
      },
      {
        id: 3,
        titulo: "La interdependencia y las ganancias del comercio",
        descripcion: "Ventaja absoluta, comparativa y los beneficios de la especialización",
        temas: ["Ventaja absoluta", "Ventaja comparativa", "Términos de intercambio"],
        duracion: "55 min",
        completado: true,
        dificultad: "Intermedio",
      },
    ],
  },
  mercados: {
    titulo: "Parte II: Cómo funcionan los mercados",
    descripcion: "Análisis fundamental de la oferta, demanda y equilibrio de mercado",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "from-emerald-50 to-emerald-100",
    capitulos: [
      {
        id: 4,
        titulo: "Las fuerzas del mercado de la oferta y la demanda",
        descripcion: "Fundamentos de oferta, demanda y determinación de precios",
        temas: ["Ley de oferta y demanda", "Determinantes", "Equilibrio de mercado"],
        duracion: "60 min",
        completado: true,
        dificultad: "Intermedio",
      },
      {
        id: 5,
        titulo: "La elasticidad y sus aplicaciones",
        descripcion: "Medición de la sensibilidad de oferta y demanda ante cambios en variables",
        temas: ["Elasticidad precio", "Elasticidad ingreso", "Elasticidad cruzada"],
        duracion: "65 min",
        completado: true,
        dificultad: "Intermedio",
      },
      {
        id: 6,
        titulo: "Oferta, demanda y políticas gubernamentales",
        descripcion: "Impacto de la intervención gubernamental en el funcionamiento de los mercados",
        temas: ["Controles de precios", "Impuestos", "Pérdida de eficiencia"],
        duracion: "55 min",
        completado: true,
        dificultad: "Intermedio",
      },
    ],
  },
  bienestar: {
    titulo: "Parte III: Los mercados y el bienestar",
    descripcion: "Análisis de eficiencia económica y aplicaciones de política",
    color: "from-violet-500 to-violet-600",
    bgColor: "from-violet-50 to-violet-100",
    capitulos: [
      {
        id: 7,
        titulo: "Consumidores, productores y eficiencia de los mercados",
        descripcion: "Excedente del consumidor y productor como medidas de bienestar económico",
        temas: ["Excedente del consumidor", "Excedente del productor", "Eficiencia de mercado"],
        duracion: "50 min",
        completado: false,
        dificultad: "Intermedio",
      },
      {
        id: 8,
        titulo: "Aplicación: los costos de los impuestos",
        descripcion: "Análisis del impacto de los impuestos en el bienestar y la eficiencia económica",
        temas: ["Incidencia fiscal", "Pérdida de peso muerto", "Recaudación tributaria"],
        duracion: "45 min",
        completado: false,
        dificultad: "Intermedio",
      },
      {
        id: 9,
        titulo: "Aplicación: comercio internacional",
        descripcion: "Efectos del comercio internacional en el bienestar nacional",
        temas: ["Ganancias del comercio", "Aranceles", "Cuotas de importación"],
        duracion: "60 min",
        completado: false,
        dificultad: "Avanzado",
      },
    ],
  },
  "sector-publico": {
    titulo: "Parte IV: La economía del sector público",
    descripcion: "Fallas de mercado y el papel del gobierno en la economía",
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-50 to-orange-100",
    capitulos: [
      {
        id: 10,
        titulo: "Externalidades",
        descripcion: "Efectos externos y soluciones para corregir fallas de mercado",
        temas: ["Externalidades positivas", "Externalidades negativas", "Soluciones públicas y privadas"],
        duracion: "55 min",
        completado: false,
        dificultad: "Intermedio",
      },
      {
        id: 11,
        titulo: "Bienes públicos y recursos comunes",
        descripcion: "Clasificación de bienes y problemas de provisión pública",
        temas: ["Bienes públicos", "Recursos comunes", "Tragedia de los comunes"],
        duracion: "50 min",
        completado: false,
        dificultad: "Intermedio",
      },
      {
        id: 12,
        titulo: "El diseño del sistema impositivo",
        descripcion: "Principios de tributación y diseño de políticas fiscales",
        temas: ["Equidad vs eficiencia", "Impuestos progresivos", "Incidencia tributaria"],
        duracion: "60 min",
        completado: false,
        dificultad: "Avanzado",
      },
    ],
  },
}

export default function PartePage({ params }: { params: { id: string } }) {
  const parte = partesData[params.id as keyof typeof partesData]

  if (!parte) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <p className="text-slate-600">Parte no encontrada</p>
              <Link href="/">
                <Button className="mt-4">Volver al inicio</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const getDificultadColor = (dificultad: string) => {
    switch (dificultad) {
      case "Básico":
        return "bg-emerald-100 text-emerald-700 border-emerald-200"
      case "Intermedio":
        return "bg-amber-100 text-amber-700 border-amber-200"
      case "Avanzado":
        return "bg-rose-100 text-rose-700 border-rose-200"
      default:
        return "bg-slate-100 text-slate-700 border-slate-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Inicio
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Image src="/logo-ceic.png" alt="CEIC Logo" width={32} height={32} className="rounded" />
              <span className="font-semibold text-slate-800">EconoHub CEIC</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero de la parte */}
        <div className={`rounded-3xl bg-gradient-to-br ${parte.bgColor} p-8 mb-12 shadow-lg`}>
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">{parte.titulo}</h1>
            <p className="text-xl text-slate-700 mb-6 leading-relaxed">{parte.descripcion}</p>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                {parte.capitulos.length} capítulos
              </Badge>
              <div className="text-sm text-slate-600">
                {parte.capitulos.filter((cap) => cap.completado).length} completados
              </div>
            </div>
          </div>
        </div>

        {/* Lista de capítulos */}
        <div className="space-y-6">
          {parte.capitulos.map((capitulo, index) => (
            <Card
              key={capitulo.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-slate-800 group-hover:text-slate-900 transition-colors">
                          {capitulo.titulo}
                        </CardTitle>
                        {capitulo.completado && (
                          <div className="flex items-center gap-2 mt-1">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            <span className="text-sm text-emerald-600">Completado</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <CardDescription className="text-base mb-4 leading-relaxed">{capitulo.descripcion}</CardDescription>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {capitulo.temas.map((tema, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tema}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {capitulo.duracion}
                      </div>
                      <Badge className={getDificultadColor(capitulo.dificultad)} variant="outline">
                        {capitulo.dificultad}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Link href={`/capitulo/${capitulo.id}`}>
                    <Button className="group-hover:shadow-md transition-all duration-300">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {capitulo.completado ? "Repasar" : "Estudiar"}
                    </Button>
                  </Link>
                  <Link href={`/ejercicios/${capitulo.id}`}>
                    <Button variant="outline" className="hover:bg-slate-50">
                      <Calculator className="h-4 w-4 mr-2" />
                      Ejercicios
                    </Button>
                  </Link>
                  <Link href={`/graficos/${capitulo.id}`}>
                    <Button variant="outline" className="hover:bg-slate-50">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Gráficos
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navegación */}
        <div className="mt-12 flex justify-center">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <h3 className="font-semibold text-slate-800 mb-2">¿Completaste esta parte?</h3>
              <p className="text-sm text-slate-600 mb-4">Continúa con el siguiente módulo del curso</p>
              <Button className="shadow-md hover:shadow-lg transition-all duration-300">
                Siguiente módulo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}