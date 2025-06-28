import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen, Calculator, BarChart3, CheckCircle, Clock, Users, Globe, ArrowRight, TrendingUp, Target, DollarSign, AlertTriangle } from "lucide-react"
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
      "Interpretar modelos económicos básicos como la FPP y el flujo circular",
    ],
    contenido: {
      introduccion:
        "Los economistas intentan abordar su tema de estudio con la objetividad de un científico. Como todos los científicos, hacen supuestos apropiados y construyen modelos simplificados para comprender el mundo que los rodea. Dos modelos simples son especialmente útiles: el diagrama de flujo circular y la frontera de posibilidades de producción.",
      secciones: [
        {
          titulo: "El Economista como Científico",
          contenido: [
            {
              subtitulo: "El Método Científico",
              descripcion: "Los economistas siguen el método científico: observan, formulan teorías y recopilan datos para verificar o refutar sus teorías.",
              puntosClave: [
                "Observación de fenómenos económicos",
                "Formulación de hipótesis",
                "Recopilación y análisis de datos",
                "Verificación o refutación de teorías"
              ]
            },
            {
              subtitulo: "Supuestos en Economía",
              descripcion: "Los economistas hacen supuestos para simplificar el complejo mundo real y enfocarse en lo que realmente importa.",
              puntosClave: [
                "Los supuestos simplifican la realidad",
                "Permiten enfocarse en relaciones importantes",
                "Diferentes supuestos para diferentes propósitos",
                "Ejemplo: 'Ceteris paribus' (todo lo demás constante)"
              ]
            }
          ]
        },
        {
          titulo: "Modelos Económicos",
          contenido: [
            {
              subtitulo: "¿Qué son los Modelos?",
              descripcion: "Los modelos económicos son representaciones simplificadas de la realidad que nos ayudan a entender fenómenos complejos.",
              puntosClave: [
                "Simplifican la realidad compleja",
                "Se enfocan en relaciones clave",
                "Permiten hacer predicciones",
                "Son herramientas, no la realidad misma"
              ]
            },
            {
              subtitulo: "Primer Modelo: Diagrama de Flujo Circular",
              descripcion: "Muestra cómo el dinero fluye a través de los mercados entre hogares y empresas.",
              puntosClave: [
                "Hogares: propietarios de factores de producción",
                "Empresas: productores de bienes y servicios",
                "Mercado de factores: donde se venden trabajo, tierra y capital",
                "Mercado de bienes: donde se venden productos y servicios",
                "Flujos reales vs flujos monetarios"
              ]
            },
            {
              subtitulo: "Segundo Modelo: Frontera de Posibilidades de Producción (FPP)",
              descripcion: "Muestra las combinaciones de producción que una economía puede lograr dados sus factores de producción y tecnología.",
              puntosClave: [
                "Representa la escasez y el costo de oportunidad",
                "Puntos sobre la frontera: eficiencia productiva",
                "Puntos dentro de la frontera: ineficiencia",
                "Puntos fuera de la frontera: inalcanzables",
                "La forma cóncava refleja costos de oportunidad crecientes"
              ]
            }
          ]
        },
        {
          titulo: "Microeconomía y Macroeconomía",
          contenido: [
            {
              subtitulo: "Microeconomía",
              descripcion: "Estudia cómo los hogares y las empresas toman decisiones y cómo interactúan en los mercados.",
              puntosClave: [
                "Decisiones individuales de consumo",
                "Decisiones empresariales de producción",
                "Funcionamiento de mercados específicos",
                "Formación de precios individuales"
              ]
            },
            {
              subtitulo: "Macroeconomía",
              descripcion: "Estudia los fenómenos que afectan a toda la economía, incluyendo inflación, desempleo y crecimiento económico.",
              puntosClave: [
                "Nivel general de precios (inflación)",
                "Desempleo total en la economía",
                "Crecimiento económico (PIB)",
                "Políticas monetarias y fiscales"
              ]
            }
          ]
        },
        {
          titulo: "Economía Positiva vs Normativa",
          contenido: [
            {
              subtitulo: "Declaraciones Positivas",
              descripcion: "Describen el mundo como es. Son afirmaciones sobre hechos que pueden ser confirmadas o refutadas.",
              puntosClave: [
                "Describen 'lo que es'",
                "Pueden ser verificadas con datos",
                "Son objetivas",
                "Ejemplo: 'El desempleo aumentó 2% este año'"
              ]
            },
            {
              subtitulo: "Declaraciones Normativas",
              descripcion: "Describen cómo debería ser el mundo. Son afirmaciones sobre valores y juicios.",
              puntosClave: [
                "Describen 'lo que debería ser'",
                "Involucran juicios de valor",
                "Son subjetivas",
                "Ejemplo: 'El gobierno debería reducir el desempleo'"
              ]
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Frontera de Posibilidades de Producción",
        formula: "Y = f(X) donde Y + X ≤ Recursos Totales",
        descripcion: "Muestra las combinaciones máximas de dos bienes que se pueden producir con recursos limitados.",
        ejemplo: "Si una economía puede producir 100 computadoras O 50 autos, la FPP muestra todas las combinaciones posibles.",
        grafico: "Curva cóncava que muestra el trade-off entre dos bienes"
      },
      {
        nombre: "Costo de Oportunidad en la FPP",
        formula: "CO = ΔY / ΔX",
        descripcion: "El costo de oportunidad es la pendiente de la FPP en cualquier punto.",
        ejemplo: "Si para producir 10 computadoras más hay que sacrificar 5 autos, CO = 5/10 = 0.5 autos por computadora.",
        grafico: "La pendiente de la FPP representa el costo de oportunidad"
      },
      {
        nombre: "Eficiencia Productiva",
        formula: "Punto sobre la FPP",
        descripcion: "Una economía es productivamente eficiente cuando opera sobre su FPP.",
        ejemplo: "Producir 60 computadoras y 20 autos cuando la FPP permite máximo esta combinación.",
        grafico: "Cualquier punto sobre la curva de la FPP"
      }
    ],
    conceptosClave: [
      "Método científico",
      "Modelos económicos",
      "Supuestos",
      "Flujo circular",
      "Frontera de posibilidades de producción",
      "Microeconomía",
      "Macroeconomía",
      "Economía positiva",
      "Economía normativa",
      "Eficiencia productiva",
      "Costo de oportunidad creciente"
    ],
    ejemplosReales: [
      {
        titulo: "FPP durante la Segunda Guerra Mundial",
        descripcion:
          "Estados Unidos tuvo que decidir entre producir bienes civiles (autos, electrodomésticos) y bienes militares (tanques, aviones). La FPP mostró este trade-off claramente.",
      },
      {
        titulo: "Flujo Circular en la Economía Digital",
        descripcion:
          "En plataformas como Amazon, los hogares compran bienes (flujo real) y pagan dinero (flujo monetario), mientras Amazon paga salarios a empleados y dividendos a accionistas.",
      },
      {
        titulo: "Economía Positiva vs Normativa en Política",
        descripcion:
          "Positiva: 'El salario mínimo de $15 reduciría el empleo en 2%'. Normativa: 'El salario mínimo debería ser $15 para ayudar a los trabajadores pobres'.",
      },
    ],
  },
  3: {
    titulo: "La interdependencia y las ganancias del comercio",
    resumen: "Ventaja absoluta, ventaja comparativa y los beneficios de la especialización y el comercio.",
    duracion: "55 min",
    dificultad: "Intermedio",
    objetivos: [
      "Distinguir entre ventaja absoluta y ventaja comparativa",
      "Calcular costos de oportunidad y determinar ventajas comparativas",
      "Explicar cómo el comercio beneficia a todas las partes involucradas",
    ],
    contenido: {
      introduccion:
        "Considera tu día típico. Te despiertas con un despertador hecho en Corea, te pones ropa hecha en China, y desayunas bananas de Honduras y café de Brasil. Antes del mediodía, ya has dependido de docenas de países. Esta interdependencia es posible porque las personas comercian entre sí. En este capítulo examinamos las ventajas del comercio.",
      secciones: [
        {
          titulo: "Una Parábola para la Economía Moderna",
          contenido: [
            {
              subtitulo: "Autosuficiencia vs Especialización",
              descripcion: "Imagina a dos personas: un ganadero que produce carne y un agricultor que produce papas. Cada uno puede elegir ser autosuficiente o especializarse y comerciar.",
              puntosClave: [
                "Autosuficiencia: cada persona produce todo lo que consume",
                "Especialización: cada persona se enfoca en lo que hace mejor",
                "El comercio permite que ambos consuman más",
                "La interdependencia puede mejorar el bienestar de todos"
              ]
            }
          ]
        },
        {
          titulo: "El Principio de la Ventaja Comparativa",
          contenido: [
            {
              subtitulo: "Ventaja Absoluta",
              descripcion: "Una persona tiene ventaja absoluta en la producción de un bien si puede producir más de ese bien que otra persona usando la misma cantidad de recursos.",
              puntosClave: [
                "Compara productividades absolutas",
                "Quien produce más con los mismos recursos",
                "No determina quién debería especializarse",
                "Ejemplo: Si María produce 10 tortas/día y Juan 6 tortas/día, María tiene ventaja absoluta"
              ]
            },
            {
              subtitulo: "Costo de Oportunidad",
              descripcion: "Para determinar la ventaja comparativa, debemos calcular el costo de oportunidad de cada bien para cada productor.",
              puntosClave: [
                "CO = lo que se sacrifica / lo que se obtiene",
                "Mide el valor de la mejor alternativa sacrificada",
                "Es la base para determinar la ventaja comparativa",
                "Ejemplo: Si María puede hacer 10 tortas O 20 panes, CO de 1 torta = 2 panes"
              ]
            },
            {
              subtitulo: "Ventaja Comparativa",
              descripcion: "Una persona tiene ventaja comparativa en la producción de un bien si puede producir ese bien con un menor costo de oportunidad que otra persona.",
              puntosClave: [
                "Compara costos de oportunidad, no productividades absolutas",
                "Quien tiene menor costo de oportunidad tiene ventaja comparativa",
                "Determina quién debería especializarse en qué",
                "Incluso quien no tiene ventaja absoluta puede tener ventaja comparativa"
              ]
            }
          ]
        },
        {
          titulo: "Aplicaciones de la Ventaja Comparativa",
          contenido: [
            {
              subtitulo: "Ganancias del Comercio",
              descripcion: "Cuando cada persona se especializa en el bien en el que tiene ventaja comparativa, el consumo total aumenta.",
              puntosClave: [
                "La especialización aumenta la producción total",
                "El comercio permite que ambas partes se beneficien",
                "Cada parte consume fuera de su FPP individual",
                "Las ganancias provienen de la especialización, no del comercio per se"
              ]
            },
            {
              subtitulo: "Términos de Intercambio",
              descripcion: "El precio al cual se intercambian los bienes debe beneficiar a ambas partes.",
              puntosClave: [
                "Debe estar entre los costos de oportunidad de ambas partes",
                "Si CO_A < precio < CO_B, ambos se benefician",
                "Determina cómo se reparten las ganancias del comercio",
                "Ejemplo: Si CO_María = 2 panes/torta y CO_Juan = 3 panes/torta, precio debe estar entre 2 y 3"
              ]
            }
          ]
        },
        {
          titulo: "Comercio Internacional",
          contenido: [
            {
              subtitulo: "Aplicación a Países",
              descripcion: "Los mismos principios se aplican al comercio entre países.",
              puntosClave: [
                "Los países se especializan según su ventaja comparativa",
                "Incluso países 'atrasados' pueden beneficiarse del comercio",
                "El comercio no es un juego de suma cero",
                "Ejemplo: Japón en electrónicos, Brasil en café"
              ]
            },
            {
              subtitulo: "Mitos sobre el Comercio",
              descripcion: "Varios mitos comunes sobre el comercio internacional son incorrectos.",
              puntosClave: [
                "Mito: El comercio es bueno solo si tu país 'gana'",
                "Realidad: Ambos países pueden ganar simultáneamente",
                "Mito: Los países ricos siempre explotan a los pobres",
                "Realidad: El comercio puede beneficiar a países de todos los niveles de desarrollo"
              ]
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Costo de Oportunidad",
        formula: "CO_X = Cantidad sacrificada de Y / Cantidad obtenida de X",
        descripcion: "Calcula cuánto de un bien se debe sacrificar para obtener una unidad adicional de otro bien.",
        ejemplo: "Si para producir 1 torta más debo sacrificar 2 panes, entonces CO_torta = 2 panes.",
        grafico: "Pendiente de la FPP individual"
      },
      {
        nombre: "Ventaja Comparativa",
        formula: "Ventaja Comparativa en X si: CO_A(X) < CO_B(X)",
        descripcion: "La persona A tiene ventaja comparativa en X si su costo de oportunidad de X es menor que el de B.",
        ejemplo: "Si CO_María(torta) = 2 panes y CO_Juan(torta) = 3 panes, María tiene ventaja comparativa en tortas.",
        grafico: "Comparación de pendientes de FPP"
      },
      {
        nombre: "Términos de Intercambio Mutuamente Beneficiosos",
        formula: "CO_A(X) < Precio_X < CO_B(X)",
        descripcion: "Para que el comercio beneficie a ambas partes, el precio debe estar entre sus costos de oportunidad.",
        ejemplo: "Si CO_María = 2 panes/torta y CO_Juan = 3 panes/torta, el precio debe estar entre 2 y 3 panes por torta.",
        grafico: "Rango de precios beneficiosos en el gráfico de intercambio"
      },
      {
        nombre: "Ganancias del Comercio",
        formula: "Consumo con comercio > Consumo sin comercio",
        descripcion: "El comercio permite consumir fuera de la FPP individual.",
        ejemplo: "Sin comercio: María consume 5 tortas y 10 panes. Con comercio: 6 tortas y 12 panes.",
        grafico: "Punto de consumo fuera de la FPP individual"
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
      "Autosuficiencia",
      "Productividad"
    ],
    ejemplosReales: [
      {
        titulo: "Comercio entre Estados Unidos y México (NAFTA/USMCA)",
        descripcion:
          "Estados Unidos se especializa en bienes intensivos en capital y tecnología (software, maquinaria), mientras México se especializa en bienes intensivos en trabajo (textiles, ensamblaje). Ambos países se benefician.",
      },
      {
        titulo: "Especialización en Silicon Valley",
        descripcion:
          "Las empresas tecnológicas se especializan: Apple en diseño, TSMC en manufactura de chips, Google en software. Esta especialización aumenta la eficiencia global.",
      },
      {
        titulo: "David Ricardo y el Comercio de Vinos",
        descripcion:
          "El economista David Ricardo usó el ejemplo de Inglaterra (textiles) y Portugal (vino) para demostrar que incluso si Portugal era mejor en ambos, el comercio beneficiaba a ambos países.",
      },
    ],
  },
  4: {
    titulo: "Las fuerzas del mercado: oferta y demanda",
    resumen: "Fundamentos de oferta, demanda y determinación de precios en mercados competitivos.",
    duracion: "60 min",
    dificultad: "Intermedio",
    objetivos: [
      "Analizar los factores que determinan la demanda de un bien",
      "Analizar los factores que determinan la oferta de un bien",
      "Explicar cómo la oferta y demanda determinan el precio y cantidad de equilibrio",
    ],
    contenido: {
      introduccion:
        "La oferta y la demanda son las fuerzas que hacen que las economías de mercado funcionen. Determinan la cantidad producida de cada bien y el precio al que se vende. Si quieres entender cómo funciona cualquier evento o política económica, debes pensar primero en cómo afectará la oferta y la demanda.",
      secciones: [
        {
          titulo: "Los Mercados y la Competencia",
          contenido: [
            {
              subtitulo: "¿Qué es un Mercado?",
              descripcion: "Un mercado es un grupo de compradores y vendedores de un bien o servicio particular.",
              puntosClave: [
                "Compradores determinan la demanda",
                "Vendedores determinan la oferta",
                "Puede ser físico (mercado de agricultores) o virtual (eBay)",
                "Los mercados toman muchas formas"
              ]
            },
            {
              subtitulo: "Competencia Perfecta",
              descripcion: "Un mercado perfectamente competitivo tiene muchos compradores y vendedores, por lo que cada uno tiene un impacto insignificante en el precio de mercado.",
              puntosClave: [
                "Muchos compradores y vendedores",
                "Los bienes son idénticos",
                "Las empresas son precio-aceptantes",
                "Libre entrada y salida del mercado",
                "Información perfecta"
              ]
            }
          ]
        },
        {
          titulo: "La Demanda",
          contenido: [
            {
              subtitulo: "La Curva de Demanda",
              descripcion: "La cantidad demandada de cualquier bien es la cantidad que los compradores están dispuestos y pueden comprar.",
              puntosClave: [
                "Relación entre precio y cantidad demandada",
                "Ley de la demanda: precio ↑, cantidad demandada ↓",
                "Pendiente negativa",
                "Ceteris paribus (todo lo demás constante)"
              ]
            },
            {
              subtitulo: "Determinantes de la Demanda",
              descripcion: "Varios factores determinan cuánto están dispuestos a comprar los consumidores a cualquier precio dado.",
              puntosClave: [
                "Ingreso (bienes normales vs inferiores)",
                "Precios de bienes relacionados (sustitutos y complementos)",
                "Gustos y preferencias",
                "Expectativas sobre el futuro",
                "Número de compradores"
              ]
            },
            {
              subtitulo: "Desplazamientos vs Movimientos",
              descripcion: "Es crucial distinguir entre movimientos a lo largo de la curva de demanda y desplazamientos de toda la curva.",
              puntosClave: [
                "Movimiento: cambio en precio del bien",
                "Desplazamiento: cambio en determinantes (excepto precio)",
                "Aumento de demanda: curva se desplaza a la derecha",
                "Disminución de demanda: curva se desplaza a la izquierda"
              ]
            }
          ]
        },
        {
          titulo: "La Oferta",
          contenido: [
            {
              subtitulo: "La Curva de Oferta",
              descripcion: "La cantidad ofrecida de cualquier bien es la cantidad que los vendedores están dispuestos y pueden vender.",
              puntosClave: [
                "Relación entre precio y cantidad ofrecida",
                "Ley de la oferta: precio ↑, cantidad ofrecida ↑",
                "Pendiente positiva",
                "Refleja costos de oportunidad crecientes"
              ]
            },
            {
              subtitulo: "Determinantes de la Oferta",
              descripcion: "Varios factores determinan cuánto están dispuestos a vender los productores a cualquier precio dado.",
              puntosClave: [
                "Precios de los insumos",
                "Tecnología",
                "Expectativas sobre precios futuros",
                "Número de vendedores",
                "Políticas gubernamentales (impuestos, subsidios)"
              ]
            }
          ]
        },
        {
          titulo: "Oferta y Demanda Juntas",
          contenido: [
            {
              subtitulo: "Equilibrio de Mercado",
              descripcion: "El equilibrio ocurre donde la curva de oferta y demanda se intersectan.",
              puntosClave: [
                "Precio de equilibrio: oferta = demanda",
                "Cantidad de equilibrio: cantidad que se intercambia",
                "Mercado se 'vacía' - no hay escasez ni excedente",
                "Tendencia natural hacia el equilibrio"
              ]
            },
            {
              subtitulo: "Exceso de Demanda y Oferta",
              descripcion: "Cuando el precio no está en equilibrio, hay presiones para que cambie.",
              puntosClave: [
                "Exceso de demanda (escasez): precio tiende a subir",
                "Exceso de oferta (excedente): precio tiende a bajar",
                "Fuerzas del mercado empujan hacia el equilibrio",
                "Ley de la oferta y demanda"
              ]
            },
            {
              subtitulo: "Análisis de Cambios en Equilibrio",
              descripcion: "Podemos predecir cómo eventos afectan el precio y cantidad de equilibrio.",
              puntosClave: [
                "Paso 1: ¿Afecta oferta, demanda, o ambas?",
                "Paso 2: ¿En qué dirección se desplaza la curva?",
                "Paso 3: Comparar equilibrios inicial y final",
                "Efectos en precio y cantidad"
              ]
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Función de Demanda Lineal",
        formula: "Qd = a - bP",
        descripcion: "Donde Qd es cantidad demandada, P es precio, 'a' es intercepto y 'b' es pendiente.",
        ejemplo: "Qd = 100 - 2P significa que cuando P = 0, Qd = 100; cuando P aumenta en $1, Qd disminuye en 2 unidades.",
        grafico: "Línea recta con pendiente negativa en gráfico P vs Q"
      },
      {
        nombre: "Función de Oferta Lineal", 
        formula: "Qs = c + dP",
        descripcion: "Donde Qs es cantidad ofrecida, P es precio, 'c' es intercepto y 'd' es pendiente.",
        ejemplo: "Qs = -20 + 3P significa que cuando P = 0, Qs = -20 (no se produce); cuando P aumenta en $1, Qs aumenta en 3 unidades.",
        grafico: "Línea recta con pendiente positiva en gráfico P vs Q"
      },
      {
        nombre: "Equilibrio de Mercado",
        formula: "Qd = Qs",
        descripcion: "En equilibrio, la cantidad demandada iguala la cantidad ofrecida.",
        ejemplo: "Si Qd = 100 - 2P y Qs = -20 + 3P, entonces 100 - 2P = -20 + 3P, resolviendo: P = 24, Q = 52.",
        grafico: "Intersección de curvas de oferta y demanda"
      },
      {
        nombre: "Exceso de Demanda",
        formula: "Exceso = Qd - Qs (cuando Qd > Qs)",
        descripcion: "Cuando el precio está por debajo del equilibrio, hay escasez.",
        ejemplo: "Si P = 20, Qd = 60 y Qs = 40, entonces hay exceso de demanda de 20 unidades.",
        grafico: "Distancia horizontal entre curvas cuando P < P*"
      },
      {
        nombre: "Exceso de Oferta",
        formula: "Exceso = Qs - Qd (cuando Qs > Qd)",
        descripcion: "Cuando el precio está por encima del equilibrio, hay excedente.",
        ejemplo: "Si P = 30, Qs = 70 y Qd = 40, entonces hay exceso de oferta de 30 unidades.",
        grafico: "Distancia horizontal entre curvas cuando P > P*"
      }
    ],
    conceptosClave: [
      "Mercado",
      "Competencia perfecta",
      "Demanda",
      "Oferta", 
      "Ley de la demanda",
      "Ley de la oferta",
      "Determinantes de demanda",
      "Determinantes de oferta",
      "Equilibrio",
      "Exceso de demanda",
      "Exceso de oferta",
      "Desplazamientos vs movimientos"
    ],
    ejemplosReales: [
      {
        titulo: "Mercado de Gasolina durante Crisis del Petróleo",
        descripcion:
          "En 1973, el embargo petrolero redujo la oferta de petróleo (desplazamiento izquierdo de oferta), causando aumento en precios de gasolina y reducción en cantidad vendida.",
      },
      {
        titulo: "Mercado de Mascarillas durante COVID-19",
        descripcion:
          "La pandemia aumentó dramáticamente la demanda de mascarillas (desplazamiento derecho) mientras la oferta inicialmente se mantuvo constante, causando escasez y precios altos.",
      },
      {
        titulo: "Mercado de Vivienda y Tasas de Interés",
        descripcion:
          "Cuando las tasas de interés bajan, es más barato financiar una casa, aumentando la demanda de viviendas y elevando los precios inmobiliarios.",
      },
    ],
  },
  5: {
    titulo: "La elasticidad y sus aplicaciones",
    resumen: "Medición de la sensibilidad de oferta y demanda ante cambios en variables económicas.",
    duracion: "65 min",
    dificultad: "Intermedio",
    objetivos: [
      "Calcular e interpretar diferentes tipos de elasticidad",
      "Analizar la relación entre elasticidad e ingreso total",
      "Aplicar conceptos de elasticidad a situaciones del mundo real",
    ],
    contenido: {
      introduccion:
        "Cuando estudiamos oferta y demanda, vimos que los consumidores compran menos cuando el precio sube, pero no discutimos cuánto menos. La elasticidad es una medida de qué tan sensible es la cantidad demandada u ofrecida a cambios en uno de sus determinantes. Es crucial para entender cómo funcionan los mercados.",
      secciones: [
        {
          titulo: "La Elasticidad Precio de la Demanda",
          contenido: [
            {
              subtitulo: "Definición y Cálculo",
              descripcion: "La elasticidad precio de la demanda mide qué tan sensible es la cantidad demandada a cambios en el precio.",
              puntosClave: [
                "Elasticidad = % cambio en cantidad / % cambio en precio",
                "Siempre es negativa (ley de la demanda)",
                "Se reporta en valor absoluto",
                "Método del punto medio para mayor precisión"
              ]
            },
            {
              subtitulo: "Interpretación de Valores",
              descripcion: "El valor de la elasticidad nos dice qué tan sensible es la demanda.",
              puntosClave: [
                "Elástica: |Ed| > 1 (muy sensible al precio)",
                "Inelástica: |Ed| < 1 (poco sensible al precio)", 
                "Unitaria: |Ed| = 1 (proporcionalmente sensible)",
                "Perfectamente elástica: |Ed| = ∞",
                "Perfectamente inelástica: |Ed| = 0"
              ]
            },
            {
              subtitulo: "Determinantes de la Elasticidad",
              descripcion: "Varios factores determinan si la demanda es elástica o inelástica.",
              puntosClave: [
                "Disponibilidad de sustitutos cercanos",
                "Necesidades vs lujos",
                "Definición del mercado (amplia vs estrecha)",
                "Horizonte temporal",
                "Proporción del ingreso gastado en el bien"
              ]
            }
          ]
        },
        {
          titulo: "Elasticidad e Ingreso Total",
          contenido: [
            {
              subtitulo: "Relación Fundamental",
              descripcion: "La elasticidad determina cómo cambios en precio afectan el ingreso total de los vendedores.",
              puntosClave: [
                "Ingreso Total = Precio × Cantidad",
                "Con demanda elástica: precio e ingreso se mueven en direcciones opuestas",
                "Con demanda inelástica: precio e ingreso se mueven en la misma dirección",
                "Con demanda unitaria: ingreso no cambia con el precio"
              ]
            },
            {
              subtitulo: "Aplicaciones Empresariales",
              descripcion: "Las empresas usan elasticidad para tomar decisiones de precios.",
              puntosClave: [
                "Si demanda es elástica: reducir precio aumenta ingresos",
                "Si demanda es inelástica: aumentar precio aumenta ingresos",
                "Maximización de ingresos en elasticidad unitaria",
                "Estrategias de discriminación de precios"
              ]
            }
          ]
        },
        {
          titulo: "Otros Tipos de Elasticidad de la Demanda",
          contenido: [
            {
              subtitulo: "Elasticidad Ingreso de la Demanda",
              descripcion: "Mide qué tan sensible es la cantidad demandada a cambios en el ingreso del consumidor.",
              puntosClave: [
                "Ei = % cambio en cantidad / % cambio en ingreso",
                "Bienes normales: Ei > 0",
                "Bienes inferiores: Ei < 0",
                "Bienes de lujo: Ei > 1",
                "Bienes necesarios: 0 < Ei < 1"
              ]
            },
            {
              subtitulo: "Elasticidad Cruzada de la Demanda",
              descripcion: "Mide qué tan sensible es la cantidad demandada de un bien a cambios en el precio de otro bien.",
              puntosClave: [
                "Exy = % cambio en cantidad de X / % cambio en precio de Y",
                "Bienes sustitutos: Exy > 0",
                "Bienes complementos: Exy < 0", 
                "Bienes independientes: Exy ≈ 0",
                "Mayor valor absoluto = mayor relación entre bienes"
              ]
            }
          ]
        },
        {
          titulo: "La Elasticidad de la Oferta",
          contenido: [
            {
              subtitulo: "Definición y Cálculo",
              descripcion: "La elasticidad precio de la oferta mide qué tan sensible es la cantidad ofrecida a cambios en el precio.",
              puntosClave: [
                "Es = % cambio en cantidad ofrecida / % cambio en precio",
                "Siempre es positiva (ley de la oferta)",
                "Elástica: Es > 1, Inelástica: Es < 1",
                "Perfectamente elástica: Es = ∞, Perfectamente inelástica: Es = 0"
              ]
            },
            {
              subtitulo: "Determinantes de la Elasticidad de Oferta",
              descripcion: "Varios factores determinan qué tan sensible es la oferta al precio.",
              puntosClave: [
                "Flexibilidad del proceso productivo",
                "Horizonte temporal (corto vs largo plazo)",
                "Disponibilidad de insumos",
                "Capacidad de almacenamiento",
                "Número de empresas en el mercado"
              ]
            }
          ]
        },
        {
          titulo: "Aplicaciones de la Elasticidad",
          contenido: [
            {
              subtitulo: "Política Fiscal",
              descripcion: "La elasticidad determina quién realmente paga los impuestos.",
              puntosClave: [
                "Incidencia fiscal depende de elasticidades relativas",
                "Lado menos elástico paga más del impuesto",
                "Demanda inelástica: consumidores pagan más",
                "Oferta inelástica: productores pagan más"
              ]
            },
            {
              subtitulo: "Política de Drogas",
              descripcion: "La elasticidad explica por qué ciertas políticas pueden tener efectos no deseados.",
              puntosClave: [
                "Demanda de drogas es inelástica",
                "Reducir oferta aumenta precio más que reduce cantidad",
                "Puede aumentar crimen relacionado con drogas",
                "Políticas de demanda vs oferta"
              ]
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Elasticidad Precio de la Demanda (Método del Punto Medio)",
        formula: "Ed = [(Q2-Q1)/((Q2+Q1)/2)] / [(P2-P1)/((P2+P1)/2)]",
        descripcion: "Método más preciso que evita el problema de qué punto usar como base.",
        ejemplo: "Si Q cambia de 100 a 80 y P de $10 a $12: Ed = [(-20)/90] / [(2)/11] = -1.22",
        grafico: "Arco entre dos puntos en la curva de demanda"
      },
      {
        nombre: "Ingreso Total",
        formula: "IT = P × Q",
        descripcion: "El ingreso total es el precio multiplicado por la cantidad vendida.",
        ejemplo: "Si P = $5 y Q = 100, entonces IT = $500",
        grafico: "Área del rectángulo bajo la curva de demanda"
      },
      {
        nombre: "Relación Elasticidad-Ingreso Total",
        formula: "Si |Ed| > 1: ΔP y ΔIT en direcciones opuestas; Si |Ed| < 1: ΔP y ΔIT en misma dirección",
        descripcion: "La elasticidad determina cómo cambios en precio afectan el ingreso total.",
        ejemplo: "Con Ed = -2 (elástica), reducir precio de $10 a $9 aumenta IT porque Q aumenta proporcionalmente más.",
        grafico: "Curva de ingreso total en forma de U invertida"
      },
      {
        nombre: "Elasticidad Ingreso de la Demanda",
        formula: "Ei = (% cambio en Q) / (% cambio en Ingreso)",
        descripcion: "Mide sensibilidad de la demanda a cambios en el ingreso del consumidor.",
        ejemplo: "Si ingreso aumenta 10% y demanda de autos aumenta 15%, entonces Ei = 1.5 (bien de lujo).",
        grafico: "Curva de Engel mostrando relación ingreso-cantidad"
      },
      {
        nombre: "Elasticidad Cruzada de la Demanda",
        formula: "Exy = (% cambio en Qx) / (% cambio en Py)",
        descripcion: "Mide cómo el precio de un bien afecta la demanda de otro bien.",
        ejemplo: "Si precio de café aumenta 10% y demanda de té aumenta 5%, entonces Exy = 0.5 (sustitutos).",
        grafico: "Desplazamiento de demanda de X cuando cambia precio de Y"
      },
      {
        nombre: "Elasticidad Precio de la Oferta",
        formula: "Es = (% cambio en Qs) / (% cambio en P)",
        descripcion: "Mide sensibilidad de la cantidad ofrecida a cambios en el precio.",
        ejemplo: "Si precio aumenta 20% y cantidad ofrecida aumenta 30%, entonces Es = 1.5 (elástica).",
        grafico: "Pendiente de la curva de oferta determina elasticidad"
      }
    ],
    conceptosClave: [
      "Elasticidad precio de la demanda",
      "Demanda elástica vs inelástica",
      "Método del punto medio",
      "Ingreso total",
      "Elasticidad ingreso",
      "Elasticidad cruzada",
      "Bienes normales vs inferiores",
      "Bienes sustitutos vs complementos",
      "Elasticidad de la oferta",
      "Incidencia fiscal",
      "Determinantes de elasticidad"
    ],
    ejemplosReales: [
      {
        titulo: "Elasticidad de la Gasolina",
        descripcion:
          "La demanda de gasolina es inelástica a corto plazo (Ed ≈ -0.2) porque no hay buenos sustitutos inmediatos, pero más elástica a largo plazo (Ed ≈ -0.7) cuando la gente puede cambiar de auto o mudarse.",
      },
      {
        titulo: "Netflix y la Elasticidad de Suscripciones",
        descripcion:
          "Netflix estudia cuidadosamente la elasticidad precio antes de cambiar sus tarifas. En mercados con muchas alternativas (alta elasticidad), aumentos de precio causan más cancelaciones.",
      },
      {
        titulo: "Impuestos al Cigarrillo",
        descripcion:
          "Los impuestos al cigarrillo son efectivos para reducir el consumo porque la demanda es relativamente elástica a largo plazo, especialmente entre jóvenes. Los fumadores actuales pagan la mayor parte del impuesto (demanda inelástica a corto plazo).",
      },
    ],
  },
  6: {
    titulo: "Oferta, demanda y políticas gubernamentales",
    resumen: "Análisis del impacto de la intervención gubernamental en mercados competitivos.",
    duracion: "55 min",
    dificultad: "Intermedio",
    objetivos: [
      "Analizar los efectos de controles de precios en mercados",
      "Evaluar el impacto de impuestos en equilibrio de mercado",
      "Calcular pérdidas de eficiencia causadas por intervenciones gubernamentales",
    ],
    contenido: {
      introduccion:
        "Los economistas tienen dos roles. Como científicos, desarrollan y prueban teorías para explicar el mundo. Como asesores de política, usan sus teorías para ayudar a cambiar el mundo para mejor. Este capítulo examina cómo las políticas gubernamentales afectan los resultados de mercado.",
      secciones: [
        {
          titulo: "Controles de Precios",
          contenido: [
            {
              subtitulo: "Precios Máximos (Price Ceilings)",
              descripcion: "Un precio máximo es un límite legal sobre el precio al que se puede vender un bien.",
              puntosClave: [
                "Solo es vinculante si está por debajo del precio de equilibrio",
                "Causa escasez (exceso de demanda)",
                "Reduce la cantidad intercambiada",
                "Puede llevar a mercados negros",
                "Ejemplos: control de alquileres, precios de gasolina en crisis"
              ]
            },
            {
              subtitulo: "Efectos de Precios Máximos",
              descripcion: "Los precios máximos vinculantes tienen varios efectos no deseados.",
              puntosClave: [
                "Escasez persistente",
                "Deterioro de la calidad",
                "Largas filas y tiempo de espera",
                "Discriminación por parte de vendedores",
                "Mercados negros con precios más altos"
              ]
            },
            {
              subtitulo: "Precios Mínimos (Price Floors)",
              descripcion: "Un precio mínimo es un límite legal sobre qué tan bajo puede ser el precio de un bien.",
              puntosClave: [
                "Solo es vinculante si está por encima del precio de equilibrio",
                "Causa excedente (exceso de oferta)",
                "Reduce la cantidad intercambiada",
                "Ejemplos: salario mínimo, precios de apoyo agrícola"
              ]
            },
            {
              subtitulo: "El Salario Mínimo",
              descripcion: "El salario mínimo es un ejemplo importante de precio mínimo en el mercado laboral.",
              puntosClave: [
                "Puede causar desempleo si está por encima del equilibrio",
                "Afecta más a trabajadores jóvenes y no calificados",
                "Debate sobre magnitud de efectos en empleo",
                "Beneficia a trabajadores que mantienen empleo",
                "Puede reducir pobreza pero también empleo"
              ]
            }
          ]
        },
        {
          titulo: "Impuestos",
          contenido: [
            {
              subtitulo: "Cómo Afectan los Impuestos a los Participantes del Mercado",
              descripcion: "Los impuestos crean una cuña entre el precio que pagan los compradores y el que reciben los vendedores.",
              puntosClave: [
                "Precio compradores = Precio vendedores + Impuesto",
                "Reduce la cantidad de equilibrio",
                "Crea pérdida de peso muerto",
                "No importa legalmente quién paga el impuesto"
              ]
            },
            {
              subtitulo: "Incidencia Fiscal",
              descripcion: "La incidencia fiscal se refiere a quién realmente soporta la carga del impuesto.",
              puntosClave: [
                "Depende de elasticidades relativas de oferta y demanda",
                "Lado menos elástico paga mayor proporción",
                "Si demanda es menos elástica: compradores pagan más",
                "Si oferta es menos elástica: vendedores pagan más",
                "Incidencia legal vs incidencia económica"
              ]
            },
            {
              subtitulo: "Pérdida de Peso Muerto",
              descripcion: "Los impuestos causan pérdidas de eficiencia porque reducen el tamaño del mercado.",
              puntosClave: [
                "Pérdida de excedente total no capturada por nadie",
                "Área del triángulo entre curvas de oferta y demanda",
                "Aumenta con el cuadrado de la tasa de impuesto",
                "Mayor cuando oferta y demanda son más elásticas",
                "Representa ineficiencia económica"
              ]
            }
          ]
        },
        {
          titulo: "Aplicaciones de Política",
          contenido: [
            {
              subtitulo: "Control de Alquileres",
              descripcion: "Los controles de alquileres son precios máximos en el mercado de vivienda.",
              puntosClave: [
                "Reducen cantidad de viviendas disponibles",
                "Causan escasez de vivienda",
                "Reducen incentivos para mantenimiento",
                "Benefician a inquilinos actuales, perjudican a futuros",
                "Pueden llevar a discriminación en alquileres"
              ]
            },
            {
              subtitulo: "Política Agrícola",
              descripcion: "Los gobiernos a menudo intervienen en mercados agrícolas con precios mínimos.",
              puntosClave: [
                "Precios de apoyo por encima del equilibrio",
                "Gobierno debe comprar excedentes",
                "Beneficia a agricultores, cuesta a contribuyentes",
                "Puede llevar a sobreproducción",
                "Alternativas: pagos directos, seguros de cosecha"
              ]
            },
            {
              subtitulo: "Impuestos sobre Bienes Específicos",
              descripcion: "Los impuestos sobre bienes como cigarrillos y gasolina tienen efectos particulares.",
              puntosClave: [
                "Impuestos 'pecaminosos' para desincentivar consumo",
                "Efectividad depende de elasticidad de demanda",
                "Pueden ser regresivos (afectan más a pobres)",
                "Generan ingresos para el gobierno",
                "Ejemplo: impuestos al carbono para combatir cambio climático"
              ]
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Cuña Fiscal",
        formula: "Pc - Pv = T",
        descripcion: "La diferencia entre el precio que pagan compradores y reciben vendedores iguala el impuesto.",
        ejemplo: "Si Pc = $12, Pv = $8, entonces T = $4 por unidad.",
        grafico: "Distancia vertical entre curvas de oferta y demanda después del impuesto"
      },
      {
        nombre: "Incidencia Fiscal - Compradores",
        formula: "Carga compradores = Pc - P* = T × [Es/(Es + |Ed|)]",
        descripcion: "La proporción del impuesto pagada por compradores depende de elasticidades relativas.",
        ejemplo: "Si Es = 1 y |Ed| = 2, compradores pagan T × [1/(1+2)] = T/3 del impuesto.",
        grafico: "Aumento en precio para compradores desde equilibrio original"
      },
      {
        nombre: "Incidencia Fiscal - Vendedores", 
        formula: "Carga vendedores = P* - Pv = T × [|Ed|/(Es + |Ed|)]",
        descripcion: "La proporción del impuesto pagada por vendedores depende de elasticidades relativas.",
        ejemplo: "Si Es = 1 y |Ed| = 2, vendedores pagan T × [2/(1+2)] = 2T/3 del impuesto.",
        grafico: "Disminución en precio para vendedores desde equilibrio original"
      },
      {
        nombre: "Pérdida de Peso Muerto",
        formula: "PPM = (1/2) × T × (Q* - Qt)",
        descripcion: "Área del triángulo que representa la pérdida de eficiencia por el impuesto.",
        ejemplo: "Si T = $4 y la cantidad se reduce de 100 a 80, PPM = (1/2) × 4 × 20 = $40.",
        grafico: "Triángulo entre curvas de oferta y demanda en el rango de reducción de cantidad"
      },
      {
        nombre: "Recaudación Fiscal",
        formula: "Recaudación = T × Qt",
        descripcion: "El ingreso total del gobierno es el impuesto por unidad multiplicado por la cantidad vendida.",
        ejemplo: "Si T = $4 y Qt = 80, la recaudación = $320.",
        grafico: "Rectángulo con altura T y base Qt"
      },
      {
        nombre: "Escasez por Precio Máximo",
        formula: "Escasez = Qd(Pmax) - Qs(Pmax)",
        descripcion: "Cuando hay precio máximo vinculante, la cantidad demandada excede la ofrecida.",
        ejemplo: "Si a Pmax = $5, Qd = 100 y Qs = 60, hay escasez de 40 unidades.",
        grafico: "Distancia horizontal entre curvas al nivel del precio máximo"
      },
      {
        nombre: "Excedente por Precio Mínimo",
        formula: "Excedente = Qs(Pmin) - Qd(Pmin)",
        descripcion: "Cuando hay precio mínimo vinculante, la cantidad ofrecida excede la demandada.",
        ejemplo: "Si a Pmin = $15, Qs = 120 y Qd = 80, hay excedente de 40 unidades.",
        grafico: "Distancia horizontal entre curvas al nivel del precio mínimo"
      }
    ],
    conceptosClave: [
      "Precio máximo",
      "Precio mínimo",
      "Controles de precios",
      "Salario mínimo",
      "Incidencia fiscal",
      "Pérdida de peso muerto",
      "Cuña fiscal",
      "Escasez",
      "Excedente",
      "Control de alquileres",
      "Política agrícola",
      "Eficiencia económica"
    ],
    ejemplosReales: [
      {
        titulo: "Control de Alquileres en Nueva York",
        descripcion:
          "Nueva York ha tenido controles de alquileres desde la Segunda Guerra Mundial. Esto ha causado escasez crónica de viviendas, deterioro de edificios, y un mercado negro de apartamentos. Los apartamentos controlados benefician a inquilinos de largo plazo pero perjudican a nuevos residentes.",
      },
      {
        titulo: "Salario Mínimo de $15 en Seattle",
        descripcion:
          "Seattle implementó gradualmente un salario mínimo de $15/hora. Los estudios muestran efectos mixtos: algunos trabajadores ganaron más, pero hubo reducción en horas trabajadas y empleo en algunos sectores, especialmente para trabajadores menos experimentados.",
      },
      {
        titulo: "Impuestos al Cigarrillo y Salud Pública",
        descripcion:
          "Los altos impuestos al cigarrillo han sido efectivos para reducir el consumo, especialmente entre jóvenes. La demanda inelástica significa que los fumadores pagan la mayor parte del impuesto, generando ingresos significativos para programas de salud pública.",
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

          {/* Contenido principal */}
          {/* Capítulo 1: Los 10 principios */}
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

          {/* Capítulos 2-6: Contenido por secciones */}
          {(params.id === "2" || params.id === "3" || params.id === "4" || params.id === "5" || params.id === "6") && 
           capitulo.contenido.secciones && (
            <div className="space-y-8">
              {capitulo.contenido.secciones.map((seccion, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-700 flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                        {index === 0 ? <Target className="h-6 w-6 text-white" /> :
                         index === 1 ? <TrendingUp className="h-6 w-6 text-white" /> :
                         index === 2 ? <BarChart3 className="h-6 w-6 text-white" /> :
                         <DollarSign className="h-6 w-6 text-white" />}
                      </div>
                      {seccion.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {seccion.contenido.map((item, idx) => (
                        <div key={idx} className="border-l-4 border-blue-200 pl-6">
                          <div className="bg-gradient-to-r from-blue-50 to-violet-50 p-6 rounded-2xl">
                            <h4 className="font-bold text-xl mb-4 text-slate-800">{item.subtitulo}</h4>
                            <p className="text-slate-700 mb-4 text-lg leading-relaxed">{item.descripcion}</p>
                            
                            <div className="bg-white p-4 rounded-xl">
                              <h5 className="font-semibold text-slate-800 mb-3">Puntos Clave:</h5>
                              <ul className="space-y-2">
                                {item.puntosClave.map((punto, pIdx) => (
                                  <li key={pIdx} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-slate-700">{punto}</span>
                                  </li>
                                ))}
                              </ul>
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
                      <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 mb-3">
                        <p className="text-sm text-amber-800">
                          <strong>Ejemplo:</strong> {formula.ejemplo}
                        </p>
                      </div>
                    )}
                    {formula.grafico && (
                      <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                        <p className="text-sm text-blue-800">
                          <strong>Representación Gráfica:</strong> {formula.grafico}
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