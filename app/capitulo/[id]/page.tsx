import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen, Calculator, BarChart3, CheckCircle, Clock, Users, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const capitulosData = {
  1: {
    titulo: "Los diez principios de la economía",
    resumen: "Los diez principios fundamentales que guían el pensamiento económico y la toma de decisiones.",
    duracion: "45 min",
    dificultad: "Básico",
    objetivos: [
      "Comprender los principios básicos de la toma de decisiones económicas",
      "Analizar cómo interactúan los individuos en los mercados",
      "Explicar el funcionamiento de la economía en su conjunto",
    ],
    contenido: {
      introduccion:
        "La economía es el estudio de cómo la sociedad administra sus recursos escasos. Los economistas estudian cómo las personas toman decisiones, cómo interactúan entre sí y cómo funciona la economía en su conjunto. Estos diez principios proporcionan una visión general de lo que trata la economía.",
      principios: [
        {
          categoria: "Cómo toman decisiones los individuos",
          descripcion: "Los primeros cuatro principios se refieren a la toma de decisiones individuales.",
          items: [
            {
              numero: 1,
              titulo: "Los individuos se enfrentan a disyuntivas",
              descripcion:
                "Para obtener algo que nos gusta, por lo general tenemos que renunciar a otra cosa que también nos gusta. Tomar decisiones es elegir entre dos objetivos.",
              ejemplo:
                "Un estudiante debe decidir cómo asignar su tiempo entre estudiar economía y estudiar psicología. Una familia debe decidir si gastar sus ingresos en un auto nuevo o en unas vacaciones.",
              aplicacion:
                "Este principio es fundamental para entender que los recursos son limitados y que toda elección implica un costo de oportunidad.",
            },
            {
              numero: 2,
              titulo: "El costo de algo es aquello a lo que se renuncia para obtenerlo",
              descripcion:
                "El costo de oportunidad de un artículo es aquello a lo que se renuncia para obtener ese artículo. Es el valor de la mejor alternativa sacrificada.",
              ejemplo:
                "El costo de oportunidad de ir a la universidad incluye no solo el dinero gastado en matrícula, libros y alojamiento, sino también el tiempo que podría haberse usado para trabajar y ganar dinero.",
              aplicacion:
                "Los economistas utilizan el concepto de costo de oportunidad para analizar las decisiones tanto de individuos como de empresas y gobiernos.",
            },
            {
              numero: 3,
              titulo: "Las personas racionales piensan en términos marginales",
              descripcion:
                "Los cambios marginales son pequeños ajustes incrementales a un plan de acción existente. Las personas racionales toman decisiones comparando beneficios y costos marginales.",
              ejemplo:
                "Una aerolínea decide si ofrecer un vuelo adicional comparando los ingresos marginales (el ingreso adicional del vuelo) con los costos marginales (el costo adicional de operar el vuelo).",
              aplicacion:
                "El análisis marginal es una herramienta poderosa para la toma de decisiones en economía y negocios.",
            },
            {
              numero: 4,
              titulo: "Los individuos responden a incentivos",
              descripcion:
                "Un incentivo es algo que induce a una persona a actuar. Los incentivos son cruciales para analizar cómo funcionan los mercados.",
              ejemplo:
                "Cuando el precio de las manzanas aumenta, las personas deciden comer menos manzanas y más peras. Cuando el gobierno aumenta los impuestos a la gasolina, las personas tienden a comprar autos más eficientes.",
              aplicacion:
                "Los responsables de las políticas públicas deben considerar cómo sus políticas afectan los incentivos, porque las personas cambiarán su comportamiento en respuesta.",
            },
          ],
        },
        {
          categoria: "Cómo interactúan los individuos",
          descripcion: "Los siguientes tres principios se refieren a cómo las personas interactúan entre sí.",
          items: [
            {
              numero: 5,
              titulo: "El comercio puede mejorar el bienestar de todos",
              descripcion:
                "El comercio permite a cada persona especializarse en las actividades que mejor sabe hacer, ya sea cultivar maíz o programar computadoras.",
              ejemplo:
                "Los países se benefician del comercio internacional especializándose en la producción de bienes en los que tienen ventaja comparativa. Japón se especializa en electrónicos, mientras que Brasil se especializa en café.",
              aplicacion:
                "El comercio no es como un juego deportivo donde una persona gana y otra pierde. En el comercio, ambas partes pueden beneficiarse.",
            },
            {
              numero: 6,
              titulo: "Los mercados normalmente son un buen mecanismo para organizar la actividad económica",
              descripcion:
                "En una economía de mercado, las decisiones se toman de manera descentralizada por muchas empresas y hogares que interactúan en los mercados.",
              ejemplo:
                "Los precios actúan como señales que guían las decisiones económicas individuales. Cuando aumenta la demanda de un producto, su precio sube, incentivando a los productores a fabricar más.",
              aplicacion:
                "Adam Smith observó que los hogares y las empresas interactúan en los mercados como si fueran guiados por una 'mano invisible' que los lleva a resultados deseables.",
            },
            {
              numero: 7,
              titulo: "El gobierno puede mejorar a veces los resultados del mercado",
              descripcion:
                "Los mercados pueden fallar cuando no logran asignar eficientemente los recursos o cuando no logran distribuir equitativamente la riqueza económica.",
              ejemplo:
                "El gobierno puede intervenir para corregir externalidades (como la contaminación), proporcionar bienes públicos (como la defensa nacional), o regular monopolios.",
              aplicacion:
                "La intervención gubernamental puede justificarse para promover la eficiencia o la equidad, pero debe hacerse cuidadosamente.",
            },
          ],
        },
        {
          categoria: "Cómo funciona la economía en su conjunto",
          descripcion: "Los últimos tres principios se refieren al funcionamiento de la economía como un todo.",
          items: [
            {
              numero: 8,
              titulo: "El nivel de vida de un país depende de su capacidad para producir bienes y servicios",
              descripcion:
                "La productividad es la cantidad de bienes y servicios producidos por cada unidad de trabajo. Es el determinante principal del nivel de vida.",
              ejemplo:
                "Los países con mayor productividad por trabajador tienden a tener niveles de vida más altos. Estados Unidos tiene alta productividad y altos salarios, mientras que países menos desarrollados tienen baja productividad y bajos salarios.",
              aplicacion:
                "Para mejorar el nivel de vida, los responsables de las políticas públicas deben elevar la productividad asegurando que los trabajadores estén bien educados, tengan las herramientas necesarias y tengan acceso a la mejor tecnología disponible.",
            },
            {
              numero: 9,
              titulo: "Los precios suben cuando el gobierno imprime demasiado dinero",
              descripcion:
                "La inflación es un aumento en el nivel general de precios en la economía. En la mayoría de los casos de inflación alta o persistente, el culpable es el crecimiento en la cantidad de dinero.",
              ejemplo:
                "En Alemania en los años 1920, cuando los precios se triplicaban mensualmente, el gobierno estaba imprimiendo dinero a un ritmo extraordinario. En contraste, cuando el crecimiento del dinero es bajo, la inflación también es baja.",
              aplicacion:
                "Cuando un gobierno crea grandes cantidades de dinero, el valor del dinero disminuye, causando inflación.",
            },
            {
              numero: 10,
              titulo: "La sociedad enfrenta una disyuntiva a corto plazo entre inflación y desempleo",
              descripcion:
                "A corto plazo, muchas políticas económicas empujan la inflación y el desempleo en direcciones opuestas. Esta disyuntiva es temporal pero importante para entender las fluctuaciones económicas.",
              ejemplo:
                "Reducir la inflación a menudo causa un aumento temporal en el desempleo. Estimular la economía para reducir el desempleo puede causar un aumento temporal en la inflación.",
              aplicacion:
                "Esta disyuntiva es clave para entender el ciclo económico y las decisiones de política monetaria y fiscal.",
            },
          ],
        },
      ],
    },
    formulas: [
      {
        nombre: "Costo de Oportunidad",
        formula: "CO = Valor de la mejor alternativa sacrificada",
        descripcion: "El costo de oportunidad representa el valor de la mejor opción no elegida.",
        ejemplo: "Si eliges estudiar en lugar de trabajar, el CO es el salario que dejas de percibir.",
      },
      {
        nombre: "Análisis Marginal",
        formula: "Decisión óptima: Beneficio Marginal = Costo Marginal",
        descripcion:
          "Una actividad debe realizarse hasta el punto donde el beneficio marginal iguala al costo marginal.",
        ejemplo: "Una empresa debe producir hasta donde el ingreso marginal = costo marginal.",
      },
    ],
    conceptosClave: [
      "Escasez",
      "Costo de oportunidad",
      "Análisis marginal",
      "Incentivos",
      "Comercio",
      "Economía de mercado",
      "Fallas de mercado",
      "Productividad",
      "Inflación",
      "Curva de Phillips",
    ],
    ejemplosReales: [
      {
        titulo: "COVID-19 y Costo de Oportunidad",
        descripcion:
          "Durante la pandemia, los gobiernos enfrentaron la disyuntiva entre salvar vidas (confinamientos) y salvar la economía (mantener negocios abiertos).",
      },
      {
        titulo: "Incentivos en Apps de Transporte",
        descripcion:
          "Uber y Lyft usan precios dinámicos (surge pricing) para incentivar a más conductores a trabajar durante horas de alta demanda.",
      },
      {
        titulo: "Comercio Internacional y Especialización",
        descripcion:
          "China se especializó en manufactura de bajo costo, mientras que Estados Unidos se especializó en tecnología e innovación.",
      },
    ],
  },
}

