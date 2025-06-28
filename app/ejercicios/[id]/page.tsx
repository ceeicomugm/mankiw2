"use client"

import Link from "next/link"
import Image from "next/image"
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
    descripcion: "Domina el método científico y los modelos económicos",
    ejercicios: [
      {
        id: 1,
        tipo: "multiple",
        dificultad: "Básico",
        puntos: 10,
        pregunta: "¿Cuál es el propósito principal de los supuestos en los modelos económicos?",
        opciones: [
          "Hacer que los modelos sean más complicados",
          "Simplificar la realidad para entender lo esencial",
          "Hacer que los modelos sean menos precisos",
          "Confundir a los estudiantes",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Los supuestos simplifican la realidad compleja para permitirnos enfocarnos en los aspectos más importantes del fenómeno que estamos estudiando. Como dijo Einstein: 'Todo debe hacerse tan simple como sea posible, pero no más simple'.",
        conceptosClave: ["Supuestos", "Modelos económicos", "Simplificación"],
      },
      {
        id: 2,
        tipo: "calculo",
        dificultad: "Intermedio",
        puntos: 20,
        pregunta:
          "Una economía puede producir computadoras y automóviles. Si dedica todos sus recursos a computadoras, puede producir 100 computadoras. Si los dedica todos a automóviles, puede producir 50 automóviles. ¿Cuál es el costo de oportunidad de producir 1 automóvil?",
        solucion: {
          pasos: [
            "Identificar los extremos de la FPP: 100 computadoras o 50 automóviles",
            "El costo de oportunidad es lo que se sacrifica por cada unidad adicional",
            "Por cada automóvil adicional, se sacrifican computadoras",
            "Costo de oportunidad = 100 computadoras ÷ 50 automóviles = 2 computadoras por automóvil",
          ],
          respuesta: "El costo de oportunidad de 1 automóvil es 2 computadoras",
        },
        conceptosClave: ["Frontera de posibilidades de producción", "Costo de oportunidad", "Trade-offs"],
      },
      {
        id: 3,
        tipo: "multiple",
        dificultad: "Intermedio",
        puntos: 15,
        pregunta: "¿Cuál de las siguientes es una diferencia clave entre microeconomía y macroeconomía?",
        opciones: [
          "La microeconomía estudia el comportamiento individual, la macroeconomía estudia la economía como un todo",
          "La microeconomía es más importante que la macroeconomía",
          "La microeconomía usa matemáticas, la macroeconomía no",
          "No hay diferencia real entre ambas",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La microeconomía se enfoca en decisiones individuales de hogares y empresas, mientras que la macroeconomía estudia fenómenos que afectan a toda la economía como inflación, desempleo y crecimiento económico.",
        conceptosClave: ["Microeconomía", "Macroeconomía", "Niveles de análisis"],
      },
      {
        id: 4,
        tipo: "desarrollo",
        dificultad: "Avanzado",
        puntos: 25,
        pregunta:
          "Explica la diferencia entre economía positiva y economía normativa. Proporciona un ejemplo de cada una relacionado con el salario mínimo.",
        respuestaSugerida:
          "La economía positiva describe 'lo que es' - hechos y relaciones causales que pueden ser probados. Ejemplo: 'Un aumento del 10% en el salario mínimo reduce el empleo juvenil en 2%'. La economía normativa prescribe 'lo que debería ser' - juicios de valor sobre políticas. Ejemplo: 'El gobierno debería aumentar el salario mínimo para ayudar a los trabajadores pobres'. La primera es verificable con datos, la segunda involucra valores y opiniones.",
        conceptosClave: ["Economía positiva", "Economía normativa", "Análisis científico", "Juicios de valor"],
      },
    ],
  },
  3: {
    titulo: "Ejercicios: Interdependencia y Comercio",
    descripcion: "Practica el análisis de ventaja comparativa y ganancias del comercio",
    ejercicios: [
      {
        id: 1,
        tipo: "calculo",
        dificultad: "Intermedio",
        puntos: 25,
        pregunta:
          "María puede producir 10 pasteles o 20 panes en un día. Juan puede producir 6 pasteles o 18 panes en un día. ¿Quién tiene ventaja comparativa en cada bien?",
        solucion: {
          pasos: [
            "Calcular costo de oportunidad para María:",
            "- 1 pastel = 20/10 = 2 panes",
            "- 1 pan = 10/20 = 0.5 pasteles",
            "Calcular costo de oportunidad para Juan:",
            "- 1 pastel = 18/6 = 3 panes", 
            "- 1 pan = 6/18 = 0.33 pasteles",
            "Comparar costos de oportunidad:",
            "María tiene menor CO en pasteles (2 < 3), Juan tiene menor CO en panes (0.33 < 0.5)",
          ],
          respuesta: "María tiene ventaja comparativa en pasteles, Juan en panes",
        },
        conceptosClave: ["Ventaja comparativa", "Costo de oportunidad", "Especialización"],
      },
      {
        id: 2,
        tipo: "multiple",
        dificultad: "Básico",
        puntos: 15,
        pregunta: "¿Cuál es la diferencia entre ventaja absoluta y ventaja comparativa?",
        opciones: [
          "No hay diferencia, son lo mismo",
          "Ventaja absoluta es producir más; ventaja comparativa es producir con menor costo de oportunidad",
          "Ventaja comparativa es producir más; ventaja absoluta es producir con menor costo",
          "Solo la ventaja absoluta importa para el comercio",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La ventaja absoluta significa poder producir más de un bien con los mismos recursos. La ventaja comparativa significa poder producir un bien con menor costo de oportunidad. La ventaja comparativa, no la absoluta, determina los patrones de comercio beneficioso.",
        conceptosClave: ["Ventaja absoluta", "Ventaja comparativa", "Comercio"],
      },
      {
        id: 3,
        tipo: "desarrollo",
        dificultad: "Avanzado",
        puntos: 30,
        pregunta:
          "Explica por qué el comercio puede beneficiar a ambos países incluso cuando uno tiene ventaja absoluta en todos los bienes. Usa un ejemplo numérico.",
        respuestaSugerida:
          "Ejemplo: País A puede producir 100 computadoras o 200 camisas. País B puede producir 50 computadoras o 50 camisas. A tiene ventaja absoluta en ambos. Costos de oportunidad: País A: 1 computadora = 2 camisas, 1 camisa = 0.5 computadoras. País B: 1 computadora = 1 camisa, 1 camisa = 1 computadora. A tiene ventaja comparativa en camisas (0.5 < 1), B en computadoras (1 < 2). Si A se especializa en camisas y B en computadoras, y comercian a 1.5 camisas por computadora, ambos ganan: A obtiene computadoras más baratas (1.5 < 2 camisas) y B obtiene más camisas por computadora (1.5 > 1).",
        conceptosClave: ["Ventaja comparativa", "Especialización", "Ganancias del comercio", "Términos de intercambio"],
      },
      {
        id: 4,
        tipo: "multiple",
        dificultad: "Intermedio",
        puntos: 20,
        pregunta: "¿Qué determina los términos de intercambio en el comercio internacional?",
        opciones: [
          "Solo los costos de producción del país exportador",
          "Solo los costos de producción del país importador", 
          "Los costos de oportunidad de ambos países",
          "El gobierno del país más poderoso",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Los términos de intercambio deben estar entre los costos de oportunidad de ambos países para que el comercio sea mutuamente beneficioso. Si están fuera de este rango, uno de los países no tendría incentivo para comerciar.",
        conceptosClave: ["Términos de intercambio", "Costo de oportunidad", "Comercio mutuamente beneficioso"],
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
      {
        id: 4,
        tipo: "calculo",
        dificultad: "Avanzado",
        puntos: 30,
        pregunta:
          "El ingreso de los consumidores aumenta de $40,000 a $50,000, y la demanda de un bien aumenta de 200 a 250 unidades. Calcula la elasticidad ingreso de la demanda e interpreta el resultado.",
        solucion: {
          pasos: [
            "Fórmula: Ei = (% cambio en cantidad) / (% cambio en ingreso)",
            "Cambio en cantidad: (250-200)/200 = 0.25 = 25%",
            "Cambio en ingreso: (50,000-40,000)/40,000 = 0.25 = 25%",
            "Ei = 25% / 25% = 1.0",
            "Como Ei = 1, es un bien normal con elasticidad unitaria",
          ],
          respuesta: "Elasticidad ingreso = 1.0. Es un bien normal con elasticidad ingreso unitaria",
        },
        conceptosClave: ["Elasticidad ingreso", "Bienes normales", "Interpretación económica"],
      },
    ],
  },
  6: {
    titulo: "Ejercicios: Políticas Gubernamentales",
    descripcion: "Analiza el impacto de la intervención gubernamental",
    ejercicios: [
      {
        id: 1,
        tipo: "multiple",
        dificultad: "Básico",
        puntos: 15,
        pregunta: "Un precio máximo será efectivo (vinculante) solo si se establece:",
        opciones: [
          "Por encima del precio de equilibrio",
          "Por debajo del precio de equilibrio",
          "Igual al precio de equilibrio",
          "No importa donde se establezca",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Un precio máximo solo es vinculante si se establece por debajo del precio de equilibrio. Si se establece por encima, el mercado operará al precio de equilibrio natural y el control no tendrá efecto.",
        conceptosClave: ["Precio máximo", "Política vinculante", "Equilibrio de mercado"],
      },
      {
        id: 2,
        tipo: "calculo",
        dificultad: "Intermedio",
        puntos: 25,
        pregunta:
          "En un mercado con demanda Qd = 100 - P y oferta Qs = P - 20, el gobierno impone un impuesto de $6 por unidad a los vendedores. Calcula el nuevo precio que pagan los compradores y el precio que reciben los vendedores.",
        solucion: {
          pasos: [
            "Sin impuesto: 100 - P = P - 20, entonces P = 60, Q = 40",
            "Con impuesto, la oferta se desplaza: Qs = (P - 6) - 20 = P - 26",
            "Nuevo equilibrio: 100 - P = P - 26",
            "126 = 2P, entonces P = 63 (precio que pagan compradores)",
            "Precio que reciben vendedores = 63 - 6 = 57",
            "Nueva cantidad: Q = 100 - 63 = 37",
          ],
          respuesta: "Compradores pagan $63, vendedores reciben $57, cantidad = 37",
        },
        conceptosClave: ["Impuestos", "Incidencia fiscal", "Cuña fiscal"],
      },
      {
        id: 3,
        tipo: "desarrollo",
        dificultad: "Avanzado",
        puntos: 30,
        pregunta:
          "Explica por qué un salario mínimo puede causar desempleo y analiza los argumentos a favor y en contra de esta política.",
        respuestaSugerida:
          "Un salario mínimo por encima del equilibrio crea desempleo porque: (1) Aumenta la cantidad de trabajo ofrecida (más personas quieren trabajar al salario más alto), (2) Reduce la cantidad de trabajo demandada (las empresas contratan menos al costo más alto), (3) El exceso de oferta laboral = desempleo. Argumentos a favor: ayuda a trabajadores de bajos ingresos, reduce pobreza, estimula consumo. Argumentos en contra: causa desempleo (especialmente juvenil), puede acelerar automatización, perjudica a pequeñas empresas. La evidencia empírica es mixta, sugiriendo que los efectos dependen del nivel del salario mínimo y las condiciones del mercado laboral.",
        conceptosClave: ["Salario mínimo", "Desempleo", "Política laboral", "Trade-offs"],
      },
      {
        id: 4,
        tipo: "multiple",
        dificultad: "Intermedio",
        puntos: 20,
        pregunta: "¿Quién soporta la mayor carga de un impuesto cuando la demanda es inelástica y la oferta es elástica?",
        opciones: [
          "Los vendedores",
          "Los compradores", 
          "El gobierno",
          "Se reparte igualmente",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Cuando la demanda es inelástica y la oferta es elástica, los compradores soportan la mayor parte del impuesto. Esto se debe a que los compradores no pueden reducir fácilmente su consumo (demanda inelástica), mientras que los vendedores pueden ajustar fácilmente la cantidad ofrecida (oferta elástica).",
        conceptosClave: ["Incidencia fiscal", "Elasticidad", "Carga tributaria"],
      },
    ],
  },
  7: {
    titulo: "Ejercicios: Excedentes y Eficiencia",
    descripcion: "Analiza el bienestar económico y la eficiencia de mercados",
    ejercicios: [
      {
        id: 1,
        tipo: "calculo",
        dificultad: "Intermedio",
        puntos: 25,
        pregunta:
          "En un mercado con demanda P = 50 - Q y oferta P = 10 + Q, calcula el excedente del consumidor y del productor en equilibrio.",
        solucion: {
          pasos: [
            "Encontrar equilibrio: 50 - Q = 10 + Q",
            "40 = 2Q, entonces Q = 20, P = 30",
            "Excedente del consumidor = (1/2) × base × altura",
            "EC = (1/2) × 20 × (50 - 30) = (1/2) × 20 × 20 = 200",
            "Excedente del productor = (1/2) × 20 × (30 - 10) = (1/2) × 20 × 20 = 200",
            "Excedente total = 200 + 200 = 400",
          ],
          respuesta: "EC = $200, EP = $200, Excedente total = $400",
        },
        conceptosClave: ["Excedente del consumidor", "Excedente del productor", "Bienestar económico"],
      },
      {
        id: 2,
        tipo: "multiple",
        dificultad: "Básico",
        puntos: 15,
        pregunta: "¿Qué mide el excedente del consumidor?",
        opciones: [
          "Lo que los consumidores pagan por un bien",
          "La diferencia entre lo que están dispuestos a pagar y lo que realmente pagan",
          "El costo de producir un bien",
          "El precio de equilibrio del mercado",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El excedente del consumidor mide el beneficio neto que obtienen los compradores de participar en el mercado. Es la diferencia entre su disposición a pagar (valor que le dan al bien) y el precio que realmente pagan.",
        conceptosClave: ["Excedente del consumidor", "Disposición a pagar", "Bienestar"],
      },
      {
        id: 3,
        tipo: "desarrollo",
        dificultad: "Avanzado",
        puntos: 30,
        pregunta:
          "Explica las tres condiciones que deben cumplirse para que un mercado libre sea eficiente. ¿Qué sucede cuando no se cumplen?",
        respuestaSugerida:
          "Las tres condiciones para eficiencia son: (1) Los mercados asignan la oferta a los compradores que más valoran el bien (medido por disposición a pagar), (2) Los mercados asignan la demanda a los vendedores que pueden producir al menor costo, (3) Los mercados producen la cantidad que maximiza excedente total (donde beneficio marginal = costo marginal). Cuando no se cumplen, tenemos fallas de mercado: poder de mercado (monopolios), externalidades (contaminación), bienes públicos (defensa nacional), información asimétrica (mercado de autos usados). En estos casos, la intervención gubernamental puede mejorar la eficiencia.",
        conceptosClave: ["Eficiencia de mercado", "Fallas de mercado", "Intervención gubernamental"],
      },
      {
        id: 4,
        tipo: "multiple",
        dificultad: "Intermedio",
        puntos: 20,
        pregunta: "¿Cuándo maximiza el bienestar social un planificador benevolente?",
        opciones: [
          "Cuando maximiza el excedente del consumidor",
          "Cuando maximiza el excedente del productor",
          "Cuando maximiza el excedente total",
          "Cuando minimiza los precios",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Un planificador social benevolente busca maximizar el bienestar total de la sociedad, que se mide por el excedente total (suma del excedente del consumidor y del productor). Esto ocurre cuando el beneficio marginal iguala al costo marginal.",
        conceptosClave: ["Planificador social", "Excedente total", "Bienestar social"],
      },
    ],
  },
  8: {
    titulo: "Ejercicios: Costos de los Impuestos",
    descripcion: "Analiza la pérdida de peso muerto y efectos de los impuestos",
    ejercicios: [
      {
        id: 1,
        tipo: "calculo",
        dificultad: "Intermedio",
        puntos: 25,
        pregunta:
          "En un mercado con demanda P = 60 - Q y oferta P = 20 + Q, se impone un impuesto de $8. Calcula la pérdida de peso muerto.",
        solucion: {
          pasos: [
            "Sin impuesto: 60 - Q = 20 + Q, entonces Q = 20, P = 40",
            "Con impuesto: nueva oferta P = 20 + Q + 8 = 28 + Q",
            "Nuevo equilibrio: 60 - Q = 28 + Q, entonces Q = 16, P = 44",
            "Precio que reciben vendedores = 44 - 8 = 36",
            "Pérdida de peso muerto = (1/2) × impuesto × reducción en cantidad",
            "PPM = (1/2) × 8 × (20 - 16) = (1/2) × 8 × 4 = 16",
          ],
          respuesta: "La pérdida de peso muerto es $16",
        },
        conceptosClave: ["Pérdida de peso muerto", "Impuestos", "Ineficiencia"],
      },
      {
        id: 2,
        tipo: "multiple",
        dificultad: "Básico",
        puntos: 15,
        pregunta: "¿Qué representa la pérdida de peso muerto de un impuesto?",
        opciones: [
          "Los ingresos que recibe el gobierno",
          "La pérdida de excedente que no se transfiere a nadie",
          "El aumento en el precio del bien",
          "La reducción en la cantidad vendida",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La pérdida de peso muerto representa la reducción en el excedente total que no se transfiere a nadie. Es el valor perdido de las transacciones que no ocurren debido al impuesto, representando una ineficiencia pura.",
        conceptosClave: ["Pérdida de peso muerto", "Ineficiencia", "Excedente perdido"],
      },
      {
        id: 3,
        tipo: "desarrollo",
        dificultad: "Avanzado",
        puntos: 30,
        pregunta:
          "Explica la Curva de Laffer y sus implicaciones para la política fiscal. ¿Por qué tiene forma de U invertida?",
        respuestaSugerida:
          "La Curva de Laffer muestra la relación entre tasas de impuestos y recaudación fiscal total. Tiene forma de U invertida porque: (1) Con tasa 0%, no hay recaudación, (2) Con tasas bajas, aumentar la tasa incrementa la recaudación, (3) Con tasas muy altas (100%), nadie tiene incentivos para trabajar/producir, así que la recaudación es cero, (4) Existe una tasa óptima que maximiza la recaudación. Implicaciones: (a) Tasas muy altas pueden ser contraproducentes, (b) Reducir tasas altas puede aumentar recaudación, (c) Hay un trade-off entre recaudación y eficiencia, (d) La pérdida de peso muerto aumenta cuadráticamente con la tasa. Sin embargo, la ubicación exacta de los países en la curva es debatida.",
        conceptosClave: ["Curva de Laffer", "Política fiscal", "Recaudación óptima", "Incentivos"],
      },
      {
        id: 4,
        tipo: "multiple",
        dificultad: "Intermedio",
        puntos: 20,
        pregunta: "¿Cómo afecta la elasticidad de la demanda a la pérdida de peso muerto de un impuesto?",
        opciones: [
          "Mayor elasticidad resulta en menor pérdida de peso muerto",
          "Mayor elasticidad resulta en mayor pérdida de peso muerto",
          "La elasticidad no afecta la pérdida de peso muerto",
          "Solo la elasticidad de la oferta importa",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Mayor elasticidad de la demanda resulta en mayor pérdida de peso muerto porque los consumidores reducen más su consumo cuando aumenta el precio debido al impuesto. Esto significa que se pierden más transacciones mutuamente beneficiosas.",
        conceptosClave: ["Elasticidad", "Pérdida de peso muerto", "Sensibilidad al precio"],
      },
    ],
  },
  9: {
    titulo: "Ejercicios: Comercio Internacional",
    descripcion: "Analiza los efectos del comercio y políticas comerciales",
    ejercicios: [
      {
        id: 1,
        tipo: "calculo",
        dificultad: "Avanzado",
        puntos: 30,
        pregunta:
          "Un país tiene demanda doméstica Qd = 80 - P y oferta doméstica Qs = P - 20. El precio mundial es $40. Si se impone un arancel de $10, calcula la pérdida de peso muerto.",
        solucion: {
          pasos: [
            "Equilibrio de autarquía: 80 - P = P - 20, entonces P = 50, Q = 30",
            "Con precio mundial $40: Qd = 80 - 40 = 40, Qs = 40 - 20 = 20",
            "Importaciones sin arancel = 40 - 20 = 20",
            "Con arancel, precio doméstico = 40 + 10 = 50",
            "Con arancel: Qd = 80 - 50 = 30, Qs = 50 - 20 = 30",
            "Importaciones con arancel = 30 - 30 = 0",
            "PPM = pérdida en producción + pérdida en consumo",
            "PPM = (1/2) × 10 × (30-20) + (1/2) × 10 × (40-30) = 50 + 50 = 100",
          ],
          respuesta: "La pérdida de peso muerto del arancel es $100",
        },
        conceptosClave: ["Aranceles", "Pérdida de peso muerto", "Comercio internacional"],
      },
      {
        id: 2,
        tipo: "multiple",
        dificultad: "Básico",
        puntos: 15,
        pregunta: "¿Cuándo un país se convierte en exportador de un bien?",
        opciones: [
          "Cuando el precio mundial es mayor que el precio doméstico de autarquía",
          "Cuando el precio mundial es menor que el precio doméstico de autarquía",
          "Cuando el precio mundial es igual al precio doméstico",
          "Cuando el gobierno lo decide",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Un país se convierte en exportador cuando el precio mundial es mayor que su precio de autarquía. Esto significa que puede vender su producto a un precio más alto en el mercado internacional, por lo que tiene incentivos para exportar.",
        conceptosClave: ["Exportaciones", "Precio mundial", "Autarquía"],
      },
      {
        id: 3,
        tipo: "desarrollo",
        dificultad: "Avanzado",
        puntos: 35,
        pregunta:
          "Compara los efectos de un arancel versus una cuota de importación equivalente. ¿En qué se parecen y en qué difieren?",
        respuestaSugerida:
          "Similitudes: Ambos (1) aumentan el precio doméstico, (2) reducen las importaciones, (3) benefician a productores domésticos, (4) perjudican a consumidores domésticos, (5) causan pérdida de peso muerto. Diferencias clave: (1) Ingresos: Los aranceles generan ingresos para el gobierno, las cuotas crean 'rentas de cuota' que van a los importadores con licencias, (2) Flexibilidad: Los aranceles permiten que las importaciones varíen con la demanda, las cuotas fijan la cantidad, (3) Transparencia: Los aranceles son más transparentes, las cuotas pueden ser menos visibles, (4) Administración: Los aranceles son más fáciles de administrar. En general, los aranceles son preferibles desde la perspectiva del bienestar porque al menos el gobierno recibe ingresos en lugar de que vayan a importadores privados.",
        conceptosClave: ["Aranceles", "Cuotas", "Política comercial", "Bienestar económico"],
      },
      {
        id: 4,
        tipo: "multiple",
        dificultad: "Intermedio",
        puntos: 25,
        pregunta: "¿Cuál es el argumento más sólido económicamente para restringir el comercio?",
        opciones: [
          "Proteger empleos domésticos",
          "Industrias nacientes que necesitan tiempo para desarrollarse",
          "Competencia desleal de países con salarios bajos",
          "Ninguno de los anteriores es sólido económicamente",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El argumento de industrias nacientes es el más sólido teóricamente, aunque difícil de implementar en la práctica. La idea es que algunas industrias necesitan protección temporal para desarrollar economías de escala y experiencia antes de poder competir. Sin embargo, es difícil identificar qué industrias se beneficiarán realmente y la protección 'temporal' a menudo se vuelve permanente.",
        conceptosClave: ["Industrias nacientes", "Proteccionismo", "Argumentos comerciales"],
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
                <Image src="/logo-ceic.png" alt="CEIC Logo" width={32} height={32} className="rounded" />
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
                <Image src="/logo-ceic.png" alt="CEIC Logo" width={32} height={32} className="rounded shadow-sm" />
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