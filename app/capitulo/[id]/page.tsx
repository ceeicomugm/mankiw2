import Link from "next/link"
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
  2: {
    titulo: "Pensando como economista",
    resumen: "Cómo los economistas abordan el mundo utilizando el método científico y modelos económicos.",
    duracion: "50 min",
    dificultad: "Básico",
    objetivos: [
      "Comprender cómo los economistas aplican el método científico",
      "Distinguir entre economía positiva y normativa",
      "Analizar el papel de los supuestos en los modelos económicos",
      "Interpretar modelos económicos básicos como la FPP y el flujo circular",
    ],
    contenido: {
      introduccion:
        "Los economistas intentan abordar su tema de estudio con la objetividad de un científico. Al igual que cualquier campo de estudio, la economía tiene su propio lenguaje y su propia forma de pensar. Este capítulo examina cómo los economistas aplican la lógica de la ciencia para estudiar el comportamiento humano.",
      secciones: [
        {
          titulo: "El Economista como Científico",
          descripcion: "Los economistas utilizan el método científico para entender el mundo económico.",
          contenido: [
            {
              subtitulo: "El Método Científico en Economía",
              texto:
                "Al igual que los físicos estudian las leyes de la naturaleza, los economistas estudian las leyes que gobiernan la economía. Los economistas desarrollan teorías, recopilan datos y analizan estos datos para verificar o refutar sus teorías.",
              ejemplo:
                "Un economista podría teorizar que el aumento del salario mínimo reduce el empleo. Para probar esta teoría, recopilaría datos sobre cambios en el salario mínimo y niveles de empleo en diferentes regiones y períodos.",
            },
            {
              subtitulo: "El Papel de los Supuestos",
              texto:
                "Los economistas hacen supuestos para simplificar el mundo complejo y hacer que sea más fácil de entender. Todos los modelos científicos se basan en supuestos simplificadores.",
              ejemplo:
                "Para estudiar el comercio internacional, un economista podría asumir que solo existen dos países y dos bienes. Aunque esto no es realista, ayuda a entender los principios básicos del comercio.",
            },
            {
              subtitulo: "Modelos Económicos",
              texto:
                "Los economistas usan modelos para aprender sobre el mundo. Un modelo económico es una representación simplificada de la realidad que nos permite entender una variedad de fenómenos económicos.",
              ejemplo:
                "El modelo de oferta y demanda es una representación simplificada de cómo funcionan los mercados. Aunque no captura toda la complejidad del mundo real, nos ayuda a entender cómo se determinan los precios.",
            },
          ],
        },
        {
          titulo: "Dos Modelos Económicos Simples",
          descripcion: "Examinamos dos de los modelos más útiles en economía.",
          contenido: [
            {
              subtitulo: "El Diagrama de Flujo Circular",
              texto:
                "El diagrama de flujo circular es un modelo visual de la economía que muestra cómo el dinero fluye a través de los mercados entre los hogares y las empresas.",
              componentes: [
                {
                  elemento: "Hogares",
                  descripcion: "Poseen los factores de producción y consumen bienes y servicios",
                  flujos: ["Venden trabajo, tierra y capital", "Compran bienes y servicios"],
                },
                {
                  elemento: "Empresas",
                  descripcion: "Producen y venden bienes y servicios, compran factores de producción",
                  flujos: ["Compran trabajo, tierra y capital", "Venden bienes y servicios"],
                },
                {
                  elemento: "Mercado de Factores",
                  descripcion: "Donde se intercambian los factores de producción",
                  flujos: ["Hogares venden, empresas compran"],
                },
                {
                  elemento: "Mercado de Bienes y Servicios",
                  descripcion: "Donde se intercambian los productos finales",
                  flujos: ["Empresas venden, hogares compran"],
                },
              ],
            },
            {
              subtitulo: "La Frontera de Posibilidades de Producción (FPP)",
              texto:
                "La FPP es un gráfico que muestra las combinaciones de producción que la economía puede producir dados los factores de producción y la tecnología de producción disponibles.",
              caracteristicas: [
                {
                  concepto: "Eficiencia Productiva",
                  descripcion: "Puntos sobre la FPP representan uso eficiente de recursos",
                  implicacion: "No se pueden producir más de un bien sin reducir la producción del otro",
                },
                {
                  concepto: "Costo de Oportunidad",
                  descripcion: "La pendiente de la FPP muestra el costo de oportunidad",
                  implicacion: "Para producir más de un bien, se debe sacrificar producción del otro",
                },
                {
                  concepto: "Crecimiento Económico",
                  descripcion: "Desplazamiento hacia afuera de la FPP",
                  implicacion: "Resultado de mejoras tecnológicas o aumento en factores de producción",
                },
              ],
            },
          ],
        },
        {
          titulo: "Microeconomía y Macroeconomía",
          descripcion: "Las dos ramas principales del estudio económico.",
          contenido: [
            {
              subtitulo: "Microeconomía",
              texto:
                "El estudio de cómo los hogares y las empresas toman decisiones y cómo interactúan en los mercados.",
              ejemplos: [
                "Cómo una familia decide cuánto ahorrar para la jubilación",
                "Cómo una empresa decide cuántos trabajadores contratar",
                "Cómo la competencia entre empresas afecta los precios",
              ],
            },
            {
              subtitulo: "Macroeconomía",
              texto: "El estudio de los fenómenos que afectan a toda la economía.",
              ejemplos: [
                "Por qué los ingresos crecen rápidamente en algunos países",
                "Por qué algunos países tienen altas tasas de inflación",
                "Por qué las economías experimentan recesiones y expansiones",
              ],
            },
          ],
        },
        {
          titulo: "El Economista como Asesor de Política",
          descripcion: "Cómo los economistas contribuyen al diseño de políticas públicas.",
          contenido: [
            {
              subtitulo: "Economía Positiva vs Normativa",
              texto:
                "La economía positiva describe el mundo como es, mientras que la economía normativa prescribe cómo debería ser el mundo.",
              ejemplos: [
                {
                  tipo: "Positiva",
                  enunciado: "El salario mínimo causa desempleo entre trabajadores adolescentes",
                  caracteristica: "Puede ser confirmada o refutada con evidencia",
                },
                {
                  tipo: "Normativa",
                  enunciado: "El gobierno debería aumentar el salario mínimo",
                  caracteristica: "Involucra juicios de valor sobre lo que es deseable",
                },
              ],
            },
            {
              subtitulo: "Los Economistas en Washington",
              texto: "Los economistas juegan un papel importante en el gobierno, asesorando sobre política económica.",
              roles: [
                "Consejo de Asesores Económicos del Presidente",
                "Departamento del Tesoro",
                "Oficina de Presupuesto del Congreso",
                "Reserva Federal",
              ],
            },
          ],
        },
      ],
    },
    formulas: [
      {
        nombre: "Costo de Oportunidad en la FPP",
        formula: "CO = ΔY / ΔX",
        descripcion: "El costo de oportunidad es la pendiente de la FPP en cualquier punto.",
        ejemplo:
          "Si para producir 10 autos más se deben sacrificar 5 computadoras, CO = 5/10 = 0.5 computadoras por auto.",
      },
      {
        nombre: "Eficiencia Productiva",
        formula: "Punto en la FPP: Recursos totalmente utilizados",
        descripcion:
          "La eficiencia productiva se logra cuando es imposible producir más de un bien sin reducir la producción de otro.",
        ejemplo: "Una economía es productivamente eficiente cuando opera sobre su FPP.",
      },
    ],
    conceptosClave: [
      "Método científico",
      "Modelos económicos",
      "Supuestos simplificadores",
      "Flujo circular",
      "Frontera de posibilidades de producción",
      "Eficiencia productiva",
      "Microeconomía",
      "Macroeconomía",
      "Economía positiva",
      "Economía normativa",
      "Crecimiento económico",
    ],
    ejemplosReales: [
      {
        titulo: "Modelo de Flujo Circular en la Pandemia",
        descripcion:
          "Durante COVID-19, las restricciones interrumpieron el flujo circular: los hogares redujeron el consumo, las empresas redujeron la producción, y el gobierno intervino con estímulos fiscales.",
      },
      {
        titulo: "FPP de un País en Guerra",
        descripcion:
          "Durante la Segunda Guerra Mundial, Estados Unidos tuvo que elegir entre producir bienes civiles (autos, electrodomésticos) y bienes militares (tanques, aviones), ilustrando el concepto de costo de oportunidad.",
      },
      {
        titulo: "Economía Positiva vs Normativa en Política",
        descripcion:
          "Declaración positiva: 'El libre comercio aumenta el PIB total'. Declaración normativa: 'El país debería adoptar políticas de libre comercio'. Los economistas pueden estar de acuerdo en la primera pero diferir en la segunda.",
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
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">EC</span>
                </div>
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

          {/* Contenido principal */}
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

          {/* Contenido para Capítulo 2 */}
          {params.id === "2" && capitulo.contenido.secciones && (
            <div className="space-y-8">
              {capitulo.contenido.secciones.map((seccion, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-700">{seccion.titulo}</CardTitle>
                    <p className="text-slate-600 text-lg">{seccion.descripcion}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {seccion.contenido.map((item, idx) => (
                        <div key={idx} className="border-l-4 border-blue-200 pl-6">
                          <div className="bg-gradient-to-r from-blue-50 to-violet-50 p-6 rounded-2xl">
                            <h4 className="font-bold text-xl mb-4 text-slate-800">{item.subtitulo}</h4>
                            <p className="text-slate-700 mb-4 text-lg leading-relaxed">{item.texto}</p>

                            {item.ejemplo && (
                              <div className="bg-blue-100 p-4 rounded-xl mb-4">
                                <h5 className="font-semibold text-blue-800 mb-2">💡 Ejemplo</h5>
                                <p className="text-blue-700 text-sm leading-relaxed">{item.ejemplo}</p>
                              </div>
                            )}

                            {item.componentes && (
                              <div className="space-y-4">
                                <h5 className="font-semibold text-slate-800 mb-3">Componentes del Modelo:</h5>
                                <div className="grid md:grid-cols-2 gap-4">
                                  {item.componentes.map((comp, compIdx) => (
                                    <div key={compIdx} className="bg-white p-4 rounded-xl border border-slate-200">
                                      <h6 className="font-semibold text-slate-800 mb-2">{comp.elemento}</h6>
                                      <p className="text-slate-600 text-sm mb-3">{comp.descripcion}</p>
                                      <div className="space-y-1">
                                        {comp.flujos.map((flujo, flujoIdx) => (
                                          <div key={flujoIdx} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span className="text-xs text-slate-600">{flujo}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {item.caracteristicas && (
                              <div className="space-y-4">
                                <h5 className="font-semibold text-slate-800 mb-3">Características Clave:</h5>
                                <div className="space-y-3">
                                  {item.caracteristicas.map((carac, caracIdx) => (
                                    <div key={caracIdx} className="bg-white p-4 rounded-xl border border-slate-200">
                                      <h6 className="font-semibold text-slate-800 mb-2">{carac.concepto}</h6>
                                      <p className="text-slate-600 text-sm mb-2">{carac.descripcion}</p>
                                      <p className="text-slate-500 text-xs italic">{carac.implicacion}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {item.ejemplos && (
                              <div className="bg-emerald-100 p-4 rounded-xl">
                                <h5 className="font-semibold text-emerald-800 mb-2">🎯 Ejemplos</h5>
                                <ul className="space-y-1">
                                  {item.ejemplos.map((ejemplo, ejIdx) => (
                                    <li key={ejIdx} className="text-emerald-700 text-sm flex items-start gap-2">
                                      <span className="text-emerald-500 mt-1">•</span>
                                      {ejemplo}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.roles && (
                              <div className="bg-violet-100 p-4 rounded-xl">
                                <h5 className="font-semibold text-violet-800 mb-2">🏛️ Roles en el Gobierno</h5>
                                <ul className="space-y-1">
                                  {item.roles.map((rol, rolIdx) => (
                                    <li key={rolIdx} className="text-violet-700 text-sm flex items-start gap-2">
                                      <span className="text-violet-500 mt-1">•</span>
                                      {rol}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Sección especial para Economía Positiva vs Normativa */}
              {params.id === "2" && (
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-700">Economía Positiva vs Normativa</CardTitle>
                    <p className="text-slate-600 text-lg">Diferencias fundamentales en el análisis económico</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                          <h4 className="font-bold text-xl mb-4 text-blue-800">Economía Positiva</h4>
                          <p className="text-blue-700 mb-4">Describe el mundo como ES</p>
                          <div className="space-y-3">
                            <div className="bg-white p-3 rounded-xl">
                              <p className="text-sm font-medium text-blue-800">Ejemplo:</p>
                              <p className="text-blue-700 text-sm">
                                "El salario mínimo causa desempleo entre trabajadores adolescentes"
                              </p>
                            </div>
                            <div className="bg-blue-200 p-3 rounded-xl">
                              <p className="text-xs text-blue-800">✓ Puede ser confirmada o refutada con evidencia</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                          <h4 className="font-bold text-xl mb-4 text-purple-800">Economía Normativa</h4>
                          <p className="text-purple-700 mb-4">Prescribe cómo DEBERÍA ser el mundo</p>
                          <div className="space-y-3">
                            <div className="bg-white p-3 rounded-xl">
                              <p className="text-sm font-medium text-purple-800">Ejemplo:</p>
                              <p className="text-purple-700 text-sm">
                                "El gobierno debería aumentar el salario mínimo"
                              </p>
                            </div>
                            <div className="bg-purple-200 p-3 rounded-xl">
                              <p className="text-xs text-purple-800">
                                ⚖️ Involucra juicios de valor sobre lo que es deseable
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Ejemplos adicionales de la data */}
                      <div className="bg-slate-50 p-6 rounded-2xl">
                        <h5 className="font-semibold text-slate-800 mb-4">Más Ejemplos Comparativos</h5>
                        <div className="space-y-4">
                          {capitulo.contenido.secciones?.[3]?.contenido?.[0]?.ejemplos?.map((ejemplo, index) => (
                            <div
                              key={index}
                              className={`p-4 rounded-xl border-l-4 ${
                                ejemplo.tipo === "Positiva"
                                  ? "bg-blue-50 border-blue-400"
                                  : "bg-purple-50 border-purple-400"
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <Badge
                                  variant="outline"
                                  className={`text-xs ${
                                    ejemplo.tipo === "Positiva"
                                      ? "bg-blue-100 text-blue-700 border-blue-200"
                                      : "bg-purple-100 text-purple-700 border-purple-200"
                                  }`}
                                >
                                  {ejemplo.tipo}
                                </Badge>
                                <div className="flex-1">
                                  <p className="font-medium text-slate-800 mb-1">"{ejemplo.enunciado}"</p>
                                  <p className="text-sm text-slate-600">{ejemplo.caracteristica}</p>
                                </div>
                              </div>
                            </div>
                          )) || null}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
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
