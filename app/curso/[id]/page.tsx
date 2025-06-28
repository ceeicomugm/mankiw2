import Link from "next/link"
import { ArrowLeft, BookOpen, Calculator, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const cursosData = {
  introduccion: {
    titulo: "Introducción a la Economía",
    descripcion: "Fundamentos básicos y principios económicos fundamentales",
    capitulos: [
      {
        id: 1,
        titulo: "Diez Principios de la Economía",
        descripcion: "Principios fundamentales que rigen las decisiones económicas",
        temas: ["Decisiones individuales", "Interacción en mercados", "Funcionamiento de la economía"],
        duracion: "45 min",
      },
      {
        id: 2,
        titulo: "Pensar como un Economista",
        descripcion: "Método científico y modelos económicos",
        temas: ["Método científico", "Modelos económicos", "Economía positiva vs normativa"],
        duracion: "50 min",
      },
      {
        id: 3,
        titulo: "Interdependencia y Ventajas del Comercio",
        descripcion: "Ventaja absoluta, comparativa y especialización",
        temas: ["Ventaja absoluta", "Ventaja comparativa", "Términos de intercambio"],
        duracion: "55 min",
      },
    ],
  },
  microeconomia: {
    titulo: "Microeconomía",
    descripcion: "Análisis del comportamiento de consumidores, empresas y mercados",
    capitulos: [
      {
        id: 4,
        titulo: "Las Fuerzas del Mercado: Oferta y Demanda",
        descripcion: "Fundamentos de oferta, demanda y equilibrio de mercado",
        temas: ["Ley de oferta y demanda", "Determinantes", "Equilibrio de mercado"],
        duracion: "60 min",
      },
      {
        id: 5,
        titulo: "Elasticidad y sus Aplicaciones",
        descripcion: "Medición de la sensibilidad de oferta y demanda",
        temas: ["Elasticidad precio", "Elasticidad ingreso", "Elasticidad cruzada"],
        duracion: "65 min",
      },
      {
        id: 6,
        titulo: "Oferta, Demanda y Políticas Gubernamentales",
        descripcion: "Impacto de la intervención gubernamental en mercados",
        temas: ["Controles de precios", "Impuestos", "Pérdida de eficiencia"],
        duracion: "55 min",
      },
      {
        id: 7,
        titulo: "Consumidores, Productores y Eficiencia",
        descripcion: "Excedente del consumidor y productor",
        temas: ["Excedente del consumidor", "Excedente del productor", "Eficiencia de mercado"],
        duracion: "50 min",
      },
      {
        id: 13,
        titulo: "Los Costos de Producción",
        descripcion: "Análisis de costos empresariales",
        temas: ["Función de producción", "Costos fijos y variables", "Economías de escala"],
        duracion: "60 min",
      },
      {
        id: 21,
        titulo: "Teoría del Comportamiento del Consumidor",
        descripcion: "Preferencias, utilidad y elección del consumidor",
        temas: ["Curvas de indiferencia", "Restricción presupuestaria", "Elección óptima"],
        duracion: "70 min",
      },
    ],
  },
}

export default function CursoPage({ params }: { params: { id: string } }) {
  const curso = cursosData[params.id as keyof typeof cursosData]

  if (!curso) {
    return <div>Curso no encontrado</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{curso.titulo}</h1>
            <p className="text-lg text-gray-600">{curso.descripcion}</p>
          </div>
        </div>

        <div className="grid gap-6">
          {curso.capitulos.map((capitulo) => (
            <Card key={capitulo.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      Capítulo {capitulo.id}: {capitulo.titulo}
                    </CardTitle>
                    <CardDescription className="text-base mb-3">{capitulo.descripcion}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {capitulo.temas.map((tema, index) => (
                        <Badge key={index} variant="secondary">
                          {tema}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">Duración estimada: {capitulo.duracion}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Link href={`/capitulo/${capitulo.id}`}>
                    <Button>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Estudiar
                    </Button>
                  </Link>
                  <Link href={`/ejercicios/${capitulo.id}`}>
                    <Button variant="outline">
                      <Calculator className="h-4 w-4 mr-2" />
                      Ejercicios
                    </Button>
                  </Link>
                  <Link href={`/graficos/${capitulo.id}`}>
                    <Button variant="outline">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Gráficos
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
