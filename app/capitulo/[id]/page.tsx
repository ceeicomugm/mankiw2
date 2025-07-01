import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen, Calculator, BarChart3, Clock, Users, TrendingUp, DollarSign, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const capitulosData = {
  1: {
    titulo: "Los Diez Principios de la Economía",
    descripcion: "Fundamentos básicos del pensamiento económico y toma de decisiones",
    duracion: "45 min",
    dificultad: "Básico",
    objetivos: [
      "Comprender los principios fundamentales que rigen las decisiones económicas",
      "Analizar cómo las personas toman decisiones racionales",
      "Entender la interacción entre individuos en los mercados",
      "Conocer el funcionamiento de la economía en su conjunto"
    ],
    contenido: {
      introduccion: "La economía es el estudio de cómo la sociedad administra sus recursos escasos. Los economistas estudian cómo las personas toman decisiones: cuánto trabajan, qué compran, cuánto ahorran y cómo invierten sus ahorros. También estudian cómo las personas interactúan entre sí.",
      secciones: [
        {
          titulo: "Cómo las personas toman decisiones",
          principios: [
            {
              numero: 1,
              titulo: "Las personas enfrentan disyuntivas",
              explicacion: "Para obtener algo que nos gusta, por lo general tenemos que renunciar a otra cosa que también nos gusta. Tomar decisiones es elegir entre dos objetivos.",
              ejemplo: "Un estudiante debe decidir cómo asignar su recurso más valioso: el tiempo. Puede pasar todo su tiempo estudiando economía, todo su tiempo estudiando psicología, o dividir el tiempo entre las dos materias."
            },
            {
              numero: 2,
              titulo: "El costo de algo es aquello a lo que se renuncia para obtenerlo",
              explicacion: "Como las personas enfrentan disyuntivas, tomar decisiones requiere comparar los costos y beneficios de cursos de acción alternativos.",
              ejemplo: "El costo de oportunidad de ir a la universidad no es solo la matrícula, libros y alojamiento, sino también el salario que se podría ganar trabajando en lugar de estudiar."
            },
            {
              numero: 3,
              titulo: "Las personas racionales piensan en términos marginales",
              explicacion: "Los economistas usan el término cambio marginal para describir pequeños ajustes incrementales a un plan de acción existente.",
              ejemplo: "Una aerolínea decide si ofrecer un vuelo adicional. El costo marginal es el costo de añadir un vuelo más, no el costo promedio de todos los vuelos."
            },
            {
              numero: 4,
              titulo: "Las personas responden a incentivos",
              explicacion: "Un incentivo es algo que induce a una persona a actuar. Como las personas racionales toman decisiones comparando costos y beneficios, responden a incentivos.",
              ejemplo: "Cuando el precio de las manzanas aumenta, las personas deciden comer menos manzanas y más peras. Al mismo tiempo, los productores de manzanas deciden contratar más trabajadores y cosechar más manzanas."
            }
          ]
        },
        {
          titulo: "Cómo interactúan las personas",
          principios: [
            {
              numero: 5,
              titulo: "El comercio puede mejorar el bienestar de todos",
              explicacion: "El comercio permite a cada persona especializarse en las actividades que mejor realiza. Al comerciar con otros, las personas pueden comprar una mayor variedad de bienes y servicios a menor costo.",
              ejemplo: "Estados Unidos exporta productos agrícolas e importa automóviles. Japón exporta automóviles e importa productos agrícolas. Ambos países se benefician."
            },
            {
              numero: 6,
              titulo: "Los mercados normalmente son un buen mecanismo para organizar la actividad económica",
              explicacion: "En una economía de mercado, las decisiones del planificador central son reemplazadas por las decisiones de millones de empresas y hogares.",
              ejemplo: "Los precios son las señales que guían estas decisiones. Cuando el precio de un bien aumenta, los vendedores producen más y los compradores consumen menos."
            },
            {
              numero: 7,
              titulo: "El gobierno puede mejorar algunas veces los resultados del mercado",
              explicacion: "Aunque los mercados son generalmente una buena forma de organizar la actividad económica, esta regla tiene algunas excepciones importantes.",
              ejemplo: "El gobierno puede intervenir para promover la eficiencia (corrigiendo fallas de mercado) o para promover la equidad (redistribuyendo el ingreso)."
            }
          ]
        },
        {
          titulo: "Cómo funciona la economía en su conjunto",
          principios: [
            {
              numero: 8,
              titulo: "El nivel de vida de un país depende de su capacidad para producir bienes y servicios",
              explicacion: "Las diferencias en los niveles de vida entre países son atribuibles a diferencias en la productividad de los países.",
              ejemplo: "Los trabajadores estadounidenses tienen un nivel de vida más alto que los trabajadores mexicanos porque los trabajadores estadounidenses son más productivos."
            },
            {
              numero: 9,
              titulo: "Los precios suben cuando el gobierno imprime demasiado dinero",
              explicacion: "La inflación es un aumento en el nivel general de precios en la economía. En la mayoría de los casos de inflación alta o persistente, el culpable es el crecimiento en la cantidad de dinero.",
              ejemplo: "En Alemania en los años 1920, cuando los precios se triplicaban mensualmente, la cantidad de dinero también se triplicaba mensualmente."
            },
            {
              numero: 10,
              titulo: "La sociedad enfrenta una disyuntiva a corto plazo entre inflación y desempleo",
              explicacion: "Aunque un nivel más alto de precios es, a largo plazo, el efecto primario del aumento en la cantidad de dinero, la historia es más compleja a corto plazo.",
              ejemplo: "Cuando el gobierno aumenta la cantidad de dinero en la economía, un resultado es que los precios aumentan. Otro resultado, al menos temporalmente, es que el nivel de desempleo disminuye."
            }
          ]
        }
      ]
    },
    resumen: "Los diez principios de la economía proporcionan una visión general de qué trata la economía. Los primeros cuatro principios se refieren a cómo las personas toman decisiones. Los siguientes tres principios se refieren a cómo las personas interactúan entre sí. Los últimos tres principios se refieren a cómo funciona la economía en su conjunto.",
    conceptosClave: [
      "Escasez",
      "Costo de oportunidad", 
      "Análisis marginal",
      "Incentivos",
      "Comercio",
      "Mercados",
      "Fallas de mercado",
      "Productividad",
      "Inflación",
      "Curva de Phillips"
    ]
  },
  2: {
    titulo: "Pensando como Economista",
    descripcion: "El método científico aplicado a la economía y los modelos económicos",
    duracion: "50 min",
    dificultad: "Básico",
    objetivos: [
      "Entender cómo los economistas aplican el método científico",
      "Distinguir entre economía positiva y normativa",
      "Comprender el papel de los supuestos en los modelos económicos",
      "Analizar las herramientas gráficas básicas de la economía"
    ],
    contenido: {
      introduccion: "Los economistas intentan abordar su tema de estudio con la objetividad de un científico. Abordan el estudio de la economía de manera muy parecida a como un físico aborda el estudio de la materia y un biólogo aborda el estudio de la vida.",
      secciones: [
        {
          titulo: "El economista como científico",
          subtemas: [
            {
              titulo: "El método científico: observación, teoría y más observación",
              contenido: "Los economistas, como otros científicos, formulan teorías, recopilan datos y analizan estos datos en un intento por verificar o refutar sus teorías. Para los economistas, los experimentos controlados son a menudo difíciles de realizar, por lo que deben hacer uso de los experimentos naturales que ofrece la historia."
            },
            {
              titulo: "El papel de los supuestos",
              contenido: "Los supuestos pueden simplificar el mundo complejo y hacer que sea más fácil de entender. Por ejemplo, para estudiar los efectos del comercio internacional, podríamos suponer que el mundo consiste en solo dos países y que cada país produce solo dos bienes."
            },
            {
              titulo: "Modelos económicos",
              contenido: "Los economistas usan modelos para aprender sobre el mundo. Un modelo económico es una representación simplificada de la realidad que nos permite entender una variedad de fenómenos económicos."
            }
          ]
        },
        {
          titulo: "Dos modelos simples",
          subtemas: [
            {
              titulo: "El diagrama de flujo circular",
              contenido: "El diagrama de flujo circular es un modelo visual de la economía que muestra cómo los dólares fluyen a través de los mercados entre los hogares y las empresas. En este modelo simplificado, la economía tiene dos tipos de tomadores de decisiones: hogares y empresas."
            },
            {
              titulo: "La frontera de posibilidades de producción",
              contenido: "La frontera de posibilidades de producción es un gráfico que muestra las combinaciones de producción que la economía puede producir posiblemente dados los factores de producción disponibles y la tecnología de producción disponible."
            }
          ]
        },
        {
          titulo: "Microeconomía y macroeconomía",
          subtemas: [
            {
              titulo: "Microeconomía",
              contenido: "La microeconomía es el estudio de cómo los hogares y las empresas toman decisiones y de cómo interactúan en los mercados. Un microeconomista podría estudiar los efectos del alquiler controlado en la vivienda en la ciudad de Nueva York."
            },
            {
              titulo: "Macroeconomía", 
              contenido: "La macroeconomía es el estudio de los fenómenos de toda la economía, incluidos la inflación, el desempleo y el crecimiento económico. Un macroeconomista podría estudiar los efectos del endeudamiento del gobierno federal en la economía en general."
            }
          ]
        }
      ]
    },
    resumen: "Los economistas intentan abordar su tema con la objetividad de los científicos. Como todos los científicos, hacen supuestos apropiados y construyen modelos simplificados para entender el mundo que los rodea. Dos modelos simples pero importantes son el diagrama de flujo circular y la frontera de posibilidades de producción.",
    conceptosClave: [
      "Método científico",
      "Modelos económicos", 
      "Supuestos",
      "Diagrama de flujo circular",
      "Frontera de posibilidades de producción",
      "Microeconomía",
      "Macroeconomía",
      "Economía positiva",
      "Economía normativa"
    ]
  },
  3: {
    titulo: "Interdependencia y las Ganancias del Comercio",
    descripcion: "Ventaja absoluta, comparativa y los beneficios de la especialización",
    duracion: "55 min", 
    dificultad: "Intermedio",
    objetivos: [
      "Entender cómo todos pueden beneficiarse cuando las personas comercian entre sí",
      "Aprender el significado de ventaja absoluta y ventaja comparativa",
      "Ver cómo la ventaja comparativa explica las ganancias del comercio",
      "Aplicar la teoría de la ventaja comparativa al comercio cotidiano y al comercio internacional"
    ],
    contenido: {
      introduccion: "Considere su día típico. Se despierta por la mañana y se sirve jugo de naranja de Florida y café de Brasil. Durante el desayuno, mira las noticias en su televisor hecho en Japón. Se viste con ropa hecha en China y conduce al trabajo en un auto hecho en Corea del Sur.",
      secciones: [
        {
          titulo: "Una parábola para la economía moderna",
          subtemas: [
            {
              titulo: "Autosuficiencia vs. Especialización",
              contenido: "Imagine que hay dos bienes en el mundo: carne y papas. Y hay dos personas en el mundo: un ganadero y un agricultor. El ganadero es mejor criando ganado y produciendo carne, pero también puede cultivar papas. El agricultor es mejor cultivando papas, pero también puede criar ganado."
            },
            {
              titulo: "Las posibilidades de producción",
              contenido: "Supongamos que el ganadero puede producir 1 onza de carne en 20 minutos y 1 onza de papas en 60 minutos. El agricultor puede producir 1 onza de carne en 60 minutos y 1 onza de papas en 15 minutos."
            }
          ]
        },
        {
          titulo: "Ventaja absoluta",
          subtemas: [
            {
              titulo: "Definición",
              contenido: "Una persona tiene una ventaja absoluta en la producción de un bien si puede producir ese bien usando menos insumos que otra persona. En nuestro ejemplo, el ganadero tiene una ventaja absoluta en la producción de carne, y el agricultor tiene una ventaja absoluta en la producción de papas."
            },
            {
              titulo: "Limitaciones de la ventaja absoluta",
              contenido: "Aunque la ventaja absoluta es útil para determinar quién debería producir qué, no es la historia completa. El concepto que realmente importa para el comercio es la ventaja comparativa."
            }
          ]
        },
        {
          titulo: "Ventaja comparativa",
          subtemas: [
            {
              titulo: "Costo de oportunidad y ventaja comparativa",
              contenido: "Una persona tiene una ventaja comparativa en la producción de un bien si puede producir ese bien a un costo de oportunidad menor que otra persona. Para el ganadero, el costo de oportunidad de 1 onza de papas es 1/3 onza de carne. Para el agricultor, el costo de oportunidad de 1 onza de papas es 1/4 onza de carne."
            },
            {
              titulo: "Ventaja comparativa y comercio",
              contenido: "Las ganancias del comercio se basan en la ventaja comparativa, no en la ventaja absoluta. Cuando cada persona se especializa en producir el bien para el cual tiene una ventaja comparativa, el consumo total en la economía aumenta."
            }
          ]
        },
        {
          titulo: "Aplicaciones de la ventaja comparativa",
          subtemas: [
            {
              titulo: "¿Debería Tiger Woods cortar su propio césped?",
              contenido: "Tiger Woods puede cortar su césped más rápido que cualquier otra persona, pero eso no significa que deba hacerlo. Su ventaja comparativa está en jugar golf, no en cortar césped."
            },
            {
              titulo: "Comercio internacional",
              contenido: "El principio de la ventaja comparativa se aplica a los países así como a las personas. Los países se benefician del comercio entre ellos porque el comercio permite a cada país especializarse en lo que hace mejor."
            }
          ]
        }
      ]
    },
    resumen: "El principio de la ventaja comparativa muestra que el comercio puede hacer que todos estén mejor. La ventaja comparativa significa poder producir un bien a un costo de oportunidad menor. Cuando las personas (o países) se especializan en los bienes para los cuales tienen una ventaja comparativa y luego comercian con otros, todos pueden consumir más de todos los bienes.",
    conceptosClave: [
      "Autosuficiencia",
      "Especialización", 
      "Ventaja absoluta",
      "Ventaja comparativa",
      "Costo de oportunidad",
      "Ganancias del comercio",
      "Términos de intercambio",
      "Comercio internacional"
    ]
  },
  4: {
    titulo: "Las Fuerzas del Mercado: Oferta y Demanda",
    descripcion: "Fundamentos de oferta, demanda y determinación de precios en mercados competitivos",
    duracion: "60 min",
    dificultad: "Intermedio", 
    objetivos: [
      "Examinar qué factores determinan la demanda de un bien en un mercado competitivo",
      "Examinar qué factores determinan la oferta de un bien en un mercado competitivo", 
      "Ver cómo la oferta y la demanda juntas determinan el precio de un bien y la cantidad vendida",
      "Considerar cómo los cambios en los factores que afectan la oferta y la demanda afectan el precio y la cantidad de equilibrio"
    ],
    contenido: {
      introduccion: "Los términos oferta y demanda se refieren al comportamiento de las personas cuando interactúan entre sí en mercados competitivos. Un mercado es un grupo de compradores y vendedores de un bien o servicio particular.",
      secciones: [
        {
          titulo: "Mercados y competencia",
          subtemas: [
            {
              titulo: "¿Qué es un mercado?",
              contenido: "Un mercado es un grupo de compradores y vendedores de un bien o servicio particular. Los compradores como grupo determinan la demanda del producto, y los vendedores como grupo determinan la oferta del producto."
            },
            {
              titulo: "¿Qué es la competencia?",
              contenido: "Un mercado competitivo es un mercado en el que hay muchos compradores y muchos vendedores, por lo que cada uno tiene un impacto insignificante en el precio de mercado. En mercados perfectamente competitivos, los bienes ofrecidos en venta son exactamente los mismos, y los compradores y vendedores son tan numerosos que ningún comprador o vendedor individual puede influir en el precio de mercado."
            }
          ]
        },
        {
          titulo: "Demanda",
          subtemas: [
            {
              titulo: "La curva de demanda: la relación entre precio y cantidad demandada",
              contenido: "La cantidad demandada de cualquier bien es la cantidad del bien que los compradores están dispuestos y pueden comprar. La ley de la demanda establece que, manteniéndose todo lo demás constante, cuando el precio de un bien aumenta, la cantidad demandada del bien disminuye."
            },
            {
              titulo: "Demanda de mercado versus demanda individual",
              contenido: "La demanda de mercado es la suma de todas las demandas individuales para un bien o servicio particular. Gráficamente, las curvas de demanda individuales se suman horizontalmente para obtener la curva de demanda de mercado."
            },
            {
              titulo: "Desplazamientos en la curva de demanda",
              contenido: "Cuando cualquier factor que influye en las decisiones de compra cambia, excepto el precio, la curva de demanda se desplaza. Los factores incluyen: ingreso, precios de bienes relacionados, gustos, expectativas, y número de compradores."
            }
          ]
        },
        {
          titulo: "Oferta",
          subtemas: [
            {
              titulo: "La curva de oferta: la relación entre precio y cantidad ofrecida",
              contenido: "La cantidad ofrecida de cualquier bien o servicio es la cantidad que los vendedores están dispuestos y pueden vender. La ley de la oferta establece que, manteniéndose todo lo demás constante, cuando el precio de un bien aumenta, la cantidad ofrecida del bien también aumenta."
            },
            {
              titulo: "Oferta de mercado versus oferta individual",
              contenido: "La oferta de mercado es la suma de las ofertas de todos los vendedores. La curva de oferta de mercado se encuentra sumando horizontalmente las curvas de oferta individuales."
            },
            {
              titulo: "Desplazamientos en la curva de oferta",
              contenido: "La curva de oferta se desplaza cuando cambia cualquier determinante de la oferta que no sea el precio del bien. Los factores incluyen: precios de los insumos, tecnología, expectativas, número de vendedores."
            }
          ]
        },
        {
          titulo: "Oferta y demanda juntas",
          subtemas: [
            {
              titulo: "Equilibrio",
              contenido: "El equilibrio se refiere a una situación en la que el precio de mercado ha alcanzado el nivel en el que la cantidad ofrecida es igual a la cantidad demandada. El precio de equilibrio equilibra la oferta y la demanda."
            },
            {
              titulo: "Tres pasos para analizar cambios en el equilibrio",
              contenido: "1. Decidir si el evento desplaza la curva de oferta, la curva de demanda, o ambas. 2. Decidir si la curva se desplaza hacia la derecha o hacia la izquierda. 3. Usar el diagrama de oferta y demanda para ver cómo el desplazamiento cambia el precio y la cantidad de equilibrio."
            }
          ]
        }
      ]
    },
    resumen: "Los economistas usan el modelo de oferta y demanda para analizar mercados competitivos. En un mercado competitivo, los compradores y vendedores son tomadores de precios. La curva de demanda muestra cómo la cantidad demandada depende del precio. La curva de oferta muestra cómo la cantidad ofrecida depende del precio. La intersección de las curvas de oferta y demanda determina el precio y la cantidad de equilibrio del mercado.",
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
      "Cantidad de equilibrio",
      "Exceso de demanda",
      "Exceso de oferta"
    ]
  },
  5: {
    titulo: "Elasticidad y sus Aplicaciones",
    descripcion: "Medición de la sensibilidad de oferta y demanda ante cambios en variables económicas",
    duracion: "65 min",
    dificultad: "Intermedio",
    objetivos: [
      "Aprender el significado de la elasticidad de la demanda",
      "Examinar qué determina la elasticidad de la demanda",
      "Aprender el significado de la elasticidad de la oferta",
      "Aplicar el concepto de elasticidad en tres mercados muy diferentes"
    ],
    contenido: {
      introduccion: "Cuando estudiamos los factores que determinan la oferta y la demanda, notamos que los compradores usualmente demandan más de un bien cuando el precio del bien es más bajo. Pero ¿cuánto más? Los economistas usan un concepto llamado elasticidad para responder esta pregunta.",
      secciones: [
        {
          titulo: "La elasticidad de la demanda",
          subtemas: [
            {
              titulo: "La elasticidad precio de la demanda y sus determinantes",
              contenido: "La elasticidad precio de la demanda mide qué tan sensible es la cantidad demandada a cambios en el precio. Se calcula como el cambio porcentual en la cantidad demandada dividido por el cambio porcentual en el precio. Los determinantes incluyen: disponibilidad de sustitutos cercanos, necesidades versus lujos, definición del mercado, y horizonte temporal."
            },
            {
              titulo: "Cálculo de la elasticidad precio de la demanda",
              contenido: "La elasticidad precio de la demanda = (Cambio porcentual en cantidad demandada) / (Cambio porcentual en precio). El método del punto medio es: Ed = [(Q2-Q1)/((Q2+Q1)/2)] / [(P2-P1)/((P2+P1)/2)]"
            },
            {
              titulo: "La variedad de curvas de demanda",
              contenido: "Demanda perfectamente inelástica (Ed = 0), demanda inelástica (0 < |Ed| < 1), demanda de elasticidad unitaria (|Ed| = 1), demanda elástica (|Ed| > 1), demanda perfectamente elástica (Ed = ∞)."
            },
            {
              titulo: "Ingreso total y la elasticidad precio de la demanda",
              contenido: "El ingreso total es la cantidad pagada por los compradores y recibida por los vendedores de un bien. Se calcula como P × Q. Cuando la demanda es inelástica, el precio y el ingreso total se mueven en la misma dirección. Cuando la demanda es elástica, el precio y el ingreso total se mueven en direcciones opuestas."
            }
          ]
        },
        {
          titulo: "Otras elasticidades de la demanda",
          subtemas: [
            {
              titulo: "Elasticidad ingreso de la demanda",
              contenido: "La elasticidad ingreso de la demanda mide qué tan sensible es la cantidad demandada a cambios en el ingreso del consumidor. Para bienes normales, la elasticidad ingreso es positiva. Para bienes inferiores, es negativa."
            },
            {
              titulo: "Elasticidad precio cruzada de la demanda",
              contenido: "La elasticidad precio cruzada de la demanda mide qué tan sensible es la cantidad demandada de un bien a cambios en el precio de otro bien. Para sustitutos, es positiva. Para complementos, es negativa."
            }
          ]
        },
        {
          titulo: "La elasticidad de la oferta",
          subtemas: [
            {
              titulo: "La elasticidad precio de la oferta y sus determinantes",
              contenido: "La elasticidad precio de la oferta mide qué tan sensible es la cantidad ofrecida a cambios en el precio. Los determinantes principales son: flexibilidad de los vendedores para cambiar la cantidad del bien que producen, y el período de tiempo considerado."
            },
            {
              titulo: "La variedad de curvas de oferta",
              contenido: "Oferta perfectamente inelástica (Es = 0), oferta inelástica (0 < Es < 1), oferta de elasticidad unitaria (Es = 1), oferta elástica (Es > 1), oferta perfectamente elástica (Es = ∞)."
            }
          ]
        },
        {
          titulo: "Tres aplicaciones de la oferta, la demanda y la elasticidad",
          subtemas: [
            {
              titulo: "¿Pueden las buenas noticias para la agricultura ser malas noticias para los agricultores?",
              contenido: "Cuando se desarrolla una nueva variedad de trigo que es más productiva, la oferta de trigo aumenta. Debido a que la demanda de productos alimentarios básicos es generalmente inelástica, el aumento en la oferta causa una gran caída en el precio. El ingreso total de los agricultores puede disminuir."
            },
            {
              titulo: "¿Por qué la OPEP no pudo mantener alto el precio del petróleo?",
              contenido: "En el corto plazo, tanto la oferta como la demanda de petróleo son relativamente inelásticas. En el largo plazo, tanto la oferta como la demanda son más elásticas. Los altos precios del petróleo dan incentivos para conservar energía y desarrollar fuentes alternativas."
            },
            {
              titulo: "¿Reduce el control de drogas el crimen relacionado con drogas?",
              contenido: "La demanda de drogas es inelástica. Los esfuerzos para reducir la oferta aumentan el precio pero reducen poco la cantidad. El gasto total en drogas aumenta, lo que puede llevar a más crimen para financiar el hábito."
            }
          ]
        }
      ]
    },
    resumen: "La elasticidad precio de la demanda mide qué tan sensible son los consumidores a cambios en el precio. La demanda tiende a ser más elástica si hay sustitutos cercanos disponibles, si el bien es un lujo en lugar de una necesidad, si el mercado está definido estrechamente, o si los compradores tienen tiempo sustancial para ajustarse al cambio de precio.",
    conceptosClave: [
      "Elasticidad precio de la demanda",
      "Ingreso total",
      "Elasticidad ingreso de la demanda",
      "Elasticidad precio cruzada",
      "Elasticidad precio de la oferta",
      "Bienes normales",
      "Bienes inferiores", 
      "Bienes sustitutos",
      "Bienes complementarios",
      "Método del punto medio"
    ]
  },
  6: {
    titulo: "Oferta, Demanda y Políticas Gubernamentales",
    descripcion: "Impacto de la intervención gubernamental en el funcionamiento de los mercados",
    duracion: "55 min",
    dificultad: "Intermedio",
    objetivos: [
      "Examinar los efectos de las políticas gubernamentales que establecen un techo en los precios",
      "Examinar los efectos de las políticas gubernamentales que establecen un piso en los precios", 
      "Considerar cómo los impuestos afectan el precio y la cantidad vendida",
      "Aprender que los impuestos desalientan la actividad del mercado"
    ],
    contenido: {
      introduccion: "Los economistas tienen dos roles. Como científicos, desarrollan y prueban teorías para explicar el mundo que los rodea. Como asesores de política, usan sus teorías para ayudar a cambiar el mundo para mejor. Este capítulo ofrece nuestro primer vistazo al papel de asesor de política de los economistas.",
      secciones: [
        {
          titulo: "Controles sobre los precios",
          subtemas: [
            {
              titulo: "Cómo los techos de precios afectan los resultados del mercado",
              contenido: "Un techo de precio es un máximo legal en el precio al que se puede vender un bien o servicio. Cuando el gobierno impone un techo de precio en un mercado competitivo, surgen dos resultados: si el techo de precio está por encima del precio de equilibrio, no es vinculante y no tiene efecto en el precio o la cantidad vendida. Si el techo de precio está por debajo del precio de equilibrio, es vinculante y causa escasez."
            },
            {
              titulo: "Caso de estudio: Líneas en las gasolineras",
              contenido: "En 1973, la OPEP aumentó el precio del petróleo crudo en los mercados mundiales. Debido a que el petróleo crudo es el principal insumo usado para hacer gasolina, el precio más alto del petróleo aumentó el costo de producir gasolina. En respuesta, el gobierno estadounidense impuso un techo de precio en la gasolina, resultando en largas líneas en las gasolineras."
            },
            {
              titulo: "Caso de estudio: Control de alquileres a corto y largo plazo",
              contenido: "El control de alquileres es un techo de precio en los alquileres. En el corto plazo, la oferta y demanda de vivienda son relativamente inelásticas, por lo que el control de alquileres reduce poco la cantidad de vivienda disponible. En el largo plazo, la oferta y demanda son más elásticas, por lo que el control de alquileres reduce significativamente la cantidad de vivienda disponible."
            },
            {
              titulo: "Cómo los pisos de precios afectan los resultados del mercado",
              contenido: "Un piso de precio es un mínimo legal en el precio al que se puede vender un bien o servicio. Cuando el gobierno impone un piso de precio en un mercado competitivo: si el piso de precio está por debajo del precio de equilibrio, no es vinculante. Si el piso de precio está por encima del precio de equilibrio, es vinculante y causa un excedente del bien."
            },
            {
              titulo: "Caso de estudio: El salario mínimo",
              contenido: "Un ejemplo importante de un piso de precio es el salario mínimo. Cuando el salario mínimo está por encima del salario de equilibrio, causa desempleo. Los trabajadores que mantienen sus empleos están mejor, pero aquellos que habrían tenido un empleo al salario de equilibrio más bajo ahora están desempleados."
            }
          ]
        },
        {
          titulo: "Impuestos",
          subtemas: [
            {
              titulo: "Cómo los impuestos sobre los vendedores afectan los resultados del mercado",
              contenido: "Cuando se impone un impuesto sobre los vendedores de un bien, la curva de oferta se desplaza hacia arriba por el tamaño del impuesto. El precio pagado por los compradores aumenta, y el precio recibido por los vendedores disminuye. Los compradores y vendedores comparten la carga del impuesto."
            },
            {
              titulo: "Cómo los impuestos sobre los compradores afectan los resultados del mercado",
              contenido: "Cuando se impone un impuesto sobre los compradores de un bien, la curva de demanda se desplaza hacia abajo por el tamaño del impuesto. El precio pagado por los compradores aumenta, y el precio recibido por los vendedores disminuye. Los compradores y vendedores comparten la carga del impuesto."
            },
            {
              titulo: "Caso de estudio: ¿Se pueden distribuir los impuestos legislando?",
              contenido: "Cuando el Congreso aprobó un impuesto de lujo en 1990 sobre yates, aviones privados, pieles, joyas y autos caros, el objetivo era que los ricos pagaran el impuesto. Sin embargo, el impuesto tuvo efectos no deseados: las industrias que producían estos bienes se redujeron drásticamente, causando despidos de trabajadores de clase media."
            },
            {
              titulo: "Elasticidad e incidencia fiscal",
              contenido: "La incidencia fiscal - la manera en que se distribuye la carga de un impuesto entre compradores y vendedores - no depende de si el impuesto se impone sobre compradores o vendedores. La incidencia fiscal depende de las elasticidades de oferta y demanda. La carga cae más pesadamente sobre el lado del mercado que es menos elástico."
            }
          ]
        }
      ]
    },
    resumen: "Los controles de precios incluyen techos de precios y pisos de precios. Un techo de precio es un máximo legal en el precio de un bien o servicio. Un piso de precio es un mínimo legal en el precio de un bien o servicio. Cuando el gobierno impone impuestos sobre un bien, el precio pagado por los compradores aumenta, y el precio recibido por los vendedores disminuye.",
    conceptosClave: [
      "Techo de precio",
      "Piso de precio", 
      "Control de alquileres",
      "Salario mínimo",
      "Incidencia fiscal",
      "Impuesto sobre vendedores",
      "Impuesto sobre compradores",
      "Elasticidad e impuestos",
      "Pérdida de peso muerto",
      "Escasez",
      "Excedente"
    ]
  },
  7: {
    titulo: "Consumidores, Productores y Eficiencia de los Mercados",
    descripcion: "Excedente del consumidor y productor como medidas de bienestar económico",
    duracion: "50 min",
    dificultad: "Intermedio",
    objetivos: [
      "Examinar el vínculo entre la disposición de los compradores a pagar y la curva de demanda",
      "Aprender cómo definir y medir el excedente del consumidor",
      "Examinar el vínculo entre los costos de los vendedores y la curva de oferta", 
      "Aprender cómo definir y medir el excedente del productor",
      "Ver que el equilibrio de oferta y demanda maximiza el bienestar total en un mercado"
    ],
    contenido: {
      introduccion: "El análisis de oferta y demanda es una herramienta poderosa para analizar mercados. Hasta ahora, hemos visto cómo la oferta y la demanda juntas determinan el precio y la cantidad de equilibrio de un bien vendido en un mercado. Nuestro análisis ha sido descriptivo: ha explicado cómo funciona la economía. Pero los compradores y vendedores dejan el mercado satisfechos?",
      secciones: [
        {
          titulo: "Excedente del consumidor",
          subtemas: [
            {
              titulo: "Disposición a pagar",
              contenido: "La disposición a pagar de un comprador es la cantidad máxima que el comprador pagará por un bien. Mide qué tanto valora el comprador el bien. Para cualquier comprador, la disposición a pagar es el valor que el comprador asigna al bien."
            },
            {
              titulo: "Uso de la curva de demanda para medir el excedente del consumidor",
              contenido: "El excedente del consumidor es la cantidad que un comprador está dispuesto a pagar por un bien menos la cantidad que el comprador realmente paga por él. Mide el beneficio que los compradores reciben de participar en un mercado. En un gráfico, el excedente del consumidor es el área debajo de la curva de demanda y arriba del precio."
            },
            {
              titulo: "Cómo un precio más bajo aumenta el excedente del consumidor",
              contenido: "Cuando el precio disminuye, el excedente del consumidor aumenta por dos razones: los compradores existentes pagan menos por la cantidad que ya estaban comprando, y nuevos compradores entran al mercado porque ahora están dispuestos a comprar al precio más bajo."
            }
          ]
        },
        {
          titulo: "Excedente del productor",
          subtemas: [
            {
              titulo: "Costo y disposición a vender",
              contenido: "El costo de un vendedor es el valor de todo aquello a lo que el vendedor debe renunciar para producir un bien. Para cualquier vendedor, el costo es el valor que el vendedor asigna al bien. La disposición a vender está estrechamente relacionada con el costo del vendedor."
            },
            {
              titulo: "Uso de la curva de oferta para medir el excedente del productor",
              contenido: "El excedente del productor es la cantidad que un vendedor recibe por un bien menos el costo del vendedor de proporcionarlo. Mide el beneficio que los vendedores reciben de participar en un mercado. En un gráfico, el excedente del productor es el área debajo del precio y arriba de la curva de oferta."
            },
            {
              titulo: "Cómo un precio más alto aumenta el excedente del productor",
              contenido: "Cuando el precio aumenta, el excedente del productor aumenta por dos razones: los vendedores existentes reciben más por la cantidad que ya estaban vendiendo, y nuevos vendedores entran al mercado porque ahora están dispuestos a producir al precio más alto."
            }
          ]
        },
        {
          titulo: "Eficiencia del mercado",
          subtemas: [
            {
              titulo: "El planificador social benevolente",
              contenido: "Para evaluar los resultados del mercado, introducimos un nuevo personaje hipotético llamado el planificador social benevolente. El planificador social es un tomador de decisiones todopoderoso, bien intencionado y omnisciente que quiere maximizar el bienestar económico de todos en la sociedad."
            },
            {
              titulo: "Evaluación del equilibrio del mercado",
              contenido: "El excedente total en un mercado es la suma del excedente del consumidor y del excedente del productor. El equilibrio de oferta y demanda maximiza el excedente total. En el equilibrio, la asignación de recursos es eficiente."
            },
            {
              titulo: "Caso de estudio: ¿Debería haber un mercado para órganos?",
              contenido: "Algunos economistas creen que debería haber un mercado para órganos humanos. Un mercado podría aumentar el incentivo para donar órganos y podría asegurar que los órganos vayan a aquellos que los valoran más altamente. Sin embargo, otros se oponen a la comercialización de órganos por razones morales."
            }
          ]
        },
        {
          titulo: "Conclusión: La eficiencia del mercado y las fallas del mercado",
          subtemas: [
            {
              titulo: "Las virtudes de los mercados libres",
              contenido: "Los mercados libres asignan la oferta de bienes a los compradores que los valoran más altamente, medido por su disposición a pagar. Los mercados libres asignan la demanda de bienes a los vendedores que pueden producirlos al menor costo. Los mercados libres producen la cantidad de bienes que maximiza la suma del excedente del consumidor y del productor."
            },
            {
              titulo: "Las limitaciones de los mercados",
              contenido: "Los mercados no son perfectos. Cuando un mercado falla en asignar recursos eficientemente por sí solo, los economistas dicen que hay una falla de mercado. Una posible causa de falla de mercado es el poder de mercado. Otra posible causa de falla de mercado es una externalidad."
            }
          ]
        }
      ]
    },
    resumen: "El excedente del consumidor es igual a la disposición de los compradores a pagar por un bien menos la cantidad que realmente pagan por él. El excedente del productor es igual a la cantidad que los vendedores reciben por sus bienes menos sus costos de producción. El excedente total en un mercado es igual al excedente del consumidor más el excedente del productor.",
    conceptosClave: [
      "Excedente del consumidor",
      "Disposición a pagar",
      "Excedente del productor", 
      "Costo",
      "Eficiencia",
      "Excedente total",
      "Planificador social benevolente",
      "Fallas de mercado",
      "Poder de mercado",
      "Externalidades"
    ]
  },
  8: {
    titulo: "Aplicación: Los Costos de los Impuestos",
    descripcion: "Análisis del impacto de los impuestos en el bienestar y la eficiencia económica",
    duracion: "45 min",
    dificultad: "Intermedio",
    objetivos: [
      "Examinar cómo los impuestos reducen el excedente del consumidor y del productor",
      "Aprender el significado y las causas de la pérdida de peso muerto de un impuesto",
      "Considerar por qué algunos impuestos tienen pérdidas de peso muerto más grandes que otros",
      "Examinar cómo la recaudación fiscal y la pérdida de peso muerto varían con el tamaño de un impuesto"
    ],
    contenido: {
      introduccion: "Los impuestos son a menudo una fuente de debate político acalorado. En 1776, la frustración por los impuestos británicos llevó a los colonos americanos a declarar la independencia. Más de dos siglos después, Ronald Reagan fue elegido presidente en una plataforma de reducción de impuestos, y la política fiscal continúa siendo un tema central en las campañas políticas.",
      secciones: [
        {
          titulo: "La pérdida de peso muerto de los impuestos",
          subtemas: [
            {
              titulo: "Cómo un impuesto afecta a los participantes del mercado",
              contenido: "Cuando el gobierno impone un impuesto sobre un bien, el precio pagado por los compradores aumenta, y el precio recibido por los vendedores disminuye. Como resultado, la cantidad del bien vendido disminuye. Estas observaciones son verdaderas ya sea que el impuesto se imponga sobre los compradores o los vendedores."
            },
            {
              titulo: "Pérdida de peso muerto y las ganancias del comercio",
              contenido: "Los impuestos causan pérdidas de peso muerto porque impiden que compradores y vendedores realicen algunas de las ganancias mutuamente beneficiosas del comercio. El área de la pérdida de peso muerto mide estas pérdidas. Esta pérdida de peso muerto es ineficiencia causada por el impuesto."
            }
          ]
        },
        {
          titulo: "Los determinantes de la pérdida de peso muerto",
          subtemas: [
            {
              titulo: "Caso de estudio: El debate sobre el impuesto a la gasolina",
              contenido: "En muchos países, la gasolina está entre los bienes más fuertemente gravados. En Estados Unidos, por ejemplo, casi la mitad del precio que los consumidores pagan por la gasolina va al gobierno. ¿Es esto una buena política? Los defensores argumentan que un impuesto a la gasolina corrige dos externalidades negativas asociadas con la conducción."
            },
            {
              titulo: "¿Qué determina si una pérdida de peso muerto es grande o pequeña?",
              contenido: "La pérdida de peso muerto de un impuesto depende de las elasticidades de oferta y demanda. Cuando la oferta o la demanda es inelástica, la pérdida de peso muerto del impuesto es pequeña. Cuando la oferta o la demanda es elástica, la pérdida de peso muerto del impuesto es grande."
            }
          ]
        },
        {
          titulo: "Pérdida de peso muerto y recaudación fiscal conforme varía el tamaño del impuesto",
          subtemas: [
            {
              titulo: "Caso de estudio: La Curva de Laffer y la economía del lado de la oferta",
              contenido: "La Curva de Laffer muestra la relación entre el tamaño de un impuesto y la cantidad de ingresos que el gobierno recauda. Los economistas del lado de la oferta en los años 1980 argumentaron que las tasas de impuestos estaban tan altas que reducir las tasas aumentaría los ingresos fiscales. La mayoría de los economistas estaban escépticos de esta afirmación y permanecen escépticos hoy."
            },
            {
              titulo: "Cómo la pérdida de peso muerto varía con el tamaño del impuesto",
              contenido: "La pérdida de peso muerto de un impuesto aumenta más rápidamente que el tamaño del impuesto. De hecho, la pérdida de peso muerto es proporcional al cuadrado del tamaño del impuesto. Esta relación cuadrática surge porque la pérdida de peso muerto mide el área de un triángulo, y el área de un triángulo depende del cuadrado de su tamaño."
            }
          ]
        }
      ]
    },
    resumen: "Los impuestos tienen dos efectos: transfieren recursos de los participantes del mercado al gobierno, y distorsionan incentivos y alejan la asignación de recursos del ideal de eficiencia. La pérdida de peso muerto es la reducción en el excedente total que resulta de una distorsión del mercado, como un impuesto.",
    conceptosClave: [
      "Pérdida de peso muerto",
      "Eficiencia administrativa",
      "Incidencia fiscal",
      "Curva de Laffer",
      "Economía del lado de la oferta",
      "Distorsión del mercado",
      "Recaudación fiscal",
      "Elasticidad e impuestos"
    ]
  },
  9: {
    titulo: "Aplicación: Comercio Internacional",
    descripcion: "Efectos del comercio internacional en el bienestar nacional y políticas comerciales",
    duracion: "60 min",
    dificultad: "Avanzado",
    objetivos: [
      "Considerar qué determina si un país se convierte en importador o exportador de un bien",
      "Examinar cómo el libre comercio afecta el bienestar en un país importador",
      "Examinar cómo el libre comercio afecta el bienestar en un país exportador",
      "Aprender que las ganancias del comercio para el país en su conjunto exceden las pérdidas para los perdedores",
      "Analizar los efectos de bienestar de los aranceles y las cuotas de importación"
    ],
    contenido: {
      introduccion: "Si atiende a las noticias o sigue las campañas políticas, probablemente ha escuchado sobre el comercio internacional. Los políticos a menudo están en desacuerdo sobre si el gobierno debería promover el libre comercio o proteger las industrias domésticas del comercio extranjero. El debate surge porque el comercio internacional puede afectar a diferentes grupos de manera diferente.",
      secciones: [
        {
          titulo: "Los determinantes del comercio",
          subtemas: [
            {
              titulo: "El equilibrio sin comercio internacional",
              contenido: "Para entender cómo el comercio internacional afecta una economía, comenzamos asumiendo que la economía está aislada del resto del mundo. En esta economía de autarquía, el precio doméstico ajusta para equilibrar la oferta y demanda domésticas. El precio que equilibra la oferta y demanda domésticas en ausencia de comercio se llama precio de autarquía."
            },
            {
              titulo: "El precio mundial y la ventaja comparativa",
              contenido: "Ahora suponga que esta economía se abre al comercio internacional. Si el precio doméstico antes del comercio es menor que el precio mundial, el país se convertirá en exportador del bien una vez que se permita el comercio. Si el precio doméstico antes del comercio es mayor que el precio mundial, el país se convertirá en importador del bien."
            }
          ]
        },
        {
          titulo: "Los ganadores y perdedores del comercio",
          subtemas: [
            {
              titulo: "Las ganancias y pérdidas de un país exportador",
              contenido: "Cuando un país se permite exportar un bien, los productores domésticos del bien están mejor, y los consumidores domésticos del bien están peor. El comercio aumenta el bienestar económico de una nación cuando el país se convierte en exportador de un bien."
            },
            {
              titulo: "Las ganancias y pérdidas de un país importador",
              contenido: "Cuando un país se permite importar un bien, los consumidores domésticos del bien están mejor, y los productores domésticos del bien están peor. El comercio aumenta el bienestar económico de una nación cuando el país se convierte en importador de un bien."
            },
            {
              titulo: "Los efectos de un arancel",
              contenido: "Un arancel es un impuesto sobre bienes producidos en el extranjero y vendidos domésticament. Un arancel aumenta el precio del bien importado arriba del precio mundial por la cantidad del arancel. Los aranceles reducen la cantidad de importaciones y mueven el mercado doméstico más cerca de su equilibrio de autarquía."
            },
            {
              titulo: "Las lecciones para la política comercial",
              contenido: "Los efectos de los aranceles son similares a los efectos de todos los otros impuestos. Los aranceles causan pérdidas de peso muerto porque son una fuente de ineficiencia económica. Los aranceles también causan una transferencia de ingresos de los consumidores a los productores domésticos y al gobierno."
            }
          ]
        },
        {
          titulo: "Los argumentos para restringir el comercio",
          subtemas: [
            {
              titulo: "El argumento de empleos",
              contenido: "Los oponentes del libre comercio a menudo argumentan que el comercio con otros países destruye empleos domésticos. Los economistas responden que el libre comercio crea empleos al mismo tiempo que destruye otros. Cuando un país importa bienes, destruye empleos en industrias que compiten con las importaciones, pero crea empleos en industrias que exportan bienes."
            },
            {
              titulo: "El argumento de seguridad nacional",
              contenido: "Cuando una industria es amenazada con competencia de otros países, los opositores del libre comercio a menudo argumentan que la industria es vital para la seguridad nacional. Los economistas reconocen que proteger industrias clave puede ser apropiado cuando hay preocupaciones genuinas sobre seguridad nacional."
            },
            {
              titulo: "El argumento de industria naciente",
              contenido: "Nuevas industrias a veces argumentan por protección comercial temporal para ayudarles a comenzar. Después de un período de protección, el argumento va, estas industrias madurarán y podrán competir con empresas extranjeras. Los economistas son a menudo escépticos sobre este argumento."
            },
            {
              titulo: "El argumento de competencia desleal",
              contenido: "Un argumento común es que el libre comercio es deseable solo si todos los países juegan por las mismas reglas. Si las empresas en diferentes países están sujetas a diferentes leyes y regulaciones, entonces es injusto esperar que las empresas de un país compitan con empresas de otro país."
            },
            {
              titulo: "Protección como una herramienta de negociación",
              contenido: "Otro argumento para las restricciones comerciales se refiere a la estrategia de negociación. Muchos políticos argumentan que el gobierno debería amenazar con retirar el acceso al mercado doméstico para presionar a otros países a abrir sus mercados a nuestras exportaciones."
            }
          ]
        },
        {
          titulo: "Caso de estudio: NAFTA",
          subtemas: [
            {
              titulo: "Los efectos del NAFTA",
              contenido: "El Tratado de Libre Comercio de América del Norte (NAFTA) es un acuerdo comercial entre Estados Unidos, Canadá y México que entró en vigor en 1994. El acuerdo eliminó la mayoría de los aranceles entre los tres países. Los economistas han estudiado los efectos del NAFTA y han encontrado que el acuerdo aumentó el comercio entre los países miembros."
            }
          ]
        }
      ]
    },
    resumen: "El principio de la ventaja comparativa muestra que el comercio puede hacer que todos estén mejor. Los aranceles y otras restricciones comerciales reducen las ganancias del comercio. Aunque estas políticas benefician a ciertos grupos (productores domésticos), las pérdidas para otros grupos (consumidores) son mayores. Por tanto, el libre comercio aumenta el bienestar económico total.",
    conceptosClave: [
      "Precio mundial",
      "Precio de autarquía",
      "País exportador",
      "País importador", 
      "Arancel",
      "Cuota de importación",
      "Pérdida de peso muerto del comercio",
      "Argumento de empleos",
      "Argumento de seguridad nacional",
      "Argumento de industria naciente",
      "Dumping",
      "NAFTA"
    ]
  },
  10: {
    titulo: "Externalidades",
    descripcion: "Efectos externos y soluciones para corregir fallas de mercado",
    duracion: "55 min",
    dificultad: "Intermedio",
    objetivos: [
      "Aprender el significado de externalidades",
      "Ver por qué las externalidades pueden hacer que los resultados del mercado sean ineficientes",
      "Examinar cómo las personas pueden resolver problemas de externalidades privadamente",
      "Considerar por qué las soluciones privadas no siempre funcionan",
      "Examinar las diversas políticas gubernamentales dirigidas a resolver problemas de externalidades"
    ],
    contenido: {
      introduccion: "Las empresas que fabrican papel también producen, como subproducto de su proceso de producción, una sustancia química llamada dioxina. Los científicos creen que la dioxina aumenta el riesgo de cáncer, problemas cardíacos y defectos de nacimiento. ¿Es el mercado de papel, por sí solo, probable que tome en cuenta los efectos completos de la dioxina?",
      secciones: [
        {
          titulo: "Externalidades y ineficiencia del mercado",
          subtemas: [
            {
              titulo: "Bienestar económico en un mercado",
              contenido: "Para hacer nuestro análisis concreto, consideraremos un mercado específico: el mercado de aluminio. La Figura 1 muestra la curva de oferta y demanda para el aluminio. Como es usual, la curva de demanda muestra la disposición de los consumidores a pagar por el aluminio, y la curva de oferta muestra los costos de los productores de aluminio."
            },
            {
              titulo: "Externalidades negativas",
              contenido: "Ahora supongamos que las fábricas de aluminio emiten contaminación: por cada unidad de aluminio producida, una cierta cantidad de humo entra en la atmósfera. Debido a que este humo crea un riesgo para la salud de aquellos que respiran el aire, es una externalidad negativa. ¿Cómo afecta esta externalidad la eficiencia del resultado del mercado?"
            },
            {
              titulo: "Externalidades positivas",
              contenido: "Aunque algunas actividades imponen costos negativos en terceros, otras actividades producen beneficios externos. Considere el mercado de educación. La educación produce una externalidad positiva porque una población más educada lleva a un mejor gobierno, lo que beneficia a todos."
            },
            {
              titulo: "Caso de estudio: Externalidades tecnológicas, spillovers industriales y Silicon Valley",
              contenido: "Un tipo importante de externalidad positiva es la externalidad tecnológica. Cuando una empresa desarrolla una nueva tecnología, otras empresas a menudo pueden aplicar esta tecnología a sus propios propósitos. Los spillovers tecnológicos son una razón clave por la que las empresas de alta tecnología se agrupan en áreas geográficas específicas."
            }
          ]
        },
        {
          titulo: "Soluciones públicas para las externalidades",
          subtemas: [
            {
              titulo: "Regulación",
              contenido: "El gobierno puede remediar una externalidad requiriendo o prohibiendo ciertos comportamientos. Por ejemplo, es un crimen tirar basura en lugares públicos. En este caso, la solución al problema de externalidad es directa: el gobierno prohíbe el comportamiento que genera la externalidad."
            },
            {
              titulo: "Impuestos y subsidios pigouvianos",
              contenido: "En lugar de regular el comportamiento en respuesta a una externalidad, el gobierno puede usar políticas basadas en el mercado para alinear los incentivos privados con la eficiencia social. Por ejemplo, como vimos, el gobierno puede internalizar la externalidad gravando actividades que tienen externalidades negativas y subsidiando actividades que tienen externalidades positivas."
            },
            {
              titulo: "Permisos de contaminación comerciables",
              contenido: "Supongamos que el gobierno quiere reducir la cantidad de contaminación que emiten las fábricas de acero. El gobierno podría lograr este objetivo de varias maneras: podría regular la cantidad de contaminación que cada fábrica puede emitir, o podría gravar la contaminación que emiten las fábricas. Una tercera opción es que el gobierno emita un número limitado de permisos de contaminación."
            },
            {
              titulo: "Objeciones a los análisis económicos de la contaminación",
              contenido: "Algunos ambientalistas objetan el enfoque económico de la contaminación. Argumentan que es moralmente incorrecto permitir que alguien contamine el medio ambiente a cambio de dinero. Desde esta perspectiva, los derechos de contaminación comerciables son moralmente repugnantes."
            }
          ]
        },
        {
          titulo: "Soluciones privadas para las externalidades",
          subtemas: [
            {
              titulo: "Los tipos de soluciones privadas",
              contenido: "Aunque las externalidades tienden a causar que los mercados sean ineficientes, la ineficiencia del gobierno no es inevitable. En algunos casos, las personas pueden desarrollar soluciones privadas. A veces, la solución toma la forma de códigos morales y sanciones sociales."
            },
            {
              titulo: "El teorema de Coase",
              contenido: "¿Qué tan efectivas son las partes privadas en resolver problemas de externalidades por sí mismas? Un famoso resultado, conocido como el teorema de Coase, sugiere que bajo algunas circunstancias pueden hacerlo muy bien. Según el teorema de Coase, si las partes privadas pueden negociar sobre la asignación de recursos sin costo, entonces pueden resolver el problema de externalidades por sí mismas."
            },
            {
              titulo: "Por qué las soluciones privadas no siempre funcionan",
              contenido: "A pesar del atractivo del teorema de Coase, las partes privadas por sí solas a menudo fallan en resolver los problemas creados por las externalidades. El teorema de Coase se aplica solo cuando las partes interesadas no tienen problemas para llegar y hacer cumplir un acuerdo. En el mundo real, sin embargo, la negociación no siempre funciona, incluso cuando una solución mutuamente beneficiosa existe."
            }
          ]
        }
      ]
    },
    resumen: "Cuando una transacción entre un comprador y vendedor afecta directamente a un tercero, el efecto se llama externalidad. Las externalidades negativas causan que la cantidad óptima socialmente sea menor que la cantidad de equilibrio. Las externalidades positivas causan que la cantidad óptima socialmente sea mayor que la cantidad de equilibrio.",
    conceptosClave: [
      "Externalidad",
      "Externalidad negativa",
      "Externalidad positiva",
      "Internalizar la externalidad",
      "Impuesto pigouviano",
      "Subsidio pigouviano",
      "Teorema de Coase",
      "Costos de transacción",
      "Permisos de contaminación comerciables"
    ]
  },
  11: {
    titulo: "Bienes Públicos y Recursos Comunes",
    descripcion: "Clasificación de bienes y problemas de provisión pública",
    duracion: "50 min",
    dificultad: "Intermedio",
    objetivos: [
      "Aprender las características que definen los bienes públicos y los recursos comunes",
      "Examinar por qué los mercados privados fallan en proporcionar bienes públicos",
      "Considerar algunos de los importantes bienes públicos en nuestra economía",
      "Ver por qué el problema del free rider hace que los mercados privados fallen en proporcionar bienes públicos",
      "Examinar por qué las personas tienden a usar demasiado los recursos comunes"
    ],
    contenido: {
      introduccion: "Un viejo dicho dice que las mejores cosas de la vida son gratis. Un momento de reflexión revela una gran cantidad de bienes que encajan en esta descripción: las puestas de sol, las risas, las lluvias de otoño, el amor verdadero, y la libertad de expresión. Pero si piensas un poco más, encontrarás que la mayoría de las cosas que valoramos en la vida tienen un precio.",
      secciones: [
        {
          titulo: "Los diferentes tipos de bienes",
          subtemas: [
            {
              titulo: "Clasificación de bienes",
              contenido: "Los bienes pueden clasificarse según dos características: (1) ¿Es el bien excluyente? Es decir, ¿se puede impedir que las personas usen el bien? (2) ¿Es el bien rival en el consumo? Es decir, ¿el uso del bien por una persona reduce la capacidad de otra persona para usarlo? Usando estas dos características, podemos dividir los bienes en cuatro categorías."
            },
            {
              titulo: "Bienes privados",
              contenido: "Los bienes privados son tanto excluyentes como rivales en el consumo. Considere un cono de helado, por ejemplo. Un cono de helado es excluyente porque es posible impedir que alguien coma un cono de helado: simplemente no se lo des. Un cono de helado también es rival en el consumo porque si una persona come un cono de helado, otra persona no puede comer el mismo cono."
            },
            {
              titulo: "Bienes públicos",
              contenido: "Los bienes públicos no son ni excluyentes ni rivales en el consumo. Es decir, las personas no pueden ser impedidas de usar un bien público, y el uso de un bien público por una persona no reduce la capacidad de otra persona para usarlo. Por ejemplo, un tornado siren en una pequeña ciudad es un bien público."
            },
            {
              titulo: "Recursos comunes",
              contenido: "Los recursos comunes son rivales en el consumo pero no excluyentes. Por ejemplo, los peces en el océano son un recurso común. Cuando una persona atrapa pez, hay menos pez para que la próxima persona atrape. Sin embargo, es difícil cobrar a los pescadores por el pez que atrapan."
            },
            {
              titulo: "Monopolios naturales",
              contenido: "Los monopolios naturales son excluyentes pero no rivales en el consumo. Por ejemplo, considere la protección contra incendios en una pequeña ciudad. Es fácil excluir a alguien de usar este bien: el departamento de bomberos simplemente puede dejar que la casa de la persona se queme. Sin embargo, la protección contra incendios no es rival en el consumo."
            }
          ]
        },
        {
          titulo: "Bienes públicos",
          subtemas: [
            {
              titulo: "El problema del free rider",
              contenido: "Debido a que los bienes públicos no son excluyentes, las personas tienen un incentivo para ser free riders. Un free rider es una persona que recibe el beneficio de un bien pero evita pagar por él. Debido a que las personas no pueden ser excluidas de disfrutar los beneficios de un bien público, los individuos pueden retener el pago por el bien mientras siguen disfrutando sus beneficios."
            },
            {
              titulo: "Algunos bienes públicos importantes",
              contenido: "Hay muchos ejemplos de bienes públicos. Aquí consideramos tres de los más importantes: defensa nacional, investigación básica, y programas para combatir la pobreza. En cada caso, debido al problema del free rider, el gobierno proporciona un bien que el mercado privado no proporcionaría en la cantidad eficiente."
            },
            {
              titulo: "Caso de estudio: ¿Son los faros bienes públicos?",
              contenido: "Algunos bienes pueden cambiar de categoría cuando cambia la tecnología. Por ejemplo, un faro es tradicionalmente considerado un bien público. Los faros son excluyentes porque es imposible impedir que un barco que pasa vea la luz. También son no rivales porque el uso del faro por un barco no reduce la capacidad de otro barco para usarlo."
            },
            {
              titulo: "La difícil tarea del análisis costo-beneficio",
              contenido: "Hasta ahora hemos visto que el gobierno proporciona bienes públicos porque el mercado privado por sí solo no los proporcionaría. Sin embargo, decidir que el gobierno debe proporcionar un bien público no nos dice cuánto del bien público debe proporcionarse."
            }
          ]
        },
        {
          titulo: "Recursos comunes",
          subtemas: [
            {
              titulo: "La tragedia de los comunes",
              contenido: "En 1968, el biólogo Garrett Hardin escribió un artículo clásico llamado 'La Tragedia de los Comunes'. Hardin argumentó que los recursos comunes se usan más de lo que es deseable desde el punto de vista de la sociedad en su conjunto. Consideró el caso de una ciudad con un pasto común donde cualquier familia de la ciudad puede pastar sus vacas."
            },
            {
              titulo: "Algunos recursos comunes importantes",
              contenido: "Hay muchos ejemplos de recursos comunes. En casi todos los casos, el mismo problema surge: los usuarios privados del recurso no toman en cuenta las externalidades negativas que imponen en otros usuarios. Como resultado, el recurso tiende a ser usado excesivamente."
            },
            {
              titulo: "Caso de estudio: Por qué la vaca no se extinguió",
              contenido: "A lo largo de la historia, muchas especies de animales han sido amenazadas con extinción. Cuando los europeos llegaron por primera vez a América del Norte, más de 60 millones de búfalos vagaban por el continente. Sin embargo, la caza redujo la población animal a aproximadamente 400 en 1900. Hoy, la población de búfalos ha recuperado a aproximadamente 200,000."
            },
            {
              titulo: "Caso de estudio: El debate sobre el calentamiento global",
              contenido: "Los científicos han documentado cambios en el clima global y han argumentado que los cambios son en gran parte el resultado de la actividad humana. El problema surge porque el dióxido de carbono es, en cierto sentido, un contaminante. Cuando las personas queman combustibles fósiles, emiten dióxido de carbono a la atmósfera."
            }
          ]
        }
      ]
    },
    resumen: "Los bienes difieren en si son excluyentes y si son rivales en el consumo. Un bien es excluyente si es posible impedir que alguien lo use. Un bien es rival en el consumo si el uso del bien por una persona reduce la capacidad de otra persona para usarlo. Los mercados funcionan mejor para bienes privados, que son tanto excluyentes como rivales en el consumo.",
    conceptosClave: [
      "Excluyente",
      "Rival en el consumo",
      "Bienes privados",
      "Bienes públicos",
      "Recursos comunes",
      "Monopolios naturales",
      "Free rider",
      "Análisis costo-beneficio",
      "Tragedia de los comunes"
    ]
  },
  12: {
    titulo: "El Diseño del Sistema Impositivo",
    descripcion: "Principios de tributación y diseño de políticas fiscales",
    duracion: "60 min",
    dificultad: "Avanzado",
    objetivos: [
      "Examinar cómo el gobierno estadounidense recauda y gasta dinero",
      "Considerar la eficiencia de varios impuestos diferentes",
      "Aprender enfoques alternativos para juzgar la equidad de un sistema impositivo",
      "Ver por qué estudiar la incidencia fiscal es crucial para evaluar la equidad fiscal",
      "Considerar el trade-off entre eficiencia y equidad en el diseño de un sistema impositivo"
    ],
    contenido: {
      introduccion: "Benjamin Franklin dijo una vez que 'en este mundo nada puede decirse que sea cierto, excepto la muerte y los impuestos'. Cuando Franklin escribió estas palabras en 1789, el estadounidense promedio pagaba menos del 5 por ciento de su ingreso en impuestos al gobierno. Hoy, todos los niveles de gobierno toman aproximadamente un tercio del ingreso del estadounidense promedio.",
      secciones: [
        {
          titulo: "Una perspectiva financiera del gobierno estadounidense",
          subtemas: [
            {
              titulo: "El gobierno federal",
              contenido: "El gobierno federal recauda aproximadamente dos tercios de los impuestos en nuestra economía. Obtiene la mayoría de sus ingresos del impuesto sobre la renta personal y del impuesto sobre la nómina. Gasta su dinero en una variedad de propósitos, siendo los más importantes la Seguridad Social, la defensa nacional, y Medicare."
            },
            {
              titulo: "Gobiernos estatales y locales",
              contenido: "Los gobiernos estatales y locales recaudan aproximadamente 40 por ciento de todos los impuestos pagados. Sus mayores fuentes de ingresos son los impuestos sobre las ventas, los impuestos sobre la propiedad, y los impuestos sobre la renta personal. Gastan la mayoría de su dinero en educación, carreteras y seguridad pública."
            }
          ]
        },
        {
          titulo: "Impuestos y eficiencia",
          subtemas: [
            {
              titulo: "Pérdidas de peso muerto",
              contenido: "Uno de los Diez Principios de la Economía es que las personas responden a incentivos. Esta lección es clave para entender los costos de los impuestos. Debido a que los impuestos distorsionan incentivos, causan que las personas asignen recursos de acuerdo con la política fiscal en lugar de los verdaderos costos y beneficios de los bienes y servicios."
            },
            {
              titulo: "Factores administrativos",
              contenido: "Si quisieras diseñar un sistema impositivo eficiente, querrías no solo minimizar las pérdidas de peso muerto sino también minimizar los costos administrativos de cumplir con el sistema impositivo. Los costos administrativos incluyen no solo los recursos que el gobierno gasta en hacer cumplir las leyes fiscales sino también el tiempo y dinero que los contribuyentes gastan cumpliendo con las leyes."
            },
            {
              titulo: "Impuestos marginales versus impuestos promedio",
              contenido: "Cuando discutimos la eficiencia y la equidad de los impuestos, es importante distinguir entre dos nociones de tasas de impuestos: la tasa de impuesto promedio y la tasa de impuesto marginal. La tasa de impuesto promedio es el total de impuestos pagados dividido por el ingreso total. La tasa de impuesto marginal es el impuesto extra pagado sobre un dólar adicional de ingreso."
            },
            {
              titulo: "Impuestos de suma fija",
              contenido: "Supongamos que el gobierno impusiera un impuesto que fuera el mismo para cada persona, independientemente de sus ganancias o cualquier acción que pudiera tomar. Tal impuesto se llama un impuesto de suma fija. Un impuesto de suma fija no distorsiona incentivos porque las decisiones de una persona no alteran la cantidad adeudada."
            }
          ]
        },
        {
          titulo: "Impuestos y equidad",
          subtemas: [
            {
              titulo: "El principio de beneficios",
              contenido: "Una forma de pensar sobre la equidad es el principio de beneficios, la idea de que las personas deberían pagar impuestos basados en los beneficios que reciben de los servicios gubernamentales. Este principio trata de hacer que la financiación pública sea similar a la financiación privada."
            },
            {
              titulo: "El principio de capacidad de pago",
              contenido: "Otro enfoque de la equidad fiscal es el principio de capacidad de pago, la idea de que los impuestos deberían basarse en la capacidad de una persona para manejar la carga financiera. Este principio lleva a dos nociones corolarias de equidad: equidad horizontal y equidad vertical."
            },
            {
              titulo: "Equidad horizontal",
              contenido: "Si los impuestos se basan en la capacidad de pago, entonces los contribuyentes similares deberían pagar cantidades similares. Esta idea se llama equidad horizontal. Por ejemplo, si dos familias tienen el mismo número de dependientes y el mismo ingreso, deberían pagar la misma cantidad en impuestos."
            },
            {
              titulo: "Equidad vertical",
              contenido: "Si los impuestos se basan en la capacidad de pago, entonces los contribuyentes con una mayor capacidad de pago deberían contribuir más. Esta idea se llama equidad vertical. En la mayoría de las discusiones sobre política fiscal, la equidad vertical es mucho más controvertida que la equidad horizontal."
            },
            {
              titulo: "Proporcionalidad fiscal",
              contenido: "Mucho del debate sobre equidad fiscal se centra en si los ricos pagan su parte justa. Hay tres formas en que un sistema impositivo puede relacionar la cantidad de impuestos pagados con el ingreso de una persona: impuestos proporcionales, regresivos, y progresivos."
            }
          ]
        },
        {
          titulo: "Estudios de caso en el diseño de impuestos",
          subtemas: [
            {
              titulo: "Caso de estudio: Cómo deberían gravarse los ingresos de capital?",
              contenido: "Las personas reciben ingresos de su trabajo y de su capital. Los ingresos del trabajo incluyen salarios, sueldos, y beneficios marginales. Los ingresos de capital incluyen intereses sobre ahorros, dividendos sobre acciones, ganancias de capital sobre activos apreciados, y las ganancias de un negocio en el que una persona tiene una participación."
            },
            {
              titulo: "Caso de estudio: El impuesto sobre el patrimonio",
              contenido: "Supongamos que un hombre rico muere y deja $50 millones a su hijo. ¿Debería el gobierno gravar esta herencia? Tal impuesto se llama un impuesto sobre el patrimonio. En 2017, el gobierno estadounidense gravó las herencias de más de $5.49 millones a tasas de hasta 40 por ciento."
            }
          ]
        }
      ]
    },
    resumen: "El gobierno estadounidense recauda impuestos de muchas maneras diferentes y en muchos niveles diferentes. El gobierno federal se basa principalmente en impuestos sobre la renta personal y sobre la nómina. Los gobiernos estatales y locales se basan principalmente en impuestos sobre las ventas, impuestos sobre la propiedad, e impuestos sobre la renta.",
    conceptosClave: [
      "Tasa de impuesto promedio",
      "Tasa de impuesto marginal",
      "Impuesto de suma fija",
      "Principio de beneficios",
      "Principio de capacidad de pago",
      "Equidad horizontal",
      "Equidad vertical",
      "Impuesto proporcional",
      "Impuesto regresivo",
      "Impuesto progresivo"
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
              <p className="text-slate-600">Capítulo no encontrado</p>
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
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero del capítulo */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-violet-50 rounded-3xl p-8 mb-8 shadow-lg border border-blue-100">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">
                Capítulo {params.id}: {capitulo.titulo}
              </h1>
              <p className="text-xl text-slate-700 mb-6 leading-relaxed">{capitulo.descripcion}</p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-slate-600" />
                  <span className="text-slate-600">{capitulo.duracion}</span>
                </div>
                <Badge className={getDificultadColor(capitulo.dificultad)} variant="outline">
                  {capitulo.dificultad}
                </Badge>
              </div>
            </div>
          </div>

          {/* Objetivos de aprendizaje */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Objetivos de Aprendizaje
            </h3>
            <ul className="space-y-2">
              {capitulo.objetivos.map((objetivo, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{objetivo}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="space-y-8">
          {/* Introducción */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Introducción</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed text-lg">{capitulo.contenido.introduccion}</p>
            </CardContent>
          </Card>

          {/* Secciones del contenido */}
          <div className="space-y-6">
            {capitulo.contenido.secciones.map((seccion, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    {seccion.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {'principios' in seccion ? (
                    // Para capítulo 1 con principios
                    <div className="space-y-6">
                      {seccion.principios.map((principio, pIndex) => (
                        <div key={pIndex} className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50/50 rounded-r-lg">
                          <h4 className="font-bold text-lg text-slate-800 mb-3">
                            Principio {principio.numero}: {principio.titulo}
                          </h4>
                          <p className="text-slate-700 mb-4 leading-relaxed">{principio.explicacion}</p>
                          <div className="bg-white/80 p-4 rounded-lg border border-blue-200">
                            <h5 className="font-semibold text-blue-800 mb-2">Ejemplo:</h5>
                            <p className="text-slate-700 italic">{principio.ejemplo}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Para otros capítulos con subtemas
                    <Accordion type="single" collapsible className="w-full">
                      {seccion.subtemas?.map((subtema, sIndex) => (
                        <AccordionItem key={sIndex} value={`item-${sIndex}`}>
                          <AccordionTrigger className="text-left font-semibold text-slate-800">
                            {subtema.titulo}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-slate-700 leading-relaxed">{subtema.contenido}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resumen */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                Resumen del Capítulo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">{capitulo.resumen}</p>
              
              {/* Conceptos clave */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-emerald-600" />
                  Conceptos Clave
                </h4>
                <div className="flex flex-wrap gap-2">
                  {capitulo.conceptosClave.map((concepto, index) => (
                    <Badge key={index} variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-200">
                      {concepto}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navegación */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex justify-center gap-4">
                <Link href={`/ejercicios/${params.id}`}>
                  <Button size="lg" className="shadow-md hover:shadow-lg transition-all duration-300">
                    <Calculator className="h-5 w-5 mr-2" />
                    Practicar con Ejercicios
                  </Button>
                </Link>
                <Link href={`/graficos/${params.id}`}>
                  <Button variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-all duration-300">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Ver Gráficos Interactivos
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}