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
      "Distinguir entre economía positiva y normativa",
      "Analizar modelos económicos básicos",
      "Interpretar gráficos económicos fundamentales",
    ],
    contenido: {
      introduccion:
        "Los economistas intentan abordar su tema de estudio con la objetividad de un científico. Desarrollan teorías, recopilan datos y analizan estos datos para verificar o refutar sus teorías. Para los principiantes, puede parecer extraño afirmar que la economía es una ciencia.",
      secciones: [
        {
          titulo: "El economista como científico",
          descripcion: "Los economistas siguen el método científico para estudiar la economía.",
          contenido: [
            {
              subtitulo: "El método científico: observación, teoría y más observación",
              texto: "Los economistas, como los astrónomos y los biólogos evolutivos, a menudo no pueden realizar experimentos controlados. En su lugar, deben hacer uso de los experimentos que la historia les proporciona. Cuando ocurre una guerra en Medio Oriente, los precios del petróleo suben en todo el mundo. Para un economista que estudia los efectos de los cambios en los precios del petróleo, esta guerra ofrece un experimento natural.",
              ejemplo: "Cuando el huracán Katrina interrumpió la producción de petróleo en el Golfo de México en 2005, los economistas pudieron estudiar cómo los choques de oferta afectan los precios y la economía."
            },
            {
              subtitulo: "El papel de los supuestos",
              texto: "Los supuestos pueden simplificar el mundo complejo y hacer que sea más fácil de entender. Para estudiar los efectos del comercio internacional, por ejemplo, podríamos suponer que el mundo consiste en solo dos países y que cada país produce solo dos bienes.",
              ejemplo: "Al estudiar la física de los objetos que caen, los físicos pueden suponer que no hay resistencia del aire. Al estudiar el comercio internacional, los economistas pueden suponer que hay solo dos países."
            },
            {
              subtitulo: "Modelos económicos",
              texto: "Los modelos económicos omiten muchos detalles para permitirnos ver lo que es verdaderamente importante. Así como un mapa de la ciudad omite muchos detalles menores para que podamos ver las calles principales más claramente.",
              ejemplo: "El modelo de flujo circular es una representación visual de cómo fluye el dinero a través de los mercados entre hogares y empresas."
            }
          ]
        },
        {
          titulo: "Dos modelos económicos simples",
          descripcion: "Modelos fundamentales para entender la economía.",
          contenido: [
            {
              subtitulo: "El diagrama de flujo circular",
              texto: "El diagrama de flujo circular es un modelo visual de la economía que muestra cómo fluye el dinero a través de los mercados entre hogares y empresas. En este modelo simplificado, la economía se compone de dos tipos de tomadores de decisiones: hogares y empresas.",
              ejemplo: "Los hogares venden su trabajo a las empresas en el mercado de factores y usan sus ingresos para comprar bienes y servicios de las empresas en el mercado de bienes."
            },
            {
              subtitulo: "La frontera de posibilidades de producción",
              texto: "La frontera de posibilidades de producción es un gráfico que muestra las combinaciones de producción que la economía puede producir posiblemente dados los factores de producción disponibles y la tecnología de producción disponible.",
              ejemplo: "Una economía que produce solo computadoras y automóviles. Si todos los recursos se dedican a computadoras, se pueden producir 1000 computadoras y 0 automóviles. Si todos se dedican a automóviles, se pueden producir 700 automóviles y 0 computadoras."
            }
          ]
        },
        {
          titulo: "Microeconomía y macroeconomía",
          descripcion: "Las dos ramas principales del estudio económico.",
          contenido: [
            {
              subtitulo: "Microeconomía",
              texto: "La microeconomía es el estudio de cómo los hogares y las empresas toman decisiones y cómo interactúan en los mercados. Un microeconomista podría estudiar los efectos del alquiler controlado en la vivienda en la ciudad de Nueva York.",
              ejemplo: "Estudiar cómo el precio de la gasolina afecta la demanda de automóviles grandes, o cómo las políticas de salario mínimo afectan el empleo juvenil."
            },
            {
              subtitulo: "Macroeconomía",
              texto: "La macroeconomía es el estudio de los fenómenos de toda la economía, incluida la inflación, el desempleo y el crecimiento económico. Un macroeconomista podría estudiar los efectos del endeudamiento del gobierno federal en la economía.",
              ejemplo: "Estudiar por qué las economías experimentan períodos de recesión y crecimiento, o cómo las políticas gubernamentales pueden reducir el desempleo."
            }
          ]
        },
        {
          titulo: "El economista como asesor de políticas",
          descripcion: "Cómo los economistas contribuyen a la formulación de políticas públicas.",
          contenido: [
            {
              subtitulo: "Análisis positivo versus normativo",
              texto: "Las declaraciones positivas son declaraciones que intentan describir el mundo tal como es. Las declaraciones normativas son declaraciones que intentan prescribir cómo debería ser el mundo.",
              ejemplo: "Positivo: 'El salario mínimo causa desempleo.' Normativo: 'El gobierno debería aumentar el salario mínimo.'"
            },
            {
              subtitulo: "Economistas en Washington",
              texto: "Los economistas que asesoran a los responsables de las políticas ofrecen consejos que están destinados a hacer que las políticas sean más efectivas o el resultado económico más eficiente.",
              ejemplo: "El Consejo de Asesores Económicos del Presidente, la Reserva Federal, y organismos como el Departamento del Tesoro emplean muchos economistas."
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Costo de Oportunidad en FPP",
        formula: "CO = Cantidad sacrificada del bien Y / Cantidad ganada del bien X",
        descripcion: "En la frontera de posibilidades de producción, el costo de oportunidad se mide por la pendiente de la curva.",
        ejemplo: "Si para producir 1 computadora adicional debemos sacrificar 2 automóviles, el CO de la computadora es 2 automóviles."
      },
      {
        nombre: "Eficiencia Productiva",
        formula: "Punto sobre la FPP = Uso eficiente de recursos",
        descripcion: "La eficiencia productiva se logra cuando la economía está produciendo en su frontera de posibilidades de producción.",
        ejemplo: "Cualquier punto dentro de la FPP representa ineficiencia; cualquier punto fuera es inalcanzable con los recursos actuales."
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
      "Análisis positivo",
      "Análisis normativo",
      "Eficiencia productiva"
    ],
    ejemplosReales: [
      {
        titulo: "Modelos Climáticos vs Modelos Económicos",
        descripcion: "Así como los climatólogos usan modelos para predecir el clima, los economistas usan modelos para entender y predecir comportamientos económicos, ambos simplificando la realidad compleja."
      },
      {
        titulo: "FPP durante la Segunda Guerra Mundial",
        descripcion: "Estados Unidos tuvo que decidir entre producir bienes civiles (automóviles, electrodomésticos) y bienes militares (tanques, aviones), ilustrando perfectamente el concepto de frontera de posibilidades de producción."
      },
      {
        titulo: "Debate sobre Salario Mínimo",
        descripcion: "Los economistas pueden estar de acuerdo en que el salario mínimo causa algún desempleo (positivo) pero diferir sobre si debería aumentarse (normativo)."
      }
    ]
  },
  3: {
    titulo: "La interdependencia y las ganancias del comercio",
    resumen: "Ventaja absoluta, comparativa y los beneficios de la especialización en el comercio.",
    duracion: "55 min",
    dificultad: "Intermedio",
    objetivos: [
      "Distinguir entre ventaja absoluta y ventaja comparativa",
      "Explicar cómo la especialización aumenta la producción total",
      "Analizar las ganancias del comercio para todas las partes",
      "Aplicar estos conceptos al comercio internacional",
    ],
    contenido: {
      introduccion:
        "Considere su día típico. Se despierta por la mañana y se sirve jugo de naranja de Florida y café de Brasil. Durante el desayuno, mira las noticias en su televisor hecho en Japón. Se viste con ropa hecha en China y conduce al trabajo en un automóvil hecho en Japón, Alemania o Corea. Luego abre su computadora portátil hecha en Malasia. Esta interdependencia es posible porque las personas comercian entre sí.",
      secciones: [
        {
          titulo: "Una parábola para la economía moderna",
          descripcion: "El ejemplo de dos personas que se especializan y comercian.",
          contenido: [
            {
              subtitulo: "Posibilidades de producción",
              texto: "Supongamos que hay dos bienes: carne y papas. Y hay dos personas: un ganadero y un agricultor. El ganadero es mejor criando ganado y produciendo carne, mientras que el agricultor es mejor cultivando papas.",
              ejemplo: "Si el ganadero dedica todo su tiempo a la carne, puede producir 18 onzas por día. Si dedica todo su tiempo a las papas, puede producir 12 onzas por día. El agricultor puede producir 6 onzas de carne o 24 onzas de papas por día."
            },
            {
              subtitulo: "Especialización y comercio",
              texto: "Aunque el ganadero es mejor en ambas actividades (ventaja absoluta), ambos pueden beneficiarse del comercio si se especializan según su ventaja comparativa.",
              ejemplo: "El ganadero se especializa en carne y el agricultor en papas. Luego intercambian: el ganadero da 5 onzas de carne por 15 onzas de papas del agricultor."
            }
          ]
        },
        {
          titulo: "Ventaja comparativa: la fuerza motriz de la especialización",
          descripcion: "El principio fundamental que explica por qué el comercio beneficia a todos.",
          contenido: [
            {
              subtitulo: "Ventaja absoluta",
              texto: "Una persona tiene ventaja absoluta en la producción de un bien si puede producir ese bien usando menos insumos que otra persona. La ventaja absoluta se mide comparando productividades.",
              ejemplo: "Si el ganadero puede producir tanto carne como papas con menos tiempo que el agricultor, el ganadero tiene ventaja absoluta en ambos bienes."
            },
            {
              subtitulo: "Ventaja comparativa",
              texto: "Una persona tiene ventaja comparativa en la producción de un bien si puede producir ese bien a un menor costo de oportunidad que otra persona. La ventaja comparativa se mide comparando costos de oportunidad.",
              ejemplo: "El costo de oportunidad del ganadero de producir 1 onza de papas es 1.5 onzas de carne. El costo de oportunidad del agricultor es 0.25 onzas de carne. El agricultor tiene ventaja comparativa en papas."
            },
            {
              subtitulo: "Ventaja comparativa y comercio",
              texto: "Las ganancias del comercio se basan en la ventaja comparativa, no en la ventaja absoluta. Cuando cada persona se especializa en producir el bien en el que tiene ventaja comparativa, la producción total en la economía aumenta.",
              ejemplo: "Incluso si el ganadero es mejor en todo, ambos se benefician si el ganadero se especializa en carne (donde su ventaja es mayor) y el agricultor en papas."
            }
          ]
        },
        {
          titulo: "Aplicaciones de la ventaja comparativa",
          descripcion: "Cómo se aplica este principio en el mundo real.",
          contenido: [
            {
              subtitulo: "¿Debería Tiger Woods cortar su propio césped?",
              texto: "Tiger Woods probablemente puede cortar su césped más rápido que cualquier otra persona. Pero eso no significa que deba hacerlo. Su tiempo es muy valioso dando clases de golf o jugando torneos.",
              ejemplo: "Aunque Tiger tenga ventaja absoluta cortando césped, su costo de oportunidad es muy alto. Es mejor que pague a alguien más para que corte su césped mientras él se enfoca en el golf."
            },
            {
              subtitulo: "Comercio internacional",
              texto: "El principio de ventaja comparativa explica por qué los países comercian entre sí. Cada país se especializa en producir los bienes en los que tiene ventaja comparativa.",
              ejemplo: "Japón tiene ventaja comparativa en electrónicos, Brasil en café, y Arabia Saudita en petróleo. Todos se benefician del comercio internacional."
            },
            {
              subtitulo: "Comercio dentro de las familias",
              texto: "Incluso dentro de una familia, los miembros se especializan según sus ventajas comparativas y 'comercian' entre sí.",
              ejemplo: "En una familia, quizás la madre tiene ventaja comparativa en cocinar y el padre en reparaciones del hogar. Se especializan y ambos se benefician."
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Costo de Oportunidad",
        formula: "CO de X = Cantidad de Y sacrificada / Cantidad de X ganada",
        descripcion: "Para determinar ventaja comparativa, calculamos el costo de oportunidad de cada bien para cada productor.",
        ejemplo: "Si para producir 1 unidad de carne debo sacrificar 2 unidades de papas, el CO de la carne es 2 papas."
      },
      {
        nombre: "Ventaja Comparativa",
        formula: "Ventaja Comparativa en X: menor CO de X entre los productores",
        descripcion: "Quien tenga el menor costo de oportunidad en la producción de un bien tiene ventaja comparativa en ese bien.",
        ejemplo: "Si el CO del ganadero para papas es 1.5 carne y el del agricultor es 0.25 carne, el agricultor tiene ventaja comparativa en papas."
      },
      {
        nombre: "Ganancias del Comercio",
        formula: "Precio de intercambio debe estar entre los CO de ambos productores",
        descripcion: "Para que ambas partes se beneficien, el precio de intercambio debe estar entre sus costos de oportunidad.",
        ejemplo: "Si el CO de carne es 0.67 papas para el ganadero y 4 papas para el agricultor, pueden intercambiar entre 0.67 y 4 papas por carne."
      }
    ],
    conceptosClave: [
      "Ventaja absoluta",
      "Ventaja comparativa", 
      "Costo de oportunidad",
      "Especialización",
      "Ganancias del comercio",
      "Interdependencia",
      "Comercio internacional",
      "Productividad",
      "Frontera de posibilidades de producción",
      "Términos de intercambio"
    ],
    ejemplosReales: [
      {
        titulo: "Comercio entre Estados Unidos y México",
        descripcion: "Estados Unidos tiene ventaja comparativa en bienes intensivos en capital (aviones, maquinaria), mientras México tiene ventaja comparativa en bienes intensivos en trabajo (textiles, agricultura). Ambos se benefician del TLCAN."
      },
      {
        titulo: "Especialización en Silicon Valley",
        descripcion: "Las empresas tecnológicas se especializan: Apple en diseño de productos, Intel en procesadores, Microsoft en software. Esta especialización aumenta la innovación y eficiencia total."
      },
      {
        titulo: "Médicos y Asistentes",
        descripcion: "Aunque un médico puede ser mejor tomando presión arterial que una enfermera, es más eficiente que la enfermera haga esto mientras el médico se enfoca en diagnósticos complejos donde su ventaja comparativa es mayor."
      }
    ]
  },
  4: {
    titulo: "Las fuerzas del mercado de la oferta y la demanda",
    resumen: "Fundamentos de la oferta, demanda y determinación de precios en mercados competitivos.",
    duracion: "60 min",
    dificultad: "Intermedio",
    objetivos: [
      "Comprender las leyes de oferta y demanda",
      "Analizar los determinantes de la oferta y demanda",
      "Explicar cómo se determina el equilibrio de mercado",
      "Predecir efectos de cambios en oferta y demanda",
    ],
    contenido: {
      introduccion:
        "La oferta y la demanda son las fuerzas que hacen que las economías de mercado funcionen. Determinan la cantidad producida de cada bien y el precio al que se vende. Si quiere saber cómo cualquier evento o política afectará la economía, debe pensar primero en cómo afectará la oferta y la demanda.",
      secciones: [
        {
          titulo: "Mercados y competencia",
          descripcion: "Definición y características de los mercados competitivos.",
          contenido: [
            {
              subtitulo: "¿Qué es un mercado?",
              texto: "Un mercado es un grupo de compradores y vendedores de un bien o servicio particular. Los compradores como grupo determinan la demanda del producto, y los vendedores como grupo determinan la oferta del producto.",
              ejemplo: "El mercado de helados incluye a todos los compradores de helados (desde niños hasta adultos) y todos los vendedores (desde vendedores ambulantes hasta supermercados)."
            },
            {
              subtitulo: "¿Qué es la competencia?",
              texto: "Un mercado competitivo es un mercado en el que hay muchos compradores y vendedores, por lo que cada uno tiene un impacto insignificante en el precio de mercado. En mercados perfectamente competitivos, los bienes son exactamente iguales y las empresas pueden entrar y salir libremente.",
              ejemplo: "El mercado de trigo se aproxima a la competencia perfecta: hay miles de agricultores vendiendo trigo esencialmente idéntico, y ningún agricultor individual puede influir significativamente en el precio."
            }
          ]
        },
        {
          titulo: "La demanda",
          descripcion: "Comportamiento de los compradores en el mercado.",
          contenido: [
            {
              subtitulo: "La curva de demanda: la relación entre precio y cantidad demandada",
              texto: "La cantidad demandada de cualquier bien es la cantidad del bien que los compradores están dispuestos y pueden comprar. La ley de la demanda establece que, manteniéndose todo lo demás constante, cuando el precio de un bien aumenta, la cantidad demandada del bien disminuye.",
              ejemplo: "Cuando el precio de los helados aumenta de $2 a $3 por cono, la cantidad demandada podría disminuir de 10 a 8 conos por día."
            },
            {
              subtitulo: "Demanda del mercado versus demanda individual",
              texto: "La demanda del mercado es la suma de todas las demandas individuales para un bien o servicio particular. Se obtiene sumando horizontalmente las curvas de demanda individuales.",
              ejemplo: "Si Ana demanda 3 helados a $2 y Bruno demanda 2 helados al mismo precio, la demanda del mercado a $2 es 5 helados."
            },
            {
              subtitulo: "Desplazamientos en la curva de demanda",
              texto: "Cuando cualquier factor que afecta la demanda (excepto el precio) cambia, la curva de demanda se desplaza. Un aumento en la demanda desplaza la curva hacia la derecha; una disminución la desplaza hacia la izquierda.",
              ejemplo: "Si aumenta el ingreso de los consumidores y los helados son un bien normal, la demanda de helados aumenta y la curva se desplaza hacia la derecha."
            }
          ]
        },
        {
          titulo: "La oferta",
          descripcion: "Comportamiento de los vendedores en el mercado.",
          contenido: [
            {
              subtitulo: "La curva de oferta: la relación entre precio y cantidad ofrecida",
              texto: "La cantidad ofrecida de cualquier bien es la cantidad del bien que los vendedores están dispuestos y pueden vender. La ley de la oferta establece que, manteniéndose todo lo demás constante, cuando el precio de un bien aumenta, la cantidad ofrecida del bien también aumenta.",
              ejemplo: "Cuando el precio de los helados aumenta de $2 a $3 por cono, los vendedores están dispuestos a ofrecer más helados, digamos de 8 a 12 conos por día."
            },
            {
              subtitulo: "Oferta del mercado versus oferta individual",
              texto: "La oferta del mercado es la suma de las ofertas de todas las empresas. Se obtiene sumando horizontalmente las curvas de oferta individuales de todas las empresas en el mercado.",
              ejemplo: "Si la heladería A ofrece 5 helados a $3 y la heladería B ofrece 7 helados al mismo precio, la oferta del mercado a $3 es 12 helados."
            },
            {
              subtitulo: "Desplazamientos en la curva de oferta",
              texto: "Cuando cualquier factor que afecta la oferta (excepto el precio) cambia, la curva de oferta se desplaza. Un aumento en la oferta desplaza la curva hacia la derecha; una disminución la desplaza hacia la izquierda.",
              ejemplo: "Si mejora la tecnología para hacer helados, los costos de producción disminuyen, la oferta aumenta y la curva se desplaza hacia la derecha."
            }
          ]
        },
        {
          titulo: "Oferta y demanda juntas",
          descripcion: "Cómo interactúan la oferta y demanda para determinar el equilibrio.",
          contenido: [
            {
              subtitulo: "Equilibrio",
              texto: "El equilibrio se refiere a una situación en la que el precio de mercado ha alcanzado el nivel en el que la cantidad ofrecida es igual a la cantidad demandada. El precio de equilibrio equilibra la oferta y la demanda.",
              ejemplo: "Si a $2.50 por helado, los vendedores quieren vender exactamente 10 helados y los compradores quieren comprar exactamente 10 helados, entonces $2.50 es el precio de equilibrio."
            },
            {
              subtitulo: "Tres pasos para analizar cambios en el equilibrio",
              texto: "Para analizar cómo un evento afecta un mercado: (1) Decidir si el evento desplaza la curva de oferta, la curva de demanda, o ambas. (2) Decidir si la curva se desplaza hacia la derecha o hacia la izquierda. (3) Usar el diagrama de oferta y demanda para examinar cómo el desplazamiento afecta el precio y cantidad de equilibrio.",
              ejemplo: "Si aumenta el precio del azúcar (insumo para helados): (1) Afecta la oferta. (2) La oferta disminuye (desplazamiento hacia la izquierda). (3) El precio aumenta y la cantidad disminuye."
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Función de Demanda",
        formula: "Qd = a - bP",
        descripcion: "Relación lineal entre precio (P) y cantidad demandada (Qd), donde 'a' es la demanda máxima y 'b' es la sensibilidad al precio.",
        ejemplo: "Si Qd = 100 - 2P, cuando P = $10, entonces Qd = 100 - 2(10) = 80 unidades."
      },
      {
        nombre: "Función de Oferta",
        formula: "Qs = c + dP",
        descripcion: "Relación lineal entre precio (P) y cantidad ofrecida (Qs), donde 'c' es la oferta base y 'd' es la sensibilidad al precio.",
        ejemplo: "Si Qs = 20 + 3P, cuando P = $10, entonces Qs = 20 + 3(10) = 50 unidades."
      },
      {
        nombre: "Equilibrio de Mercado",
        formula: "Qd = Qs",
        descripcion: "En equilibrio, la cantidad demandada iguala la cantidad ofrecida.",
        ejemplo: "Si 100 - 2P = 20 + 3P, entonces 80 = 5P, por lo que P = $16 y Q = 68 unidades."
      }
    ],
    conceptosClave: [
      "Mercado competitivo",
      "Cantidad demandada",
      "Ley de la demanda",
      "Curva de demanda",
      "Cantidad ofrecida",
      "Ley de la oferta",
      "Curva de oferta",
      "Equilibrio",
      "Precio de equilibrio",
      "Exceso de demanda",
      "Exceso de oferta"
    ],
    ejemplosReales: [
      {
        titulo: "Mercado de Vivienda durante COVID-19",
        descripcion: "La pandemia aumentó la demanda de viviendas (trabajo remoto, tasas bajas) mientras la oferta se mantuvo limitada, resultando en precios más altos en muchas ciudades."
      },
      {
        titulo: "Precio de la Gasolina y Eventos Geopolíticos",
        descripcion: "Cuando hay tensiones en Medio Oriente, la oferta de petróleo puede verse amenazada, desplazando la curva de oferta hacia la izquierda y aumentando los precios."
      },
      {
        titulo: "Mercado de Mascarillas en 2020",
        descripcion: "Al inicio de la pandemia, la demanda de mascarillas se disparó mientras la oferta era limitada, causando escasez y precios altos hasta que la producción se ajustó."
      }
    ]
  },
  5: {
    titulo: "La elasticidad y sus aplicaciones",
    resumen: "Medición de la sensibilidad de oferta y demanda ante cambios en variables económicas.",
    duracion: "65 min",
    dificultad: "Intermedio",
    objetivos: [
      "Calcular diferentes tipos de elasticidad",
      "Interpretar valores de elasticidad",
      "Relacionar elasticidad con ingresos totales",
      "Aplicar conceptos de elasticidad a políticas públicas",
    ],
    contenido: {
      introduccion:
        "La elasticidad es una medida de qué tan sensible es una variable a los cambios en otra variable. En economía, la elasticidad más comúnmente utilizada es la elasticidad precio de la demanda, que mide qué tan sensible es la cantidad demandada a cambios en el precio.",
      secciones: [
        {
          titulo: "La elasticidad de la demanda",
          descripcion: "Medición de la sensibilidad de la demanda a cambios en el precio.",
          contenido: [
            {
              subtitulo: "La elasticidad precio de la demanda y sus determinantes",
              texto: "La elasticidad precio de la demanda mide qué tanto responde la cantidad demandada a un cambio en el precio. Se calcula como el cambio porcentual en la cantidad demandada dividido por el cambio porcentual en el precio.",
              ejemplo: "Si el precio de los helados aumenta 10% y la cantidad demandada disminuye 20%, la elasticidad precio de la demanda es -20%/10% = -2."
            },
            {
              subtitulo: "Cálculo de la elasticidad precio de la demanda",
              texto: "La elasticidad precio de la demanda se calcula usando el método del punto medio para evitar el problema de que el resultado dependa de cuál punto se tome como inicial. La fórmula es: Ed = [(Q2-Q1)/((Q2+Q1)/2)] / [(P2-P1)/((P2+P1)/2)]",
              ejemplo: "Si el precio cambia de $4 a $6 y la cantidad de 100 a 80: Ed = [(80-100)/90] / [(6-4)/5] = (-20/90) / (2/5) = -0.56"
            },
            {
              subtitulo: "La variedad de curvas de demanda",
              texto: "Las curvas de demanda varían en su elasticidad. La demanda es elástica cuando la elasticidad es mayor que 1 en valor absoluto, inelástica cuando es menor que 1, y unitaria cuando es igual a 1.",
              ejemplo: "Los bienes de lujo tienden a tener demanda elástica (elasticidad > 1), mientras que las necesidades básicas tienden a tener demanda inelástica (elasticidad < 1)."
            }
          ]
        },
        {
          titulo: "La elasticidad y el ingreso total",
          descripcion: "Relación entre elasticidad y los ingresos de los vendedores.",
          contenido: [
            {
              subtitulo: "Cómo afecta el ingreso total a lo largo de una curva de demanda lineal",
              texto: "El ingreso total es el precio multiplicado por la cantidad vendida. Cuando la demanda es inelástica, un aumento en el precio aumenta el ingreso total. Cuando la demanda es elástica, un aumento en el precio disminuye el ingreso total.",
              ejemplo: "Si la demanda de medicamentos es inelástica, un aumento del 10% en el precio podría reducir la cantidad solo 3%, aumentando el ingreso total."
            },
            {
              subtitulo: "Elasticidad e ingreso total a lo largo de una curva de demanda lineal",
              texto: "En una curva de demanda lineal, la elasticidad varía a lo largo de la curva. En la parte superior (precios altos), la demanda es elástica. En la parte inferior (precios bajos), la demanda es inelástica. En el punto medio, la demanda es unitariamente elástica.",
              ejemplo: "En una curva de demanda de P = 10 - Q, cuando P = 8, la demanda es elástica; cuando P = 2, la demanda es inelástica; cuando P = 5, la elasticidad es unitaria."
            }
          ]
        },
        {
          titulo: "Otras elasticidades de la demanda",
          descripcion: "Elasticidad ingreso y elasticidad cruzada de la demanda.",
          contenido: [
            {
              subtitulo: "La elasticidad ingreso de la demanda",
              texto: "La elasticidad ingreso de la demanda mide qué tanto responde la cantidad demandada a un cambio en el ingreso del consumidor. Se calcula como el cambio porcentual en la cantidad demandada dividido por el cambio porcentual en el ingreso.",
              ejemplo: "Si el ingreso aumenta 10% y la demanda de restaurantes aumenta 15%, la elasticidad ingreso es 1.5, indicando que es un bien de lujo."
            },
            {
              subtitulo: "La elasticidad precio cruzada de la demanda",
              texto: "La elasticidad precio cruzada de la demanda mide qué tanto responde la cantidad demandada de un bien a un cambio en el precio de otro bien. Es positiva para bienes sustitutos y negativa para bienes complementarios.",
              ejemplo: "Si el precio de la mantequilla aumenta 10% y la demanda de margarina aumenta 8%, la elasticidad cruzada es 0.8, confirmando que son sustitutos."
            }
          ]
        },
        {
          titulo: "La elasticidad de la oferta",
          descripcion: "Medición de la sensibilidad de la oferta a cambios en el precio.",
          contenido: [
            {
              subtitulo: "La elasticidad precio de la oferta y sus determinantes",
              texto: "La elasticidad precio de la oferta mide qué tanto responde la cantidad ofrecida a cambios en el precio. Generalmente es positiva porque los precios más altos incentivan mayor producción.",
              ejemplo: "Si el precio del trigo aumenta 20% y los agricultores aumentan la producción 30%, la elasticidad de oferta es 1.5."
            },
            {
              subtitulo: "La variedad de curvas de oferta",
              texto: "La elasticidad de la oferta depende de la flexibilidad de los vendedores para cambiar la cantidad que producen. La oferta es más elástica en el largo plazo que en el corto plazo.",
              ejemplo: "La oferta de apartamentos es muy inelástica en el corto plazo (no se pueden construir rápidamente) pero más elástica en el largo plazo."
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Elasticidad Precio de la Demanda",
        formula: "Ed = (% Δ Cantidad Demandada) / (% Δ Precio)",
        descripcion: "Mide la sensibilidad de la cantidad demandada ante cambios en el precio.",
        ejemplo: "Si el precio aumenta 10% y la cantidad demandada disminuye 15%, Ed = -15%/10% = -1.5"
      },
      {
        nombre: "Método del Punto Medio",
        formula: "Ed = [(Q2-Q1)/((Q2+Q1)/2)] / [(P2-P1)/((P2+P1)/2)]",
        descripcion: "Método para calcular elasticidad que evita el problema del punto de referencia.",
        ejemplo: "Más preciso que usar solo los valores iniciales o finales como base del cálculo."
      },
      {
        nombre: "Elasticidad Ingreso",
        formula: "Ei = (% Δ Cantidad Demandada) / (% Δ Ingreso)",
        descripcion: "Mide cómo responde la demanda a cambios en el ingreso del consumidor.",
        ejemplo: "Si el ingreso aumenta 5% y la demanda aumenta 8%, Ei = 8%/5% = 1.6 (bien de lujo)"
      },
      {
        nombre: "Ingreso Total",
        formula: "IT = P × Q",
        descripcion: "El ingreso total es el precio multiplicado por la cantidad vendida.",
        ejemplo: "Si P = $5 y Q = 100, entonces IT = $5 × 100 = $500"
      }
    ],
    conceptosClave: [
      "Elasticidad precio de la demanda",
      "Demanda elástica",
      "Demanda inelástica",
      "Elasticidad unitaria",
      "Método del punto medio",
      "Ingreso total",
      "Elasticidad ingreso",
      "Elasticidad cruzada",
      "Bienes sustitutos",
      "Bienes complementarios",
      "Elasticidad de la oferta"
    ],
    ejemplosReales: [
      {
        titulo: "Elasticidad de la Demanda de Gasolina",
        descripcion: "La demanda de gasolina es relativamente inelástica en el corto plazo (la gente necesita conducir) pero más elástica en el largo plazo (pueden cambiar de auto o mudarse)."
      },
      {
        titulo: "Precios de Medicamentos",
        descripcion: "Los medicamentos esenciales tienen demanda muy inelástica, lo que explica por qué las farmacéuticas pueden cobrar precios altos sin perder muchos clientes."
      },
      {
        titulo: "Streaming vs Cable TV",
        descripcion: "Netflix y cable TV son sustitutos con elasticidad cruzada positiva: cuando aumenta el precio del cable, aumenta la demanda de servicios de streaming."
      }
    ]
  },
  6: {
    titulo: "Oferta, demanda y políticas gubernamentales",
    resumen: "Análisis del impacto de la intervención gubernamental en los mercados.",
    duracion: "55 min",
    dificultad: "Intermedio",
    objetivos: [
      "Analizar efectos de controles de precios",
      "Evaluar impacto de impuestos en mercados",
      "Calcular pérdida de eficiencia económica",
      "Comparar diferentes políticas gubernamentales",
    ],
    contenido: {
      introduccion:
        "Los economistas tienen dos roles. Como científicos, desarrollan y prueban teorías para explicar el mundo que los rodea. Como asesores de políticas, usan sus teorías para ayudar a cambiar el mundo para mejor. Este capítulo examina cómo la política gubernamental afecta la asignación de recursos.",
      secciones: [
        {
          titulo: "Controles sobre los precios",
          descripcion: "Efectos de precios máximos y mínimos en los mercados.",
          contenido: [
            {
              subtitulo: "Cómo los precios máximos afectan los resultados del mercado",
              texto: "Un precio máximo es un límite legal sobre el precio al que se puede vender un bien. Cuando el precio máximo está por debajo del precio de equilibrio, es vinculante y causa escasez. Cuando está por encima del precio de equilibrio, no es vinculante y no tiene efecto.",
              ejemplo: "Si el gobierno establece un precio máximo de $3 para la gasolina cuando el precio de equilibrio es $4, habrá escasez porque la cantidad demandada excederá la cantidad ofrecida."
            },
            {
              subtitulo: "Cómo los precios mínimos afectan los resultados del mercado",
              texto: "Un precio mínimo es un límite legal sobre el precio al que se puede vender un bien. Cuando el precio mínimo está por encima del precio de equilibrio, es vinculante y causa excedente. Cuando está por debajo del precio de equilibrio, no es vinculante.",
              ejemplo: "El salario mínimo es un precio mínimo en el mercado laboral. Si se establece por encima del salario de equilibrio, puede causar desempleo porque la cantidad de trabajo ofrecida excede la cantidad demandada."
            },
            {
              subtitulo: "Evaluación de los controles de precios",
              texto: "Los controles de precios a menudo se adoptan cuando los responsables de las políticas creen que el precio de mercado de un bien o servicio es injusto para compradores o vendedores. Sin embargo, estos controles tienen efectos secundarios no deseados.",
              ejemplo: "El control de alquileres puede hacer la vivienda más asequible para algunos inquilinos, pero también reduce la cantidad y calidad de viviendas disponibles."
            }
          ]
        },
        {
          titulo: "Impuestos",
          descripcion: "Cómo los impuestos afectan el equilibrio del mercado.",
          contenido: [
            {
              subtitulo: "Cómo los impuestos sobre los vendedores afectan los resultados del mercado",
              texto: "Cuando el gobierno impone un impuesto sobre un bien, el equilibrio del mercado se mueve a un nuevo punto. El precio que pagan los compradores aumenta, y el precio que reciben los vendedores disminuye. La cantidad vendida disminuye.",
              ejemplo: "Si se impone un impuesto de $1 por helado, el precio que pagan los compradores podría aumentar de $3 a $3.60, mientras que el precio que reciben los vendedores disminuye a $2.60."
            },
            {
              subtitulo: "Cómo los impuestos sobre los compradores afectan los resultados del mercado",
              texto: "Los impuestos sobre los compradores y sobre los vendedores son equivalentes. En ambos casos, el impuesto coloca una cuña entre el precio que pagan los compradores y el precio que reciben los vendedores.",
              ejemplo: "Un impuesto de $1 sobre los compradores de helados tiene exactamente el mismo efecto que un impuesto de $1 sobre los vendedores: mismos precios finales y misma cantidad."
            },
            {
              subtitulo: "Elasticidad e incidencia fiscal",
              texto: "La incidencia fiscal (quién realmente paga el impuesto) depende de las elasticidades de oferta y demanda. El lado del mercado que es menos elástico (menos sensible al precio) soporta una mayor parte de la carga del impuesto.",
              ejemplo: "Si la demanda de cigarrillos es muy inelástica y la oferta es elástica, los consumidores pagarán la mayor parte de un impuesto sobre cigarrillos, incluso si legalmente se cobra a los productores."
            }
          ]
        },
        {
          titulo: "Pérdida de peso muerto de los impuestos",
          descripcion: "Cómo los impuestos reducen la eficiencia económica.",
          contenido: [
            {
              subtitulo: "Cómo un impuesto afecta el bienestar del mercado",
              texto: "Los impuestos tienen un costo más allá del dinero que recauda el gobierno. Reducen el tamaño del mercado, lo que significa que se pierden algunas de las ganancias del comercio. Esta pérdida de bienestar económico se llama pérdida de peso muerto.",
              ejemplo: "Si un impuesto reduce las ventas de helados de 100 a 80 unidades, las 20 transacciones perdidas representan ganancias del comercio que se pierden para siempre."
            },
            {
              subtitulo: "Los determinantes de la pérdida de peso muerto",
              texto: "La pérdida de peso muerto de un impuesto depende de las elasticidades de oferta y demanda. Cuando la oferta o la demanda es más elástica, la pérdida de peso muerto del impuesto es mayor.",
              ejemplo: "Un impuesto sobre bienes con demanda muy elástica (como entretenimiento) causará mayor pérdida de peso muerto que un impuesto sobre bienes con demanda inelástica (como medicinas)."
            }
          ]
        }
      ]
    },
    formulas: [
      {
        nombre: "Incidencia Fiscal",
        formula: "Carga del Comprador / Carga del Vendedor = Es / Ed",
        descripcion: "La distribución de la carga fiscal depende de las elasticidades relativas de oferta (Es) y demanda (Ed).",
        ejemplo: "Si Es = 2 y Ed = 0.5, entonces los compradores pagan 4 veces más del impuesto que los vendedores."
      },
      {
        nombre: "Pérdida de Peso Muerto",
        formula: "PPM = (1/2) × Impuesto × Reducción en Cantidad",
        descripcion: "La pérdida de eficiencia causada por un impuesto, representada como un triángulo en el gráfico.",
        ejemplo: "Si un impuesto de $2 reduce la cantidad de 100 a 80, PPM = (1/2) × $2 × 20 = $20."
      },
      {
        nombre: "Recaudación Fiscal",
        formula: "Recaudación = Impuesto × Cantidad Vendida",
        descripcion: "El ingreso total que obtiene el gobierno del impuesto.",
        ejemplo: "Un impuesto de $2 por unidad con 80 unidades vendidas genera $160 en recaudación."
      }
    ],
    conceptosClave: [
      "Precio máximo",
      "Precio mínimo",
      "Escasez",
      "Excedente",
      "Incidencia fiscal",
      "Pérdida de peso muerto",
      "Cuña fiscal",
      "Control de precios",
      "Salario mínimo",
      "Control de alquileres",
      "Eficiencia económica"
    ],
    ejemplosReales: [
      {
        titulo: "Control de Alquileres en Nueva York",
        descripcion: "Los controles de alquiler en NYC mantienen algunos alquileres bajos pero han reducido la cantidad y calidad de apartamentos disponibles, creando largas listas de espera."
      },
      {
        titulo: "Salario Mínimo y Empleo Juvenil",
        descripcion: "Los aumentos del salario mínimo pueden reducir el empleo juvenil porque los jóvenes tienen menos habilidades y experiencia, haciendo su demanda laboral más elástica."
      },
      {
        titulo: "Impuestos sobre Cigarrillos",
        descripcion: "Los altos impuestos sobre cigarrillos son efectivos para reducir el consumo porque generan ingresos fiscales mientras desalientan un hábito dañino, aunque crean pérdida de peso muerto."
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

          {/* Contenido para capítulos 2, 3, 4, 5, 6 */}
          {(params.id === "2" || params.id === "3" || params.id === "4" || params.id === "5" || params.id === "6") && capitulo.contenido.secciones && (
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
                              <div className="bg-amber-100 p-4 rounded-xl">
                                <h5 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                                  💡 Ejemplo
                                </h5>
                                <p className="text-amber-700 text-sm leading-relaxed">{item.ejemplo}</p>
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