export default function CapituloPage({ params }: { params: { id: string } }) {
  const capitulo = capitulosData[Number.parseInt(params.id) as keyof typeof capitulosData]

  if (!capitulo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <p className="text-slate-600">Este capítulo está en desarrollo.</p>
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
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
            <Badge variant="outline" className="text-slate-600 border-slate-300">
              Capítulo {params.id}
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero del capítulo */}
        <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-3xl p-8 mb-12 shadow-lg">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">{capitulo.titulo}</h1>
          <p className="text-xl text-slate-700 mb-6 leading-relaxed">{capitulo.resumen}</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-slate-600" />
              <span className="text-slate-700">{capitulo.duracion}</span>
            </div>
            <Badge className={getDificultadColor(capitulo.dificultad)} variant="outline">
              {capitulo.dificultad}
            </Badge>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-slate-600" />
              <span className="text-slate-700">Nivel universitario</span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Objetivos de Aprendizaje */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                Objetivos de Aprendizaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {capitulo.objetivos.map((objetivo, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-slate-700 leading-relaxed">{objetivo}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Introducción */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                Introducción
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed text-lg">{capitulo.contenido.introduccion}</p>
            </CardContent>
          </Card>

          {/* Contenido principal - Los 10 principios */}
          {params.id === "1" && capitulo.contenido.principios && (
            <div className="space-y-8">
              {capitulo.contenido.principios.map((categoria, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-700">{categoria.categoria}</CardTitle>
                    <p className="text-slate-600 text-lg">{categoria.descripcion}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {categoria.items.map((principio, idx) => (
                        <div key={idx} className="border-l-4 border-blue-200 pl-6">
                          <div className="bg-gradient-to-r from-blue-50 to-violet-50 p-6 rounded-2xl">
                            <h4 className="font-bold text-xl mb-4 text-slate-800">
                              Principio {principio.numero}: {principio.titulo}
                            </h4>
                            <p className="text-slate-700 mb-6 text-lg leading-relaxed">{principio.descripcion}</p>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-blue-100 p-4 rounded-xl">
                                <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                                  💡 Ejemplo Práctico
                                </h5>
                                <p className="text-blue-700 text-sm leading-relaxed">{principio.ejemplo}</p>
                              </div>

                              <div className="bg-emerald-100 p-4 rounded-xl">
                                <h5 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                                  🎯 Aplicación
                                </h5>
                                <p className="text-emerald-700 text-sm leading-relaxed">{principio.aplicacion}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Fórmulas */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                Fórmulas y Conceptos Matemáticos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {capitulo.formulas.map((formula, index) => (
                  <div key={index} className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-lg mb-3 text-slate-800">{formula.nombre}</h4>
                    <div className="bg-white p-4 rounded-xl border-2 border-violet-200 text-center mb-4">
                      <span className="font-mono text-xl text-violet-700">{formula.formula}</span>
                    </div>
                    <p className="text-slate-700 mb-3 leading-relaxed">{formula.descripcion}</p>
                    {formula.ejemplo && (
                      <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
                        <p className="text-sm text-amber-800">
                          <strong>Ejemplo:</strong> {formula.ejemplo}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Ejemplos del mundo real */}
          {capitulo.ejemplosReales && (
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  Ejemplos del Mundo Real
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {capitulo.ejemplosReales.map((ejemplo, index) => (
                    <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                      <h4 className="font-semibold text-orange-800 mb-3 text-lg">{ejemplo.titulo}</h4>
                      <p className="text-orange-700 leading-relaxed">{ejemplo.descripcion}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Conceptos Clave */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                Conceptos Clave para Recordar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {capitulo.conceptosClave.map((concepto, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-2 px-4 border-slate-300 hover:bg-slate-50">
                    {concepto}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navegación */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href={`/ejercicios/${params.id}`}>
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                <Calculator className="h-5 w-5 mr-2" />
                Practicar con Ejercicios
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href={`/graficos/${params.id}`}>
              <Button variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-all duration-300">
                <BarChart3 className="h-5 w-5 mr-2" />
                Explorar Gráficos Interactivos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
