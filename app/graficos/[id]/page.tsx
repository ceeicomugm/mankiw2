"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BarChart3, BookOpen, Calculator, TrendingUp, Zap, RefreshCw, DollarSign, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, ReferenceLine, Area, AreaChart, BarChart, Bar } from "recharts"

const graficosData = {
  1: {
    titulo: "Gráficos Interactivos: Los Diez Principios de la Economía",
    descripcion: "Visualizaciones interactivas de los conceptos fundamentales",
    graficos: [
      {
        id: "costo-oportunidad",
        titulo: "Costo de Oportunidad",
        descripcion: "Explora cómo las decisiones implican sacrificar alternativas",
        tipo: "interactivo"
      },
      {
        id: "incentivos",
        titulo: "Respuesta a Incentivos",
        descripcion: "Observa cómo cambia el comportamiento con diferentes incentivos",
        tipo: "simulacion"
      }
    ]
  },
  2: {
    titulo: "Gráficos Interactivos: Pensando como Economista",
    descripcion: "Modelos económicos fundamentales visualizados",
    graficos: [
      {
        id: "flujo-circular",
        titulo: "Diagrama de Flujo Circular",
        descripcion: "Visualiza cómo fluye el dinero en la economía",
        tipo: "interactivo"
      },
      {
        id: "fpp",
        titulo: "Frontera de Posibilidades de Producción",
        descripcion: "Explora los trade-offs en la producción",
        tipo: "interactivo"
      },
      {
        id: "micro-macro",
        titulo: "Microeconomía vs Macroeconomía",
        descripcion: "Compara los enfoques de análisis económico",
        tipo: "comparativo"
      }
    ]
  },
  3: {
    titulo: "Gráficos Interactivos: Interdependencia y Comercio",
    descripcion: "Ventaja comparativa y ganancias del comercio",
    graficos: [
      {
        id: "ventaja-comparativa",
        titulo: "Ventaja Comparativa",
        descripcion: "Calcula y visualiza ventajas comparativas",
        tipo: "calculadora"
      },
      {
        id: "ganancias-comercio",
        titulo: "Ganancias del Comercio",
        descripcion: "Demuestra cómo el comercio beneficia a ambas partes",
        tipo: "simulacion"
      },
      {
        id: "especializacion",
        titulo: "Especialización y Productividad",
        descripcion: "Observa el impacto de la especialización",
        tipo: "interactivo"
      }
    ]
  },
  4: {
    titulo: "Gráficos Interactivos: Oferta y Demanda",
    descripcion: "Visualización dinámica de mercados competitivos",
    graficos: [
      {
        id: "equilibrio-mercado",
        titulo: "Equilibrio de Mercado",
        descripcion: "Explora cómo se determina el precio y cantidad de equilibrio",
        tipo: "interactivo"
      },
      {
        id: "desplazamientos",
        titulo: "Desplazamientos de Oferta y Demanda",
        descripcion: "Analiza efectos de cambios en determinantes",
        tipo: "simulacion"
      },
      {
        id: "excedentes",
        titulo: "Exceso de Oferta y Demanda",
        descripcion: "Visualiza desequilibrios de mercado",
        tipo: "interactivo"
      }
    ]
  },
  5: {
    titulo: "Gráficos Interactivos: Elasticidad",
    descripcion: "Sensibilidad de oferta y demanda visualizada",
    graficos: [
      {
        id: "elasticidad-demanda",
        titulo: "Elasticidad Precio de la Demanda",
        descripcion: "Calcula y visualiza diferentes elasticidades",
        tipo: "calculadora"
      },
      {
        id: "ingreso-total",
        titulo: "Elasticidad e Ingreso Total",
        descripcion: "Relación entre elasticidad y ingresos",
        tipo: "interactivo"
      },
      {
        id: "elasticidades-comparadas",
        titulo: "Comparación de Elasticidades",
        descripcion: "Compara bienes elásticos vs inelásticos",
        tipo: "comparativo"
      }
    ]
  },
  6: {
    titulo: "Gráficos Interactivos: Políticas Gubernamentales",
    descripcion: "Efectos de la intervención gubernamental en mercados",
    graficos: [
      {
        id: "controles-precios",
        titulo: "Controles de Precios",
        descripcion: "Efectos de precios máximos y mínimos",
        tipo: "simulacion"
      },
      {
        id: "impuestos",
        titulo: "Impacto de Impuestos",
        descripcion: "Incidencia fiscal y pérdida de eficiencia",
        tipo: "interactivo"
      },
      {
        id: "perdida-peso-muerto",
        titulo: "Pérdida de Peso Muerto",
        descripcion: "Visualización de ineficiencias causadas por impuestos",
        tipo: "calculadora"
      }
    ]
  }
}

