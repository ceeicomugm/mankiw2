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
      "Analizar el papel de los supuestos en los modelos económicos",
      "Distinguir entre economía positiva y normativa",
      "Interpretar gráficos económicos básicos",
    ],
    contenido: {
      introduccion:
        "Los economistas intentan abordar su tema de estudio con la objetividad de un científico. Como todos los científicos, hacen supuestos apropiados y construyen modelos simplificados para comprender el mundo que los rodea. Dos roles simples pero importantes que desempeñan los economistas: como científicos cuando intentan explicar el mundo, y como asesores de política cuando intentan mejorarlo.",
      secciones: [
        {
          titulo: "El economista como científico",
          contenido: [
            {
              subtitulo: "El método científico: observación, teoría y más observación",
              descripcion: "Los economistas siguen el método científico: observan patrones, desarrollan teorías y contrastan estas teorías con más observaciones. Aunque los economistas no pueden realizar experimentos controlados como los físicos, utilizan datos históricos y experimentos naturales.",
              ejemplo: "Para estudiar el efecto del salario mínimo en el empleo, los economistas comparan regiones con diferentes salarios mínimos o analizan cambios en la legislación a lo largo del tiempo.",
            },
            {
              subtitulo: "El papel de los supuestos",
              descripcion: "Los supuestos pueden simplificar el mundo complejo y hacer que sea más fácil de entender. Diferentes supuestos son útiles para diferentes propósitos. El arte del pensamiento científico es decidir qué supuestos hacer.",
              ejemplo: "Para estudiar el comercio internacional, podemos suponer que el mundo tiene solo dos países y dos bienes. Este supuesto simplifica el análisis sin eliminar las lecciones básicas.",
            },
            {
              subtitulo: "Modelos económicos",
              descripcion: "Los modelos económicos omiten muchos detalles para permitirnos ver lo que es verdaderamente importante. Todos los modelos son simplificaciones de la realidad.",
              ejemplo: "El modelo de oferta y demanda omite detalles sobre por qué las personas compran un bien, pero puede predecir exitosamente cómo los cambios en el precio afectan las compras.",
            },
          ],
        },
        {
          titulo: "Nuestro primer modelo: el diagrama de flujo circular",
          contenido: [
            {
              subtitulo: "Estructura del modelo",
              descripcion: "El diagrama de flujo circular es un modelo visual de la economía que muestra cómo el dinero fluye a través de los mercados entre hogares y empresas. Incluye dos tipos de mercados: el mercado de bienes y servicios, y el mercado de factores de producción.",
              componentes: [
                "Hogares: poseen los factores de producción y consumen bienes y servicios",
                "Empresas: compran factores de producción y venden bienes y servicios",
                "Mercado de bienes y servicios: donde los hogares compran y las empresas venden",
                "Mercado de factores: donde las empresas compran y los hogares venden factores de producción",
              ],
            },
            {
              subtitulo: "Flujos en el modelo",
              descripcion: "Hay dos tipos de flujos que van en direcciones opuestas:",
              flujos: [
                "Flujo real: bienes y servicios fluyen de empresas a hogares; factores de producción fluyen de hogares a empresas",
                "Flujo monetario: los hogares pagan por bienes y servicios; las empresas pagan por factores de producción",
              ],
            },
          ],
        },
        {
          titulo: "Nuestro segundo modelo: la frontera de posibilidades de producción",
          contenido: [
            {
              subtitulo: "Definición y características",
              descripcion: "La frontera de posibilidades de producción (FPP) es un gráfico que muestra las combinaciones de producción que la economía puede producir dados los factores de producción y la tecnología de producción disponibles.",
              caracteristicas: [
                "Muestra las disyuntivas que enfrenta la sociedad",
                "Ilustra el concepto de costo de oportunidad",
                "Demuestra la eficiencia económica",
                "Permite analizar el crecimiento económico",
              ],
            },
            {
              subtitulo: "Conceptos clave de la FPP",
              conceptos: [
                {
                  nombre: "Eficiencia",
                  descripcion: "Los puntos sobre la frontera son eficientes; los puntos dentro de la frontera son ineficientes; los puntos fuera de la frontera son inalcanzables.",
                },
                {
                  nombre: "Costo de oportunidad",
                  descripcion: "La pendiente de la FPP mide el costo de oportunidad de un bien en términos del otro.",
                },
                {
                  nombre: "Crecimiento económico",
                  descripcion: "El crecimiento económico desplaza la FPP hacia afuera, permitiendo mayor producción de ambos bienes.",
                },
              ],
            },
          ],
        },
        {
          titulo: "Microeconomía y macroeconomía",
          contenido: [
            {
              subtitulo: "Microeconomía",
              descripcion: "El estudio de cómo los hogares y las empresas toman decisiones y cómo interactúan en los mercados.",
              ejemplos: [
                "El efecto de los impuestos sobre la gasolina en la compra de automóviles",
                "Cómo el salario mínimo afecta el empleo de trabajadores jóvenes",
                "El impacto de la competencia extranjera en la industria automotriz",
              ],
            },
            {
              subtitulo: "Macroeconomía",
              descripcion: "El estudio de los fenómenos que afectan a toda la economía, incluyendo la inflación, el desempleo y el crecimiento económico.",
              ejemplos: [
                "Por qué el ingreso promedio es alto en algunos países y bajo en otros",
                "Por qué los precios aumentan rápidamente en algunos períodos",
                "Por qué la economía se contrae en algunos años y se expande en otros",
              ],
            },
          ],
        },
      ],
    },
    formulas: [
      {
        nombre: "Frontera de Posibilidades de Producción",
        formula: "Y = f(X) donde Y + X ≤ Recursos totales",
        descripcion: "Relación entre la producción de dos bienes dados los recursos limitados.",
        ejemplo: "Si una economía puede producir 100 computadoras o 200 automóviles, la FPP muestra todas las combinaciones posibles.",
      },
      {
        nombre: "Costo de Oportunidad en la FPP",
        formula: "CO = ΔY/ΔX",
        descripcion: "El costo de oportunidad es la pendiente de la FPP.",
        ejemplo: "Si producir 10 computadoras adicionales requiere sacrificar 20 automóviles, el CO = 20/10 = 2 automóviles por computadora.",
      },
    ],
    conceptosClave: [
      "Método científico",
      "Modelos económicos",
      "Supuestos",
      "Flujo circular",
      "Frontera de posibilidades de producción",
      "Eficiencia",
      "Microeconomía",
      "Macroeconomía",
      "Economía positiva",
      "Economía normativa",
    ],
    ejemplosReales: [
      {
        titulo: "Modelos Climáticos vs Modelos Económicos",
        descripcion: "Tanto los climatólogos como los economistas usan modelos simplificados para entender sistemas complejos y hacer predicciones.",
      },
      {
        titulo: "FPP durante la Segunda Guerra Mundial",
        descripcion: "Estados Unidos tuvo que elegir entre producir bienes civiles y militares, ilustrando perfectamente el concepto de FPP.",
      },
      {
        titulo: "Flujo Circular en la Economía Digital",
        descripcion: "Las plataformas digitales como Amazon actúan como intermediarios en el flujo circular moderno, conectando hogares y empresas.",
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
      "Calcular costos de oportunidad y ventajas comparativas",
      "Explicar cómo la especialización aumenta la producción total",
      "Analizar las ganancias del comercio para todas las partes",
    ],
    contenido: {
      introduccion:
        "Considere su día típico. Se despierta por la mañana y se sirve jugo de naranja de Florida y café de Brasil. Durante el desayuno, mira las noticias en su televisor hecho en Japón. Se viste con ropa hecha en China y conduce al trabajo en un auto hecho en Corea. Luego abre su computadora portátil hecha en Malasia y revisa su correo electrónico. Esta interdependencia es posible porque las personas comercian entre sí.",
      secciones: [
        {
          titulo: "Una parábola para la economía moderna",
          contenido: [
            {
              subtitulo: "La historia de dos productores",
              descripcion: "Imaginemos una economía simple con solo dos personas: un ganadero que produce carne y un agricultor que produce papas. Cada uno consume tanto carne como papas.",
              escenarios: [
                {
                  nombre: "Sin comercio (autarquía)",
                  descripcion: "Cada persona debe producir todo lo que consume. El ganadero debe cultivar papas además de criar ganado, y el agricultor debe criar ganado además de cultivar papas.",
                },
                {
                  nombre: "Con comercio",
                  descripcion: "Cada persona puede especializarse en lo que hace mejor y comerciar con la otra. Esto puede beneficiar a ambos.",
                },
              ],
            },
          ],
        },
        {
          titulo: "El principio de la ventaja comparativa",
          contenido: [
            {
              subtitulo: "Ventaja absoluta",
              descripcion: "Una persona tiene ventaja absoluta en la producción de un bien si puede producir ese bien usando menos recursos que otra persona.",
              ejemplo: "Si el ganadero puede producir tanto carne como papas usando menos tiempo que el agricultor, el ganadero tiene ventaja absoluta en ambos bienes.",
            },
            {
              subtitulo: "Ventaja comparativa",
              descripcion: "Una persona tiene ventaja comparativa en la producción de un bien si puede producir ese bien con un costo de oportunidad menor que otra persona.",
              importancia: "La ventaja comparativa, no la ventaja absoluta, determina las ganancias del comercio.",
            },
            {
              subtitulo: "Cálculo de la ventaja comparativa",
              pasos: [
                "Determinar el costo de oportunidad de cada bien para cada productor",
                "Comparar los costos de oportunidad",
                "La persona con menor costo de oportunidad tiene ventaja comparativa en ese bien",
                "Cada persona debe especializarse en el bien donde tiene ventaja comparativa",
              ],
            },
          ],
        },
        {
          titulo: "Aplicaciones de la ventaja comparativa",
          contenido: [
            {
              subtitulo: "¿Debería Tiger Woods cortar su propio césped?",
              descripcion: "Aunque Tiger Woods podría ser mejor cortando césped que su jardinero (ventaja absoluta), su costo de oportunidad es muy alto porque podría estar practicando golf o jugando torneos. El jardinero tiene ventaja comparativa en cortar césped.",
            },
            {
              subtitulo: "Comercio internacional",
              descripcion: "Los países se benefician del comercio internacional de la misma manera que los individuos se benefician del comercio. Cada país debe especializarse en los bienes donde tiene ventaja comparativa.",
              ejemplos: [
                "Japón exporta automóviles e importa alimentos",
                "Brasil exporta café e importa computadoras",
                "Arabia Saudita exporta petróleo e importa casi todo lo demás",
              ],
            },
          ],
        },
        {
          titulo: "Las ganancias del comercio",
          contenido: [
            {
              subtitulo: "Cómo surge el comercio",
              descripcion: "El comercio puede beneficiar a todos en la sociedad porque permite a las personas especializarse en actividades en las que tienen ventaja comparativa.",
            },
            {
              subtitulo: "Términos de intercambio",
              descripcion: "Los términos de intercambio se refieren a la tasa a la cual se intercambian los bienes. Para que el comercio sea mutuamente beneficioso, los términos de intercambio deben estar entre los costos de oportunidad de ambas partes.",
              ejemplo: "Si el costo de oportunidad de la carne es 2 papas para el ganadero y 4 papas para el agricultor, cualquier tasa de intercambio entre 2 y 4 papas por unidad de carne beneficiará a ambos.",
            },
            {
              subtitulo: "Beneficios del comercio",
              beneficios: [
                "Aumento en la variedad de bienes disponibles",
                "Reducción en los costos a través de economías de escala",
                "Aumento en la competencia y la innovación",
                "Mejor asignación de recursos a nivel global",
              ],
            },
          ],
        },
      ],
    },
    formulas: [
      {
        nombre: "Costo de Oportunidad",
        formula: "CO(X) = Cantidad de Y sacrificada / Cantidad de X obtenida",
        descripcion: "El costo de oportunidad de producir un bien X es la cantidad del bien Y que debe sacrificarse.",
        ejemplo: "Si producir 1 kg de carne requiere sacrificar 3 kg de papas, entonces CO(carne) = 3 papas.",
      },
      {
        nombre: "Ventaja Comparativa",
        formula: "Ventaja comparativa en X si: CO_A(X) < CO_B(X)",
        descripcion: "La persona A tiene ventaja comparativa en el bien X si su costo de oportunidad es menor que el de la persona B.",
        ejemplo: "Si CO_ganadero(carne) = 2 papas y CO_agricultor(carne) = 4 papas, el ganadero tiene ventaja comparativa en carne.",
      },
      {
        nombre: "Términos de Intercambio Mutuamente Beneficiosos",
        formula: "CO_A(X) < Términos de intercambio < CO_B(X)",
        descripcion: "Para que el comercio beneficie a ambas partes, los términos de intercambio deben estar entre los costos de oportunidad de ambas partes.",
        ejemplo: "Si CO_A(carne) = 2 papas y CO_B(carne) = 4 papas, cualquier intercambio entre 2 y 4 papas por carne es mutuamente beneficioso.",
      },
    ],
    conceptosClave: [
      "Ventaja absoluta",
      "Ventaja comparativa",
      "Costo de oportunidad",
      "Especialización",
      "Términos de intercambio",
      "Ganancias del comercio",
      "Autarquía",
      "Interdependencia",
      "Comercio internacional",
      "Asignación de recursos",
    ],
    ejemplosReales: [
      {
        titulo: "Comercio entre Estados Unidos y China",
        descripcion: "Estados Unidos exporta productos agrícolas y servicios financieros a China, mientras importa productos manufacturados, aprovechando las ventajas comparativas de cada país.",
      },
      {
        titulo: "Especialización en Silicon Valley",
        descripcion: "Las empresas tecnológicas se especializan en diferentes aspectos: Apple en diseño, Intel en procesadores, Microsoft en software, creando un ecosistema de comercio especializado.",
      },
      {
        titulo: "Comercio Intraindustrial",
        descripcion: "Alemania exporta automóviles BMW a Estados Unidos e importa automóviles Ford de Estados Unidos, mostrando que el comercio puede ocurrir incluso dentro de la misma industria.",
      },
    ],
  },
  4: {
    titulo: "Las fuerzas del mercado: oferta y demanda",
    resumen: "Fundamentos de la oferta, demanda y determinación de precios en mercados competitivos.",
    duracion: "60 min",
    dificultad: "Intermedio",
    objetivos: [
      "Analizar los factores que determinan la demanda de un bien",
      "Analizar los factores que determinan la oferta de un bien",
      "Explicar cómo la oferta y demanda determinan el precio de equilibrio",
      "Predecir cómo los cambios afectan el equilibrio del mercado",
    ],
    contenido: {
      introduccion:
        "La oferta y la demanda son las fuerzas que hacen que funcionen las economías de mercado. Determinan la cantidad producida de cada bien y el precio al que se vende. Si quiere saber cómo algún evento o política afectará la economía, debe pensar primero en cómo afectará la oferta y la demanda.",
      secciones: [
        {
          titulo: "Los mercados y la competencia",
          contenido: [
            {
              subtitulo: "¿Qué es un mercado?",
              descripcion: "Un mercado es un grupo de compradores y vendedores de un bien o servicio particular. Los compradores determinan la demanda del producto, y los vendedores determinan la oferta del producto.",
            },
            {
              subtitulo: "¿Qué es la competencia?",
              descripcion: "Un mercado competitivo es un mercado en el que hay muchos compradores y vendedores, por lo que cada uno tiene un impacto insignificante en el precio de mercado.",
              caracteristicas: [
                "Los bienes ofrecidos en venta son todos iguales",
                "Los compradores y vendedores son tan numerosos que ninguno puede influir en el precio de mercado",
                "Los compradores y vendedores son tomadores de precios",
              ],
            },
          ],
        },
        {
          titulo: "La demanda",
          contenido: [
            {
              subtitulo: "La curva de demanda: la relación entre precio y cantidad demandada",
              descripcion: "La cantidad demandada de cualquier bien es la cantidad del bien que los compradores están dispuestos y pueden comprar. La ley de la demanda establece que, manteniéndose todo lo demás constante, cuando el precio de un bien aumenta, la cantidad demandada del bien disminuye.",
            },
            {
              subtitulo: "Demanda del mercado versus demanda individual",
              descripcion: "La demanda del mercado es la suma de todas las demandas individuales para un bien o servicio particular.",
            },
            {
              subtitulo: "Desplazamientos en la curva de demanda",
              descripcion: "Cuando cualquier factor que influye en las decisiones de compra cambia, excepto el precio, la curva de demanda se desplaza.",
              factores: [
                {
                  nombre: "Ingreso",
                  descripcion: "Para bienes normales, un aumento en el ingreso aumenta la demanda. Para bienes inferiores, un aumento en el ingreso disminuye la demanda.",
                },
                {
                  nombre: "Precios de bienes relacionados",
                  descripcion: "Un aumento en el precio de un sustituto aumenta la demanda. Un aumento en el precio de un complemento disminuye la demanda.",
                },
                {
                  nombre: "Gustos",
                  descripcion: "Los cambios en gustos y preferencias pueden aumentar o disminuir la demanda.",
                },
                {
                  nombre: "Expectativas",
                  descripcion: "Las expectativas sobre el futuro pueden afectar la demanda actual.",
                },
                {
                  nombre: "Número de compradores",
                  descripcion: "Un aumento en el número de compradores aumenta la demanda del mercado.",
                },
              ],
            },
          ],
        },
        {
          titulo: "La oferta",
          contenido: [
            {
              subtitulo: "La curva de oferta: la relación entre precio y cantidad ofrecida",
              descripcion: "La cantidad ofrecida de cualquier bien es la cantidad del bien que los vendedores están dispuestos y pueden vender. La ley de la oferta establece que, manteniéndose todo lo demás constante, cuando el precio de un bien aumenta, la cantidad ofrecida del bien también aumenta.",
            },
            {
              subtitulo: "Oferta del mercado versus oferta individual",
              descripcion: "La oferta del mercado es la suma de las ofertas de todos los vendedores.",
            },
            {
              subtitulo: "Desplazamientos en la curva de oferta",
              descripcion: "Cuando cualquier factor que influye en las decisiones de venta cambia, excepto el precio, la curva de oferta se desplaza.",
              factores: [
                {
                  nombre: "Precios de los insumos",
                  descripcion: "Un aumento en el precio de los insumos disminuye la oferta.",
                },
                {
                  nombre: "Tecnología",
                  descripcion: "Los avances tecnológicos que reducen costos aumentan la oferta.",
                },
                {
                  nombre: "Expectativas",
                  descripcion: "Las expectativas sobre precios futuros pueden afectar la oferta actual.",
                },
                {
                  nombre: "Número de vendedores",
                  descripcion: "Un aumento en el número de vendedores aumenta la oferta del mercado.",
                },
              ],
            },
          ],
        },
        {
          titulo: "Oferta y demanda juntas",
          contenido: [
            {
              subtitulo: "Equilibrio",
              descripcion: "El equilibrio se refiere a una situación en la que el precio de mercado ha alcanzado el nivel en el que la cantidad ofrecida es igual a la cantidad demandada.",
              conceptos: [
                "Precio de equilibrio: el precio que equilibra la cantidad ofrecida y la cantidad demandada",
                "Cantidad de equilibrio: la cantidad ofrecida y la cantidad demandada al precio de equilibrio",
              ],
            },
            {
              subtitulo: "Tres pasos para analizar cambios en el equilibrio",
              pasos: [
                "Decidir si el evento desplaza la curva de oferta, la curva de demanda, o ambas",
                "Decidir si la curva se desplaza hacia la derecha o hacia la izquierda",
                "Usar el diagrama de oferta y demanda para ver cómo el desplazamiento cambia el precio y cantidad de equilibrio",
              ],
            },
          ],
        },
      ],
    },
    formulas: [
      {
        nombre: "Función de Demanda Lineal",
        formula: "Qd = a - bP",
        descripcion: "Donde Qd es cantidad demandada, P es precio, 'a' es la intersección con el eje Y, y 'b' es la pendiente.",
        ejemplo: "Qd = 100 - 2P significa que cuando P = 0, Qd = 100, y por cada aumento de $1 en precio, la cantidad demandada disminuye en 2 unidades.",
        grafico: "La curva de demanda tiene pendiente negativa, mostrando la relación inversa entre precio y cantidad demandada.",
      },
      {
        nombre: "Función de Oferta Lineal",
        formula: "Qs = c + dP",
        descripcion: "Donde Qs es cantidad ofrecida, P es precio, 'c' es la intersección con el eje Y, y 'd' es la pendiente.",
        ejemplo: "Qs = -20 + 3P significa que se necesita un precio mínimo de $6.67 para que haya oferta positiva, y por cada aumento de $1 en precio, la cantidad ofrecida aumenta en 3 unidades.",
        grafico: "La curva de oferta tiene pendiente positiva, mostrando la relación directa entre precio y cantidad ofrecida.",
      },
      {
        nombre: "Equilibrio de Mercado",
        formula: "Qd = Qs",
        descripcion: "En equilibrio, la cantidad demandada iguala la cantidad ofrecida.",
        ejemplo: "Si Qd = 100 - 2P y Qs = -20 + 3P, entonces: 100 - 2P = -20 + 3P, resolviendo: P* = 24, Q* = 52",
        grafico: "El punto de equilibrio es donde se intersectan las curvas de oferta y demanda.",
      },
    ],
    conceptosClave: [
      "Mercado competitivo",
      "Cantidad demandada",
      "Ley de la demanda",
      "Curva de demanda",
      "Bienes normales e inferiores",
      "Bienes sustitutos y complementos",
      "Cantidad ofrecida",
      "Ley de la oferta",
      "Curva de oferta",
      "Equilibrio de mercado",
      "Exceso de demanda",
      "Exceso de oferta",
    ],
    ejemplosReales: [
      {
        titulo: "Mercado de Vivienda durante COVID-19",
        descripcion: "La pandemia aumentó la demanda de viviendas (trabajo remoto, bajas tasas de interés) mientras la oferta se mantuvo limitada, resultando en aumentos significativos de precios.",
        grafico: "Desplazamiento de la demanda hacia la derecha con oferta relativamente inelástica.",
      },
      {
        titulo: "Mercado de Gasolina y Precios del Petróleo",
        descripcion: "Cuando aumenta el precio del petróleo crudo (insumo principal), la curva de oferta de gasolina se desplaza hacia la izquierda, aumentando el precio en las estaciones de servicio.",
        grafico: "Desplazamiento de la oferta hacia la izquierda debido al aumento en costos de producción.",
      },
      {
        titulo: "Mercado de Automóviles Eléctricos",
        descripcion: "Los subsidios gubernamentales y la mayor conciencia ambiental han aumentado la demanda, mientras las mejoras tecnológicas han reducido costos de producción, aumentando la oferta.",
        grafico: "Desplazamientos simultáneos de oferta y demanda hacia la derecha.",
      },
    ],
  },
  5: {
    titulo: "La elasticidad y sus aplicaciones",
    resumen: "Medición de la sensibilidad de la oferta y demanda ante cambios en variables económicas.",
    duracion: "65 min",
    dificultad: "Intermedio",
    objetivos: [
      "Calcular e interpretar la elasticidad precio de la demanda",
      "Analizar los factores que determinan la elasticidad",
      "Explicar la relación entre elasticidad e ingreso total",
      "Calcular otras elasticidades: ingreso, cruzada, y de la oferta",
    ],
    contenido: {
      introduccion:
        "Cuando estudiamos las fuerzas de la oferta y la demanda, aprendimos que los compradores usualmente demandan más de un bien cuando el precio es más bajo, cuando sus ingresos son más altos, o cuando los precios de los sustitutos son más altos. Pero ¿qué tan sensible es la cantidad demandada a los cambios en estas variables? Esta sensibilidad se mide con la elasticidad.",
      secciones: [
        {
          titulo: "La elasticidad de la demanda",
          contenido: [
            {
              subtitulo: "La elasticidad precio de la demanda y sus determinantes",
              descripcion: "La elasticidad precio de la demanda mide qué tan sensible es la cantidad demandada a los cambios en el precio. Se calcula como el cambio porcentual en la cantidad demandada dividido por el cambio porcentual en el precio.",
              determinantes: [
                {
                  nombre: "Disponibilidad de sustitutos cercanos",
                  descripcion: "Los bienes con sustitutos cercanos tienden a tener demanda más elástica porque es más fácil cambiar a otros bienes cuando el precio aumenta.",
                  ejemplo: "La mantequilla tiene muchos sustitutos (margarina, aceites), por lo que su demanda es elástica.",
                },
                {
                  nombre: "Necesidades versus lujos",
                  descripcion: "Las necesidades tienden a tener demanda inelástica, mientras que los lujos tienen demanda elástica.",
                  ejemplo: "Los medicamentos esenciales tienen demanda inelástica; los yates de lujo tienen demanda elástica.",
                },
                {
                  nombre: "Definición del mercado",
                  descripcion: "Los mercados definidos estrechamente tienden a tener demanda más elástica que los mercados definidos ampliamente.",
                  ejemplo: "La demanda de helado de vainilla es más elástica que la demanda de helado en general.",
                },
                {
                  nombre: "Horizonte temporal",
                  descripcion: "Los bienes tienden a tener demanda más elástica en horizontes temporales más largos.",
                  ejemplo: "La demanda de gasolina es más inelástica a corto plazo que a largo plazo.",
                },
              ],
            },
            {
              subtitulo: "Cálculo de la elasticidad precio de la demanda",
              metodos: [
                {
                  nombre: "Método del punto medio",
                  formula: "Ed = [(Q2-Q1)/((Q2+Q1)/2)] / [(P2-P1)/((P2+P1)/2)]",
                  ventaja: "Da el mismo resultado independientemente de la dirección del cambio.",
                  ejemplo: "Si el precio aumenta de $4 a $6 y la cantidad disminuye de 120 a 80: Ed = [(80-120)/((80+120)/2)] / [(6-4)/((6+4)/2)] = [-40/100] / [2/5] = -1.0",
                },
                {
                  nombre: "Método del punto",
                  formula: "Ed = (dQ/dP) × (P/Q)",
                  uso: "Útil para funciones de demanda continuas y cálculo en un punto específico.",
                },
              ],
            },
            {
              subtitulo: "Clasificación de la elasticidad",
              tipos: [
                {
                  nombre: "Demanda perfectamente inelástica",
                  valor: "Ed = 0",
                  descripcion: "La cantidad demandada no responde a cambios en el precio.",
                  ejemplo: "Medicamentos esenciales sin sustitutos.",
                  grafico: "Curva de demanda vertical.",
                },
                {
                  nombre: "Demanda inelástica",
                  valor: "0 < |Ed| < 1",
                  descripcion: "La cantidad demandada responde poco a cambios en el precio.",
                  ejemplo: "Gasolina, alimentos básicos.",
                  grafico: "Curva de demanda empinada.",
                },
                {
                  nombre: "Demanda de elasticidad unitaria",
                  valor: "|Ed| = 1",
                  descripcion: "La cantidad demandada responde proporcionalmente a cambios en el precio.",
                  ejemplo: "Algunos bienes de consumo duradero.",
                  grafico: "Hipérbola rectangular.",
                },
                {
                  nombre: "Demanda elástica",
                  valor: "|Ed| > 1",
                  descripcion: "La cantidad demandada responde mucho a cambios en el precio.",
                  ejemplo: "Bienes de lujo, entretenimiento.",
                  grafico: "Curva de demanda plana.",
                },
                {
                  nombre: "Demanda perfectamente elástica",
                  valor: "Ed = ∞",
                  descripcion: "La cantidad demandada es infinitamente sensible al precio.",
                  ejemplo: "Productos en mercados perfectamente competitivos.",
                  grafico: "Curva de demanda horizontal.",
                },
              ],
            },
          ],
        },
        {
          titulo: "Elasticidad e ingreso total",
          contenido: [
            {
              subtitulo: "Relación entre elasticidad e ingreso total",
              descripcion: "El ingreso total es la cantidad pagada por los compradores y recibida por los vendedores de un bien. Se calcula como P × Q.",
              relaciones: [
                {
                  tipo: "Demanda inelástica (|Ed| < 1)",
                  efecto: "Precio e ingreso total se mueven en la misma dirección",
                  explicacion: "Un aumento en el precio aumenta el ingreso total porque la cantidad disminuye proporcionalmente menos.",
                  ejemplo: "Si Ed = -0.5, un aumento del 10% en precio reduce cantidad en 5%, aumentando ingreso total en 4.5%.",
                },
                {
                  tipo: "Demanda elástica (|Ed| > 1)",
                  efecto: "Precio e ingreso total se mueven en direcciones opuestas",
                  explicacion: "Un aumento en el precio disminuye el ingreso total porque la cantidad disminuye proporcionalmente más.",
                  ejemplo: "Si Ed = -2.0, un aumento del 10% en precio reduce cantidad en 20%, disminuyendo ingreso total en 12%.",
                },
                {
                  tipo: "Demanda de elasticidad unitaria (|Ed| = 1)",
                  efecto: "El ingreso total permanece constante cuando cambia el precio",
                  explicacion: "Los cambios en precio y cantidad se compensan exactamente.",
                  ejemplo: "Si Ed = -1.0, un aumento del 10% en precio reduce cantidad en 10%, manteniendo ingreso total constante.",
                },
              ],
            },
            {
              subtitulo: "Aplicaciones prácticas",
              ejemplos: [
                {
                  sector: "Agricultura",
                  descripcion: "Los productos agrícolas suelen tener demanda inelástica. Una buena cosecha (aumento en oferta) reduce precios pero puede reducir el ingreso total de los agricultores.",
                },
                {
                  sector: "Transporte público",
                  descripcion: "Si la demanda de transporte público es inelástica, aumentar las tarifas aumentará los ingresos. Si es elástica, reducir tarifas puede aumentar ingresos.",
                },
                {
                  sector: "Entretenimiento",
                  descripcion: "Los bienes de entretenimiento suelen tener demanda elástica. Reducir precios puede aumentar significativamente los ingresos totales.",
                },
              ],
            },
          ],
        },
        {
          titulo: "Otras elasticidades de la demanda",
          contenido: [
            {
              subtitulo: "Elasticidad ingreso de la demanda",
              descripcion: "Mide qué tan sensible es la cantidad demandada a los cambios en el ingreso del consumidor.",
              formula: "Ei = (Cambio porcentual en cantidad demandada) / (Cambio porcentual en ingreso)",
              clasificacion: [
                {
                  tipo: "Bienes normales",
                  valor: "Ei > 0",
                  descripcion: "La demanda aumenta cuando aumenta el ingreso.",
                  subtipos: [
                    "Bienes necesarios: 0 < Ei < 1 (alimentos básicos)",
                    "Bienes de lujo: Ei > 1 (automóviles de lujo, joyas)",
                  ],
                },
                {
                  tipo: "Bienes inferiores",
                  valor: "Ei < 0",
                  descripcion: "La demanda disminuye cuando aumenta el ingreso.",
                  ejemplos: "Transporte público, alimentos genéricos, ropa usada.",
                },
              ],
            },
            {
              subtitulo: "Elasticidad cruzada de la demanda",
              descripcion: "Mide qué tan sensible es la cantidad demandada de un bien a los cambios en el precio de otro bien.",
              formula: "Exy = (Cambio porcentual en cantidad demandada de X) / (Cambio porcentual en precio de Y)",
              clasificacion: [
                {
                  tipo: "Bienes sustitutos",
                  valor: "Exy > 0",
                  descripcion: "Un aumento en el precio de Y aumenta la demanda de X.",
                  ejemplos: "Mantequilla y margarina, Coca-Cola y Pepsi.",
                },
                {
                  tipo: "Bienes complementos",
                  valor: "Exy < 0",
                  descripcion: "Un aumento en el precio de Y disminuye la demanda de X.",
                  ejemplos: "Automóviles y gasolina, computadoras y software.",
                },
                {
                  tipo: "Bienes independientes",
                  valor: "Exy ≈ 0",
                  descripcion: "Los cambios en el precio de Y no afectan la demanda de X.",
                  ejemplos: "Zapatos y manzanas, libros y gasolina.",
                },
              ],
            },
          ],
        },
        {
          titulo: "La elasticidad de la oferta",
          contenido: [
            {
              subtitulo: "Elasticidad precio de la oferta",
              descripcion: "Mide qué tan sensible es la cantidad ofrecida a los cambios en el precio.",
              formula: "Es = (Cambio porcentual en cantidad ofrecida) / (Cambio porcentual en precio)",
              determinantes: [
                {
                  factor: "Flexibilidad de los vendedores para cambiar la cantidad producida",
                  descripcion: "Cuanto más fácil sea cambiar la producción, más elástica será la oferta.",
                },
                {
                  factor: "Horizonte temporal",
                  descripcion: "La oferta es más elástica a largo plazo que a corto plazo.",
                  explicacion: "A largo plazo, las empresas pueden construir nuevas fábricas, contratar más trabajadores, etc.",
                },
                {
                  factor: "Disponibilidad de insumos",
                  descripcion: "Si los insumos son escasos, la oferta será menos elástica.",
                },
              ],
            },
            {
              subtitulo: "Clasificación de la elasticidad de la oferta",
              tipos: [
                {
                  nombre: "Oferta perfectamente inelástica",
                  valor: "Es = 0",
                  descripcion: "La cantidad ofrecida no responde a cambios en el precio.",
                  ejemplo: "Obras de arte originales, terrenos en ubicaciones específicas.",
                  grafico: "Curva de oferta vertical.",
                },
                {
                  nombre: "Oferta inelástica",
                  valor: "0 < Es < 1",
                  descripcion: "La cantidad ofrecida responde poco a cambios en el precio.",
                  ejemplo: "Productos agrícolas a corto plazo.",
                },
                {
                  nombre: "Oferta de elasticidad unitaria",
                  valor: "Es = 1",
                  descripcion: "La cantidad ofrecida responde proporcionalmente a cambios en el precio.",
                },
                {
                  nombre: "Oferta elástica",
                  valor: "Es > 1",
                  descripcion: "La cantidad ofrecida responde mucho a cambios en el precio.",
                  ejemplo: "Productos manufacturados con capacidad de producción flexible.",
                },
                {
                  nombre: "Oferta perfectamente elástica",
                  valor: "Es = ∞",
                  descripcion: "La cantidad ofrecida es infinitamente sensible al precio.",
                  grafico: "Curva de oferta horizontal.",
                },
              ],
            },
          ],
        },
      ],
    },
    formulas: [
      {
        nombre: "Elasticidad Precio de la Demanda (Método del Punto Medio)",
        formula: "Ed = [(Q2-Q1)/((Q2+Q1)/2)] / [(P2-P1)/((P2+P1)/2)]",
        descripcion: "Mide la sensibilidad de la cantidad demandada a cambios en el precio.",
        ejemplo: "Si P cambia de $10 a $12 y Q cambia de 100 a 80: Ed = [(80-100)/90] / [(12-10)/11] = -1.22",
        grafico: "Curvas de demanda con diferentes pendientes representan diferentes elasticidades.",
      },
      {
        nombre: "Ingreso Total",
        formula: "IT = P × Q",
        descripcion: "El ingreso total es el precio multiplicado por la cantidad vendida.",
        relacion: "Con demanda elástica: ↑P → ↓IT. Con demanda inelástica: ↑P → ↑IT",
        grafico: "La curva de ingreso total tiene forma de U invertida cuando la demanda es lineal.",
      },
      {
        nombre: "Elasticidad Ingreso de la Demanda",
        formula: "Ei = (ΔQ/Q) / (ΔI/I)",
        descripcion: "Mide cómo responde la demanda a cambios en el ingreso.",
        interpretacion: "Ei > 1: bien de lujo, 0 < Ei < 1: bien necesario, Ei < 0: bien inferior",
        ejemplo: "Si el ingreso aumenta 10% y la demanda de automóviles aumenta 15%: Ei = 1.5 (bien de lujo)",
      },
      {
        nombre: "Elasticidad Cruzada de la Demanda",
        formula: "Exy = (ΔQx/Qx) / (ΔPy/Py)",
        descripcion: "Mide cómo responde la demanda del bien X a cambios en el precio del bien Y.",
        interpretacion: "Exy > 0: sustitutos, Exy < 0: complementos, Exy = 0: independientes",
        ejemplo: "Si el precio de la mantequilla aumenta 10% y la demanda de margarina aumenta 8%: Exy = 0.8 (sustitutos)",
      },
    ],
    conceptosClave: [
      "Elasticidad precio de la demanda",
      "Método del punto medio",
      "Demanda elástica e inelástica",
      "Ingreso total",
      "Elasticidad ingreso",
      "Bienes normales e inferiores",
      "Bienes de lujo y necesarios",
      "Elasticidad cruzada",
      "Bienes sustitutos y complementos",
      "Elasticidad de la oferta",
      "Horizonte temporal",
      "Determinantes de la elasticidad",
    ],
    ejemplosReales: [
      {
        titulo: "Elasticidad de la Demanda de Gasolina",
        descripcion: "A corto plazo, la demanda de gasolina es inelástica (Ed ≈ -0.2) porque las personas no pueden cambiar fácilmente sus hábitos de conducción. A largo plazo es más elástica (Ed ≈ -0.7) porque pueden comprar autos más eficientes o mudarse más cerca del trabajo.",
        grafico: "Comparación de curvas de demanda a corto y largo plazo.",
      },
      {
        titulo: "Elasticidad Ingreso de Diferentes Bienes",
        descripcion: "Alimentos básicos (Ei ≈ 0.2), ropa (Ei ≈ 1.0), automóviles (Ei ≈ 1.8), viajes internacionales (Ei ≈ 2.5). Esto explica cómo cambia el patrón de consumo cuando aumenta el ingreso.",
        aplicacion: "Los países ricos gastan una menor proporción de su ingreso en alimentos y más en servicios y lujos.",
      },
      {
        titulo: "Estrategias de Precios basadas en Elasticidad",
        descripcion: "Netflix puede aumentar precios porque su demanda es relativamente inelástica (pocos sustitutos perfectos). Las aerolíneas usan discriminación de precios porque la elasticidad varía entre viajeros de negocios (inelástica) y turistas (elástica).",
        aplicacion: "Las empresas con productos de demanda inelástica tienen mayor poder de fijación de precios.",
      },
    ],
  },
  6: {
    titulo: "Oferta, demanda y políticas gubernamentales",
    resumen: "Análisis del impacto de la intervención gubernamental en el funcionamiento de los mercados.",
    duracion: "55 min",
    dificultad: "Intermedio",
    objetivos: [
      "Analizar los efectos de los controles de precios en los mercados",
      "Evaluar el impacto de los impuestos en el equilibrio de mercado",
      "Calcular la incidencia fiscal y la pérdida de peso muerto",
      "Comparar diferentes políticas gubernamentales y sus efectos",
    ],
    contenido: {
      introduccion:
        "Los economistas tienen dos roles: como científicos, desarrollan teorías para explicar el mundo; como asesores de política, usan estas teorías para ayudar a cambiar el mundo para mejor. El análisis de oferta y demanda es una herramienta poderosa para analizar políticas gubernamentales.",
      secciones: [
        {
          titulo: "Controles sobre los precios",
          contenido: [
            {
              subtitulo: "Cómo los precios máximos afectan los resultados del mercado",
              descripcion: "Un precio máximo es un límite legal sobre el precio al que se puede vender un bien. Para que sea vinculante, debe establecerse por debajo del precio de equilibrio.",
              efectos: [
                {
                  nombre: "Escasez",
                  descripcion: "Cuando el precio máximo está por debajo del equilibrio, la cantidad demandada excede la cantidad ofrecida, creando escasez.",
                  calculo: "Escasez = Cantidad demandada - Cantidad ofrecida al precio máximo",
                },
                {
                  nombre: "Mecanismos de asignación",
                  descripcion: "Cuando hay escasez, el mercado debe desarrollar mecanismos alternativos para asignar el bien:",
                  mecanismos: [
                    "Colas largas (costo de tiempo)",
                    "Discriminación por parte de vendedores",
                    "Mercados negros",
                    "Sistemas de racionamiento",
                  ],
                },
              ],
              ejemplos: [
                {
                  caso: "Control de alquileres",
                  descripcion: "Límites en los alquileres pueden crear escasez de viviendas, reducir la calidad de mantenimiento y crear mercados negros.",
                  efectosLargoPlazo: "Menor construcción de viviendas nuevas, deterioro del stock existente.",
                },
                {
                  caso: "Precios máximos de gasolina",
                  descripcion: "Durante crisis energéticas, los precios máximos han causado largas colas en gasolineras y escasez.",
                },
              ],
            },
            {
              subtitulo: "Cómo los precios mínimos afectan los resultados del mercado",
              descripcion: "Un precio mínimo es un límite legal sobre el precio al que se puede vender un bien. Para que sea vinculante, debe establecerse por encima del precio de equilibrio.",
              efectos: [
                {
                  nombre: "Excedente",
                  descripcion: "Cuando el precio mínimo está por encima del equilibrio, la cantidad ofrecida excede la cantidad demandada, creando excedente.",
                  calculo: "Excedente = Cantidad ofrecida - Cantidad demandada al precio mínimo",
                },
              ],
              ejemplos: [
                {
                  caso: "Salario mínimo",
                  descripcion: "Un salario mínimo por encima del equilibrio puede causar desempleo, especialmente entre trabajadores jóvenes y no calificados.",
                  debate: "Los economistas debaten si los beneficios (mayores salarios para empleados) superan los costos (desempleo).",
                  evidencia: "Estudios empíricos muestran efectos mixtos, dependiendo del nivel del salario mínimo y las condiciones del mercado laboral.",
                },
                {
                  caso: "Precios de soporte agrícola",
                  descripcion: "Gobiernos establecen precios mínimos para productos agrícolas, a menudo resultando en excedentes que el gobierno debe comprar.",
                },
              ],
            },
            {
              subtitulo: "Evaluación de los controles de precios",
              analisis: [
                {
                  aspecto: "Eficiencia",
                  descripcion: "Los controles de precios generalmente reducen la eficiencia económica al impedir que los precios equilibren oferta y demanda.",
                },
                {
                  aspecto: "Equidad",
                  descripcion: "Los controles de precios a menudo se implementan por razones de equidad, pero pueden tener efectos distributivos no deseados.",
                  ejemplo: "El control de alquileres puede beneficiar a inquilinos actuales pero perjudicar a futuros inquilinos.",
                },
              ],
            },
          ],
        },
        {
          titulo: "Los impuestos",
          contenido: [
            {
              subtitulo: "Cómo los impuestos sobre los vendedores afectan los resultados del mercado",
              descripcion: "Un impuesto sobre los vendedores desplaza la curva de oferta hacia arriba por el monto del impuesto.",
              analisis: [
                {
                  paso: "Efecto inmediato",
                  descripcion: "La curva de oferta se desplaza hacia arriba, creando una cuña entre el precio que pagan los compradores y el precio que reciben los vendedores.",
                },
                {
                  paso: "Nuevo equilibrio",
                  descripcion: "El precio que pagan los compradores aumenta, el precio que reciben los vendedores disminuye, y la cantidad intercambiada disminuye.",
                },
                {
                  paso: "Incidencia fiscal",
                  descripcion: "Tanto compradores como vendedores comparten la carga del impuesto, independientemente de quién lo pague legalmente.",
                },
              ],
            },
            {
              subtitulo: "Cómo los impuestos sobre los compradores afectan los resultados del mercado",
              descripcion: "Un impuesto sobre los compradores desplaza la curva de demanda hacia abajo por el monto del impuesto.",
              conclusion: "El resultado final es idéntico al impuesto sobre vendedores: misma incidencia, mismo efecto en precios y cantidades.",
            },
            {
              subtitulo: "Elasticidad e incidencia fiscal",
              principio: "La incidencia de un impuesto recae más pesadamente sobre el lado del mercado que es menos elástico.",
              casos: [
                {
                  situacion: "Demanda inelástica, oferta elástica",
                  resultado: "Los compradores soportan la mayor parte del impuesto",
                  ejemplo: "Impuestos sobre gasolina: los consumidores pagan la mayor parte porque la demanda es inelástica a corto plazo.",
                  razon: "Los vendedores pueden ajustar fácilmente la cantidad ofrecida, pero los compradores no pueden reducir fácilmente su consumo.",
                },
                {
                  situacion: "Demanda elástica, oferta inelástica",
                  resultado: "Los vendedores soportan la mayor parte del impuesto",
                  ejemplo: "Impuestos sobre bienes de lujo: los vendedores absorben más del impuesto porque los compradores pueden fácilmente no comprar.",
                  razon: "Los compradores pueden fácilmente cambiar a sustitutos, pero los vendedores no pueden ajustar rápidamente la producción.",
                },
              ],
            },
          ],
        },
        {
          titulo: "Pérdida de peso muerto y ganancias del comercio",
          contenido: [
            {
              subtitulo: "La pérdida de peso muerto de un impuesto",
              descripcion: "La pérdida de peso muerto es la reducción en el excedente total que resulta de una distorsión del mercado, como un impuesto.",
              componentes: [
                {
                  elemento: "Pérdida de excedente del consumidor",
                  descripcion: "Los consumidores pierden excedente debido al precio más alto y menor cantidad.",
                },
                {
                  elemento: "Pérdida de excedente del productor",
                  descripcion: "Los productores pierden excedente debido al precio neto más bajo y menor cantidad.",
                },
                {
                  elemento: "Recaudación fiscal",
                  descripcion: "El gobierno recauda ingresos igual al impuesto multiplicado por la cantidad vendida.",
                },
                {
                  elemento: "Pérdida neta",
                  descripcion: "La pérdida de peso muerto es la pérdida total de excedente menos la recaudación fiscal.",
                },
              ],
              calculo: "PPM = (1/2) × impuesto × reducción en cantidad",
            },
            {
              subtitulo: "Los determinantes de la pérdida de peso muerto",
              factores: [
                {
                  factor: "Elasticidades de oferta y demanda",
                  relacion: "Cuanto más elásticas sean la oferta y demanda, mayor será la pérdida de peso muerto.",
                  razon: "Mayor elasticidad significa mayor reducción en cantidad cuando se impone el impuesto.",
                },
                {
                  factor: "Tamaño del impuesto",
                  relacion: "La pérdida de peso muerto aumenta más que proporcionalmente con el tamaño del impuesto.",
                  formula: "PPM ∝ (impuesto)²",
                  implicacion: "Duplicar un impuesto cuadruplica la pérdida de peso muerto.",
                },
              ],
            },
            {
              subtitulo: "Pérdida de peso muerto y recaudación fiscal a medida que varían los impuestos",
              analisis: [
                {
                  concepto: "Curva de Laffer",
                  descripcion: "Muestra la relación entre las tasas de impuestos y la recaudación fiscal total.",
                  forma: "Tiene forma de U invertida: la recaudación aumenta con tasas bajas, pero disminuye con tasas muy altas.",
                  punto_maximo: "Existe una tasa de impuesto que maximiza la recaudación, pero no necesariamente maximiza el bienestar.",
                },
                {
                  concepto: "Trade-off entre recaudación y eficiencia",
                  descripcion: "Los gobiernos enfrentan un trade-off entre recaudar ingresos y minimizar distorsiones económicas.",
                  principio: "Los impuestos pequeños en muchos bienes causan menos pérdida de peso muerto que impuestos grandes en pocos bienes.",
                },
              ],
            },
          ],
        },
      ],
    },
    formulas: [
      {
        nombre: "Incidencia Fiscal",
        formula: "Proporción pagada por compradores = Es/(Es + |Ed|)",
        descripcion: "La proporción del impuesto pagada por compradores depende de las elasticidades relativas.",
        ejemplo: "Si Es = 2 y Ed = -1, compradores pagan 2/(2+1) = 2/3 del impuesto",
        grafico: "Curvas con diferentes elasticidades muestran diferentes incidencias fiscales.",
      },
      {
        nombre: "Pérdida de Peso Muerto",
        formula: "PPM = (1/2) × t × ΔQ",
        descripcion: "Donde t es el impuesto y ΔQ es la reducción en cantidad debido al impuesto.",
        ejemplo: "Con impuesto de $2 y reducción de cantidad de 10 unidades: PPM = (1/2) × 2 × 10 = $10",
        grafico: "Triángulo entre las curvas de oferta y demanda representa la pérdida de peso muerto.",
      },
      {
        nombre: "Recaudación Fiscal",
        formula: "R = t × Q_nueva",
        descripcion: "La recaudación es el impuesto multiplicado por la cantidad vendida después del impuesto.",
        ejemplo: "Con impuesto de $2 y cantidad nueva de 40: R = 2 × 40 = $80",
        grafico: "Rectángulo con altura igual al impuesto y base igual a la cantidad vendida.",
      },
      {
        nombre: "Escasez por Precio Máximo",
        formula: "Escasez = Qd(P_max) - Qs(P_max)",
        descripcion: "La escasez es la diferencia entre cantidad demandada y ofrecida al precio máximo.",
        ejemplo: "Si al precio máximo de $3, Qd = 100 y Qs = 60, entonces Escasez = 40 unidades",
        grafico: "Distancia horizontal entre curvas de oferta y demanda al precio máximo.",
      },
    ],
    conceptosClave: [
      "Precio máximo",
      "Precio mínimo",
      "Política vinculante",
      "Escasez",
      "Excedente",
      "Incidencia fiscal",
      "Pérdida de peso muerto",
      "Recaudación fiscal",
      "Cuña fiscal",
      "Curva de Laffer",
      "Eficiencia vs equidad",
      "Mecanismos de asignación",
    ],
    ejemplosReales: [
      {
        titulo: "Control de Alquileres en Nueva York",
        descripcion: "Nueva York ha tenido controles de alquileres desde la Segunda Guerra Mundial. Aunque protege a inquilinos actuales, ha creado escasez de viviendas, mercados negros, y reducido incentivos para mantenimiento y construcción nueva.",
        efectos: "Apartamentos controlados en mal estado, largas listas de espera, discriminación en selección de inquilinos.",
        grafico: "Precio máximo por debajo del equilibrio creando escasez persistente.",
      },
      {
        titulo: "Impuestos al Tabaco y Salud Pública",
        descripcion: "Los impuestos al tabaco tienen doble propósito: recaudar ingresos y reducir el consumo por razones de salud pública. La demanda inelástica significa que los fumadores pagan la mayor parte del impuesto.",
        efectos: "Reducción en consumo (especialmente entre jóvenes), alta recaudación fiscal, contrabando en áreas con impuestos muy altos.",
        elasticidad: "Demanda a corto plazo: Ed ≈ -0.4, a largo plazo: Ed ≈ -1.0",
      },
      {
        titulo: "Salario Mínimo y Empleo Juvenil",
        descripcion: "El debate sobre el salario mínimo ilustra el trade-off entre ayudar a trabajadores de bajos ingresos y potencialmente reducir oportunidades de empleo, especialmente para trabajadores jóvenes y no calificados.",
        evidencia: "Estudios muestran efectos mixtos: algunos encuentran pequeños efectos negativos en empleo, otros no encuentran efectos significativos.",
        factores: "El efecto depende del nivel del salario mínimo relativo al equilibrio, elasticidad de la demanda laboral, y condiciones económicas generales.",
      },
    ],
  },
  7: {
    titulo: "Consumidores, productores y eficiencia de los mercados",
    resumen: "Análisis del bienestar económico a través del excedente del consumidor y del productor.",
    duracion: "50 min",
    dificultad: "Intermedio",
    objetivos: [
      "Definir y calcular el excedente del consumidor",
      "Definir y calcular el excedente del productor",
      "Evaluar la eficiencia de los mercados libres",
      "Analizar cómo las políticas afectan el bienestar económico",
    ],
    contenido: {
      introduccion:
        "Cuando los consumidores van al mercado a comprar maíz, pueden estar dispuestos a pagar más de lo que realmente pagan. Esta diferencia entre lo que están dispuestos a pagar y lo que realmente pagan se llama excedente del consumidor. De manera similar, cuando los productores van al mercado a vender maíz, pueden estar dispuestos a vender por menos de lo que realmente reciben. El análisis del bienestar económico estudia cómo la asignación de recursos afecta el bienestar económico.",
      secciones: [
        {
          titulo: "Excedente del consumidor",
          contenido: [
            {
              subtitulo: "Disposición a pagar",
              descripcion: "La disposición a pagar es la cantidad máxima que un comprador pagará por un bien. Mide qué tanto valora el comprador el bien.",
              ejemplo: "Si Juan está dispuesto a pagar máximo $100 por un libro de economía, pero puede comprarlo por $80, obtiene un beneficio de $20.",
              medicion: "La disposición a pagar se refleja en la curva de demanda: a cada precio, la curva muestra la cantidad que los consumidores están dispuestos a comprar.",
            },
            {
              subtitulo: "Uso de la curva de demanda para medir el excedente del consumidor",
              descripcion: "El excedente del consumidor es el área debajo de la curva de demanda y por encima del precio, hasta la cantidad comprada.",
              calculo: [
                {
                  metodo: "Método gráfico",
                  descripcion: "El excedente del consumidor es el área del triángulo formado por la curva de demanda, el precio de mercado y el eje vertical.",
                  formula: "Para demanda lineal: EC = (1/2) × base × altura = (1/2) × Q × (P_max - P_mercado)",
                },
                {
                  metodo: "Método de integración",
                  descripcion: "Para curvas de demanda no lineales, se calcula integrando la función de demanda.",
                  formula: "EC = ∫[0 a Q] P(q)dq - P × Q",
                },
              ],
            },
            {
              subtitulo: "Cómo un precio más bajo aumenta el excedente del consumidor",
              efectos: [
                {
                  efecto: "Consumidores existentes pagan menos",
                  descripcion: "Los consumidores que ya compraban el bien se benefician del precio más bajo.",
                },
                {
                  efecto: "Nuevos consumidores entran al mercado",
                  descripcion: "Consumidores que antes no compraban porque el precio era muy alto, ahora pueden comprar.",
                },
              ],
              formula: "Cambio en EC = (Reducción de precio × Cantidad original) + (1/2 × Reducción de precio × Aumento en cantidad)",
            },
          ],
        },
        {
          titulo: "Excedente del productor",
          contenido: [
            {
              subtitulo: "Costo y disposición a vender",
              descripcion: "El costo de un vendedor es el valor de todo aquello a lo que el vendedor debe renunciar para producir un bien. La disposición a vender es el precio mínimo al que un vendedor está dispuesto a vender.",
              relacion: "La disposición a vender de un productor es igual a su costo de producción.",
              ejemplo: "Si a María le cuesta $60 producir un bien, no lo venderá por menos de $60. Si puede venderlo por $80, obtiene un beneficio de $20.",
            },
            {
              subtitulo: "Uso de la curva de oferta para medir el excedente del productor",
              descripcion: "El excedente del productor es el área por encima de la curva de oferta y por debajo del precio, hasta la cantidad vendida.",
              calculo: [
                {
                  metodo: "Método gráfico",
                  descripcion: "El excedente del productor es el área del triángulo formado por la curva de oferta, el precio de mercado y el eje vertical.",
                  formula: "Para oferta lineal: EP = (1/2) × base × altura = (1/2) × Q × (P_mercado - P_min)",
                },
                {
                  metodo: "Interpretación económica",
                  descripcion: "Representa el beneficio total que obtienen los productores por participar en el mercado.",
                },
              ],
            },
            {
              subtitulo: "Cómo un precio más alto aumenta el excedente del productor",
              efectos: [
                {
                  efecto: "Productores existentes reciben más",
                  descripcion: "Los productores que ya vendían el bien se benefician del precio más alto.",
                },
                {
                  efecto: "Nuevos productores entran al mercado",
                  descripcion: "Productores que antes no vendían porque el precio era muy bajo, ahora pueden vender.",
                },
              ],
              formula: "Cambio en EP = (Aumento de precio × Cantidad original) + (1/2 × Aumento de precio × Aumento en cantidad)",
            },
          ],
        },
        {
          titulo: "Eficiencia del mercado",
          contenido: [
            {
              subtitulo: "El planificador social benevolente",
              descripcion: "Para evaluar los resultados del mercado, consideramos qué haría un planificador social benevolente que quiere maximizar el bienestar económico total de la sociedad.",
              objetivo: "Maximizar el excedente total = Excedente del consumidor + Excedente del productor",
              restriccion: "Sujeto a que la cantidad producida no puede exceder la cantidad consumida.",
            },
            {
              subtitulo: "Evaluación del equilibrio del mercado",
              criterios: [
                {
                  criterio: "¿Los mercados libres asignan la oferta a los compradores que más valoran el bien?",
                  respuesta: "Sí. Los compradores que más valoran el bien (mayor disposición a pagar) son quienes lo compran.",
                  mecanismo: "El precio de mercado actúa como señal: solo compran quienes valoran el bien más que el precio.",
                },
                {
                  criterio: "¿Los mercados libres asignan la demanda a los vendedores que pueden producir al menor costo?",
                  respuesta: "Sí. Los vendedores con menores costos son quienes producen y venden.",
                  mecanismo: "Solo los productores con costos menores al precio de mercado encuentran rentable producir.",
                },
                {
                  criterio: "¿Los mercados libres producen la cantidad de bienes que maximiza el excedente total?",
                  respuesta: "Sí. El equilibrio de mercado maximiza la suma del excedente del consumidor y del productor.",
                  condicion: "En equilibrio: Beneficio marginal (de la curva de demanda) = Costo marginal (de la curva de oferta)",
                },
              ],
            },
            {
              subtitulo: "Los tres insights sobre la eficiencia del mercado",
              insights: [
                {
                  numero: 1,
                  titulo: "Los mercados libres asignan la oferta de bienes a los compradores que más los valoran",
                  medida: "Medido por su disposición a pagar.",
                },
                {
                  numero: 2,
                  titulo: "Los mercados libres asignan la demanda de bienes a los vendedores que pueden producirlos al menor costo",
                  medida: "Medido por su costo de producción.",
                },
                {
                  numero: 3,
                  titulo: "Los mercados libres producen la cantidad de bienes que maximiza la suma del excedente del consumidor y del productor",
                  condicion: "Cuando beneficio marginal = costo marginal.",
                },
              ],
            },
          ],
        },
        {
          titulo: "Conclusión: la eficiencia y las fallas del mercado",
          contenido: [
            {
              subtitulo: "Cuándo los mercados son eficientes",
              condiciones: [
                "Mercados perfectamente competitivos",
                "Sin externalidades",
                "Sin poder de mercado",
                "Información completa",
                "Derechos de propiedad bien definidos",
              ],
              resultado: "Cuando se cumplen estas condiciones, el equilibrio de mercado maximiza el excedente total.",
            },
            {
              subtitulo: "Cuándo los mercados fallan",
              fallas: [
                {
                  tipo: "Poder de mercado",
                  descripcion: "Cuando compradores o vendedores pueden influir en los precios.",
                  ejemplo: "Monopolios, monopsonios.",
                  efecto: "Precios y cantidades alejados del óptimo social.",
                },
                {
                  tipo: "Externalidades",
                  descripcion: "Cuando las acciones de una persona afectan el bienestar de otros sin compensación.",
                  ejemplo: "Contaminación, educación.",
                  efecto: "El mercado no considera todos los costos y beneficios sociales.",
                },
                {
                  tipo: "Bienes públicos",
                  descripcion: "Bienes que son no rivales y no excluibles.",
                  ejemplo: "Defensa nacional, investigación básica.",
                  efecto: "El mercado puede no proveer la cantidad óptima.",
                },
                {
                  tipo: "Información asimétrica",
                  descripcion: "Cuando una parte tiene más información que la otra.",
                  ejemplo: "Mercado de autos usados, seguros.",
                  efecto: "Selección adversa, riesgo moral.",
                },
              ],
            },
            {
              subtitulo: "Implicaciones para la política pública",
              principios: [
                "Los mercados libres son generalmente eficientes",
                "La intervención gubernamental se justifica cuando hay fallas de mercado",
                "Las políticas deben diseñarse cuidadosamente para no crear distorsiones innecesarias",
                "Existe un trade-off entre eficiencia y equidad",
              ],
            },
          ],
        },
      ],
    },
    formulas: [
      {
        nombre: "Excedente del Consumidor (Demanda Lineal)",
        formula: "EC = (1/2) × Q × (P_max - P)",
        descripcion: "Donde P_max es el precio máximo (intersección con eje Y) y P es el precio de mercado.",
        ejemplo: "Si P_max = $100, P = $60, Q = 40: EC = (1/2) × 40 × (100-60) = $800",
        grafico: "Triángulo por encima del precio de mercado y por debajo de la curva de demanda.",
      },
      {
        nombre: "Excedente del Productor (Oferta Lineal)",
        formula: "EP = (1/2) × Q × (P - P_min)",
        descripcion: "Donde P_min es el precio mínimo (intersección con eje Y) y P es el precio de mercado.",
        ejemplo: "Si P_min = $20, P = $60, Q = 40: EP = (1/2) × 40 × (60-20) = $800",
        grafico: "Triángulo por debajo del precio de mercado y por encima de la curva de oferta.",
      },
      {
        nombre: "Excedente Total",
        formula: "ET = EC + EP",
        descripcion: "El excedente total es la suma del excedente del consumidor y del productor.",
        ejemplo: "ET = $800 + $800 = $1600",
        interpretacion: "Mide el bienestar económico total generado por el mercado.",
      },
      {
        nombre: "Condición de Eficiencia",
        formula: "Beneficio Marginal = Costo Marginal",
        descripcion: "En el óptimo social, el beneficio marginal del último consumidor iguala el costo marginal del último productor.",
        equivalencia: "En equilibrio competitivo: Precio = Beneficio Marginal = Costo Marginal",
        significado: "Esta condición asegura que se maximiza el excedente total.",
      },
    ],
    conceptosClave: [
      "Excedente del consumidor",
      "Disposición a pagar",
      "Excedente del productor",
      "Costo de producción",
      "Excedente total",
      "Eficiencia económica",
      "Planificador social benevolente",
      "Asignación eficiente",
      "Beneficio marginal",
      "Costo marginal",
      "Fallas de mercado",
      "Bienestar económico",
    ],
    ejemplosReales: [
      {
        titulo: "Excedente del Consumidor en Comercio Electrónico",
        descripcion: "Plataformas como Amazon permiten a consumidores comparar precios fácilmente, aumentando el excedente del consumidor al encontrar mejores ofertas. Los algoritmos de recomendación también ayudan a los consumidores a encontrar productos que valoran más.",
        medicion: "Estudios estiman que el comercio electrónico ha aumentado el excedente del consumidor en cientos de miles de millones de dólares anuales.",
      },
      {
        titulo: "Excedente del Productor en Mercados de Commodities",
        descripcion: "Los productores de petróleo con costos de extracción bajos (como Arabia Saudita) obtienen grandes excedentes del productor cuando los precios del petróleo son altos, mientras que productores con costos altos (como petróleo de esquisto) obtienen excedentes menores.",
        variacion: "El excedente del productor varía significativamente con los precios del petróleo y los costos de producción.",
      },
      {
        titulo: "Eficiencia en Mercados de Valores",
        descripcion: "Los mercados de valores eficientes asignan capital a las empresas que pueden usarlo más productivamente. Los precios de las acciones reflejan la información disponible sobre el valor de las empresas, guiando las decisiones de inversión.",
        mecanismo: "Los precios actúan como señales que dirigen los recursos hacia sus usos más valiosos.",
      },
    ],
  },
  8: {
    titulo: "Aplicación: los costos de los impuestos",
    resumen: "Análisis detallado del impacto de los impuestos en el bienestar económico y la eficiencia.",
    duracion: "45 min",
    dificultad: "Intermedio",
    objetivos: [
      "Analizar cómo los impuestos afectan el bienestar económico",
      "Calcular la pérdida de peso muerto de los impuestos",
      "Explicar los determinantes de la pérdida de peso muerto",
      "Evaluar el trade-off entre recaudación fiscal y eficiencia",
    ],
    contenido: {
      introduccion:
        "Los impuestos son omnipresentes en la vida económica. Pagamos impuestos sobre nuestros ingresos, sobre las ventas de la mayoría de los artículos que compramos, sobre nuestras propiedades, sobre la gasolina, sobre las llamadas telefónicas, sobre las bebidas alcohólicas, sobre los boletos de avión, sobre las nóminas, y más. Debido a que los impuestos son tan comunes, es crucial entender cómo afectan la economía.",
      secciones: [
        {
          titulo: "La pérdida de peso muerto de los impuestos",
          contenido: [
            {
              subtitulo: "Cómo un impuesto afecta a los participantes del mercado",
              descripcion: "Un impuesto sobre un bien coloca una cuña entre el precio que pagan los compradores y el precio que reciben los vendedores. Esta cuña cambia los incentivos que enfrentan compradores y vendedores.",
              efectos: [
                {
                  grupo: "Compradores",
                  efecto: "Enfrentan un precio efectivo más alto, reduciendo su excedente del consumidor.",
                  mecanismo: "Algunos compradores salen del mercado, otros pagan más por la misma cantidad.",
                },
                {
                  grupo: "Vendedores",
                  efecto: "Reciben un precio efectivo más bajo, reduciendo su excedente del productor.",
                  mecanismo: "Algunos vendedores salen del mercado, otros reciben menos por la misma cantidad.",
                },
                {
                  grupo: "Gobierno",
                  efecto: "Recibe ingresos fiscales igual al impuesto multiplicado por la cantidad vendida.",
                  uso: "Estos ingresos pueden usarse para proveer servicios públicos o reducir otros impuestos.",
                },
              ],
            },
            {
              subtitulo: "Pérdida de peso muerto",
              descripcion: "La pérdida de peso muerto es la reducción en el excedente total que resulta de la imposición de un impuesto. Representa el valor perdido para la sociedad debido a las transacciones que no ocurren por el impuesto.",
              calculo: [
                {
                  paso: "Calcular excedente total sin impuesto",
                  formula: "ET_sin = EC_sin + EP_sin",
                },
                {
                  paso: "Calcular excedente total con impuesto",
                  formula: "ET_con = EC_con + EP_con + Recaudación",
                },
                {
                  paso: "Calcular pérdida de peso muerto",
                  formula: "PPM = ET_sin - ET_con",
                },
              ],
              interpretacion: "La PPM representa transacciones mutuamente beneficiosas que no ocurren debido al impuesto.",
            },
            {
              subtitulo: "Análisis gráfico de la pérdida de peso muerto",
              descripcion: "Gráficamente, la pérdida de peso muerto es el área del triángulo formado entre las curvas de oferta y demanda, desde la cantidad con impuesto hasta la cantidad sin impuesto.",
              formula_triangulo: "PPM = (1/2) × base × altura = (1/2) × (Q_sin - Q_con) × impuesto",
              componentes: [
                "Base: reducción en cantidad debido al impuesto",
                "Altura: monto del impuesto por unidad",
                "El triángulo representa el valor perdido de las transacciones no realizadas",
              ],
            },
          ],
        },
        {
          titulo: "Los determinantes de la pérdida de peso muerto",
          contenido: [
            {
              subtitulo: "Elasticidades de la oferta y la demanda",
              principio: "La pérdida de peso muerto de un impuesto es mayor cuando la oferta o la demanda son más elásticas.",
              casos: [
                {
                  situacion: "Oferta y demanda inelásticas",
                  resultado: "Pérdida de peso muerto pequeña",
                  razon: "Las cantidades cambian poco cuando se impone el impuesto.",
                  ejemplo: "Impuestos sobre medicamentos esenciales: la demanda es muy inelástica.",
                  grafico: "Curvas empinadas resultan en triángulo de PPM pequeño.",
                },
                {
                  situacion: "Oferta y demanda elásticas",
                  resultado: "Pérdida de peso muerto grande",
                  razon: "Las cantidades cambian mucho cuando se impone el impuesto.",
                  ejemplo: "Impuestos sobre bienes de lujo: tanto oferta como demanda son elásticas.",
                  grafico: "Curvas planas resultan en triángulo de PPM grande.",
                },
              ],
              implicacion: "Los impuestos causan menos distorsión cuando se aplican a bienes con oferta y demanda inelásticas.",
            },
            {
              subtitulo: "El tamaño del impuesto",
              relacion: "La pérdida de peso muerto aumenta más que proporcionalmente con el tamaño del impuesto.",
              formula: "PPM ∝ (impuesto)²",
              explicacion: [
                "Cuando el impuesto es pequeño, la PPM es pequeña",
                "Cuando el impuesto se duplica, la PPM se cuadruplica",
                "Cuando el impuesto se triplica, la PPM se multiplica por nueve",
              ],
              razon: "Un impuesto mayor reduce más la cantidad (base del triángulo) y la altura también es mayor.",
              implicacion: "Es mejor tener muchos impuestos pequeños que pocos impuestos grandes.",
            },
          ],
        },
        {
          titulo: "Pérdida de peso muerto y recaudación fiscal",
          contenido: [
            {
              subtitulo: "La curva de Laffer",
              descripcion: "La curva de Laffer muestra la relación entre las tasas de impuestos y la recaudación fiscal total. Tiene forma de U invertida.",
              puntos_clave: [
                {
                  tasa: "Tasa de impuesto = 0%",
                  recaudacion: "Recaudación = 0",
                  razon: "No hay impuesto que recaudar.",
                },
                {
                  tasa: "Tasa de impuesto = 100%",
                  recaudacion: "Recaudación = 0",
                  razon: "Nadie tiene incentivos para trabajar o producir.",
                },
                {
                  tasa: "Tasa intermedia",
                  recaudacion: "Recaudación máxima",
                  razon: "Balance óptimo entre tasa e incentivos.",
                },
              ],
              controversia: "Los economistas debaten dónde están ubicados los países en la curva de Laffer.",
            },
            {
              subtitulo: "Evolución de la pérdida de peso muerto y la recaudación",
              patrones: [
                {
                  fase: "Impuestos bajos",
                  recaudacion: "Aumenta rápidamente con la tasa",
                  perdida: "Pérdida de peso muerto pequeña pero creciente",
                  razon: "Pocas distorsiones, base tributaria amplia.",
                },
                {
                  fase: "Impuestos moderados",
                  recaudacion: "Sigue aumentando pero más lentamente",
                  perdida: "Pérdida de peso muerto aumenta más rápidamente",
                  razon: "Comienzan a aparecer distorsiones significativas.",
                },
                {
                  fase: "Impuestos altos",
                  recaudacion: "Puede comenzar a disminuir",
                  perdida: "Pérdida de peso muerto muy grande",
                  razon: "Fuertes incentivos para evadir o reducir actividad gravada.",
                },
              ],
            },
            {
              subtitulo: "Implicaciones para el diseño de políticas fiscales",
              principios: [
                {
                  principio: "Eficiencia",
                  descripcion: "Minimizar la pérdida de peso muerto total del sistema tributario.",
                  aplicacion: "Gravar bienes con demanda inelástica, distribuir impuestos ampliamente.",
                },
                {
                  principio: "Equidad",
                  descripcion: "Distribuir la carga fiscal de manera justa.",
                  tension: "A menudo conflicta con la eficiencia.",
                },
                {
                  principio: "Simplicidad administrativa",
                  descripcion: "Minimizar costos de cumplimiento y administración.",
                  importancia: "Costos administrativos altos pueden superar beneficios de diseños complejos.",
                },
              ],
            },
          ],
        },
        {
          titulo: "Aplicaciones y casos especiales",
          contenido: [
            {
              subtitulo: "Impuestos correctivos",
              descripcion: "Algunos impuestos están diseñados para corregir externalidades negativas, no solo para recaudar ingresos.",
              ejemplos: [
                {
                  impuesto: "Impuesto al carbono",
                  objetivo: "Reducir emisiones de gases de efecto invernadero",
                  efecto: "La 'pérdida de peso muerto' puede ser en realidad un beneficio social.",
                },
                {
                  impuesto: "Impuesto al tabaco",
                  objetivo: "Reducir consumo por razones de salud pública",
                  efecto: "Beneficios de salud pueden superar la pérdida de peso muerto.",
                },
              ],
              principio: "Cuando hay externalidades, el impuesto óptimo puede no ser cero.",
            },
            {
              subtitulo: "Impuestos sobre el trabajo vs. impuestos sobre el consumo",
              comparacion: [
                {
                  tipo: "Impuesto sobre la renta",
                  efecto: "Reduce incentivos para trabajar y ahorrar",
                  distorsion: "Afecta decisiones trabajo-ocio y consumo presente-futuro",
                },
                {
                  tipo: "Impuesto al consumo (IVA)",
                  efecto: "Reduce incentivos para consumir",
                  distorsion: "Principalmente afecta decisiones de consumo",
                },
              ],
              debate: "Los economistas debaten cuál sistema es más eficiente y equitativo.",
            },
          ],
        },
      ],
    },
    formulas: [
      {
        nombre: "Pérdida de Peso Muerto (Método Triangular)",
        formula: "PPM = (1/2) × t × ΔQ",
        descripcion: "Donde t es el impuesto por unidad y ΔQ es la reducción en cantidad.",
        ejemplo: "Con impuesto de $3 y reducción de cantidad de 20: PPM = (1/2) × 3 × 20 = $30",
        grafico: "Área del triángulo entre curvas de oferta y demanda desde Q_con hasta Q_sin.",
      },
      {
        nombre: "Pérdida de Peso Muerto (Función de Elasticidades)",
        formula: "PPM = (1/2) × t² × Q₀ × [Ed × Es / (Ed + Es)]",
        descripcion: "Donde Q₀ es la cantidad inicial, Ed es elasticidad de demanda, Es es elasticidad de oferta.",
        uso: "Útil para calcular PPM cuando se conocen las elasticidades.",
        interpretacion: "Muestra cómo la PPM depende del cuadrado del impuesto y de las elasticidades.",
      },
      {
        nombre: "Recaudación Fiscal",
        formula: "R = t × Q_con",
        descripcion: "La recaudación es el impuesto multiplicado por la cantidad vendida después del impuesto.",
        maximizacion: "La recaudación se maximiza cuando la elasticidad de la demanda es -1 (elasticidad unitaria).",
        relacion: "R aumenta con t inicialmente, pero puede disminuir si t es muy alto.",
      },
      {
        nombre: "Excedente Total con Impuesto",
        formula: "ET_con = EC_con + EP_con + R",
        descripcion: "El excedente total incluye los excedentes de consumidores y productores más la recaudación fiscal.",
        comparacion: "ET_sin - ET_con = PPM (la pérdida de peso muerto)",
        interpretacion: "La recaudación fiscal es una transferencia, no una pérdida para la sociedad.",
      },
    ],
    conceptosClave: [
      "Pérdida de peso muerto",
      "Cuña fiscal",
      "Recaudación fiscal",
      "Curva de Laffer",
      "Elasticidad e impuestos",
      "Eficiencia vs recaudación",
      "Impuestos correctivos",
      "Distorsiones económicas",
      "Incidencia fiscal",
      "Diseño de política fiscal",
      "Costo social de los impuestos",
      "Optimización tributaria",
    ],
    ejemplosReales: [
      {
        titulo: "Impuestos al Tabaco: Eficiencia vs. Salud Pública",
        descripcion: "Los impuestos al tabaco crean pérdida de peso muerto en el sentido tradicional, pero generan beneficios de salud pública al reducir el consumo. El cálculo del bienestar debe incluir estos beneficios externos.",
        datos: "Un impuesto de $1 por paquete puede reducir el consumo en 10-15% y generar beneficios de salud valorados en miles de millones.",
        politica: "La tasa óptima de impuesto debe balancear recaudación, reducción de consumo y pérdida de peso muerto.",
      },
      {
        titulo: "Reforma Fiscal de 1986 en Estados Unidos",
        descripcion: "La reforma redujo las tasas marginales de impuesto sobre la renta del 50% al 28% para los ingresos más altos, mientras amplió la base tributaria eliminando deducciones. Esto redujo la pérdida de peso muerto manteniendo la recaudación.",
        resultado: "Mayor eficiencia económica sin pérdida significativa de ingresos fiscales.",
        leccion: "Bajar tasas y ampliar bases puede mejorar eficiencia sin sacrificar recaudación.",
      },
      {
        titulo: "Impuesto al Carbono en Columbia Británica",
        descripcion: "Implementado en 2008, comenzó en CAD $10 por tonelada de CO2 y aumentó gradualmente. Fue diseñado para ser neutral en ingresos, reduciendo otros impuestos.",
        efectos: "Redujo emisiones de carbono en 5-15% mientras mantuvo el crecimiento económico.",
        innovacion: "Demostró que los impuestos ambientales pueden ser efectivos sin dañar la economía.",
      },
    ],
  },
  9: {
    titulo: "Aplicación: comercio internacional",
    resumen: "Análisis del impacto del comercio internacional en el bienestar económico nacional.",
    duracion: "60 min",
    dificultad: "Avanzado",
    objetivos: [
      "Analizar los efectos del comercio libre en el bienestar nacional",
      "Evaluar el impacto de aranceles y cuotas de importación",
      "Examinar los argumentos a favor y en contra del proteccionismo",
      "Calcular las ganancias y pérdidas del comercio internacional",
    ],
    contenido: {
      introduccion:
        "Si usted revisa las etiquetas de su ropa, probablemente encontrará que fue hecha en un país lejano. Una camisa puede haber sido hecha en Malasia, los pantalones en México, y los zapatos en China. Mientras tanto, Estados Unidos produce muchos productos que vende al extranjero. El comercio internacional puede hacer que todos estén mejor, pero también crea ganadores y perdedores.",
      secciones: [
        {
          titulo: "Los determinantes del comercio",
          contenido: [
            {
              subtitulo: "El equilibrio sin comercio internacional",
              descripcion: "Antes de analizar los efectos del comercio, debemos determinar el precio y la cantidad que prevalecerían sin comercio internacional (autarquía).",
              proceso: [
                "Identificar las curvas de oferta y demanda domésticas",
                "Encontrar el punto de intersección",
                "El precio de autarquía es donde Qd doméstica = Qs doméstica",
              ],
              importancia: "El precio de autarquía determina si el país será exportador o importador.",
            },
            {
              subtitulo: "El precio mundial y la ventaja comparativa",
              descripcion: "El precio mundial es el precio que prevalece en los mercados mundiales para ese bien. Se determina por la oferta y demanda mundial.",
              reglas: [
                {
                  condicion: "Precio doméstico < Precio mundial",
                  resultado: "El país tiene ventaja comparativa y será exportador",
                  razon: "Puede producir el bien más barato que el resto del mundo",
                },
                {
                  condicion: "Precio doméstico > Precio mundial",
                  resultado: "El país no tiene ventaja comparativa y será importador",
                  razon: "Otros países pueden producir el bien más barato",
                },
                {
                  condicion: "Precio doméstico = Precio mundial",
                  resultado: "El país no comercia este bien",
                  razon: "No hay ventaja en el comercio",
                },
              ],
            },
          ],
        },
        {
          titulo: "Los ganadores y perdedores del comercio",
          contenido: [
            {
              subtitulo: "Las ganancias y pérdidas de un país exportador",
              descripcion: "Cuando un país se convierte en exportador, el precio doméstico sube al nivel del precio mundial.",
              efectos: [
                {
                  grupo: "Productores domésticos",
                  efecto: "Ganan",
                  razon: "Reciben un precio más alto por su producto",
                  medida: "Aumento en excedente del productor",
                  calculo: "ΔEP = área entre precio viejo y nuevo, hasta la cantidad doméstica producida",
                },
                {
                  grupo: "Consumidores domésticos",
                  efecto: "Pierden",
                  razon: "Pagan un precio más alto por el producto",
                  medida: "Reducción en excedente del consumidor",
                  calculo: "ΔEC = área entre precio viejo y nuevo, hasta la cantidad doméstica consumida",
                },
                {
                  grupo: "País en general",
                  efecto: "Gana",
                  razon: "Las ganancias de los productores superan las pérdidas de los consumidores",
                  medida: "Aumento en excedente total",
                  calculo: "Ganancia neta = área del triángulo de las exportaciones",
                },
              ],
              formula_ganancia: "Ganancia del comercio = (1/2) × (P_mundial - P_autarquia) × Exportaciones",
            },
            {
              subtitulo: "Las ganancias y pérdidas de un país importador",
              descripcion: "Cuando un país se convierte en importador, el precio doméstico baja al nivel del precio mundial.",
              efectos: [
                {
                  grupo: "Consumidores domésticos",
                  efecto: "Ganan",
                  razon: "Pagan un precio más bajo por el producto",
                  medida: "Aumento en excedente del consumidor",
                  calculo: "ΔEC = área entre precio viejo y nuevo, hasta la cantidad doméstica consumida",
                },
                {
                  grupo: "Productores domésticos",
                  efecto: "Pierden",
                  razon: "Reciben un precio más bajo por su producto",
                  medida: "Reducción en excedente del productor",
                  calculo: "ΔEP = área entre precio viejo y nuevo, hasta la cantidad doméstica producida",
                },
                {
                  grupo: "País en general",
                  efecto: "Gana",
                  razon: "Las ganancias de los consumidores superan las pérdidas de los productores",
                  medida: "Aumento en excedente total",
                  calculo: "Ganancia neta = área del triángulo de las importaciones",
                },
              ],
              formula_ganancia: "Ganancia del comercio = (1/2) × (P_autarquia - P_mundial) × Importaciones",
            },
            {
              subtitulo: "Las lecciones para la política comercial",
              principios: [
                "El comercio libre aumenta el excedente total del país",
                "El comercio crea ganadores y perdedores dentro del país",
                "Las ganancias de los ganadores superan las pérdidas de los perdedores",
                "El comercio mejora el bienestar económico de la nación como un todo",
              ],
              implicacion: "Aunque el comercio beneficia al país en general, los grupos que pierden pueden presionar por protección.",
            },
          ],
        },
        {
          titulo: "Los efectos de un arancel",
          contenido: [
            {
              subtitulo: "Análisis de un arancel",
              descripcion: "Un arancel es un impuesto sobre bienes producidos en el extranjero y vendidos domésticament. Aumenta el precio que pagan los consumidores domésticos por encima del precio mundial.",
              efectos_precio: "Precio doméstico = Precio mundial + Arancel",
              efectos_cantidad: [
                "Aumenta la producción doméstica",
                "Reduce el consumo doméstico", 
                "Reduce las importaciones",
              ],
            },
            {
              subtitulo: "Los ganadores y perdedores de un arancel",
              analisis: [
                {
                  grupo: "Consumidores domésticos",
                  efecto: "Pierden",
                  razon: "Pagan precio más alto y consumen menos",
                  medida: "Reducción en excedente del consumidor",
                  area: "Rectángulo + triángulos A, B, C, D",
                },
                {
                  grupo: "Productores domésticos",
                  efecto: "Ganan",
                  razon: "Reciben precio más alto y producen más",
                  medida: "Aumento en excedente del productor",
                  area: "Rectángulo A",
                },
                {
                  grupo: "Gobierno",
                  efecto: "Gana",
                  razon: "Recibe ingresos arancelarios",
                  medida: "Recaudación arancelaria",
                  area: "Rectángulo C",
                  calculo: "Arancel × Cantidad importada",
                },
                {
                  grupo: "País en general",
                  efecto: "Pierde",
                  razon: "Pérdida de peso muerto",
                  medida: "Reducción en excedente total",
                  area: "Triángulos B + D",
                },
              ],
            },
            {
              subtitulo: "La pérdida de peso muerto de un arancel",
              componentes: [
                {
                  triangulo: "Triángulo B (lado de la producción)",
                  descripcion: "Pérdida por producción doméstica ineficiente",
                  explicacion: "Se produce domésticament a costo alto lo que se podría importar a costo bajo",
                  formula: "(1/2) × arancel × aumento en producción doméstica",
                },
                {
                  triangulo: "Triángulo D (lado del consumo)",
                  descripcion: "Pérdida por reducción en consumo",
                  explicacion: "Se pierde consumo que valoraba más que el costo mundial",
                  formula: "(1/2) × arancel × reducción en consumo",
                },
              ],
              total: "PPM total = Triángulo B + Triángulo D",
            },
          ],
        },
        {
          titulo: "Las lecciones para la política comercial",
          contenido: [
            {
              subtitulo: "Los efectos de las cuotas de importación",
              descripcion: "Una cuota de importación es un límite en la cantidad de un bien que puede importarse.",
              similitudes_arancel: [
                "Aumenta el precio doméstico",
                "Reduce el bienestar de los consumidores domésticos",
                "Aumenta el bienestar de los productores domésticos",
                "Causa pérdida de peso muerto",
              ],
              diferencias_arancel: [
                {
                  aspecto: "Ingresos del gobierno",
                  arancel: "El gobierno recibe ingresos arancelarios",
                  cuota: "Los importadores reciben las 'rentas de cuota'",
                  implicacion: "Las cuotas pueden ser menos deseables desde la perspectiva fiscal",
                },
                {
                  aspecto: "Flexibilidad",
                  arancel: "Permite ajuste automático de importaciones con cambios en demanda",
                  cuota: "Fija la cantidad de importaciones independientemente de la demanda",
                  implicacion: "Los aranceles son más flexibles ante cambios económicos",
                },
              ],
            },
            {
              subtitulo: "Otros beneficios del comercio internacional",
              beneficios_adicionales: [
                {
                  beneficio: "Aumento en la variedad de bienes",
                  descripcion: "Los consumidores tienen acceso a productos que no se producen domésticament",
                  ejemplo: "Frutas tropicales en países templados, tecnología especializada",
                },
                {
                  beneficio: "Economías de escala",
                  descripcion: "Las empresas pueden producir para mercados más grandes, reduciendo costos unitarios",
                  ejemplo: "Industria automotriz, farmacéutica, tecnológica",
                },
                {
                  beneficio: "Aumento en la competencia",
                  descripcion: "La competencia extranjera reduce el poder de mercado doméstico",
                  ejemplo: "Entrada de automóviles japoneses mejoró calidad y redujo precios en EE.UU.",
                },
                {
                  beneficio: "Transferencia de tecnología",
                  descripcion: "El comercio facilita la difusión de nuevas tecnologías y conocimientos",
                  ejemplo: "Adopción de técnicas de manufactura, software, procesos industriales",
                },
              ],
            },
          ],
        },
        {
          titulo: "Los argumentos a favor de restringir el comercio",
          contenido: [
            {
              subtitulo: "El argumento de la industria naciente",
              descripcion: "Algunas industrias argumentan que necesitan protección temporal hasta que puedan competir con empresas extranjeras establecidas.",
              logica: "La protección temporal permite a la industria desarrollar economías de escala y experiencia",
              problemas: [
                "Difícil determinar qué industrias realmente se beneficiarán",
                "La protección 'temporal' a menudo se vuelve permanente",
                "Los costos para los consumidores pueden superar los beneficios futuros",
                "Puede crear dependencia de la protección",
              ],
              evaluacion: "Válido en teoría, pero difícil de implementar efectivamente en la práctica",
            },
            {
              subtitulo: "El argumento de la seguridad nacional",
              descripcion: "Algunos argumentan que ciertos sectores son críticos para la seguridad nacional y deben protegerse.",
              ejemplos: [
                "Industria de defensa",
                "Producción de alimentos básicos",
                "Tecnologías críticas",
                "Infraestructura energética",
              ],
              problemas: [
                "Definición amplia puede justificar protección excesiva",
                "Alternativas como reservas estratégicas pueden ser más eficientes",
                "Puede usarse como pretexto para proteccionismo general",
              ],
              evaluacion: "Válido para sectores verdaderamente críticos, pero debe aplicarse con cuidado",
            },
            {
              subtitulo: "El argumento de la competencia desleal",
              descripcion: "Algunos argumentan que el comercio es injusto cuando los países extranjeros tienen ventajas 'artificiales'.",
              alegaciones: [
                {
                  tipo: "Dumping",
                  descripcion: "Vender por debajo del costo de producción",
                  problema: "Difícil determinar el 'costo real' y puede ser estrategia legítima",
                },
                {
                  tipo: "Subsidios extranjeros",
                  descripcion: "Gobiernos extranjeros subsidian sus exportaciones",
                  problema: "Los subsidios extranjeros benefician a los consumidores domésticos",
                },
                {
                  tipo: "Estándares laborales bajos",
                  descripcion: "Países con salarios bajos tienen ventaja 'injusta'",
                  problema: "Los salarios bajos pueden reflejar menor productividad, no explotación",
                },
              ],
              evaluacion: "Muchas alegaciones de 'competencia desleal' reflejan ventaja comparativa legítima",
            },
            {
              subtitulo: "El argumento de la protección como negociación",
              descripcion: "Algunos argumentan que las amenazas de protección pueden usarse para abrir mercados extranjeros.",
              logica: "Amenazar con aranceles puede persuadir a otros países a reducir sus barreras comerciales",
              problemas: [
                "Puede llevar a guerras comerciales",
                "Los costos domésticos pueden superar los beneficios de negociación",
                "Puede dañar la credibilidad en el libre comercio",
                "Otros países pueden responder con sus propias barreras",
              ],
              evaluacion: "Estrategia arriesgada que puede resultar contraproducente",
            },
          ],
        },
        {
          titulo: "Conclusión",
          contenido: [
            {
              subtitulo: "El caso del libre comercio",
              argumentos: [
                "Aumenta el excedente total y el bienestar económico",
                "Permite especialización según ventaja comparativa",
                "Aumenta la variedad y reduce precios para consumidores",
                "Promueve la innovación y eficiencia",
                "Facilita la transferencia de tecnología",
              ],
            },
            {
              subtitulo: "Los desafíos del libre comercio",
              realidades: [
                "Crea ganadores y perdedores dentro de cada país",
                "Los perdedores están concentrados y organizados políticamente",
                "Los beneficios están dispersos entre muchos consumidores",
                "Puede causar dislocación temporal de trabajadores",
                "Requiere políticas complementarias para ayudar a los afectados",
              ],
            },
            {
              subtitulo: "Implicaciones para la política",
              recomendaciones: [
                "Mantener mercados abiertos como regla general",
                "Usar políticas de ajuste para ayudar a trabajadores desplazados",
                "Resistir presiones proteccionistas de grupos de interés",
                "Negociar acuerdos comerciales multilaterales",
                "Educar al público sobre los beneficios del comercio",
              ],
            },
          ],
        },
      ],
    },
    formulas: [
      {
        nombre: "Ganancias del Comercio (País Exportador)",
        formula: "Ganancia = (1/2) × (P_mundial - P_autarquia) × Exportaciones",
        descripcion: "El área del triángulo que representa las ganancias netas del comercio para un país exportador.",
        ejemplo: "Si P_mundial = $50, P_autarquia = $40, Exportaciones = 100: Ganancia = (1/2) × 10 × 100 = $500",
        grafico: "Triángulo entre precio de autarquía y precio mundial, desde producción hasta consumo doméstico.",
      },
      {
        nombre: "Ganancias del Comercio (País Importador)",
        formula: "Ganancia = (1/2) × (P_autarquia - P_mundial) × Importaciones",
        descripcion: "El área del triángulo que representa las ganancias netas del comercio para un país importador.",
        ejemplo: "Si P_autarquia = $60, P_mundial = $40, Importaciones = 80: Ganancia = (1/2) × 20 × 80 = $800",
        grafico: "Triángulo entre precio mundial y precio de autarquía, desde producción hasta consumo doméstico.",
      },
      {
        nombre: "Pérdida de Peso Muerto de un Arancel",
        formula: "PPM = (1/2) × t × ΔQ_producción + (1/2) × t × ΔQ_consumo",
        descripcion: "Suma de las pérdidas por producción ineficiente y consumo reducido.",
        ejemplo: "Con arancel de $5, aumento de producción de 10 y reducción de consumo de 15: PPM = (1/2)×5×10 + (1/2)×5×15 = $62.5",
        componentes: "Triángulo de producción + Triángulo de consumo",
      },
      {
        nombre: "Recaudación Arancelaria",
        formula: "R = t × M",
        descripcion: "Donde t es el arancel por unidad y M es la cantidad importada después del arancel.",
        ejemplo: "Con arancel de $5 por unidad e importaciones de 50 unidades: R = 5 × 50 = $250",
        nota: "Esta recaudación es una transferencia de consumidores al gobierno, no una pérdida neta para la sociedad.",
      },
    ],
    conceptosClave: [
      "Precio de autarquía",
      "Precio mundial",
      "Ventaja comparativa",
      "Ganancias del comercio",
      "Excedente del consumidor",
      "Excedente del productor",
      "Arancel",
      "Cuota de importación",
      "Pérdida de peso muerto",
      "Recaudación arancelaria",
      "Proteccionismo",
      "Libre comercio",
      "Industria naciente",
      "Seguridad nacional",
      "Competencia desleal",
      "Guerra comercial",
    ],
    ejemplosReales: [
      {
        titulo: "NAFTA y el Comercio de Automóviles",
        descripcion: "El Tratado de Libre Comercio de América del Norte eliminó aranceles entre EE.UU., Canadá y México. La industria automotriz se integró, con partes producidas en diferentes países según ventajas comparativas.",
        resultados: "Reducción de precios para consumidores, mayor eficiencia en producción, pero desplazamiento de algunos trabajadores en industrias menos competitivas.",
        leccion: "El comercio libre puede generar grandes beneficios pero requiere políticas de ajuste para trabajadores afectados.",
      },
      {
        titulo: "Guerra Comercial EE.UU.-China 2018-2020",
        descripcion: "EE.UU. impuso aranceles de hasta 25% en productos chinos, China respondió con aranceles similares. Ambos países experimentaron pérdidas de bienestar.",
        efectos: "Aumento de precios para consumidores estadounidenses, reducción del comercio bilateral, búsqueda de proveedores alternativos.",
        resultado: "Demostró que las guerras comerciales generalmente perjudican a ambas partes, con consumidores pagando la mayor parte de los aranceles.",
      },
      {
        titulo: "Protección de la Industria del Acero en EE.UU.",
        descripcion: "EE.UU. ha protegido su industria del acero con aranceles y cuotas durante décadas, argumentando seguridad nacional y competencia desleal.",
        costos: "Estudios estiman que cada empleo salvado en la industria del acero costó a los consumidores más de $400,000 anuales.",
        efectos_secundarios: "Industrias que usan acero (automotriz, construcción) enfrentaron costos más altos, reduciendo su competitividad.",
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
          {capitulo.contenido.principios && params.id === "1" && (
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
          {capitulo.contenido.secciones && (
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
                            {item.ejemplo && (
                              <div className="bg-blue-100 p-4 rounded-xl mb-4">
                                <h5 className="font-semibold text-blue-800 mb-2">Ejemplo:</h5>
                                <p className="text-blue-700 text-sm leading-relaxed">{item.ejemplo}</p>
                              </div>
                            )}

                            {item.componentes && (
                              <div className="space-y-2">
                                <h5 className="font-semibold text-slate-800">Componentes:</h5>
                                <ul className="list-disc list-inside space-y-1">
                                  {item.componentes.map((comp, compIdx) => (
                                    <li key={compIdx} className="text-slate-700">{comp}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.flujos && (
                              <div className="space-y-3">
                                {item.flujos.map((flujo, flujoIdx) => (
                                  <div key={flujoIdx} className="bg-emerald-100 p-3 rounded-xl">
                                    <p className="text-emerald-700 text-sm">{flujo}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {item.caracteristicas && (
                              <div className="space-y-2">
                                <h5 className="font-semibold text-slate-800">Características:</h5>
                                <ul className="list-disc list-inside space-y-1">
                                  {item.caracteristicas.map((car, carIdx) => (
                                    <li key={carIdx} className="text-slate-700">{car}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.conceptos && (
                              <div className="space-y-3">
                                {item.conceptos.map((concepto, conceptoIdx) => (
                                  <div key={conceptoIdx} className="bg-amber-100 p-3 rounded-xl">
                                    <h6 className="font-semibold text-amber-800">{concepto.nombre}</h6>
                                    <p className="text-amber-700 text-sm">{concepto.descripcion}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {item.ejemplos && (
                              <div className="space-y-2">
                                <h5 className="font-semibold text-slate-800">Ejemplos:</h5>
                                <ul className="list-disc list-inside space-y-1">
                                  {item.ejemplos.map((ej, ejIdx) => (
                                    <li key={ejIdx} className="text-slate-700">{ej}</li>
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
                          <strong>Representación gráfica:</strong> {formula.grafico}
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
                <div className="grid md:grid-cols-1 gap-6">
                  {capitulo.ejemplosReales.map((ejemplo, index) => (
                    <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                      <h4 className="font-semibold text-orange-800 mb-3 text-lg">{ejemplo.titulo}</h4>
                      <p className="text-orange-700 leading-relaxed mb-3">{ejemplo.descripcion}</p>
                      {ejemplo.efectos && (
                        <div className="bg-white p-3 rounded-xl border border-orange-200 mb-3">
                          <p className="text-sm text-orange-800">
                            <strong>Efectos:</strong> {ejemplo.efectos}
                          </p>
                        </div>
                      )}
                      {ejemplo.grafico && (
                        <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                          <p className="text-sm text-blue-800">
                            <strong>Análisis gráfico:</strong> {ejemplo.grafico}
                          </p>
                        </div>
                      )}
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