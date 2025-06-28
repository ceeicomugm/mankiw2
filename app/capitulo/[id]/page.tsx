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
  7: {
    titulo: "Consumidores, productores y eficiencia de los mercados",
    resumen: "Análisis del bienestar económico a través del excedente del consumidor y productor, y las condiciones para la eficiencia de mercado.",
    duracion: "50 min",
    dificultad: "Intermedio",
    objetivos: [
      "Comprender y calcular el excedente del consumidor y del productor",
      "Analizar las condiciones para la eficiencia económica",
      "Evaluar el papel de los mercados en la asignación de recursos",
      "Identificar las principales fallas de mercado"
    ],
    contenido: {
      introduccion: "El análisis del bienestar económico nos permite evaluar cómo los mercados asignan recursos y distribuyen beneficios entre consumidores y productores. Este capítulo introduce conceptos fundamentales para entender cuándo los mercados funcionan eficientemente y cuándo fallan.",
      secciones: [
        {
          titulo: "Excedente del Consumidor",
          contenido: [
            {
              subtitulo: "Definición y Concepto",
              descripcion: "El excedente del consumidor es la diferencia entre lo que los consumidores están dispuestos a pagar por un bien y lo que realmente pagan. Representa el beneficio neto que obtienen los consumidores de participar en el mercado.",
              formula: "EC = ∫[0 to Q*] [P_demanda(q) - P*] dq",
              explicacion: "Donde P* es el precio de mercado, Q* es la cantidad de equilibrio, y P_demanda(q) es la función inversa de demanda."
            },
            {
              subtitulo: "Disposición a Pagar",
              descripcion: "La disposición a pagar refleja el valor que cada consumidor asigna al bien. La curva de demanda muestra la disposición a pagar marginal para cada unidad.",
              ejemplo: "Si estás dispuesto a pagar $50 por una camiseta pero la compras por $30, tu excedente del consumidor es $20."
            },
            {
              subtitulo: "Cálculo Gráfico",
              descripcion: "Gráficamente, el excedente del consumidor es el área bajo la curva de demanda y por encima del precio de mercado, hasta la cantidad consumida.",
              aplicacion: "En un mercado lineal con demanda P = a - bQ, el excedente del consumidor es EC = ½ × base × altura = ½ × Q* × (a - P*)"
            }
          ]
        },
        {
          titulo: "Excedente del Productor",
          contenido: [
            {
              subtitulo: "Definición y Concepto",
              descripcion: "El excedente del productor es la diferencia entre el precio que reciben los productores y el costo mínimo al que están dispuestos a vender. Representa el beneficio neto de los productores.",
              formula: "EP = ∫[0 to Q*] [P* - P_oferta(q)] dq",
              explicacion: "Donde P_oferta(q) es la función inversa de oferta que representa el costo marginal de producción."
            },
            {
              subtitulo: "Costos de Producción",
              descripcion: "La curva de oferta refleja los costos marginales de producción. Cada punto indica el precio mínimo al que un productor está dispuesto a vender una unidad adicional.",
              ejemplo: "Si tu costo de producir una unidad es $20 pero la vendes por $30, tu excedente del productor es $10."
            },
            {
              subtitulo: "Cálculo Gráfico",
              descripcion: "El excedente del productor es el área por encima de la curva de oferta y por debajo del precio de mercado, hasta la cantidad producida.",
              aplicacion: "En un mercado lineal con oferta P = c + dQ, el excedente del productor es EP = ½ × Q* × (P* - c)"
            }
          ]
        },
        {
          titulo: "Eficiencia de los Mercados",
          contenido: [
            {
              subtitulo: "Planificador Social Benevolente",
              descripcion: "Un planificador social benevolente busca maximizar el bienestar total de la sociedad, que es la suma del excedente del consumidor y del productor.",
              formula: "Bienestar Total = EC + EP",
              objetivo: "Maximizar el excedente total sujeto a las restricciones de recursos y tecnología."
            },
            {
              subtitulo: "Condiciones de Eficiencia",
              descripcion: "Un mercado es eficiente cuando maximiza el excedente total. Esto ocurre cuando el valor marginal para los consumidores iguala el costo marginal de los productores.",
              condicion: "Valor Marginal = Costo Marginal",
              implicacion: "En equilibrio competitivo: Precio = Costo Marginal = Valor Marginal"
            },
            {
              subtitulo: "Teoremas del Bienestar",
              descripcion: "Primer Teorema: Todo equilibrio competitivo es eficiente en el sentido de Pareto. Segundo Teorema: Cualquier asignación eficiente puede alcanzarse como equilibrio competitivo con las transferencias apropiadas.",
              importancia: "Estos teoremas fundamentan la confianza en los mercados como mecanismos de asignación eficiente."
            }
          ]
        },
        {
          titulo: "Fallas de Mercado",
          contenido: [
            {
              subtitulo: "Poder de Mercado",
              descripcion: "Cuando empresas o consumidores pueden influir en los precios, el mercado no alcanza la eficiencia. Los monopolios restringen la producción para aumentar precios.",
              efecto: "Pérdida de peso muerto debido a la reducción de la cantidad intercambiada por debajo del nivel eficiente."
            },
            {
              subtitulo: "Externalidades",
              descripcion: "Cuando las acciones de una parte afectan el bienestar de terceros sin compensación, el mercado falla en internalizar todos los costos y beneficios.",
              ejemplos: "Contaminación (externalidad negativa), educación (externalidad positiva), investigación y desarrollo."
            },
            {
              subtitulo: "Bienes Públicos",
              descripcion: "Bienes no rivales y no excluibles que el mercado privado no provee eficientemente debido al problema del polizón (free rider).",
              ejemplos: "Defensa nacional, alumbrado público, conocimiento básico, control de enfermedades."
            },
            {
              subtitulo: "Información Asimétrica",
              descripcion: "Cuando una parte tiene más información que la otra, pueden surgir problemas de selección adversa y riesgo moral.",
              ejemplos: "Mercado de seguros, mercado de autos usados (problema de los limones), relaciones laborales."
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Excedente del Consumidor",
        formula: "EC = ½ × Q* × (P_max - P*)",
        descripcion: "Para una curva de demanda lineal, donde P_max es el precio máximo (intercepto) y P* es el precio de equilibrio.",
        ejemplo: "Con demanda P = 100 - 2Q y precio de equilibrio P* = 60, Q* = 20: EC = ½ × 20 × (100 - 60) = 400"
      },
      {
        nombre: "Excedente del Productor",
        formula: "EP = ½ × Q* × (P* - P_min)",
        descripcion: "Para una curva de oferta lineal, donde P_min es el precio mínimo (intercepto) y P* es el precio de equilibrio.",
        ejemplo: "Con oferta P = 20 + Q y precio de equilibrio P* = 60, Q* = 40: EP = ½ × 40 × (60 - 20) = 800"
      },
      {
        nombre: "Excedente Total",
        formula: "ET = EC + EP",
        descripcion: "El bienestar total de la sociedad es la suma de los excedentes del consumidor y del productor.",
        ejemplo: "Siguiendo los ejemplos anteriores: ET = 400 + 800 = 1,200"
      },
      {
        nombre: "Condición de Eficiencia",
        formula: "VMg = CMg",
        descripcion: "La eficiencia se alcanza cuando el valor marginal para los consumidores iguala el costo marginal de los productores.",
        ejemplo: "En equilibrio competitivo, el precio refleja tanto el valor marginal como el costo marginal."
      }
    ],
    conceptosClave: [
      "Excedente del consumidor",
      "Excedente del productor",
      "Disposición a pagar",
      "Costo marginal",
      "Eficiencia de Pareto",
      "Planificador social benevolente",
      "Teoremas del bienestar",
      "Fallas de mercado",
      "Poder de mercado",
      "Externalidades",
      "Bienes públicos",
      "Información asimétrica"
    ],
    ejemplosReales: [
      {
        titulo: "Mercado de Vivienda y Excedentes",
        descripcion: "En el mercado inmobiliario, el excedente del consumidor representa la diferencia entre lo que los compradores valoran una propiedad y lo que pagan. El excedente del productor es la ganancia de constructores y vendedores."
      },
      {
        titulo: "Plataformas Digitales y Eficiencia",
        descripcion: "Amazon y otras plataformas aumentan la eficiencia del mercado al reducir costos de búsqueda y transacción, incrementando el excedente total al conectar mejor a compradores y vendedores."
      },
      {
        titulo: "Regulación de Medicamentos",
        descripcion: "La FDA regula medicamentos debido a información asimétrica entre productores y consumidores sobre seguridad y eficacia, corrigiendo una falla de mercado potencial."
      }
    ]
  },
  8: {
    titulo: "Aplicación: los costos de los impuestos",
    resumen: "Análisis de cómo los impuestos afectan el bienestar económico, la incidencia fiscal y la pérdida de peso muerto.",
    duracion: "45 min",
    dificultad: "Intermedio",
    objetivos: [
      "Analizar los efectos de los impuestos en el equilibrio de mercado",
      "Calcular la pérdida de peso muerto causada por los impuestos",
      "Comprender la incidencia fiscal y sus determinantes",
      "Evaluar el trade-off entre recaudación y eficiencia"
    ],
    contenido: {
      introduccion: "Los impuestos son necesarios para financiar el gasto público, pero crean distorsiones en los mercados que reducen el bienestar económico. Este capítulo analiza estos costos y cómo minimizarlos.",
      secciones: [
        {
          titulo: "Efectos de los Impuestos en el Equilibrio",
          contenido: [
            {
              subtitulo: "Impuesto por Unidad",
              descripcion: "Un impuesto por unidad (t) crea una cuña entre el precio que pagan los consumidores (Pc) y el precio que reciben los productores (Pp), donde Pc = Pp + t.",
              mecanismo: "El impuesto desplaza la curva de oferta hacia arriba en la cantidad del impuesto, o equivalentemente, desplaza la demanda hacia abajo."
            },
            {
              subtitulo: "Nuevo Equilibrio",
              descripcion: "El equilibrio con impuesto se caracteriza por una cantidad menor intercambiada y una cuña de precios entre compradores y vendedores.",
              formulas: [
                "Cantidad con impuesto: Qt < Q* (sin impuesto)",
                "Precio consumidores: Pc > P* (sin impuesto)", 
                "Precio productores: Pp < P* (sin impuesto)",
                "Cuña fiscal: Pc - Pp = t"
              ]
            }
          ]
        },
        {
          titulo: "Pérdida de Peso Muerto",
          contenido: [
            {
              subtitulo: "Concepto y Definición",
              descripcion: "La pérdida de peso muerto (DWL) es la reducción en el excedente total causada por el impuesto. Representa transacciones mutuamente beneficiosas que no ocurren debido a la distorsión del precio.",
              formula: "DWL = ½ × t × (Q* - Qt)",
              interpretacion: "Es el área del triángulo formado entre las curvas de oferta y demanda, desde Qt hasta Q*."
            },
            {
              subtitulo: "Determinantes de la Pérdida",
              descripcion: "La magnitud de la pérdida de peso muerto depende de la elasticidad de la oferta y demanda, y del tamaño del impuesto.",
              factores: [
                "Mayor elasticidad → Mayor pérdida de peso muerto",
                "Mayor impuesto → Mayor pérdida de peso muerto (cuadrática)",
                "Mercados más competitivos → Mayor sensibilidad a impuestos"
              ]
            },
            {
              subtitulo: "Cálculo en Mercados Lineales",
              descripcion: "En mercados con curvas lineales, la pérdida de peso muerto se calcula como el área de un triángulo.",
              ejemplo: "Con demanda P = 100 - Q y oferta P = Q, un impuesto t = 20 reduce Q de 50 a 40, creando DWL = ½ × 20 × 10 = 100."
            }
          ]
        },
        {
          titulo: "Incidencia Fiscal",
          contenido: [
            {
              subtitulo: "Definición de Incidencia",
              descripcion: "La incidencia fiscal determina quién realmente soporta la carga del impuesto, independientemente de quién lo pague legalmente al gobierno.",
              principio: "La incidencia depende de las elasticidades relativas, no de sobre quién se impone legalmente el impuesto."
            },
            {
              subtitulo: "Reglas de Incidencia",
              descripcion: "La parte del mercado con menor elasticidad (más inelástica) soporta mayor proporción del impuesto.",
              casos: [
                "Demanda perfectamente inelástica → Consumidores pagan todo el impuesto",
                "Oferta perfectamente inelástica → Productores pagan todo el impuesto",
                "Elasticidades iguales → Carga compartida igualmente"
              ]
            },
            {
              subtitulo: "Fórmula de Incidencia",
              descripcion: "La proporción del impuesto que pagan los consumidores depende de las elasticidades de oferta (Es) y demanda (Ed).",
              formula: "Proporción consumidores = Es / (Es + |Ed|)",
              ejemplo: "Si Es = 2 y |Ed| = 1, los consumidores pagan 2/3 del impuesto y los productores 1/3."
            }
          ]
        },
        {
          titulo: "Curva de Laffer",
          contenido: [
            {
              subtitulo: "Concepto y Forma",
              descripcion: "La curva de Laffer muestra la relación entre las tasas de impuestos y la recaudación fiscal total. Tiene forma de campana invertida.",
              implicaciones: [
                "Tasa 0% → Recaudación = 0",
                "Tasa 100% → Recaudación = 0 (nadie produce)",
                "Existe una tasa óptima que maximiza la recaudación"
              ]
            },
            {
              subtitulo: "Lados de la Curva",
              descripcion: "El lado izquierdo (tasas bajas) permite aumentar recaudación subiendo impuestos. El lado derecho (tasas altas) reduce recaudación al subir impuestos.",
              debate: "El debate político se centra en determinar en qué lado de la curva se encuentra la economía."
            },
            {
              subtitulo: "Factores que Afectan la Curva",
              descripcion: "La forma y posición de la curva de Laffer depende de las elasticidades de la oferta laboral y la base imponible.",
              consideraciones: "Efectos de evasión, economía informal, y respuestas de comportamiento modifican la curva."
            }
          ]
        },
        {
          titulo: "Impuestos Correctivos",
          contenido: [
            {
              subtitulo: "Impuestos Pigouvianos",
              descripcion: "Impuestos diseñados para corregir externalidades negativas, donde el impuesto iguala el costo social marginal.",
              objetivo: "Internalizar el costo externo y alcanzar la cantidad socialmente óptima."
            },
            {
              subtitulo: "Casos Especiales",
              descripcion: "En presencia de externalidades negativas, un impuesto correctivo puede aumentar el bienestar total en lugar de reducirlo.",
              ejemplos: "Impuestos al carbono, impuestos al tabaco, impuestos a la congestión vehicular."
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Pérdida de Peso Muerto",
        formula: "DWL = ½ × t × ΔQ",
        descripcion: "Donde t es el impuesto por unidad y ΔQ es la reducción en la cantidad intercambiada.",
        ejemplo: "Un impuesto de $10 que reduce las ventas en 100 unidades crea DWL = ½ × 10 × 100 = $500"
      },
      {
        nombre: "Recaudación Fiscal",
        formula: "R = t × Qt",
        descripcion: "La recaudación es el impuesto por unidad multiplicado por la cantidad vendida con impuesto.",
        ejemplo: "Con impuesto t = $5 y cantidad Qt = 200: R = 5 × 200 = $1,000"
      },
      {
        nombre: "Incidencia sobre Consumidores",
        formula: "Ic = Es / (Es + |Ed|)",
        descripcion: "Proporción del impuesto que pagan los consumidores, donde Es es elasticidad de oferta y Ed de demanda.",
        ejemplo: "Con Es = 1.5 y |Ed| = 0.5: Ic = 1.5/(1.5 + 0.5) = 0.75 (75%)"
      },
      {
        nombre: "Cambio en Precio del Consumidor",
        formula: "ΔPc = t × Es / (Es + |Ed|)",
        descripcion: "Aumento en el precio que pagan los consumidores debido al impuesto.",
        ejemplo: "Con t = $10, Es = 2, |Ed| = 1: ΔPc = 10 × 2/(2+1) = $6.67"
      }
    ],
    conceptosClave: [
      "Pérdida de peso muerto",
      "Incidencia fiscal",
      "Cuña fiscal",
      "Elasticidad e impuestos",
      "Curva de Laffer",
      "Recaudación fiscal",
      "Impuestos correctivos",
      "Impuestos pigouvianos",
      "Eficiencia vs equidad",
      "Distorsiones fiscales"
    ],
    ejemplosReales: [
      {
        titulo: "Impuestos a la Gasolina",
        descripcion: "Los impuestos a los combustibles ilustran la incidencia fiscal: debido a la demanda relativamente inelástica a corto plazo, los consumidores soportan la mayor parte del impuesto, pero también generan ingresos significativos para el gobierno."
      },
      {
        titulo: "Impuesto al Valor Agregado (IVA)",
        descripcion: "El IVA es un impuesto amplio que minimiza distorsiones al aplicarse uniformemente, pero su regresividad (afecta más a familias de bajos ingresos) genera debates sobre equidad."
      },
      {
        titulo: "Impuestos al Carbono",
        descripcion: "Los impuestos al carbono son un ejemplo de impuestos correctivos que buscan internalizar el costo ambiental de las emisiones, potencialmente mejorando el bienestar social total."
      }
    ]
  },
  9: {
    titulo: "Aplicación: comercio internacional",
    resumen: "Análisis de los efectos del comercio internacional en el bienestar, incluyendo aranceles, cuotas y argumentos para el proteccionismo.",
    duracion: "60 min",
    dificultad: "Avanzado",
    objetivos: [
      "Analizar los determinantes del comercio internacional",
      "Evaluar las ganancias del comercio para países exportadores e importadores",
      "Comprender los efectos de aranceles y cuotas en el bienestar",
      "Evaluar críticamente los argumentos para el proteccionismo"
    ],
    contenido: {
      introduccion: "El comercio internacional permite a los países especializarse según sus ventajas comparativas, generando ganancias mutuas. Sin embargo, las políticas comerciales pueden alterar estos beneficios y su distribución.",
      secciones: [
        {
          titulo: "Determinantes del Comercio",
          contenido: [
            {
              subtitulo: "Precio Mundial vs Doméstico",
              descripcion: "Un país comerciará un bien si su precio de autarquía (sin comercio) difiere del precio mundial. La dirección del comercio depende de esta comparación.",
              reglas: [
                "Si P_mundial < P_autarquía → El país importa",
                "Si P_mundial > P_autarquía → El país exporta",
                "Si P_mundial = P_autarquía → No hay comercio"
              ]
            },
            {
              subtitulo: "Ventaja Comparativa",
              descripcion: "Los países exportan bienes en los que tienen ventaja comparativa (menor costo de oportunidad relativo) e importan aquellos donde tienen desventaja comparativa.",
              fundamento: "Basado en diferencias en productividad, dotación de factores, tecnología, o preferencias."
            },
            {
              subtitulo: "Condiciones para el Comercio",
              descripcion: "El comercio es mutuamente beneficioso cuando los países tienen diferentes costos de oportunidad relativos en la producción de bienes.",
              requisito: "Los términos de intercambio deben estar entre los costos de oportunidad de ambos países."
            }
          ]
        },
        {
          titulo: "Efectos del Comercio en Países Importadores",
          contenido: [
            {
              subtitulo: "Cambios en el Mercado",
              descripcion: "Cuando un país se abre al comercio como importador, el precio doméstico baja al nivel mundial, aumentando el consumo y reduciendo la producción doméstica.",
              efectos: [
                "Precio doméstico baja: P_doméstico → P_mundial",
                "Consumo aumenta: Q_consumo > Q_autarquía",
                "Producción doméstica baja: Q_producción < Q_autarquía",
                "Importaciones = Q_consumo - Q_producción"
              ]
            },
            {
              subtitulo: "Efectos en el Bienestar",
              descripcion: "Los consumidores ganan (mayor excedente) mientras los productores domésticos pierden (menor excedente). La ganancia neta es positiva.",
              cálculo: [
                "Ganancia consumidores > Pérdida productores",
                "Ganancia neta = Área de triángulos de eficiencia",
                "Mejora en bienestar total del país"
              ]
            }
          ]
        },
        {
          titulo: "Efectos del Comercio en Países Exportadores",
          contenido: [
            {
              subtitulo: "Cambios en el Mercado",
              descripcion: "Cuando un país se abre al comercio como exportador, el precio doméstico sube al nivel mundial, reduciendo el consumo y aumentando la producción doméstica.",
              efectos: [
                "Precio doméstico sube: P_doméstico → P_mundial",
                "Producción aumenta: Q_producción > Q_autarquía",
                "Consumo doméstico baja: Q_consumo < Q_autarquía",
                "Exportaciones = Q_producción - Q_consumo"
              ]
            },
            {
              subtitulo: "Efectos en el Bienestar",
              descripcion: "Los productores domésticos ganan (mayor excedente) mientras los consumidores pierden (menor excedente). La ganancia neta es positiva.",
              resultado: "El país exportador también experimenta una mejora neta en bienestar, aunque con distribución diferente a los importadores."
            }
          ]
        },
        {
          titulo: "Aranceles",
          contenido: [
            {
              subtitulo: "Definición y Mecanismo",
              descripcion: "Un arancel es un impuesto sobre bienes importados que eleva el precio doméstico por encima del precio mundial.",
              efecto: "Precio doméstico = Precio mundial + Arancel"
            },
            {
              subtitulo: "Efectos en el Mercado",
              descripcion: "Los aranceles reducen las importaciones, aumentan la producción doméstica, reducen el consumo, y generan ingresos fiscales.",
              cambios: [
                "Reducción en importaciones",
                "Aumento en producción doméstica (protección)",
                "Reducción en consumo doméstico",
                "Recaudación fiscal = Arancel × Importaciones"
              ]
            },
            {
              subtitulo: "Efectos en el Bienestar",
              descripcion: "Los aranceles crean pérdida de peso muerto mientras redistribuyen bienestar entre grupos.",
              componentes: [
                "Pérdida consumidores (área grande)",
                "Ganancia productores (área menor)",
                "Recaudación gobierno (transferencia)",
                "Pérdida neta = Dos triángulos de peso muerto"
              ]
            },
            {
              subtitulo: "Cálculo de la Pérdida",
              descripcion: "La pérdida de peso muerto tiene dos componentes: distorsión en producción y distorsión en consumo.",
              formula: "DWL = ½ × Arancel × (Reducción importaciones) + Efectos en producción y consumo"
            }
          ]
        },
        {
          titulo: "Cuotas de Importación",
          contenido: [
            {
              subtitulo: "Definición y Funcionamiento",
              descripcion: "Una cuota es una restricción cuantitativa directa sobre la cantidad de un bien que puede importarse.",
              mecanismo: "Limita físicamente las importaciones a una cantidad específica, elevando el precio doméstico."
            },
            {
              subtitulo: "Comparación con Aranceles",
              descripcion: "Las cuotas tienen efectos similares a los aranceles en precios y cantidades, pero difieren en la distribución de beneficios.",
              diferencias: [
                "Cuotas: Licencias de importación capturan la 'renta de cuota'",
                "Aranceles: Gobierno recauda ingresos fiscales",
                "Cuotas son menos transparentes en sus efectos"
              ]
            },
            {
              subtitulo: "Efectos en el Bienestar",
              descripcion: "Las cuotas generalmente crean mayor pérdida de bienestar que aranceles equivalentes debido a la captura de rentas.",
              problema: "Las rentas de cuota pueden ir a importadores extranjeros en lugar del país importador."
            }
          ]
        },
        {
          titulo: "Argumentos para el Proteccionismo",
          contenido: [
            {
              subtitulo: "Argumento de la Industria Naciente",
              descripcion: "Proteger temporalmente industrias nuevas hasta que desarrollen economías de escala y experiencia para competir internacionalmente.",
              evaluación: "Válido en teoría, pero difícil implementar correctamente. Riesgo de protección permanente."
            },
            {
              subtitulo: "Argumento de Seguridad Nacional",
              descripcion: "Mantener capacidad productiva doméstica en sectores críticos para la seguridad nacional.",
              consideraciones: "Debe balancearse con costos económicos. Definir qué constituye 'seguridad nacional'."
            },
            {
              subtitulo: "Argumento Anti-Dumping",
              descripcion: "Proteger contra competencia 'desleal' cuando países extranjeros venden por debajo del costo.",
              problemas: "Difícil distinguir dumping real de ventaja comparativa. Puede proteger ineficiencia doméstica."
            },
            {
              subtitulo: "Argumento del Empleo",
              descripcion: "Proteger empleos domésticos de la competencia extranjera.",
              crítica: "Ignora empleos creados en sectores exportadores y efectos en consumidores. Solución costosa para desempleo."
            },
            {
              subtitulo: "Argumento de Represalia",
              descripcion: "Usar proteccionismo para presionar a otros países a reducir sus barreras comerciales.",
              riesgo: "Puede escalar a guerras comerciales que perjudican a todos los países involucrados."
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Ganancia del Comercio (Importador)",
        formula: "Ganancia = ½ × (P_autarquía - P_mundial) × (Q_comercio - Q_autarquía)",
        descripcion: "Ganancia neta en bienestar para un país que se convierte en importador.",
        ejemplo: "Si el precio baja de $50 a $40 y el consumo aumenta de 100 a 120: Ganancia = ½ × 10 × 20 = $100"
      },
      {
        nombre: "Pérdida por Arancel",
        formula: "DWL = ½ × t × (Q_sin_arancel - Q_con_arancel)",
        descripcion: "Pérdida de peso muerto causada por un arancel t.",
        ejemplo: "Arancel de $5 que reduce importaciones de 50 a 30: DWL = ½ × 5 × 20 = $50"
      },
      {
        nombre: "Recaudación Arancelaria",
        formula: "R = t × M",
        descripcion: "Ingresos fiscales del arancel, donde t es la tasa y M son las importaciones con arancel.",
        ejemplo: "Arancel de $3 por unidad con 40 unidades importadas: R = 3 × 40 = $120"
      },
      {
        nombre: "Términos de Intercambio",
        formula: "TI = (Precio exportaciones) / (Precio importaciones)",
        descripción: "Relación entre precios de exportación e importación que determina las ganancias del comercio.",
        ejemplo: "Si exportas café a $10/kg e importas trigo a $5/kg: TI = 10/5 = 2 (2 kg trigo por 1 kg café)"
      }
    ],
    conceptosClave: [
      "Ventaja comparativa",
      "Precio mundial",
      "Autarquía",
      "Ganancias del comercio",
      "Aranceles",
      "Cuotas de importación",
      "Pérdida de peso muerto",
      "Incidencia de aranceles",
      "Industria naciente",
      "Dumping",
      "Términos de intercambio",
      "Proteccionismo"
    ],
    ejemplosReales: [
      {
        titulo: "NAFTA/USMCA y Comercio Automotriz",
        descripcion: "El tratado de libre comercio de América del Norte eliminó aranceles automotrices, permitiendo especialización: México en ensamblaje, EE.UU. en componentes de alta tecnología, generando ganancias para ambos países."
      },
      {
        titulo: "Guerra Comercial EE.UU.-China 2018-2020",
        descripcion: "Los aranceles mutuos entre EE.UU. y China ilustran cómo las políticas proteccionistas pueden escalar, creando pérdidas de bienestar significativas para ambos países y disrupciones en cadenas globales de suministro."
      },
      {
        titulo: "Protección Agrícola en la Unión Europea",
        descripcion: "La Política Agrícola Común (PAC) de la UE protege a agricultores europeos mediante subsidios y aranceles, pero a costa de consumidores europeos y productores agrícolas eficientes en países en desarrollo."
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

          {/* Contenido principal - Los 10 principios para capítulo 1 */}
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

          {/* Contenido principal - Secciones para capítulos 7, 8, 9 */}
          {(params.id === "7" || params.id === "8" || params.id === "9") && capitulo.contenido.secciones && (
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

                            {/* Fórmulas */}
                            {item.formula && (
                              <div className="bg-white p-4 rounded-xl border-2 border-violet-200 mb-4">
                                <div className="font-mono text-lg text-violet-700 text-center mb-2">{item.formula}</div>
                                {item.explicacion && (
                                  <p className="text-sm text-slate-600 text-center">{item.explicacion}</p>
                                )}
                              </div>
                            )}

                            {/* Ejemplos */}
                            {item.ejemplo && (
                              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mb-4">
                                <h5 className="font-semibold text-amber-800 mb-2">Ejemplo:</h5>
                                <p className="text-amber-700 text-sm leading-relaxed">{item.ejemplo}</p>
                              </div>
                            )}

                            {/* Aplicaciones */}
                            {item.aplicacion && (
                              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 mb-4">
                                <h5 className="font-semibold text-emerald-800 mb-2">Aplicación:</h5>
                                <p className="text-emerald-700 text-sm leading-relaxed">{item.aplicacion}</p>
                              </div>
                            )}

                            {/* Listas de puntos */}
                            {item.factores && (
                              <div className="bg-gray-50 p-4 rounded-xl">
                                <h5 className="font-semibold text-gray-800 mb-2">Factores clave:</h5>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                  {item.factores.map((factor, i) => (
                                    <li key={i}>{factor}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.efectos && (
                              <div className="bg-blue-50 p-4 rounded-xl">
                                <h5 className="font-semibold text-blue-800 mb-2">Efectos:</h5>
                                <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                                  {item.efectos.map((efecto, i) => (
                                    <li key={i}>{efecto}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.reglas && (
                              <div className="bg-green-50 p-4 rounded-xl">
                                <h5 className="font-semibold text-green-800 mb-2">Reglas:</h5>
                                <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                                  {item.reglas.map((regla, i) => (
                                    <li key={i}>{regla}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.casos && (
                              <div className="bg-purple-50 p-4 rounded-xl">
                                <h5 className="font-semibold text-purple-800 mb-2">Casos especiales:</h5>
                                <ul className="list-disc list-inside space-y-1 text-purple-700 text-sm">
                                  {item.casos.map((caso, i) => (
                                    <li key={i}>{caso}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.formulas && (
                              <div className="bg-violet-50 p-4 rounded-xl">
                                <h5 className="font-semibold text-violet-800 mb-2">Fórmulas relacionadas:</h5>
                                <ul className="list-disc list-inside space-y-1 text-violet-700 text-sm font-mono">
                                  {item.formulas.map((formula, i) => (
                                    <li key={i}>{formula}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.implicaciones && (
                              <div className="bg-orange-50 p-4 rounded-xl">
                                <h5 className="font-semibold text-orange-800 mb-2">Implicaciones:</h5>
                                <ul className="list-disc list-inside space-y-1 text-orange-700 text-sm">
                                  {item.implicaciones.map((implicacion, i) => (
                                    <li key={i}>{implicacion}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.cambios && (
                              <div className="bg-indigo-50 p-4 rounded-xl">
                                <h5 className="font-semibold text-indigo-800 mb-2">Cambios en el mercado:</h5>
                                <ul className="list-disc list-inside space-y-1 text-indigo-700 text-sm">
                                  {item.cambios.map((cambio, i) => (
                                    <li key={i}>{cambio}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.componentes && (
                              <div className="bg-teal-50 p-4 rounded-xl">
                                <h5 className="font-semibold text-teal-800 mb-2">Componentes:</h5>
                                <ul className="list-disc list-inside space-y-1 text-teal-700 text-sm">
                                  {item.componentes.map((componente, i) => (
                                    <li key={i}>{componente}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.diferencias && (
                              <div className="bg-pink-50 p-4 rounded-xl">
                                <h5 className="font-semibold text-pink-800 mb-2">Diferencias clave:</h5>
                                <ul className="list-disc list-inside space-y-1 text-pink-700 text-sm">
                                  {item.diferencias.map((diferencia, i) => (
                                    <li key={i}>{diferencia}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Campos de texto adicionales */}
                            {item.objetivo && (
                              <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                                <p className="text-sm text-blue-800"><strong>Objetivo:</strong> {item.objetivo}</p>
                              </div>
                            )}

                            {item.condicion && (
                              <div className="bg-green-50 p-3 rounded-xl border border-green-200">
                                <p className="text-sm text-green-800"><strong>Condición:</strong> {item.condicion}</p>
                              </div>
                            )}

                            {item.implicacion && (
                              <div className="bg-purple-50 p-3 rounded-xl border border-purple-200">
                                <p className="text-sm text-purple-800"><strong>Implicación:</strong> {item.implicacion}</p>
                              </div>
                            )}

                            {item.importancia && (
                              <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
                                <p className="text-sm text-amber-800"><strong>Importancia:</strong> {item.importancia}</p>
                              </div>
                            )}

                            {item.efecto && (
                              <div className="bg-red-50 p-3 rounded-xl border border-red-200">
                                <p className="text-sm text-red-800"><strong>Efecto:</strong> {item.efecto}</p>
                              </div>
                            )}

                            {item.ejemplos && (
                              <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                                <p className="text-sm text-gray-800"><strong>Ejemplos:</strong> {item.ejemplos}</p>
                              </div>
                            )}

                            {item.mecanismo && (
                              <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-200">
                                <p className="text-sm text-indigo-800"><strong>Mecanismo:</strong> {item.mecanismo}</p>
                              </div>
                            )}

                            {item.resultado && (
                              <div className="bg-teal-50 p-3 rounded-xl border border-teal-200">
                                <p className="text-sm text-teal-800"><strong>Resultado:</strong> {item.resultado}</p>
                              </div>
                            )}

                            {item.fundamento && (
                              <div className="bg-cyan-50 p-3 rounded-xl border border-cyan-200">
                                <p className="text-sm text-cyan-800"><strong>Fundamento:</strong> {item.fundamento}</p>
                              </div>
                            )}

                            {item.requisito && (
                              <div className="bg-lime-50 p-3 rounded-xl border border-lime-200">
                                <p className="text-sm text-lime-800"><strong>Requisito:</strong> {item.requisito}</p>
                              </div>
                            )}

                            {item.cálculo && (
                              <div className="bg-violet-50 p-3 rounded-xl border border-violet-200">
                                <p className="text-sm text-violet-800"><strong>Cálculo:</strong></p>
                                <ul className="list-disc list-inside mt-1 space-y-1 text-violet-700 text-sm">
                                  {item.cálculo.map((calc, i) => (
                                    <li key={i}>{calc}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.principio && (
                              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                                <p className="text-sm text-emerald-800"><strong>Principio:</strong> {item.principio}</p>
                              </div>
                            )}

                            {item.debate && (
                              <div className="bg-orange-50 p-3 rounded-xl border border-orange-200">
                                <p className="text-sm text-orange-800"><strong>Debate:</strong> {item.debate}</p>
                              </div>
                            )}

                            {item.consideraciones && (
                              <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                                <p className="text-sm text-yellow-800"><strong>Consideraciones:</strong> {item.consideraciones}</p>
                              </div>
                            )}

                            {item.problemas && (
                              <div className="bg-red-50 p-3 rounded-xl border border-red-200">
                                <p className="text-sm text-red-800"><strong>Problemas:</strong> {item.problemas}</p>
                              </div>
                            )}

                            {item.crítica && (
                              <div className="bg-pink-50 p-3 rounded-xl border border-pink-200">
                                <p className="text-sm text-pink-800"><strong>Crítica:</strong> {item.crítica}</p>
                              </div>
                            )}

                            {item.riesgo && (
                              <div className="bg-red-50 p-3 rounded-xl border border-red-200">
                                <p className="text-sm text-red-800"><strong>Riesgo:</strong> {item.riesgo}</p>
                              </div>
                            )}

                            {item.evaluación && (
                              <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                                <p className="text-sm text-blue-800"><strong>Evaluación:</strong> {item.evaluación}</p>
                              </div>
                            )}

                            {item.problema && (
                              <div className="bg-red-50 p-3 rounded-xl border border-red-200">
                                <p className="text-sm text-red-800"><strong>Problema:</strong> {item.problema}</p>
                              </div>
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