export default function GraficosPage({ params }: { params: { id: string } }) {
  const [computadoras, setComputadoras] = useState([50])
  const [trabajadorA, setTrabajadorA] = useState([8])
  const [trabajadorB, setTrabajadorB] = useState([6])
  const [precioGasolina, setPrecioGasolina] = useState([3])
  const [productividadA, setProductividadA] = useState([10])
  const [productividadB, setProductividadB] = useState([6])
  const [precioEquilibrio, setPrecioEquilibrio] = useState([25])
  const [desplazamientoDemanda, setDesplazamientoDemanda] = useState([0])
  const [desplazamientoOferta, setDesplazamientoOferta] = useState([0])
  const [elasticidad, setElasticidad] = useState([1.5])
  const [precioControl, setPrecioControl] = useState([20])
  const [impuesto, setImpuesto] = useState([5])

  const graficos = graficosData[Number.parseInt(params.id) as keyof typeof graficosData]

  if (!graficos) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <p className="text-slate-600">Los gráficos para este capítulo están en desarrollo.</p>
              <Link href={`/capitulo/${params.id}`}>
                <Button className="mt-4">Volver al capítulo</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Datos para FPP
  const automoviles = Math.max(0, 100 - computadoras[0] * 2)
  const fppData = [
    { computadoras: 0, automoviles: 100 },
    { computadoras: 10, automoviles: 80 },
    { computadoras: 20, automoviles: 60 },
    { computadoras: 30, automoviles: 40 },
    { computadoras: 40, automoviles: 20 },
    { computadoras: 50, automoviles: 0 },
    { computadoras: computadoras[0], automoviles: automoviles, tipo: 'actual' }
  ]

  // Datos para ventaja comparativa
  const carneA = trabajadorA[0]
  const papasA = 12 - trabajadorA[0] * 0.67
  const carneB = trabajadorB[0] * 0.5
  const papasB = 12 - trabajadorB[0]

  const costoOportunidadA = papasA / carneA
  const costoOportunidadB = papasB / carneB

  // Datos para incentivos (gasolina)
  const demandaAutos = Math.max(10, 100 - precioGasolina[0] * 15)
  const incentivosData = [
    { precio: 1, demanda: 85 },
    { precio: 2, demanda: 70 },
    { precio: 3, demanda: 55 },
    { precio: 4, demanda: 40 },
    { precio: 5, demanda: 25 },
    { precio: precioGasolina[0], demanda: demandaAutos, tipo: 'actual' }
  ]

  // Datos para especialización
  const sinEspecializacion = productividadA[0] + productividadB[0]
  const conEspecializacion = Math.max(productividadA[0], productividadB[0]) * 1.5 + Math.min(productividadA[0], productividadB[0]) * 0.8
  const especializacionData = [
    { categoria: 'Sin Especialización', produccion: sinEspecializacion },
    { categoria: 'Con Especialización', produccion: conEspecializacion }
  ]

  // Datos para oferta y demanda (Capítulo 4)
  const generarDatosOfertaDemanda = (precio: number, desplDemanda: number, desplOferta: number) => {
    const datos = []
    for (let p = 5; p <= 50; p += 5) {
      const demanda = Math.max(0, 100 - p * 1.5 + desplDemanda)
      const oferta = Math.max(0, p * 2 - 20 + desplOferta)
      datos.push({ precio: p, demanda, oferta })
    }
    return datos
  }

  const datosOfertaDemanda = generarDatosOfertaDemanda(precioEquilibrio[0], desplazamientoDemanda[0], desplazamientoOferta[0])

  // Datos para elasticidad (Capítulo 5)
  const generarDatosElasticidad = (elasticidadValor: number) => {
    const datos = []
    const precioBase = 20
    const cantidadBase = 100
    
    for (let p = 10; p <= 40; p += 2) {
      const cambioP = (p - precioBase) / precioBase
      const cambioQ = -elasticidadValor * cambioP
      const cantidad = Math.max(0, cantidadBase * (1 + cambioQ))
      const ingresoTotal = p * cantidad
      datos.push({ precio: p, cantidad, ingresoTotal })
    }
    return datos
  }

  const datosElasticidad = generarDatosElasticidad(elasticidad[0])

  // Datos para impuestos (Capítulo 6)
  const precioSinImpuesto = 25
  const cantidadSinImpuesto = 50
  const precioCompradores = precioSinImpuesto + impuesto[0] * 0.6
  const precioVendedores = precioSinImpuesto - impuesto[0] * 0.4
  const cantidadConImpuesto = Math.max(0, cantidadSinImpuesto - impuesto[0] * 2)
  const recaudacion = impuesto[0] * cantidadConImpuesto
  const perdidaPesoMuerto = 0.5 * impuesto[0] * (cantidadSinImpuesto - cantidadConImpuesto)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
            <Badge variant="outline" className="text-slate-600 border-slate-300">
              Capítulo {params.id}
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-3xl p-8 mb-12 shadow-lg">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">{graficos.titulo}</h1>
          <p className="text-xl text-slate-700 mb-6 leading-relaxed">{graficos.descripcion}</p>
          <div className="flex items-center gap-4">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200" variant="outline">
              {graficos.graficos.length} visualizaciones
            </Badge>
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200" variant="outline">
              Interactivo
            </Badge>
          </div>
        </div>

        <div className="space-y-12">
          {/* Gráficos específicos por capítulo */}
          
          {/* Capítulo 1: Principios de Economía */}
          {params.id === "1" && (
            <>
              {/* Costo de Oportunidad */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    Costo de Oportunidad Interactivo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Escenario: Tiempo de Estudio</h4>
                      <p className="text-slate-600 mb-4">
                        Tienes 10 horas para estudiar. Puedes dedicarlas a Economía o Matemáticas.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Horas dedicadas a Economía: {trabajadorA[0]}
                          </label>
                          <Slider
                            value={trabajadorA}
                            onValueChange={setTrabajadorA}
                            max={10}
                            min={0}
                            step={1}
                            className="w-full"
                          />
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl">
                          <p><strong>Horas en Economía:</strong> {trabajadorA[0]}</p>
                          <p><strong>Horas en Matemáticas:</strong> {10 - trabajadorA[0]}</p>
                          <p className="text-blue-600 font-semibold mt-2">
                            <strong>Costo de Oportunidad:</strong> {10 - trabajadorA[0]} horas de Matemáticas
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={[
                          { materia: 'Economía', horas: trabajadorA[0] },
                          { materia: 'Matemáticas', horas: 10 - trabajadorA[0] }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="materia" />
                          <YAxis />
                          <Tooltip />
                          <Area dataKey="horas" fill="#3b82f6" fillOpacity={0.6} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Incentivos */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    Respuesta a Incentivos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Precio de la Gasolina y Demanda de Autos Grandes</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Precio de la gasolina: ${precioGasolina[0]}/galón
                          </label>
                          <Slider
                            value={precioGasolina}
                            onValueChange={setPrecioGasolina}
                            max={6}
                            min={1}
                            step={0.5}
                            className="w-full"
                          />
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl">
                          <p><strong>Precio gasolina:</strong> ${precioGasolina[0]}/galón</p>
                          <p><strong>Demanda autos grandes:</strong> {demandaAutos} unidades</p>
                          <p className="text-emerald-600 font-semibold mt-2">
                            {precioGasolina[0] > 4 ? "Alta reducción en demanda" : 
                             precioGasolina[0] > 2 ? "Reducción moderada" : "Demanda alta"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={incentivosData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="precio" label={{ value: 'Precio ($)', position: 'insideBottom', offset: -5 }} />
                          <YAxis label={{ value: 'Demanda', angle: -90, position: 'insideLeft' }} />
                          <Tooltip />
                          <Line type="monotone" dataKey="demanda" stroke="#10b981" strokeWidth={3} />
                          <Scatter dataKey="demanda" fill="#ef4444" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Capítulo 2: Pensando como Economista */}
          {params.id === "2" && (
            <>
              {/* Frontera de Posibilidades de Producción */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    Frontera de Posibilidades de Producción (FPP)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Producción de Computadoras vs Automóviles</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Computadoras producidas: {computadoras[0]}
                          </label>
                          <Slider
                            value={computadoras}
                            onValueChange={setComputadoras}
                            max={50}
                            min={0}
                            step={5}
                            className="w-full"
                          />
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl">
                          <p><strong>Computadoras:</strong> {computadoras[0]} unidades</p>
                          <p><strong>Automóviles:</strong> {automoviles} unidades</p>
                          <p><strong>Costo de Oportunidad:</strong> {(computadoras[0] * 2).toFixed(1)} automóviles</p>
                          <p className="text-violet-600 font-semibold mt-2">
                            {automoviles === 0 ? "Especialización completa en computadoras" :
                             computadoras[0] === 0 ? "Especialización completa en automóviles" :
                             "Producción mixta"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ResponsiveContainer width="100%" height={300}>
                        <ScatterChart data={fppData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="computadoras" 
                            label={{ value: 'Computadoras', position: 'insideBottom', offset: -5 }} 
                          />
                          <YAxis 
                            label={{ value: 'Automóviles', angle: -90, position: 'insideLeft' }} 
                          />
                          <Tooltip />
                          <Scatter 
                            dataKey="automoviles" 
                            fill={(data: any) => data.tipo === 'actual' ? '#ef4444' : '#8b5cf6'} 
                          />
                          <Line type="monotone" dataKey="automoviles" stroke="#8b5cf6" strokeWidth={2} />
                        </ScatterChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Flujo Circular */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                      <RefreshCw className="h-6 w-6 text-white" />
                    </div>
                    Diagrama de Flujo Circular
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-blue-50 to-violet-50 p-8 rounded-2xl">
                    <div className="grid grid-cols-3 gap-8 items-center">
                      {/* Hogares */}
                      <div className="text-center">
                        <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-lg">HOGARES</span>
                        </div>
                        <p className="text-sm text-slate-600">Propietarios de factores de producción</p>
                      </div>

                      {/* Mercados */}
                      <div className="space-y-8">
                        <div className="bg-emerald-100 p-4 rounded-xl text-center">
                          <h4 className="font-semibold text-emerald-800">Mercado de Factores</h4>
                          <p className="text-xs text-emerald-600">Trabajo, Tierra, Capital</p>
                        </div>
                        <div className="bg-orange-100 p-4 rounded-xl text-center">
                          <h4 className="font-semibold text-orange-800">Mercado de Bienes</h4>
                          <p className="text-xs text-orange-600">Productos y Servicios</p>
                        </div>
                      </div>

                      {/* Empresas */}
                      <div className="text-center">
                        <div className="w-24 h-24 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-lg">EMPRESAS</span>
                        </div>
                        <p className="text-sm text-slate-600">Productores de bienes y servicios</p>
                      </div>
                    </div>

                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-xl">
                        <h5 className="font-semibold text-blue-700 mb-2">Flujos Reales</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Hogares → Empresas: Trabajo, tierra, capital</li>
                          <li>• Empresas → Hogares: Bienes y servicios</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <h5 className="font-semibold text-emerald-700 mb-2">Flujos Monetarios</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Empresas → Hogares: Salarios, rentas, beneficios</li>
                          <li>• Hogares → Empresas: Gastos en bienes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Capítulo 3: Interdependencia y Comercio */}
          {params.id === "3" && (
            <>
              {/* Ventaja Comparativa */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                      <Calculator className="h-6 w-6 text-white" />
                    </div>
                    Calculadora de Ventaja Comparativa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Producción: Carne vs Papas</h4>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Trabajador A - Horas en carne: {trabajadorA[0]}
                          </label>
                          <Slider
                            value={trabajadorA}
                            onValueChange={setTrabajadorA}
                            max={12}
                            min={0}
                            step={1}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Trabajador B - Horas en carne: {trabajadorB[0]}
                          </label>
                          <Slider
                            value={trabajadorB}
                            onValueChange={setTrabajadorB}
                            max={12}
                            min={0}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="mt-6 space-y-4">
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <h5 className="font-semibold text-blue-800 mb-2">Trabajador A</h5>
                          <p>Carne: {carneA.toFixed(1)} oz</p>
                          <p>Papas: {papasA.toFixed(1)} oz</p>
                          <p className="font-semibold">CO carne: {costoOportunidadA.toFixed(2)} papas</p>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-xl">
                          <h5 className="font-semibold text-emerald-800 mb-2">Trabajador B</h5>
                          <p>Carne: {carneB.toFixed(1)} oz</p>
                          <p>Papas: {papasB.toFixed(1)} oz</p>
                          <p className="font-semibold">CO carne: {costoOportunidadB.toFixed(2)} papas</p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-xl">
                          <h5 className="font-semibold text-amber-800 mb-2">Ventaja Comparativa</h5>
                          <p>
                            <strong>Carne:</strong> {costoOportunidadA < costoOportunidadB ? "Trabajador A" : "Trabajador B"}
                          </p>
                          <p>
                            <strong>Papas:</strong> {costoOportunidadA > costoOportunidadB ? "Trabajador A" : "Trabajador B"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ResponsiveContainer width="100%" height={400}>
                        <ScatterChart>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="carne" 
                            label={{ value: 'Carne (oz)', position: 'insideBottom', offset: -5 }} 
                          />
                          <YAxis 
                            label={{ value: 'Papas (oz)', angle: -90, position: 'insideLeft' }} 
                          />
                          <Tooltip />
                          <Scatter 
                            data={[{ carne: carneA, papas: papasA, trabajador: 'A' }]} 
                            fill="#3b82f6" 
                          />
                          <Scatter 
                            data={[{ carne: carneB, papas: papasB, trabajador: 'B' }]} 
                            fill="#10b981" 
                          />
                        </ScatterChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Especialización */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    Beneficios de la Especialización
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Productividad de los Trabajadores</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Productividad Trabajador A: {productividadA[0]}
                          </label>
                          <Slider
                            value={productividadA}
                            onValueChange={setProductividadA}
                            max={20}
                            min={5}
                            step={1}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Productividad Trabajador B: {productividadB[0]}
                          </label>
                          <Slider
                            value={productividadB}
                            onValueChange={setProductividadB}
                            max={20}
                            min={5}
                            step={1}
                            className="w-full"
                          />
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl">
                          <p><strong>Sin especialización:</strong> {sinEspecializacion} unidades</p>
                          <p><strong>Con especialización:</strong> {conEspecializacion.toFixed(1)} unidades</p>
                          <p className="text-emerald-600 font-semibold mt-2">
                            <strong>Ganancia:</strong> {(conEspecializacion - sinEspecializacion).toFixed(1)} unidades
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={especializacionData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="categoria" />
                          <YAxis />
                          <Tooltip />
                          <Area dataKey="produccion" fill="#10b981" fillOpacity={0.6} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Capítulo 4: Oferta y Demanda */}
          {params.id === "4" && (
            <>
              {/* Equilibrio de Mercado */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    Equilibrio de Mercado Interactivo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Desplazamientos de Oferta y Demanda</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Desplazamiento de Demanda: {desplazamientoDemanda[0] > 0 ? '+' : ''}{desplazamientoDemanda[0]}
                          </label>
                          <Slider
                            value={desplazamientoDemanda}
                            onValueChange={setDesplazamientoDemanda}
                            max={30}
                            min={-30}
                            step={5}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Desplazamiento de Oferta: {desplazamientoOferta[0] > 0 ? '+' : ''}{desplazamientoOferta[0]}
                          </label>
                          <Slider
                            value={desplazamientoOferta}
                            onValueChange={setDesplazamientoOferta}
                            max={30}
                            min={-30}
                            step={5}
                            className="w-full"
                          />
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl">
                          <p><strong>Efecto en el mercado:</strong></p>
                          <p className="text-blue-600">
                            {desplazamientoDemanda[0] > 0 ? "↑ Aumento de demanda" : 
                             desplazamientoDemanda[0] < 0 ? "↓ Disminución de demanda" : "→ Demanda sin cambios"}
                          </p>
                          <p className="text-emerald-600">
                            {desplazamientoOferta[0] > 0 ? "↑ Aumento de oferta" : 
                             desplazamientoOferta[0] < 0 ? "↓ Disminución de oferta" : "→ Oferta sin cambios"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={datosOfertaDemanda}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="precio" label={{ value: 'Precio ($)', position: 'insideBottom', offset: -5 }} />
                          <YAxis label={{ value: 'Cantidad', angle: -90, position: 'insideLeft' }} />
                          <Tooltip />
                          <Line type="monotone" dataKey="demanda" stroke="#3b82f6" strokeWidth={3} name="Demanda" />
                          <Line type="monotone" dataKey="oferta" stroke="#ef4444" strokeWidth={3} name="Oferta" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Capítulo 5: Elasticidad */}
          {params.id === "5" && (
            <>
              {/* Elasticidad e Ingreso Total */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    Elasticidad e Ingreso Total
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Elasticidad Precio de la Demanda</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Elasticidad: {elasticidad[0].toFixed(1)}
                          </label>
                          <Slider
                            value={elasticidad}
                            onValueChange={setElasticidad}
                            max={3}
                            min={0.1}
                            step={0.1}
                            className="w-full"
                          />
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl">
                          <p><strong>Tipo de demanda:</strong></p>
                          <p className="text-purple-600 font-semibold">
                            {elasticidad[0] > 1 ? "Elástica (sensible al precio)" : 
                             elasticidad[0] === 1 ? "Unitaria" : "Inelástica (poco sensible)"}
                          </p>
                          <p className="text-sm mt-2">
                            {elasticidad[0] > 1 ? "Reducir precio aumenta ingresos" : 
                             elasticidad[0] === 1 ? "Cambios de precio no afectan ingresos" : 
                             "Aumentar precio aumenta ingresos"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={datosElasticidad}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="precio" label={{ value: 'Precio ($)', position: 'insideBottom', offset: -5 }} />
                          <YAxis yAxisId="left" label={{ value: 'Cantidad', angle: -90, position: 'insideLeft' }} />
                          <YAxis yAxisId="right" orientation="right" label={{ value: 'Ingreso Total', angle: 90, position: 'insideRight' }} />
                          <Tooltip />
                          <Line yAxisId="left" type="monotone" dataKey="cantidad" stroke="#8b5cf6" strokeWidth={2} name="Cantidad" />
                          <Line yAxisId="right" type="monotone" dataKey="ingresoTotal" stroke="#f59e0b" strokeWidth={2} name="Ingreso Total" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Capítulo 6: Políticas Gubernamentales */}
          {params.id === "6" && (
            <>
              {/* Controles de Precios */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-br from-red-500 to-red-600 rounded-xl">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    Controles de Precios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Precio Máximo/Mínimo</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Precio de Control: ${precioControl[0]}
                          </label>
                          <Slider
                            value={precioControl}
                            onValueChange={setPrecioControl}
                            max={40}
                            min={10}
                            step={2}
                            className="w-full"
                          />
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl">
                          <p><strong>Precio de equilibrio:</strong> $25</p>
                          <p><strong>Precio de control:</strong> ${precioControl[0]}</p>
                          <p className="font-semibold mt-2">
                            {precioControl[0] < 25 ? 
                              <span className="text-red-600">Precio máximo vinculante → Escasez</span> :
                              precioControl[0] > 25 ?
                              <span className="text-orange-600">Precio mínimo vinculante → Excedente</span> :
                              <span className="text-green-600">No vinculante → Sin efecto</span>
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={[
                          { precio: 10, demanda: 85, oferta: 0 },
                          { precio: 15, demanda: 77, oferta: 10 },
                          { precio: 20, demanda: 70, oferta: 20 },
                          { precio: 25, demanda: 62, oferta: 30 },
                          { precio: 30, demanda: 55, oferta: 40 },
                          { precio: 35, demanda: 47, oferta: 50 },
                          { precio: 40, demanda: 40, oferta: 60 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="precio" label={{ value: 'Precio ($)', position: 'insideBottom', offset: -5 }} />
                          <YAxis label={{ value: 'Cantidad', angle: -90, position: 'insideLeft' }} />
                          <Tooltip />
                          <Line type="monotone" dataKey="demanda" stroke="#3b82f6" strokeWidth={3} name="Demanda" />
                          <Line type="monotone" dataKey="oferta" stroke="#ef4444" strokeWidth={3} name="Oferta" />
                          <ReferenceLine y={precioControl[0]} stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" label="Control" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impuestos y Pérdida de Peso Muerto */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    Impacto de Impuestos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Impuesto por Unidad</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Impuesto: ${impuesto[0]} por unidad
                          </label>
                          <Slider
                            value={impuesto}
                            onValueChange={setImpuesto}
                            max={15}
                            min={0}
                            step={1}
                            className="w-full"
                          />
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl space-y-2">
                          <p><strong>Sin impuesto:</strong> P=${precioSinImpuesto}, Q={cantidadSinImpuesto}</p>
                          <p><strong>Con impuesto:</strong></p>
                          <p className="text-red-600">• Precio compradores: ${precioCompradores.toFixed(2)}</p>
                          <p className="text-blue-600">• Precio vendedores: ${precioVendedores.toFixed(2)}</p>
                          <p>• Cantidad: {cantidadConImpuesto.toFixed(0)}</p>
                          <p className="text-green-600">• Recaudación: ${recaudacion.toFixed(0)}</p>
                          <p className="text-orange-600">• Pérdida peso muerto: ${perdidaPesoMuerto.toFixed(0)}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={[
                          { concepto: 'Recaudación', valor: recaudacion },
                          { concepto: 'Pérdida Peso Muerto', valor: perdidaPesoMuerto },
                          { concepto: 'Excedente Perdido', valor: perdidaPesoMuerto + recaudacion }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="concepto" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="valor" fill="#f59e0b" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Navegación */}
          <div className="flex justify-center gap-4 pt-8">
            <Link href={`/capitulo/${params.id}`}>
              <Button variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-all duration-300">
                <BookOpen className="h-5 w-5 mr-2" />
                Volver a la Teoría
              </Button>
            </Link>
            <Link href={`/ejercicios/${params.id}`}>
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                <Calculator className="h-5 w-5 mr-2" />
                Practicar Ejercicios
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}