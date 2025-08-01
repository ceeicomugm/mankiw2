"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Calculator, BookOpen, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const ejerciciosData = {
  1: {
    titulo: "Ejercicios: Los Diez Principios de la Economía",
    descripcion: "Practica los conceptos fundamentales del pensamiento económico",
    ejercicios: [
      {
        id: 1,
        tipo: "multiple",
        dificultad: "Básico",
        puntos: 10,
        pregunta: "¿Cuál de los siguientes ejemplos mejor ilustra el concepto de costo de oportunidad?",
        opciones: [
          "El precio de un libro es $20",
          "Decidir estudiar economía en lugar de ver televisión",
          "Comprar un auto nuevo por $25,000",
          "El salario mínimo es $15 por hora",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El costo de oportunidad es lo que se sacrifica para obtener algo. En este caso, el tiempo de entretenimiento se sacrifica por el estudio. Es el valor de la mejor alternativa no elegida.",
        conceptosClave: ["Costo de oportunidad", "Toma de decisiones", "Escasez"],
      },
      {
        id: 2,
        tipo: "multiple",
        dificultad: "Intermedio",
        puntos: 15,
        pregunta:
          "Según el principio de que 'las personas racionales piensan en términos marginales', ¿cuándo debería una empresa producir una unidad adicional?",
        opciones: [
          "Cuando el costo total es mínimo",
          "Cuando el ingreso marginal excede el costo marginal",
          "Cuando el precio es máximo",
          "Cuando la demanda es alta",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Una empresa racional produce una unidad adicional cuando el beneficio de hacerlo (ingreso marginal) supera el costo de hacerlo (costo marginal). Este es el principio fundamental del análisis marginal.",
        conceptosClave: ["Análisis marginal", "Ingreso marginal", "Costo marginal"],
      },
      {
        id: 3,
        tipo: "desarrollo",
        dificultad: "Avanzado",
        puntos: 20,
        pregunta:
          "Explica con un ejemplo concreto cómo el principio 'los individuos responden a incentivos' se aplica en la vida real. Incluye tanto incentivos positivos como negativos.",
        respuestaSugerida:
          "Ejemplo de incentivo positivo: Las empresas ofrecen descuentos por pronto pago para incentivar a los clientes a pagar rápidamente, mejorando su flujo de caja. Ejemplo de incentivo negativo: Cuando el gobierno aumenta los impuestos a los cigarrillos, las personas tienden a fumar menos porque el costo (incentivo negativo) ha aumentado. Los incentivos modifican el comportamiento porque cambian los costos y beneficios de las decisiones.",
        conceptosClave: ["Incentivos", "Comportamiento económico", "Política pública"],
      },
      {
        id: 4,
        tipo: "calculo",
        dificultad: "Intermedio",
        puntos: 25,
        pregunta:
          "Una estudiante tiene 4 horas libres. Puede trabajar y ganar $15/hora, o estudiar para un examen que le permitiría obtener una beca de $40. ¿Cuál es el costo de oportunidad de estudiar?",
        solucion: {
          pasos: [
            "Identificar las alternativas: trabajar vs estudiar",
            "Calcular el beneficio de trabajar: 4 horas × $15/hora = $60",
            "El costo de oportunidad de estudiar es lo que se sacrifica",
            "Costo de oportunidad = $60 (ingreso perdido por no trabajar)",
          ],
          respuesta: "El costo de oportunidad de estudiar es $60",
        },
        conceptosClave: ["Costo de oportunidad", "Toma de decisiones", "Valor del tiempo"],
      },
    ],
  },
  2: {
    titulo: "Ejercicios: Pensando como Economista",
    descripcion: "Domina el método científico y los modelos económicos fundamentales",
    ejercicios: [
      {
        id: 1,
        tipo: "multiple",
        dificultad: "Básico",
        puntos: 10,
        pregunta: "¿Cuál de las siguientes es una característica del método científico en economía?",
        opciones: [
          "Los economistas nunca hacen supuestos",
          "Los modelos económicos deben incluir todos los detalles de la realidad",
          "Los economistas desarrollan teorías y las contrastan con datos",
          "La economía no puede usar el método científico porque estudia el comportamiento humano",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Al igual que otros científicos, los economistas desarrollan teorías (hipótesis), recopilan datos y analizan estos datos para verificar o refutar sus teorías. Los supuestos simplificadores son necesarios para hacer los modelos manejables.",
        conceptosClave: ["Método científico", "Teorías económicas", "Análisis empírico"],
      },
      {
        id: 2,
        tipo: "multiple",
        dificultad: "Intermedio",
        puntos: 15,
        pregunta: "En el diagrama de flujo circular, ¿qué intercambian los hogares en el mercado de factores?",
        opciones: [
          "Dinero por bienes y servicios",
          "Bienes y servicios por dinero",
          "Trabajo, tierra y capital por dinero",
          "Dinero por trabajo, tierra y capital",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "En el mercado de factores, los hogares venden sus factores de producción (trabajo, tierra, capital) a las empresas a cambio de dinero (salarios, rentas, beneficios). Los hogares son los propietarios de los factores de producción.",
        conceptosClave: ["Flujo circular", "Mercado de factores", "Factores de producción"],
      },
      {
        id: 3,
        tipo: "multiple",
        dificultad: "Básico",
        puntos: 12,
        pregunta: "¿Cuál de las siguientes afirmaciones es un ejemplo de economía POSITIVA?",
        opciones: [
          "El gobierno debería reducir los impuestos",
          "La inflación es mala para la economía",
          "Un aumento del 10% en el salario mínimo reduce el empleo en un 2%",
          "Las empresas deberían pagar salarios más altos",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La economía positiva describe el mundo como ES, usando afirmaciones que pueden ser verificadas con datos. La opción C presenta una relación cuantificable entre variables que puede ser probada empíricamente.",
        conceptosClave: ["Economía positiva", "Economía normativa", "Análisis empírico"],
      },
      {
        id: 4,
        tipo: "desarrollo",
        dificultad: "Intermedio",
        puntos: 20,
        pregunta:
          "Explica la diferencia entre microeconomía y macroeconomía. Proporciona dos ejemplos específicos de preguntas que estudiaría cada rama.",
        respuestaSugerida:
          "La microeconomía estudia el comportamiento de unidades económicas individuales (hogares, empresas, mercados específicos), mientras que la macroeconomía estudia la economía como un todo. Ejemplos de microeconomía: (1) ¿Cómo afecta un aumento en el precio de la gasolina a la demanda de autos híbridos? (2) ¿Por qué los médicos ganan más que los maestros? Ejemplos de macroeconomía: (1) ¿Qué causa las recesiones económicas? (2) ¿Por qué algunos países crecen más rápido que otros?",
        conceptosClave: ["Microeconomía", "Macroeconomía", "Unidades de análisis"],
      },
      {
        id: 5,
        tipo: "calculo",
        dificultad: "Intermedio",
        puntos: 25,
        pregunta:
          "Una economía puede producir solo dos bienes: computadoras y automóviles. Si dedica todos sus recursos a computadoras, puede producir 1000 unidades. Si los dedica todos a automóviles, puede producir 500 unidades. Actualmente produce 600 computadoras. ¿Cuál es el costo de oportunidad de producir 100 computadoras adicionales?",
        solucion: {
          pasos: [
            "Identificar los puntos extremos de la FPP: (1000 computadoras, 0 autos) y (0 computadoras, 500 autos)",
            "La pendiente de la FPP = 500 autos / 1000 computadoras = 0.5 autos por computadora",
            "Situación actual: 600 computadoras, entonces autos = 500 - (600 × 0.5) = 200 autos",
            "Para producir 100 computadoras más (700 total): autos = 500 - (700 × 0.5) = 150 autos",
            "Costo de oportunidad = 200 - 150 = 50 automóviles",
          ],
          respuesta: "El costo de oportunidad de producir 100 computadoras adicionales es 50 automóviles",
        },
        conceptosClave: ["FPP", "Costo de oportunidad", "Pendiente de la FPP"],
      },
      {
        id: 6,
        tipo: "multiple",
        dificultad: "Avanzado",
        puntos: 18,
        pregunta:
          "¿Cuál de las siguientes situaciones NO causaría un desplazamiento hacia afuera de la Frontera de Posibilidades de Producción?",
        opciones: [
          "Descubrimiento de nuevos yacimientos de petróleo",
          "Mejora en la tecnología de producción",
          "Aumento en la población trabajadora",
          "Decisión de producir más de un bien y menos de otro",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "Un desplazamiento hacia afuera de la FPP requiere un aumento en la capacidad productiva de la economía (más recursos o mejor tecnología). La opción D simplemente representa un movimiento a lo largo de la FPP existente, no un cambio en la capacidad productiva.",
        conceptosClave: ["FPP", "Crecimiento económico", "Capacidad productiva"],
      },
      {
        id: 7,
        tipo: "desarrollo",
        dificultad: "Avanzado",
        puntos: 25,
        pregunta:
          "Analiza el papel de los supuestos en los modelos económicos. ¿Por qué son necesarios? ¿Cuándo un supuesto es 'bueno' o 'malo'? Usa el ejemplo del modelo de oferta y demanda.",
        respuestaSugerida:
          "Los supuestos son necesarios porque la realidad es demasiado compleja para analizarla completamente. Permiten a los economistas aislar las relaciones clave y hacer predicciones útiles. Un supuesto es 'bueno' si simplifica el análisis sin eliminar aspectos esenciales del fenómeno estudiado. Por ejemplo, el modelo de oferta y demanda asume competencia perfecta, información completa y productos homogéneos. Aunque estos supuestos no son completamente realistas, el modelo sigue siendo útil para predecir cómo cambios en factores como ingresos o costos de producción afectan precios y cantidades. Un supuesto sería 'malo' si elimina aspectos cruciales que hacen que las predicciones del modelo sean sistemáticamente incorrectas.",
        conceptosClave: ["Supuestos", "Modelos económicos", "Simplificación", "Predicción"],
      },
    ],
  },
  4: {
    titulo: "Ejercicios: Oferta y Demanda",
    descripcion: "Domina los fundamentos del análisis de mercado",
    ejercicios: [
      {
        id: 1,
        tipo: "calculo",
        dificultad: "Intermedio",
        puntos: 20,
        pregunta:
          "Dada la función de demanda Qd = 100 - 2P y la función de oferta Qs = 20 + P, calcula el precio y cantidad de equilibrio.",
        solucion: {
          pasos: [
            "En equilibrio: Qd = Qs",
            "100 - 2P = 20 + P",
            "100 - 20 = P + 2P",
            "80 = 3P",
            "P = 26.67",
            "Q = 20 + 26.67 = 46.67",
          ],
          respuesta: "Precio de equilibrio: $26.67, Cantidad de equilibrio: 46.67 unidades",
        },
        conceptosClave: ["Equilibrio de mercado", "Funciones de oferta y demanda"],
      },
      {
        id: 2,
        tipo: "multiple",
        dificultad: "Básico",
        puntos: 15,
        pregunta: "Si aumenta el ingreso de los consumidores y el bien es normal, ¿qué ocurre con la curva de demanda?",
        opciones: [
          "Se desplaza hacia la izquierda",
          "Se desplaza hacia la derecha",
          "Se vuelve más empinada",
          "No cambia",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Cuando aumenta el ingreso y el bien es normal, los consumidores demandan más del bien a cada precio, desplazando la curva hacia la derecha. Esto refleja un aumento en la demanda.",
        conceptosClave: ["Bienes normales", "Desplazamiento de demanda", "Ingreso"],
      },
      {
        id: 3,
        tipo: "desarrollo",
        dificultad: "Avanzado",
        puntos: 25,
        pregunta:
          "Analiza qué sucede en el mercado de gasolina cuando: (a) aumenta el precio del petróleo crudo, y (b) se mejora la tecnología de refinación.",
        respuestaSugerida:
          "(a) El aumento en el precio del petróleo crudo (insumo principal) aumenta los costos de producción, desplazando la curva de oferta hacia la izquierda, aumentando el precio y reduciendo la cantidad de equilibrio. (b) La mejora tecnológica reduce los costos de producción, desplazando la oferta hacia la derecha, reduciendo el precio y aumentando la cantidad de equilibrio. Si ambos efectos ocurren simultáneamente, el efecto neto depende de la magnitud relativa de cada cambio.",
        conceptosClave: ["Desplazamiento de oferta", "Costos de producción", "Tecnología"],
      },
      {
        id: 4,
        tipo: "multiple",
        dificultad: "Intermedio",
        puntos: 18,
        pregunta: "¿Qué factor NO causa un desplazamiento de la curva de demanda?",
        opciones: [
          "Cambio en el precio del bien",
          "Cambio en el ingreso de los consumidores",
          "Cambio en los gustos y preferencias",
          "Cambio en el precio de bienes sustitutos",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Un cambio en el precio del bien causa un movimiento a lo largo de la curva de demanda, no un desplazamiento de la curva. Los desplazamientos son causados por cambios en factores distintos al precio del bien.",
        conceptosClave: ["Movimiento vs desplazamiento", "Determinantes de la demanda"],
      },
    ],
  },
  5: {
    titulo: "Ejercicios: Elasticidad y sus Aplicaciones",
    descripcion: "Comprende la sensibilidad de la oferta y demanda",
    ejercicios: [
      {
        id: 1,
        tipo: "calculo",
        dificultad: "Intermedio",
        puntos: 20,
        pregunta:
          "El precio de un producto aumenta de $10 a $12, y la cantidad demandada disminuye de 100 a 80 unidades. Calcula la elasticidad precio de la demanda usando el método del punto medio.",
        solucion: {
          pasos: [
            "Fórmula del punto medio: Ed = [(Q2-Q1)/((Q2+Q1)/2)] / [(P2-P1)/((P2+P1)/2)]",
            "Q1 = 100, Q2 = 80, P1 = 10, P2 = 12",
            "Camb",
            "Q1 = 100, Q2 = 80, P1 = 10, P2 = 12",
            "Cambio en cantidad: (80-100)/((80+100)/2) = -20/90 = -0.222",
            "Cambio en precio: (12-10)/((12+10)/2) = 2/11 = 0.182",
            "Ed = -0.222/0.182 = -1.22",
          ],
          respuesta: "La elasticidad precio de la demanda es -1.22 (elástica)",
        },
        conceptosClave: ["Elasticidad precio", "Método del punto medio"],
      },
      {
        id: 2,
        tipo: "multiple",
        dificultad: "Básico",
        puntos: 15,
        pregunta: "Si la elasticidad precio de la demanda es -0.5, la demanda es:",
        opciones: ["Perfectamente elástica", "Elástica", "Inelástica", "Perfectamente inelástica"],
        respuestaCorrecta: 2,
        explicacion:
          "Cuando el valor absoluto de la elasticidad es menor que 1 (|-0.5| = 0.5 < 1), la demanda es inelástica. Esto significa que los consumidores son relativamente poco sensibles a cambios en el precio.",
        conceptosClave: ["Elasticidad inelástica", "Interpretación de elasticidad"],
      },
      {
        id: 3,
        tipo: "desarrollo",
        dificultad: "Avanzado",
        puntos: 25,
        pregunta:
          "Una empresa vende un producto con elasticidad precio de la demanda de -2.0. Si quiere aumentar sus ingresos totales, ¿debería aumentar o disminuir el precio? Explica tu razonamiento.",
        respuestaSugerida:
          "La empresa debería disminuir el precio. Con una elasticidad de -2.0, la demanda es elástica (|Ed| > 1). Esto significa que un cambio porcentual en el precio resulta en un cambio porcentual mayor en la cantidad demandada en dirección opuesta. Por tanto, una reducción del precio causará un aumento proporcionalmente mayor en la cantidad vendida, incrementando el ingreso total. La regla es: con demanda elástica, precio e ingreso total se mueven en direcciones opuestas.",
        conceptosClave: ["Elasticidad e ingreso total", "Demanda elástica", "Estrategia de precios"],
      },
    ],
  },
}

export default function EjerciciosPage({ params }: { params: { id: string } }) {
  const [respuestas, setRespuestas] = useState<{ [key: number]: string }>({})
  const [mostrarResultados, setMostrarResultados] = useState<{ [key: number]: boolean }>({})
  const [respuestasDesarrollo, setRespuestasDesarrollo] = useState<{ [key: number]: string }>({})
  const [puntajeTotal, setPuntajeTotal] = useState(0)
  const [ejerciciosCompletados, setEjerciciosCompletados] = useState(0)

  const ejercicios = ejerciciosData[Number.parseInt(params.id) as keyof typeof ejerciciosData]

  if (!ejercicios) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm mb-8 -mx-4 px-4 py-4">
            <div className="flex items-center gap-4">
              <Link href={`/capitulo/${params.id}`}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al capítulo
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">EC</span>
                </div>
                <span className="font-semibold text-slate-800">EconoHub CEIC</span>
              </div>
            </div>
          </header>
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <p className="text-slate-600 mb-4">Los ejercicios para este capítulo están en desarrollo.</p>
              <Link href={`/capitulo/${params.id}`}>
                <Button>Volver al contenido teórico</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const handleRespuesta = (ejercicioId: number, respuesta: string) => {
    setRespuestas((prev) => ({
      ...prev,
      [ejercicioId]: respuesta,
    }))
  }

  const verificarRespuesta = (ejercicioId: number) => {
    const ejercicio = ejercicios.ejercicios.find((e) => e.id === ejercicioId)
    if (!ejercicio) return

    setMostrarResultados((prev) => ({
      ...prev,
      [ejercicioId]: true,
    }))

    // Calcular puntaje si es correcto
    if (ejercicio.tipo === "multiple" && Number.parseInt(respuestas[ejercicioId]) === ejercicio.respuestaCorrecta) {
      setPuntajeTotal((prev) => prev + ejercicio.puntos)
      setEjerciciosCompletados((prev) => prev + 1)
    } else if (ejercicio.tipo === "desarrollo" || ejercicio.tipo === "calculo") {
      // Para ejercicios de desarrollo, asumimos que se completan
      setPuntajeTotal((prev) => prev + ejercicio.puntos)
      setEjerciciosCompletados((prev) => prev + 1)
    }
  }

  const reiniciarEjercicio = (ejercicioId: number) => {
    const ejercicio = ejercicios.ejercicios.find((e) => e.id === ejercicioId)
    if (!ejercicio) return

    setRespuestas((prev) => {
      const nuevas = { ...prev }
      delete nuevas[ejercicioId]
      return nuevas
    })
    setMostrarResultados((prev) => {
      const nuevos = { ...prev }
      delete nuevos[ejercicioId]
      return nuevos
    })
    setRespuestasDesarrollo((prev) => {
      const nuevas = { ...prev }
      delete nuevas[ejercicioId]
      return nuevas
    })

    // Restar puntaje si estaba completado
    if (mostrarResultados[ejercicioId]) {
      setPuntajeTotal((prev) => Math.max(0, prev - ejercicio.puntos))
      setEjerciciosCompletados((prev) => Math.max(0, prev - 1))
    }
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

  const puntajeMaximo = ejercicios.ejercicios.reduce((total, ejercicio) => total + ejercicio.puntos, 0)
  const porcentajeCompletado =
    ejercicios.ejercicios.length > 0 ? (ejerciciosCompletados / ejercicios.ejercicios.length) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header mejorado */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href={`/capitulo/${params.id}`}>
                <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al capítulo
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">EC</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-800">EconoHub CEIC</span>
                  <p className="text-xs text-slate-600">Ejercicios Prácticos</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-slate-600 border-slate-300">
                Capítulo {params.id}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero section */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-violet-50 rounded-3xl p-8 mb-8 shadow-lg border border-blue-100">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">{ejercicios.titulo}</h1>
              <p className="text-xl text-slate-700 mb-6 leading-relaxed">{ejercicios.descripcion}</p>
              <div className="flex items-center gap-4">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200" variant="outline">
                  {ejercicios.ejercicios.length} ejercicios
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200" variant="outline">
                  {puntajeMaximo} puntos máximos
                </Badge>
              </div>
            </div>

            {/* Panel de progreso */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200 min-w-[280px]">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  <span className="font-semibold text-slate-800">Tu Progreso</span>
                </div>
                <div className="text-3xl font-bold text-blue-600">{puntajeTotal}</div>
                <div className="text-sm text-slate-600">de {puntajeMaximo} puntos</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Completados:</span>
                  <span className="font-medium">
                    {ejerciciosCompletados}/{ejercicios.ejercicios.length}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${porcentajeCompletado}%` }}
                  ></div>
                </div>
                <div className="text-center text-sm text-slate-600">{porcentajeCompletado.toFixed(0)}% completado</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {ejercicios.ejercicios.map((ejercicio) => (
            <Card
              key={ejercicio.id}
              className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-white font-bold">
                      {ejercicio.id}
                    </div>
                    <span>Ejercicio {ejercicio.id}</span>
                  </CardTitle>
                  <div className="flex items-center gap-3">
                    <Badge className={getDificultadColor(ejercicio.dificultad)} variant="outline">
                      {ejercicio.dificultad}
                    </Badge>
                    <Badge className="bg-amber-100 text-amber-700 border-amber-200" variant="outline">
                      {ejercicio.puntos} pts
                    </Badge>
                    <Button variant="outline" size="sm" onClick={() => reiniciarEjercicio(ejercicio.id)}>
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <p className="text-lg font-medium text-slate-800 leading-relaxed">{ejercicio.pregunta}</p>
                  </div>

                  {ejercicio.tipo === "multiple" && (
                    <div className="space-y-4">
                      <RadioGroup
                        value={respuestas[ejercicio.id] || ""}
                        onValueChange={(value) => handleRespuesta(ejercicio.id, value)}
                      >
                        {ejercicio.opciones?.map((opcion, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <RadioGroupItem value={index.toString()} id={`${ejercicio.id}-${index}`} />
                            <Label
                              htmlFor={`${ejercicio.id}-${index}`}
                              className="flex-1 cursor-pointer text-slate-700"
                            >
                              {opcion}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>

                      {!mostrarResultados[ejercicio.id] && respuestas[ejercicio.id] && (
                        <Button
                          onClick={() => verificarRespuesta(ejercicio.id)}
                          className="shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <Target className="h-4 w-4 mr-2" />
                          Verificar Respuesta
                        </Button>
                      )}

                      {mostrarResultados[ejercicio.id] && (
                        <div className="mt-6 p-6 rounded-2xl border-2">
                          {Number.parseInt(respuestas[ejercicio.id]) === ejercicio.respuestaCorrecta ? (
                            <div className="border-green-200 bg-green-50">
                              <div className="flex items-start gap-4">
                                <div className="p-2 bg-green-100 rounded-xl">
                                  <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-green-800 text-lg mb-2">
                                    ¡Excelente! Respuesta Correcta
                                  </h4>
                                  <p className="text-green-700 mb-4 leading-relaxed">{ejercicio.explicacion}</p>
                                  <div className="flex items-center gap-2 mb-3">
                                    <Award className="h-4 w-4 text-amber-500" />
                                    <span className="text-sm font-medium text-green-800">
                                      +{ejercicio.puntos} puntos
                                    </span>
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                    {ejercicio.conceptosClave.map((concepto, idx) => (
                                      <Badge
                                        key={idx}
                                        variant="outline"
                                        className="text-xs bg-green-100 text-green-700 border-green-200"
                                      >
                                        {concepto}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="border-red-200 bg-red-50">
                              <div className="flex items-start gap-4">
                                <div className="p-2 bg-red-100 rounded-xl">
                                  <XCircle className="h-6 w-6 text-red-600" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-red-800 text-lg mb-2">Respuesta Incorrecta</h4>
                                  <p className="text-red-700 mb-2">
                                    <strong>Respuesta correcta:</strong>{" "}
                                    {ejercicio.opciones?.[ejercicio.respuestaCorrecta!]}
                                  </p>
                                  <p className="text-red-700 mb-4 leading-relaxed">{ejercicio.explicacion}</p>
                                  <div className="flex flex-wrap gap-2">
                                    {ejercicio.conceptosClave.map((concepto, idx) => (
                                      <Badge
                                        key={idx}
                                        variant="outline"
                                        className="text-xs bg-red-100 text-red-700 border-red-200"
                                      >
                                        {concepto}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {ejercicio.tipo === "desarrollo" && (
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <Label htmlFor={`desarrollo-${ejercicio.id}`} className="text-sm font-medium">
                          Tu respuesta:
                        </Label>
                        <textarea
                          id={`desarrollo-${ejercicio.id}`}
                          className="w-full p-4 border border-slate-300 rounded-xl min-h-[150px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Desarrolla tu respuesta aquí. Incluye ejemplos y explica tu razonamiento..."
                          value={respuestasDesarrollo[ejercicio.id] || ""}
                          onChange={(e) =>
                            setRespuestasDesarrollo((prev) => ({
                              ...prev,
                              [ejercicio.id]: e.target.value,
                            }))
                          }
                        />
                      </div>

                      {!mostrarResultados[ejercicio.id] && (
                        <Button
                          onClick={() => verificarRespuesta(ejercicio.id)}
                          className="shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <BookOpen className="h-4 w-4 mr-2" />
                          Ver Respuesta Sugerida
                        </Button>
                      )}

                      {mostrarResultados[ejercicio.id] && (
                        <div className="mt-6 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-blue-100 rounded-xl">
                              <BookOpen className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-blue-800 text-lg mb-3">Respuesta Sugerida</h4>
                              <p className="text-blue-700 mb-4 leading-relaxed">{ejercicio.respuestaSugerida}</p>
                              <div className="flex items-center gap-2 mb-3">
                                <Award className="h-4 w-4 text-amber-500" />
                                <span className="text-sm font-medium text-blue-800">
                                  +{ejercicio.puntos} puntos por completar
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {ejercicio.conceptosClave.map((concepto, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="outline"
                                    className="text-xs bg-blue-100 text-blue-700 border-blue-200"
                                  >
                                    {concepto}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {ejercicio.tipo === "calculo" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`calculo-${ejercicio.id}`} className="text-sm font-medium mb-2 block">
                            Tu respuesta:
                          </Label>
                          <Input
                            id={`calculo-${ejercicio.id}`}
                            type="text"
                            placeholder="Escribe tu respuesta aquí..."
                            className="focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {!mostrarResultados[ejercicio.id] && (
                        <Button
                          onClick={() => verificarRespuesta(ejercicio.id)}
                          className="shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <Calculator className="h-4 w-4 mr-2" />
                          Ver Solución
                        </Button>
                      )}

                      {mostrarResultados[ejercicio.id] && ejercicio.solucion && (
                        <div className="mt-6 p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-200">
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-emerald-100 rounded-xl">
                              <Calculator className="h-6 w-6 text-emerald-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-emerald-800 text-lg mb-4">Solución Paso a Paso</h4>
                              <ol className="list-decimal list-inside space-y-2 text-emerald-700 mb-4">
                                {ejercicio.solucion.pasos.map((paso, index) => (
                                  <li key={index} className="leading-relaxed">
                                    {paso}
                                  </li>
                                ))}
                              </ol>
                              <div className="p-4 bg-white rounded-xl border-2 border-emerald-300 mb-4">
                                <p className="font-bold text-emerald-800 text-lg">{ejercicio.solucion.respuesta}</p>
                              </div>
                              <div className="flex items-center gap-2 mb-3">
                                <Award className="h-4 w-4 text-amber-500" />
                                <span className="text-sm font-medium text-emerald-800">+{ejercicio.puntos} puntos</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {ejercicio.conceptosClave.map((concepto, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="outline"
                                    className="text-xs bg-emerald-100 text-emerald-700 border-emerald-200"
                                  >
                                    {concepto}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resumen final */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-violet-50 mt-12">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">¡Excelente trabajo!</h3>
              <p className="text-slate-600 mb-6">
                Has completado {ejerciciosCompletados} de {ejercicios.ejercicios.length} ejercicios y obtenido{" "}
                {puntajeTotal} de {puntajeMaximo} puntos posibles.
              </p>
              <div className="flex justify-center gap-4">
                <Link href={`/capitulo/${params.id}`}>
                  <Button variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-all duration-300">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Repasar Teoría
                  </Button>
                </Link>
                <Link href={`/graficos/${params.id}`}>
                  <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                    <Calculator className="h-5 w-5 mr-2" />
                    Explorar Gráficos
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
