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
  2: {
    titulo: "Pensando como economista",
    resumen: "El método científico aplicado a la economía y los modelos económicos fundamentales.",
    duracion: "50 min",
    dificultad: "Básico",
    objetivos: [
      "Comprender el método científico en economía",
      "Analizar la diferencia entre economía positiva y normativa",
      "Interpretar modelos económicos básicos como la FPP",
    ],
    contenido: {
      introduccion:
        "Los economistas intentan abordar su tema de estudio con la objetividad de un científico. Como todos los científicos, hacen supuestos apropiados y construyen modelos simplificados para comprender el mundo que los rodea. Dos roles simples pero importantes que desempeñan los economistas: como científicos cuando intentan explicar el mundo, y como asesores de política cuando intentan mejorarlo.",
      secciones: [
        {
          titulo: "El Economista como Científico",
          contenido: [
            {
              subtitulo: "El Método Científico: Observación, Teoría y Más Observación",
              descripcion: "Los economistas siguen el método científico: observan patrones, desarrollan teorías y contrastan estas teorías con más observaciones.",
              puntos: [
                "Observación: Los economistas observan el mundo real y recopilan datos",
                "Teoría: Desarrollan teorías para explicar lo que observan",
                "Predicción: Usan teorías para hacer predicciones sobre el futuro",
                "Verificación: Contrastan predicciones con nuevas observaciones"
              ],
              ejemplo: "Observación: Los países con mayor educación tienden a ser más ricos. Teoría: La educación aumenta la productividad. Predicción: Invertir en educación aumentará el crecimiento económico."
            },
            {
              subtitulo: "El Papel de los Supuestos",
              descripcion: "Los economistas hacen supuestos para simplificar el complejo mundo real y hacer que sea más fácil de entender.",
              puntos: [
                "Los supuestos pueden parecer poco realistas pero son necesarios",
                "Diferentes supuestos son apropiados para diferentes propósitos",
                "El arte de la economía científica consiste en encontrar el conjunto de supuestos apropiado"
              ],
              ejemplo: "Para estudiar el comercio internacional, podemos suponer que solo existen dos países y dos bienes, aunque sabemos que la realidad es más compleja."
            }
          ]
        },
        {
          titulo: "Modelos Económicos",
          contenido: [
            {
              subtitulo: "Nuestro Primer Modelo: El Diagrama de Flujo Circular",
              descripcion: "Una representación visual de cómo fluyen los dólares a través de los mercados entre hogares y empresas.",
              componentes: [
                {
                  nombre: "Hogares",
                  descripcion: "Poseen los factores de producción y consumen bienes y servicios",
                  flujos: ["Venden trabajo, tierra y capital", "Compran bienes y servicios"]
                },
                {
                  nombre: "Empresas",
                  descripcion: "Producen y venden bienes y servicios, contratan y usan factores de producción",
                  flujos: ["Compran factores de producción", "Venden bienes y servicios"]
                },
                {
                  nombre: "Mercados de Factores",
                  descripcion: "Donde se intercambian factores de producción",
                  ejemplos: ["Mercado laboral", "Mercado de tierras", "Mercado de capital"]
                },
                {
                  nombre: "Mercados de Bienes y Servicios",
                  descripcion: "Donde se intercambian productos finales",
                  ejemplos: ["Supermercados", "Tiendas de ropa", "Restaurantes"]
                }
              ],
              flujos: [
                "Flujo real: Factores de producción → Empresas → Bienes y servicios → Hogares",
                "Flujo monetario: Hogares → Gastos → Empresas → Ingresos factores → Hogares"
              ]
            },
            {
              subtitulo: "Nuestro Segundo Modelo: La Frontera de Posibilidades de Producción",
              descripcion: "Un gráfico que muestra las combinaciones de productos que la economía puede producir dados los factores de producción y la tecnología disponible.",
              conceptos: [
                {
                  nombre: "Eficiencia",
                  descripcion: "Puntos sobre la frontera representan uso eficiente de recursos",
                  implicacion: "No se puede producir más de un bien sin producir menos de otro"
                },
                {
                  nombre: "Costo de Oportunidad",
                  descripcion: "La pendiente de la FPP muestra el costo de oportunidad",
                  calculo: "Para obtener una unidad adicional del bien X, se debe sacrificar Y unidades del bien Y"
                },
                {
                  nombre: "Crecimiento Económico",
                  descripcion: "Desplazamiento hacia afuera de la FPP",
                  causas: ["Aumento en factores de producción", "Mejoras tecnológicas", "Mayor educación"]
                }
              ],
              formas: [
                {
                  tipo: "Lineal",
                  descripcion: "Costo de oportunidad constante",
                  ejemplo: "Recursos perfectamente sustituibles entre usos"
                },
                {
                  tipo: "Cóncava (curvada hacia afuera)",
                  descripcion: "Costo de oportunidad creciente",
                  razon: "Recursos especializados no son perfectamente sustituibles"
                }
              ]
            }
          ]
        },
        {
          titulo: "Microeconomía y Macroeconomía",
          contenido: [
            {
              subtitulo: "Microeconomía",
              descripcion: "El estudio de cómo los hogares y las empresas toman decisiones y cómo interactúan en los mercados.",
              temas: [
                "Decisiones de consumo de los hogares",
                "Decisiones de producción de las empresas",
                "Interacción en mercados específicos",
                "Efectos de políticas gubernamentales en mercados individuales"
              ],
              ejemplos: [
                "¿Cómo decide una familia cuánto ahorrar?",
                "¿Cómo afecta la competencia extranjera a la industria automotriz?",
                "¿Cuál es el efecto de un salario mínimo en el empleo?"
              ]
            },
            {
              subtitulo: "Macroeconomía",
              descripcion: "El estudio de fenómenos que afectan a toda la economía.",
              temas: [
                "Crecimiento económico",
                "Inflación",
                "Desempleo",
                "Política fiscal y monetaria"
              ],
              ejemplos: [
                "¿Por qué el crecimiento económico es rápido en algunos países y lento en otros?",
                "¿Por qué los precios suben rápidamente en algunos períodos?",
                "¿Qué causa las recesiones económicas?"
              ]
            }
          ]
        },
        {
          titulo: "El Economista como Asesor de Política",
          contenido: [
            {
              subtitulo: "Análisis Positivo versus Análisis Normativo",
              descripcion: "Distinción fundamental entre describir el mundo y prescribir cómo debería ser.",
              tipos: [
                {
                  tipo: "Declaraciones Positivas",
                  descripcion: "Afirmaciones que intentan describir el mundo tal como es",
                  caracteristicas: ["Pueden ser confirmadas o refutadas", "Basadas en evidencia", "Objetivas"],
                  ejemplos: [
                    "El salario mínimo causa desempleo",
                    "La inflación fue del 3% el año pasado",
                    "Los impuestos reducen los incentivos para trabajar"
                  ]
                },
                {
                  tipo: "Declaraciones Normativas",
                  descripcion: "Afirmaciones sobre cómo debería ser el mundo",
                  caracteristicas: ["Involucran juicios de valor", "No pueden ser confirmadas solo con datos", "Subjetivas"],
                  ejemplos: [
                    "El gobierno debería aumentar el salario mínimo",
                    "La inflación es demasiado alta",
                    "Los ricos deberían pagar más impuestos"
                  ]
                }
              ]
            },
            {
              subtitulo: "Economistas en Washington",
              descripcion: "Los economistas desempeñan roles importantes en el gobierno como asesores de política.",
              roles: [
                "Consejo de Asesores Económicos del Presidente",
                "Departamento del Tesoro",
                "Oficina de Presupuesto del Congreso",
                "Reserva Federal"
              ],
              funciones: [
                "Analizar políticas económicas propuestas",
                "Predecir efectos de cambios de política",
                "Comunicar análisis económico a políticos",
                "Monitorear condiciones económicas"
              ]
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Frontera de Posibilidades de Producción (Lineal)",
        formula: "Y = a - bX",
        descripcion: "Donde 'a' es la intersección en Y, 'b' es la pendiente (costo de oportunidad)",
        ejemplo: "Si una economía puede producir 100 autos o 200 computadoras: C = 200 - 2A"
      },
      {
        nombre: "Costo de Oportunidad en FPP",
        formula: "CO = ΔY / ΔX",
        descripcion: "El costo de oportunidad es la pendiente de la FPP",
        ejemplo: "Si para producir 10 autos más se deben sacrificar 20 computadoras: CO = 20/10 = 2"
      },
      {
        nombre: "Eficiencia Productiva",
        formula: "Punto sobre la FPP",
        descripcion: "Una economía es productivamente eficiente si opera sobre su FPP",
        ejemplo: "Cualquier punto dentro de la FPP representa ineficiencia"
      }
    ],
    conceptosClave: [
      "Método científico",
      "Supuestos económicos",
      "Modelos económicos",
      "Flujo circular",
      "Frontera de posibilidades de producción",
      "Eficiencia productiva",
      "Costo de oportunidad",
      "Microeconomía",
      "Macroeconomía",
      "Análisis positivo",
      "Análisis normativo"
    ],
    ejemplosReales: [
      {
        titulo: "Modelo de Flujo Circular en la Pandemia",
        descripcion: "Durante COVID-19, las restricciones interrumpieron el flujo circular: hogares redujeron gastos, empresas redujeron producción y empleo, creando un ciclo de retroalimentación negativa."
      },
      {
        titulo: "FPP de Estados Unidos: Mantequilla vs Cañones",
        descripcion: "Durante la Segunda Guerra Mundial, EE.UU. tuvo que elegir entre producción civil (mantequilla) y militar (cañones), ilustrando perfectamente el concepto de FPP y costo de oportunidad."
      },
      {
        titulo: "Análisis Positivo vs Normativo en Política Fiscal",
        descripcion: "Positivo: 'Reducir impuestos aumentará el consumo en 2%'. Normativo: 'El gobierno debería reducir impuestos para estimular la economía'."
      }
    ]
  },
  3: {
    titulo: "La interdependencia y las ganancias del comercio",
    resumen: "Cómo la especialización y el comercio pueden beneficiar a todos los participantes.",
    duracion: "55 min",
    dificultad: "Intermedio",
    objetivos: [
      "Distinguir entre ventaja absoluta y ventaja comparativa",
      "Explicar cómo la especialización aumenta la producción total",
      "Analizar las ganancias del comercio internacional",
    ],
    contenido: {
      introduccion:
        "Considera tu día típico. Te despiertas con un despertador hecho en Corea, te pones ropa hecha en China, bebes café de Colombia. Antes del mediodía, has dependido de docenas de países. Esta interdependencia es posible porque las personas comercian entre sí. En este capítulo examinamos las ventajas del comercio.",
      secciones: [
        {
          titulo: "Una Parábola para la Economía Moderna",
          contenido: [
            {
              subtitulo: "El Ganadero y el Agricultor",
              descripcion: "Imaginemos una economía simple con solo dos personas: un ganadero que produce carne y un agricultor que produce papas.",
              escenario: {
                ganadero: {
                  produccion: "Puede producir 1 onza de carne en 20 minutos o 1 onza de papas en 60 minutos",
                  jornada: "8 horas = 480 minutos por día",
                  sinComercio: "4 horas carne (12 oz) + 4 horas papas (4 oz)"
                },
                agricultor: {
                  produccion: "Puede producir 1 onza de carne en 60 minutos o 1 onza de papas en 15 minutos",
                  jornada: "8 horas = 480 minutos por día",
                  sinComercio: "4 horas carne (4 oz) + 4 horas papas (16 oz)"
                }
              },
              pregunta: "¿Deberían comerciar? ¿Quién debería especializarse en qué?"
            }
          ]
        },
        {
          titulo: "El Principio de la Ventaja Comparativa",
          contenido: [
            {
              subtitulo: "Ventaja Absoluta",
              descripcion: "La capacidad de producir un bien usando menos insumos que otro productor.",
              calculo: "Se compara la productividad directa entre productores",
              ejemplo: {
                descripcion: "En nuestro ejemplo:",
                ganadero: "Ventaja absoluta en carne (20 min vs 60 min)",
                agricultor: "Ventaja absoluta en papas (15 min vs 60 min)",
                conclusion: "Cada uno tiene ventaja absoluta en un bien diferente"
              }
            },
            {
              subtitulo: "Costo de Oportunidad y Ventaja Comparativa",
              descripcion: "El costo de oportunidad de producir un bien es la cantidad del otro bien que se debe sacrificar.",
              calculos: [
                {
                  productor: "Ganadero",
                  costoCarne: "1 oz carne = 20 min = 1/3 oz papas",
                  costoPapas: "1 oz papas = 60 min = 3 oz carne"
                },
                {
                  productor: "Agricultor", 
                  costoCarne: "1 oz carne = 60 min = 4 oz papas",
                  costoPapas: "1 oz papas = 15 min = 1/4 oz carne"
                }
              ],
              ventajaComparativa: [
                "Ganadero: ventaja comparativa en carne (CO = 1/3 papas < 4 papas)",
                "Agricultor: ventaja comparativa en papas (CO = 1/4 carne < 3 carnes)"
              ]
            },
            {
              subtitulo: "Ventaja Comparativa y Comercio",
              descripcion: "Cada persona debería especializarse en el bien en el que tiene ventaja comparativa.",
              especializacion: {
                ganadero: {
                  especializacion: "Solo carne: 480 min ÷ 20 min = 24 oz carne",
                  comercio: "Intercambia 14 oz carne por 14 oz papas",
                  consumo: "10 oz carne + 14 oz papas"
                },
                agricultor: {
                  especializacion: "Solo papas: 480 min ÷ 15 min = 32 oz papas", 
                  comercio: "Intercambia 14 oz papas por 14 oz carne",
                  consumo: "14 oz carne + 18 oz papas"
                }
              },
              ganancias: [
                "Ganadero gana: (10,14) vs (12,4) → menos carne pero muchas más papas",
                "Agricultor gana: (14,18) vs (4,16) → mucha más carne y más papas",
                "Ambos están mejor que sin comercio"
              ]
            }
          ]
        },
        {
          titulo: "Aplicaciones de la Ventaja Comparativa",
          contenido: [
            {
              subtitulo: "¿Debería Tiger Woods Cortar su Propio Césped?",
              descripcion: "Ejemplo de ventaja comparativa en decisiones personales.",
              escenario: {
                tigerWoods: "Puede cortar césped en 2 horas, ganar $10,000/hora filmando comerciales",
                jardinero: "Puede cortar césped en 4 horas, gana $20/hora en otros trabajos"
              },
              analisis: {
                costoOportunidadTiger: "2 horas × $10,000 = $20,000",
                costoOportunidadJardinero: "4 horas × $20 = $80",
                conclusion: "Tiger debería especializarse en comerciales, jardinero en cortar césped"
              },
              leccion: "Incluso si Tiger es mejor cortando césped, debería especializarse donde su ventaja es mayor"
            },
            {
              subtitulo: "Comercio Internacional",
              descripcion: "Los mismos principios se aplican al comercio entre países.",
              ejemplo: {
                paises: ["Estados Unidos", "Japón"],
                bienes: ["Alimentos", "Automóviles"],
                ventajas: [
                  "EE.UU. puede tener ventaja comparativa en alimentos",
                  "Japón puede tener ventaja comparativa en automóviles",
                  "Ambos se benefician del comercio incluso si uno es más eficiente en ambos"
                ]
              },
              beneficios: [
                "Mayor variedad de bienes disponibles",
                "Menores costos a través de economías de escala",
                "Mayor competencia e innovación",
                "Especialización permite mayor eficiencia"
              ]
            }
          ]
        },
        {
          titulo: "Conclusión",
          contenido: [
            {
              subtitulo: "Principios del Comercio",
              principios: [
                "El comercio puede beneficiar a todos",
                "La ventaja comparativa, no absoluta, determina las ganancias del comercio",
                "La especialización según ventaja comparativa maximiza la producción total",
                "Los mercados coordinan naturalmente esta especialización"
              ]
            },
            {
              subtitulo: "Limitaciones y Consideraciones",
              limitaciones: [
                "Costos de transporte pueden limitar el comercio",
                "Ajustes pueden ser costosos a corto plazo",
                "Distribución de ganancias puede ser desigual",
                "Factores políticos y sociales influyen en políticas comerciales"
              ]
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Costo de Oportunidad",
        formula: "CO(X) = Cantidad de Y sacrificada / Cantidad de X obtenida",
        descripcion: "Costo de oportunidad de producir bien X en términos del bien Y",
        ejemplo: "Si para producir 1 auto se sacrifican 2 computadoras: CO(auto) = 2 computadoras"
      },
      {
        nombre: "Ventaja Comparativa",
        formula: "Ventaja comparativa en X si: CO_A(X) < CO_B(X)",
        descripcion: "El productor A tiene ventaja comparativa en X si su costo de oportunidad es menor",
        ejemplo: "Si CO_María(tortas) = 2 panes y CO_Juan(tortas) = 3 panes, María tiene ventaja comparativa en tortas"
      },
      {
        nombre: "Términos de Intercambio",
        formula: "CO_A(X) < Términos < CO_B(X)",
        descripcion: "Para que el comercio sea mutuamente beneficioso, el precio debe estar entre los costos de oportunidad",
        ejemplo: "Si CO_A = 2 y CO_B = 3, términos de intercambio pueden ser 2.5"
      },
      {
        nombre: "Ganancias del Comercio",
        formula: "Consumo con comercio > Consumo sin comercio",
        descripcion: "El comercio permite consumir más allá de las posibilidades de producción individual",
        ejemplo: "Con especialización y comercio, ambos países pueden consumir fuera de su FPP"
      }
    ],
    conceptosClave: [
      "Ventaja absoluta",
      "Ventaja comparativa", 
      "Costo de oportunidad",
      "Especialización",
      "Términos de intercambio",
      "Ganancias del comercio",
      "Interdependencia",
      "Comercio internacional",
      "Productividad",
      "Eficiencia"
    ],
    ejemplosReales: [
      {
        titulo: "Comercio EE.UU. - China",
        descripcion: "EE.UU. se especializa en servicios financieros y tecnología (ventaja comparativa), China en manufactura. Ambos se benefician del intercambio."
      },
      {
        titulo: "Especialización en Silicon Valley",
        descripcion: "Programadores se especializan en código, diseñadores en interfaces, gerentes en coordinación. La especialización aumenta la productividad total."
      },
      {
        titulo: "Comercio Intraindustrial",
        descripcion: "Alemania exporta BMW y Mercedes, pero importa Toyota y Honda. Especialización en diferentes tipos del mismo producto."
      }
    ]
  },
  7: {
    titulo: "Consumidores, productores y eficiencia de los mercados",
    resumen: "Análisis del bienestar económico a través del excedente del consumidor y del productor.",
    duracion: "50 min",
    dificultad: "Intermedio",
    objetivos: [
      "Calcular y interpretar el excedente del consumidor",
      "Calcular y interpretar el excedente del productor",
      "Evaluar la eficiencia de los mercados competitivos",
    ],
    contenido: {
      introduccion:
        "¿Los mercados libres asignan los recursos de manera eficiente? ¿Los resultados del mercado son deseables? Para responder estas preguntas, estudiamos el bienestar económico - el estudio de cómo la asignación de recursos afecta el bienestar económico. Comenzamos desarrollando las herramientas del excedente del consumidor y del productor.",
      secciones: [
        {
          titulo: "Excedente del Consumidor",
          contenido: [
            {
              subtitulo: "Disposición a Pagar",
              descripcion: "La cantidad máxima que un comprador está dispuesto a pagar por un bien.",
              ejemplo: {
                bien: "Álbum de música",
                compradores: [
                  { nombre: "Juan", disposicion: "$100", razon: "Gran fanático" },
                  { nombre: "Pablo", disposicion: "$80", razon: "Le gusta la banda" },
                  { nombre: "Ringo", disposicion: "$70", razon: "Compra ocasional" },
                  { nombre: "Jorge", disposicion: "$50", razon: "Precio límite" }
                ]
              },
              curvaDedemanda: "La disposición a pagar de cada comprador determina su posición en la curva de demanda"
            },
            {
              subtitulo: "Definición de Excedente del Consumidor",
              descripcion: "La diferencia entre la disposición a pagar de un comprador y el precio que realmente paga.",
              formula: "Excedente del Consumidor = Disposición a Pagar - Precio Pagado",
              ejemploCalculo: {
                precio: "$70",
                excedentes: [
                  "Juan: $100 - $70 = $30",
                  "Pablo: $80 - $70 = $10", 
                  "Ringo: $70 - $70 = $0",
                  "Jorge: No compra (disposición < precio)"
                ],
                total: "Excedente total = $30 + $10 + $0 = $40"
              }
            },
            {
              subtitulo: "Medición del Excedente del Consumidor con la Curva de Demanda",
              descripcion: "El excedente del consumidor es el área bajo la curva de demanda y por encima del precio.",
              interpretacion: [
                "Área del triángulo entre curva de demanda y línea de precio",
                "Representa el beneficio total que reciben los compradores",
                "Medida del bienestar de los compradores en el mercado"
              ],
              factoresQueAfectan: [
                "Cambios en el precio: precio menor → mayor excedente",
                "Desplazamientos de demanda: mayor demanda → mayor excedente",
                "Forma de la curva: más elástica → menor excedente a precios altos"
              ]
            }
          ]
        },
        {
          titulo: "Excedente del Productor",
          contenido: [
            {
              subtitulo: "Costo y Disposición a Vender",
              descripcion: "El costo es el valor de todo aquello a lo que debe renunciar un vendedor para producir un bien.",
              ejemplo: {
                bien: "Pintar una casa",
                vendedores: [
                  { nombre: "María", costo: "$500", razon: "Pintora eficiente" },
                  { nombre: "Frida", costo: "$600", razon: "Experiencia media" },
                  { nombre: "Georgia", costo: "$800", razon: "Menos eficiente" },
                  { nombre: "Grandma", costo: "$900", razon: "Muy lenta" }
                ]
              },
              curvaDeOferta: "El costo de cada vendedor determina su posición en la curva de oferta"
            },
            {
              subtitulo: "Definición de Excedente del Productor",
              descripcion: "La diferencia entre el precio que recibe un vendedor y su costo de producción.",
              formula: "Excedente del Productor = Precio Recibido - Costo de Producción",
              ejemploCalculo: {
                precio: "$600",
                excedentes: [
                  "María: $600 - $500 = $100",
                  "Frida: $600 - $600 = $0",
                  "Georgia: No vende (costo > precio)",
                  "Grandma: No vende (costo > precio)"
                ],
                total: "Excedente total = $100 + $0 = $100"
              }
            },
            {
              subtitulo: "Medición del Excedente del Productor con la Curva de Oferta",
              descripcion: "El excedente del productor es el área bajo el precio y por encima de la curva de oferta.",
              interpretacion: [
                "Área del triángulo entre línea de precio y curva de oferta",
                "Representa el beneficio total que reciben los vendedores",
                "Medida del bienestar de los vendedores en el mercado"
              ],
              factoresQueAfectan: [
                "Cambios en el precio: precio mayor → mayor excedente",
                "Desplazamientos de oferta: mayor oferta → menor excedente",
                "Tecnología: mejoras → menores costos → mayor excedente"
              ]
            }
          ]
        },
        {
          titulo: "Eficiencia del Mercado",
          contenido: [
            {
              subtitulo: "El Planificador Social Benevolente",
              descripcion: "Un tomador de decisiones hipotético que quiere maximizar el bienestar económico total de todos en la sociedad.",
              objetivos: [
                "Maximizar el excedente total (consumidor + productor)",
                "Asegurar eficiencia en la asignación de recursos",
                "Considerar tanto eficiencia como equidad"
              ],
              herramientas: [
                "Excedente total como medida de bienestar",
                "Análisis de diferentes asignaciones posibles",
                "Comparación con resultado de mercado libre"
              ]
            },
            {
              subtitulo: "Evaluación del Equilibrio de Mercado",
              descripcion: "¿El equilibrio de mercado libre maximiza el excedente total?",
              propiedades: [
                {
                  propiedad: "Mercados Libres Asignan Oferta a Compradores con Mayor Valoración",
                  explicacion: "Los compradores con mayor disposición a pagar son quienes compran",
                  eficiencia: "No se puede aumentar excedente del consumidor reasignando bienes"
                },
                {
                  propiedad: "Mercados Libres Asignan Demanda a Vendedores con Menor Costo",
                  explicacion: "Los vendedores con menor costo son quienes venden",
                  eficiencia: "No se puede aumentar excedente del productor reasignando producción"
                },
                {
                  propiedad: "Mercados Libres Producen la Cantidad que Maximiza Excedente Total",
                  explicacion: "Se produce hasta donde beneficio marginal = costo marginal",
                  eficiencia: "Cualquier otra cantidad reduciría el excedente total"
                }
              ]
            },
            {
              subtitulo: "Eficiencia y Equidad",
              descripcion: "Los mercados maximizan el tamaño del pastel económico, pero no necesariamente lo distribuyen equitativamente.",
              eficiencia: {
                definicion: "Maximización del excedente total",
                logro: "Los mercados competitivos son eficientes",
                condicion: "Beneficio marginal = Costo marginal"
              },
              equidad: {
                definicion: "Distribución justa del bienestar",
                problema: "Los mercados no garantizan distribución equitativa",
                solucion: "Puede requerir intervención gubernamental"
              },
              tradeoff: "A menudo existe tensión entre eficiencia y equidad en políticas públicas"
            }
          ]
        },
        {
          titulo: "Conclusión: La Eficiencia de los Mercados",
          contenido: [
            {
              subtitulo: "Los Mercados Son Usualmente una Buena Forma de Organizar la Actividad Económica",
              ventajas: [
                "Asignan recursos a sus usos más valorados",
                "Coordinan actividad de millones de personas",
                "Logran eficiencia sin planificación central",
                "Responden automáticamente a cambios en condiciones"
              ],
              limitaciones: [
                "Requieren mercados competitivos",
                "Pueden fallar con externalidades",
                "No abordan distribución del ingreso",
                "Pueden ser ineficientes con poder de mercado"
              ]
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Excedente del Consumidor",
        formula: "EC = ∫[0 a Q*] P(Q) dQ - P* × Q*",
        descripcion: "Área bajo la curva de demanda menos el gasto total",
        ejemplo: "Para demanda lineal P = a - bQ: EC = (1/2) × (a - P*) × Q*"
      },
      {
        nombre: "Excedente del Productor",
        formula: "EP = P* × Q* - ∫[0 a Q*] C(Q) dQ",
        descripcion: "Ingreso total menos el área bajo la curva de oferta",
        ejemplo: "Para oferta lineal P = c + dQ: EP = (1/2) × (P* - c) × Q*"
      },
      {
        nombre: "Excedente Total",
        formula: "ET = EC + EP",
        descripcion: "Suma del excedente del consumidor y del productor",
        ejemplo: "ET = (1/2) × (a - c) × Q* para oferta y demanda lineales"
      },
      {
        nombre: "Pérdida de Peso Muerto",
        formula: "PPM = ET_eficiente - ET_actual",
        descripcion: "Reducción en excedente total debido a ineficiencia",
        ejemplo: "PPM = (1/2) × (P_alto - P_bajo) × (Q_eficiente - Q_actual)"
      }
    ],
    conceptosClave: [
      "Disposición a pagar",
      "Excedente del consumidor",
      "Costo de producción",
      "Excedente del productor",
      "Excedente total",
      "Eficiencia económica",
      "Planificador social",
      "Asignación de recursos",
      "Bienestar económico",
      "Equidad vs eficiencia"
    ],
    ejemplosReales: [
      {
        titulo: "Excedente del Consumidor en Vuelos",
        descripcion: "Los pasajeros que habrían pagado $500 por un vuelo pero lo consiguen por $300 obtienen $200 de excedente del consumidor."
      },
      {
        titulo: "Excedente del Productor en Agricultura",
        descripcion: "Un agricultor que puede producir trigo a $3/bushel pero lo vende a $5/bushel obtiene $2/bushel de excedente del productor."
      },
      {
        titulo: "Eficiencia en Mercados Online",
        descripcion: "eBay y Amazon conectan compradores y vendedores globalmente, mejorando la eficiencia al permitir que los bienes lleguen a quienes más los valoran."
      }
    ]
  },
  8: {
    titulo: "Aplicación: los costos de los impuestos",
    resumen: "Análisis del impacto de los impuestos en el bienestar económico y la eficiencia del mercado.",
    duracion: "45 min",
    dificultad: "Intermedio",
    objetivos: [
      "Analizar cómo los impuestos afectan el excedente del consumidor y del productor",
      "Calcular la pérdida de peso muerto causada por impuestos",
      "Evaluar los determinantes de la magnitud de la pérdida de peso muerto",
    ],
    contenido: {
      introduccion:
        "Los impuestos son omnipresentes en la vida económica. Cuando compramos gasolina, parte del precio va al gobierno como impuesto. Cuando trabajamos, parte de nuestros ingresos va al gobierno como impuesto sobre la renta. En este capítulo usamos las herramientas del excedente del consumidor y del productor para estudiar cómo los impuestos afectan el bienestar económico.",
      secciones: [
        {
          titulo: "La Pérdida de Peso Muerto de los Impuestos",
          contenido: [
            {
              subtitulo: "Cómo un Impuesto Afecta a los Participantes del Mercado",
              descripcion: "Un impuesto sobre un bien crea una cuña entre el precio que pagan los compradores y el precio que reciben los vendedores.",
              mecanismo: [
                "Sin impuesto: Compradores y vendedores comercian al mismo precio de equilibrio",
                "Con impuesto: Se crea una diferencia entre precio de compradores y vendedores",
                "La cuña fiscal es igual al tamaño del impuesto por unidad"
              ],
              efectos: [
                "Precio que pagan compradores aumenta",
                "Precio que reciben vendedores disminuye", 
                "Cantidad intercambiada disminuye",
                "Se reduce el excedente total"
              ]
            },
            {
              subtitulo: "Pérdida de Peso Muerto",
              descripcion: "La reducción en el excedente total que resulta de un impuesto.",
              causas: [
                "El impuesto impide que algunas transacciones mutuamente beneficiosas ocurran",
                "Compradores que valoran el bien más que el costo pero menos que el precio con impuesto no compran",
                "Vendedores que pueden producir a menor costo que la valoración pero mayor que el precio neto no venden"
              ],
              calculo: "PPM = (1/2) × Impuesto × Reducción en Cantidad",
              interpretacion: "Representa valor perdido para la sociedad debido a la distorsión del impuesto"
            }
          ]
        },
        {
          titulo: "Los Determinantes de la Pérdida de Peso Muerto",
          contenido: [
            {
              subtitulo: "Elasticidad y Pérdida de Peso Muerto",
              descripcion: "La magnitud de la pérdida de peso muerto depende de las elasticidades de oferta y demanda.",
              principios: [
                "Cuanto más elástica la demanda, mayor la pérdida de peso muerto",
                "Cuanto más elástica la oferta, mayor la pérdida de peso muerto",
                "Con curvas perfectamente inelásticas, no hay pérdida de peso muerto"
              ],
              razon: "Las elasticidades determinan qué tanto responde la cantidad a cambios en precios",
              ejemplos: [
                {
                  bien: "Gasolina (demanda inelástica)",
                  efecto: "Pérdida de peso muerto relativamente pequeña",
                  razon: "Los consumidores no reducen mucho su consumo"
                },
                {
                  bien: "Yates de lujo (demanda elástica)",
                  efecto: "Pérdida de peso muerto relativamente grande",
                  razon: "Los consumidores pueden fácilmente evitar la compra"
                }
              ]
            },
            {
              subtitulo: "Pérdida de Peso Muerto y Recaudación Fiscal a Medida que Cambia el Tamaño del Impuesto",
              descripcion: "La relación entre el tamaño del impuesto, la recaudación y la pérdida de peso muerto no es lineal.",
              patrones: [
                {
                  aspecto: "Recaudación Fiscal",
                  patron: "Primero aumenta, luego puede disminuir",
                  razon: "Impuestos muy altos reducen tanto la cantidad que la recaudación cae",
                  formula: "Recaudación = Impuesto × Cantidad"
                },
                {
                  aspecto: "Pérdida de Peso Muerto", 
                  patron: "Aumenta más que proporcionalmente",
                  razon: "PPM aumenta con el cuadrado del impuesto",
                  formula: "PPM ∝ (Impuesto)²"
                }
              ],
              implicaciones: [
                "Impuestos pequeños causan pérdidas de peso muerto pequeñas",
                "Impuestos grandes causan pérdidas de peso muerto desproporcionadamente grandes",
                "Existe un impuesto que maximiza la recaudación (Curva de Laffer)"
              ]
            }
          ]
        },
        {
          titulo: "Pérdida de Peso Muerto y Recaudación Fiscal como Varían con el Tamaño del Impuesto",
          contenido: [
            {
              subtitulo: "La Curva de Laffer",
              descripcion: "Muestra la relación entre las tasas de impuestos y la recaudación fiscal total.",
              forma: [
                "Comienza en cero (sin impuesto, sin recaudación)",
                "Aumenta inicialmente con la tasa de impuesto",
                "Alcanza un máximo en alguna tasa intermedia",
                "Disminuye para tasas muy altas (efecto desincentivo domina)"
              ],
              debate: [
                "¿En qué parte de la curva están los impuestos actuales?",
                "¿Reducir impuestos puede aumentar la recaudación?",
                "Evidencia empírica es mixta y controvertida"
              ]
            },
            {
              subtitulo: "Casos Extremos",
              casos: [
                {
                  caso: "Impuesto de $0",
                  recaudacion: "$0",
                  perdidaPesoMuerto: "$0",
                  eficiencia: "Perfectamente eficiente"
                },
                {
                  caso: "Impuesto prohibitivo",
                  recaudacion: "$0", 
                  perdidaPesoMuerto: "Máxima",
                  eficiencia: "Elimina completamente el mercado"
                },
                {
                  caso: "Impuesto óptimo para recaudación",
                  recaudacion: "Máxima",
                  perdidaPesoMuerto: "Sustancial",
                  eficiencia: "Compromiso entre recaudación y eficiencia"
                }
              ]
            }
          ]
        },
        {
          titulo: "Conclusión",
          contenido: [
            {
              subtitulo: "Lecciones sobre los Impuestos",
              lecciones: [
                "Los impuestos tienen costos más allá del dinero recaudado",
                "La pérdida de peso muerto representa un costo real para la sociedad",
                "El diseño de impuestos debe considerar tanto recaudación como eficiencia",
                "Impuestos sobre bienes con demanda/oferta inelástica son menos distorsionantes"
              ]
            },
            {
              subtitulo: "Implicaciones para la Política Fiscal",
              implicaciones: [
                "Preferir impuestos amplios y bajos sobre impuestos estrechos y altos",
                "Considerar elasticidades al elegir qué gravar",
                "Balancear objetivos de recaudación, eficiencia y equidad",
                "Reconocer que todos los impuestos tienen costos de eficiencia"
              ]
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Pérdida de Peso Muerto (Aproximación)",
        formula: "PPM = (1/2) × t × ΔQ",
        descripcion: "Donde t es el impuesto por unidad y ΔQ es la reducción en cantidad",
        ejemplo: "Impuesto de $2 que reduce cantidad en 100 unidades: PPM = (1/2) × $2 × 100 = $100"
      },
      {
        nombre: "Pérdida de Peso Muerto (Exacta)",
        formula: "PPM = (1/2) × t² × (Ed × Es)/(Ed + Es) × Q₀/P₀",
        descripcion: "Donde Ed y Es son elasticidades de demanda y oferta",
        ejemplo: "Considera elasticidades para cálculo preciso de PPM"
      },
      {
        nombre: "Recaudación Fiscal",
        formula: "R = t × Q",
        descripcion: "Impuesto por unidad multiplicado por cantidad vendida",
        ejemplo: "Impuesto de $3 con 1000 unidades vendidas: R = $3 × 1000 = $3000"
      },
      {
        nombre: "Incidencia Fiscal",
        formula: "Proporción pagada por compradores = Es/(Ed + Es)",
        descripcion: "La elasticidad relativa determina quién paga más del impuesto",
        ejemplo: "Si Es = Ed, compradores y vendedores comparten el impuesto igualmente"
      }
    ],
    conceptosClave: [
      "Cuña fiscal",
      "Pérdida de peso muerto",
      "Incidencia fiscal",
      "Recaudación fiscal",
      "Elasticidad e impuestos",
      "Curva de Laffer",
      "Eficiencia fiscal",
      "Distorsión económica",
      "Costo social de impuestos",
      "Diseño de impuestos"
    ],
    ejemplosReales: [
      {
        titulo: "Impuesto a la Gasolina",
        descripcion: "Los impuestos a la gasolina tienen pérdida de peso muerto relativamente pequeña debido a la demanda inelástica, pero generan recaudación sustancial."
      },
      {
        titulo: "Impuesto al Lujo en EE.UU. (1991)",
        descripcion: "Impuesto a yates, aviones privados y joyas causó gran pérdida de peso muerto y poca recaudación debido a la alta elasticidad de demanda."
      },
      {
        titulo: "Impuesto al Carbono",
        descripcion: "Diseñado para internalizar externalidades ambientales, pero debe balancear objetivos ambientales con costos de eficiencia económica."
      }
    ]
  },
  9: {
    titulo: "Aplicación: comercio internacional",
    resumen: "Análisis de los efectos del comercio internacional en el bienestar económico nacional.",
    duracion: "60 min",
    dificultad: "Avanzado",
    objetivos: [
      "Analizar los efectos del comercio libre en el bienestar nacional",
      "Evaluar el impacto de aranceles y cuotas de importación",
      "Comprender los argumentos a favor y en contra del comercio internacional",
    ],
    contenido: {
      introduccion:
        "Si visitas cualquier tienda, encontrarás bienes de todo el mundo: camisas de China, café de Colombia, electrónicos de Japón. El comercio internacional puede mejorar el bienestar de todos los países, pero también crea ganadores y perdedores dentro de cada país. En este capítulo usamos las herramientas del excedente del consumidor y del productor para examinar las ganancias y pérdidas del comercio internacional.",
      secciones: [
        {
          titulo: "Los Determinantes del Comercio",
          contenido: [
            {
              subtitulo: "El Equilibrio sin Comercio Internacional",
              descripcion: "Antes de analizar el comercio, debemos entender el equilibrio en una economía cerrada.",
              caracteristicas: [
                "El precio doméstico se determina por la intersección de oferta y demanda domésticas",
                "No hay importaciones ni exportaciones",
                "Los consumidores domésticos solo pueden comprar de productores domésticos"
              ],
              ejemplo: {
                pais: "Aisladia",
                bien: "Acero",
                precioEquilibrio: "$500 por tonelada",
                cantidad: "100,000 toneladas"
              }
            },
            {
              subtitulo: "El Precio Mundial y la Ventaja Comparativa",
              descripcion: "El precio mundial de un bien es el precio que prevalece en los mercados mundiales.",
              determinacion: [
                "Se determina por la oferta y demanda mundial",
                "Los países individuales (pequeños) son tomadores de precios",
                "Refleja los costos de oportunidad relativos globales"
              ],
              ventajaComparativa: [
                "Si precio doméstico < precio mundial → ventaja comparativa → exportador",
                "Si precio doméstico > precio mundial → desventaja comparativa → importador",
                "La diferencia de precios indica la magnitud de la ventaja/desventaja"
              ]
            }
          ]
        },
        {
          titulo: "Los Ganadores y Perdedores del Comercio",
          contenido: [
            {
              subtitulo: "Las Ganancias y Pérdidas de un País Exportador",
              descripcion: "Cuando un país se convierte en exportador, el precio doméstico sube al nivel mundial.",
              efectos: [
                {
                  grupo: "Productores Domésticos",
                  efecto: "Ganan",
                  razon: "Reciben precio más alto por su producto",
                  medida: "Aumento en excedente del productor"
                },
                {
                  grupo: "Consumidores Domésticos", 
                  efecto: "Pierden",
                  razon: "Pagan precio más alto por el bien",
                  medida: "Reducción en excedente del consumidor"
                },
                {
                  grupo: "País en Total",
                  efecto: "Gana",
                  razon: "Las ganancias de productores > pérdidas de consumidores",
                  medida: "Aumento neto en excedente total"
                }
              ],
              calculo: "Ganancia neta = Área entre precio doméstico y mundial × cantidad exportada"
            },
            {
              subtitulo: "Las Ganancias y Pérdidas de un País Importador",
              descripcion: "Cuando un país se convierte en importador, el precio doméstico baja al nivel mundial.",
              efectos: [
                {
                  grupo: "Consumidores Domésticos",
                  efecto: "Ganan", 
                  razon: "Pagan precio más bajo por el bien",
                  medida: "Aumento en excedente del consumidor"
                },
                {
                  grupo: "Productores Domésticos",
                  efecto: "Pierden",
                  razon: "Reciben precio más bajo por su producto",
                  medida: "Reducción en excedente del productor"
                },
                {
                  grupo: "País en Total",
                  efecto: "Gana",
                  razon: "Las ganancias de consumidores > pérdidas de productores",
                  medida: "Aumento neto en excedente total"
                }
              ],
              calculo: "Ganancia neta = Área entre precio mundial y doméstico × cantidad importada"
            },
            {
              subtitulo: "Los Efectos de un Arancel",
              descripcion: "Un arancel es un impuesto sobre bienes producidos en el extranjero y vendidos domésticament.",
              mecanismo: [
                "Aumenta el precio doméstico por encima del precio mundial",
                "Reduce la cantidad importada",
                "Protege a productores domésticos de la competencia extranjera"
              ],
              efectos: [
                "Consumidores: Pierden (mayor precio, menor cantidad)",
                "Productores domésticos: Ganan (mayor precio)",
                "Gobierno: Gana (recaudación arancelaria)",
                "Sociedad: Pierde neto (pérdida de peso muerto)"
              ],
              perdidaPesoMuerto: [
                "Triángulo de consumo: Consumidores que no compran debido al mayor precio",
                "Triángulo de producción: Producción doméstica ineficiente que reemplaza importaciones"
              ]
            },
            {
              subtitulo: "Los Efectos de una Cuota de Importación",
              descripcion: "Una cuota de importación es un límite en la cantidad de un bien que puede ser importado.",
              mecanismo: [
                "Restringe directamente la cantidad importada",
                "Aumenta el precio doméstico",
                "Crea escasez artificial del bien"
              ],
              efectosVsArancel: [
                "Similares efectos en precios y cantidades",
                "Diferencia: Las 'rentas de cuota' van a importadores, no al gobierno",
                "Misma pérdida de peso muerto que un arancel equivalente"
              ],
              rentasDeCuota: "Beneficios que obtienen quienes tienen licencias de importación debido al precio más alto"
            }
          ]
        },
        {
          titulo: "Los Argumentos a Favor de Restringir el Comercio",
          contenido: [
            {
              subtitulo: "El Argumento de Empleos",
              argumento: "El comercio libre destruye empleos domésticos",
              evaluacion: [
                "Parcialmente cierto: Algunos empleos se pierden en industrias que compiten con importaciones",
                "Pero: Se crean empleos en industrias exportadoras",
                "El comercio cambia la composición del empleo, no necesariamente el nivel total",
                "Los trabajadores pueden necesitar reentrenamiento y tiempo para ajustarse"
              ],
              contraargumento: "Restringir comercio para salvar empleos es costoso - cada empleo 'salvado' puede costar más que el salario del trabajador"
            },
            {
              subtitulo: "El Argumento de Seguridad Nacional",
              argumento: "Ciertos sectores son vitales para la seguridad nacional y deben protegerse",
              evaluacion: [
                "Válido para industrias verdaderamente críticas (defensa, energía)",
                "Pero: A menudo usado como excusa por industrias que buscan protección",
                "Alternativas: Subsidios directos, reservas estratégicas",
                "Debe balancearse costo económico vs beneficio de seguridad"
              ],
              ejemplos: ["Industria de defensa", "Producción de alimentos básicos", "Tecnologías críticas"]
            },
            {
              subtitulo: "El Argumento de la Industria Naciente",
              argumento: "Nuevas industrias necesitan protección temporal hasta volverse competitivas",
              evaluacion: [
                "Teóricamente válido si hay externalidades de aprendizaje",
                "Problemas: Difícil identificar industrias 'ganadoras'",
                "Protección temporal tiende a volverse permanente",
                "Subsidios pueden ser más eficientes que aranceles"
              ],
              condiciones: [
                "La industria debe tener potencial de ventaja comparativa futura",
                "Debe haber externalidades que el mercado no captura",
                "La protección debe ser temporal y decreciente"
              ]
            },
            {
              subtitulo: "El Argumento de Competencia Desleal",
              argumento: "El comercio libre es deseable solo si todos los países juegan con las mismas reglas",
              formas: [
                "Dumping: Vender por debajo del costo de producción",
                "Subsidios gubernamentales a exportadores",
                "Estándares laborales o ambientales más bajos"
              ],
              evaluacion: [
                "Dumping puede beneficiar a consumidores domésticos",
                "Subsidios extranjeros son como regalos a consumidores domésticos",
                "Estándares diferentes pueden reflejar diferentes niveles de desarrollo",
                "Retaliación puede empeorar la situación para todos"
              ]
            },
            {
              subtitulo: "Protección como Moneda de Cambio",
              argumento: "Amenazar con restricciones comerciales puede abrir mercados extranjeros",
              evaluacion: [
                "Puede funcionar si la amenaza es creíble",
                "Riesgo de guerra comercial si otros países retaliaran",
                "Consumidores domésticos pagan el costo mientras se negocia",
                "Éxito depende del poder de negociación relativo"
              ],
              ejemplos: ["Negociaciones de la OMC", "Acuerdos comerciales bilaterales", "Disputas comerciales"]
            }
          ]
        },
        {
          titulo: "Conclusión",
          contenido: [
            {
              subtitulo: "Los Beneficios del Comercio Internacional",
              beneficios: [
                "Permite especialización según ventaja comparativa",
                "Aumenta la variedad de bienes disponibles",
                "Promueve competencia e innovación",
                "Permite economías de escala",
                "Facilita transferencia de tecnología"
              ]
            },
            {
              subtitulo: "Los Costos del Proteccionismo",
              costos: [
                "Pérdida de peso muerto por aranceles y cuotas",
                "Precios más altos para consumidores",
                "Menor competencia e innovación",
                "Represalias de otros países",
                "Preservación de industrias ineficientes"
              ]
            },
            {
              subtitulo: "El Papel de las Políticas Complementarias",
              politicas: [
                "Programas de reentrenamiento para trabajadores desplazados",
                "Seguro de desempleo extendido",
                "Asistencia para reubicación",
                "Inversión en educación y infraestructura",
                "Políticas para facilitar ajuste económico"
              ]
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Ganancia del Comercio (País Exportador)",
        formula: "Ganancia = (1/2) × (P_mundial - P_doméstico) × Q_exportada",
        descripcion: "Área triangular que representa la ganancia neta del comercio",
        ejemplo: "Si precio mundial $600 > precio doméstico $500, y exporta 1000 unidades: Ganancia = (1/2) × $100 × 1000 = $50,000"
      },
      {
        nombre: "Ganancia del Comercio (País Importador)",
        formula: "Ganancia = (1/2) × (P_doméstico - P_mundial) × Q_importada",
        descripcion: "Área triangular que representa la ganancia neta del comercio",
        ejemplo: "Si precio doméstico $800 > precio mundial $600, e importa 2000 unidades: Ganancia = (1/2) × $200 × 2000 = $200,000"
      },
      {
        nombre: "Pérdida de Peso Muerto por Arancel",
        formula: "PPM = (1/2) × t × (ΔQ_consumo + ΔQ_producción)",
        descripcion: "Suma de triángulos de consumo y producción",
        ejemplo: "Arancel $50 reduce consumo en 100 y aumenta producción doméstica en 80: PPM = (1/2) × $50 × (100 + 80) = $4,500"
      },
      {
        nombre: "Recaudación Arancelaria",
        formula: "Recaudación = t × Q_importada",
        descripcion: "Arancel por unidad multiplicado por cantidad importada",
        ejemplo: "Arancel $30 con 500 unidades importadas: Recaudación = $30 × 500 = $15,000"
      }
    ],
    conceptosClave: [
      "Precio mundial",
      "Ventaja comparativa",
      "Ganancias del comercio",
      "Arancel",
      "Cuota de importación",
      "Pérdida de peso muerto",
      "Rentas de cuota",
      "Proteccionismo",
      "Dumping",
      "Industria naciente",
      "Seguridad nacional",
      "Competencia desleal"
    ],
    ejemplosReales: [
      {
        titulo: "NAFTA/USMCA",
        descripcion: "El tratado de libre comercio entre EE.UU., Canadá y México eliminó la mayoría de aranceles, aumentando el comercio y la especialización, pero también causando ajustes en ciertas industrias."
      },
      {
        titulo: "Guerra Comercial EE.UU.-China (2018-2020)",
        descripcion: "Aranceles recíprocos entre las dos economías más grandes causaron pérdidas de peso muerto significativas y disrupciones en cadenas de suministro globales."
      },
      {
        titulo: "Protección Agrícola en Europa",
        descripcion: "La Política Agrícola Común de la UE protege a agricultores europeos pero resulta en precios más altos para consumidores y distorsiones en mercados mundiales."
      }
    ]
  }
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

          {/* Contenido para otros capítulos */}
          {(params.id === "2" || params.id === "3" || params.id === "7" || params.id === "8" || params.id === "9") && capitulo.contenido.secciones && (
            <div className="space-y-8">
              {capitulo.contenido.secciones.map((seccion, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-700">{seccion.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {seccion.contenido.map((item, idx) => (
                        <div key={idx} className="border-l-4 border-blue-200 pl-6">
                          <div className="bg-gradient-to-r from-blue-50 to-violet-50 p-6 rounded-2xl">
                            <h4 className="font-bold text-xl mb-4 text-slate-800">{item.subtitulo}</h4>
                            <p className="text-slate-700 mb-4 text-lg leading-relaxed">{item.descripcion}</p>
                            
                            {/* Renderizar contenido específico según el tipo */}
                            {item.puntos && (
                              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                {item.puntos.map((punto, pIdx) => (
                                  <li key={pIdx}>{punto}</li>
                                ))}
                              </ul>
                            )}

                            {item.ejemplo && typeof item.ejemplo === 'string' && (
                              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mb-4">
                                <h5 className="font-semibold text-amber-800 mb-2">Ejemplo:</h5>
                                <p className="text-amber-700 text-sm">{item.ejemplo}</p>
                              </div>
                            )}

                            {/* Contenido específico para diferentes tipos de items */}
                            {item.efectos && (
                              <div className="grid md:grid-cols-3 gap-4 mb-4">
                                {item.efectos.map((efecto, eIdx) => (
                                  <div key={eIdx} className="bg-white p-4 rounded-xl border">
                                    <h5 className="font-semibold text-slate-800 mb-2">{efecto.grupo}</h5>
                                    <p className={`text-sm font-medium mb-1 ${efecto.efecto === 'Ganan' ? 'text-green-600' : 'text-red-600'}`}>
                                      {efecto.efecto}
                                    </p>
                                    <p className="text-slate-600 text-xs">{efecto.razon}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {item.principios && (
                              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                {item.principios.map((principio, pIdx) => (
                                  <li key={pIdx}>{principio}</li>
                                ))}
                              </ul>
                            )}
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