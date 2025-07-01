"use client"

import Link from "next/link"
import { ArrowLeft, TrendingUp, TrendingDown, RotateCcw, Info, Play, Pause, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  AreaChart,
} from "recharts"
import { useState, useEffect } from "react"

export default function GraficosPage({ params }: { params: { id: string } }) {
  // Estados para gráficos de oferta y demanda
  const [demandSlope, setDemandSlope] = useState([2])
  const [supplySlope, setSupplySlope] = useState([1])
  const [demandShift, setDemandShift] = useState([0])
  const [supplyShift, setSupplyShift] = useState([0])
  const [showEquilibrium, setShowEquilibrium] = useState(true)
  const [animateChanges, setAnimateChanges] = useState(false)

  // Estados para gráficos de elasticidad
  const [elasticidad, setElasticidad] = useState([1.5])
  const [precioInicial, setPrecioInicial] = useState([10])
  const [showIngresoTotal, setShowIngresoTotal] = useState(true)

  // Estados para FPP
  const [recursosA, setRecursosA] = useState([50])
  const [recursosB, setRecursosB] = useState([50])
  const [eficiencia, setEficiencia] = useState([100])
  const [puntoSeleccionado, setPuntoSeleccionado] = useState({ x: 25, y: 35 })

  // Estados para animación
  const [isPlaying, setIsPlaying] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])

  // Generar datos para las curvas de oferta y demanda
  const generateOfertaDemandaData = () => {
    const data = []
    for (let quantity = 0; quantity <= 100; quantity += 2) {
      const demandPrice = Math.max(0, 100 - demandSlope[0] * quantity + demandShift[0])
      const supplyPrice = Math.max(0, supplySlope[0] * quantity + 10 + supplyShift[0])

      data.push({
        quantity,
        demand: demandPrice,
        supply: supplyPrice,
        demandArea: demandPrice,
        supplyArea: supplyPrice,
      })
    }
    return data
  }

  // Generar datos para elasticidad con más detalle
  const generateElasticidadData = () => {
    const data = []
    const basePrice = precioInicial[0]
    const baseQuantity = 100

    for (let i = -80; i <= 80; i += 2) {
      const priceChange = i
      const newPrice = Math.max(0.1, basePrice + (basePrice * priceChange) / 100)
      const quantityChange = -elasticidad[0] * priceChange
      const newQuantity = Math.max(0, baseQuantity + (baseQuantity * quantityChange) / 100)

      data.push({
        precio: newPrice,
        cantidad: newQuantity,
        cambioPrecios: priceChange,
        ingresoTotal: newPrice * newQuantity,
        excedente: (newPrice * newQuantity) / 2,
      })
    }
    return data
  }

  // Generar datos para FPP con curva más realista
  const generateFPPData = () => {
    const data = []
    const maxA = recursosA[0]
    const maxB = recursosB[0]
    const eff = eficiencia[0] / 100

    for (let a = 0; a <= maxA; a += maxA / 50) {
      // Curva cóncava más realista
      const bEfficient = maxB * Math.pow(1 - a / maxA, 1.5) * eff
      const bInefficient = bEfficient * 0.7
      const bImpossible = bEfficient * 1.3

      data.push({
        bienA: a,
        bienB: bEfficient,
        eficiente: bEfficient,
        ineficiente: bInefficient,
        imposible: bImpossible,
      })
    }
    return data
  }

  // Calcular punto de equilibrio con más precisión
  const calculateEquilibrium = () => {
    const a = 100 + demandShift[0]
    const b = demandSlope[0]
    const c = 10 + supplyShift[0]
    const d = supplySlope[0]

    const equilibriumQuantity = Math.max(0, (a - c) / (b + d))
    const equilibriumPrice = Math.max(0, a - b * equilibriumQuantity)

    // Calcular excedentes
    const consumerSurplus = (equilibriumQuantity * (a - equilibriumPrice)) / 2
    const producerSurplus = (equilibriumQuantity * (equilibriumPrice - c)) / 2

    return {
      quantity: equilibriumQuantity,
      price: equilibriumPrice,
      consumerSurplus,
      producerSurplus,
      totalSurplus: consumerSurplus + producerSurplus,
    }
  }

  // Animación automática
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setDemandShift((prev) => {
          const newValue = prev[0] + (Math.random() - 0.5) * 5
          return [Math.max(-30, Math.min(30, newValue))]
        })
      }, 1000 / animationSpeed[0])
    }
    return () => clearInterval(interval)
  }, [isPlaying, animationSpeed])

  const resetControls = () => {
    setDemandSlope([2])
    setSupplySlope([1])
    setDemandShift([0])
    setSupplyShift([0])
    setElasticidad([1.5])
    setPrecioInicial([10])
    setRecursosA([50])
    setRecursosB([50])
    setEficiencia([100])
    setIsPlaying(false)
  }

  const ofertaDemandaData = generateOfertaDemandaData()
  const elasticidadData = generateElasticidadData()
  const fppData = generateFPPData()
  const equilibrium = calculateEquilibrium()

  // Configuración específica por capítulo
  const configuraciones = {
    1: {
      titulo: "Gráficos Interactivos: Los Diez Principios",
      descripcion: "Visualización de conceptos fundamentales como costo de oportunidad y FPP",
      graficos: ["fpp", "costo-oportunidad"],
    },
    2: {
      titulo: "Gráficos Interactivos: Pensando como Economista",
      descripcion: "Modelos económicos: Frontera de Posibilidades de Producción y Flujo Circular",
      graficos: ["fpp", "flujo-circular"],
    },
    4: {
      titulo: "Gráficos Interactivos: Oferta y Demanda",
      descripcion: "Explora cómo los cambios en los parámetros afectan el equilibrio de mercado",
      graficos: ["oferta-demanda", "excedentes"],
    },
    5: {
      titulo: "Gráficos Interactivos: Elasticidad",
      descripcion: "Visualiza cómo la elasticidad afecta la respuesta de la demanda",
      graficos: ["elasticidad", "ingreso-total", "tipos-elasticidad"],
    },
  }

  const config = configuraciones[params.id as keyof typeof configuraciones]

  if (!config) {
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
              <p className="text-slate-600 mb-4">Los gráficos interactivos para este capítulo están en desarrollo.</p>
              <Link href={`/capitulo/${params.id}`}>
                <Button>Volver al contenido teórico</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

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
                  <p className="text-xs text-slate-600">Gráficos Interactivos</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={resetControls} variant="outline" size="sm" className="hover:bg-slate-50">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reiniciar
              </Button>
              <Badge variant="outline" className="text-slate-600 border-slate-300">
                Capítulo {params.id}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero section mejorado */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-violet-50 rounded-3xl p-8 mb-8 shadow-lg border border-blue-100">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">{config.titulo}</h1>
            <p className="text-xl text-slate-700 mb-6 leading-relaxed">{config.descripcion}</p>
            <div className="flex items-center gap-4">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200" variant="outline">
                Interactivo
              </Badge>
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200" variant="outline">
                Tiempo Real
              </Badge>
              <Badge className="bg-violet-100 text-violet-700 border-violet-200" variant="outline">
                Educativo
              </Badge>
            </div>
          </div>
        </div>

        <Tabs defaultValue={config.graficos[0]} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/80 backdrop-blur-sm shadow-md border-0">
            {config.graficos.includes("oferta-demanda") && (
              <TabsTrigger
                value="oferta-demanda"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
              >
                Oferta y Demanda
              </TabsTrigger>
            )}
            {config.graficos.includes("excedentes") && (
              <TabsTrigger
                value="excedentes"
                className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-700"
              >
                Excedentes
              </TabsTrigger>
            )}
            {config.graficos.includes("elasticidad") && (
              <TabsTrigger
                value="elasticidad"
                className="data-[state=active]:bg-violet-100 data-[state=active]:text-violet-700"
              >
                Elasticidad
              </TabsTrigger>
            )}
            {config.graficos.includes("ingreso-total") && (
              <TabsTrigger
                value="ingreso-total"
                className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700"
              >
                Ingreso Total
              </TabsTrigger>
            )}
            {config.graficos.includes("tipos-elasticidad") && (
              <TabsTrigger
                value="tipos-elasticidad"
                className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-700"
              >
                Tipos de Elasticidad
              </TabsTrigger>
            )}
            {config.graficos.includes("fpp") && (
              <TabsTrigger value="fpp" className="data-[state=active]:bg-teal-100 data-[state=active]:text-teal-700">
                FPP
              </TabsTrigger>
            )}
            {config.graficos.includes("costo-oportunidad") && (
              <TabsTrigger
                value="costo-oportunidad"
                className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700"
              >
                Costo de Oportunidad
              </TabsTrigger>
            )}
          </TabsList>

          {/* Gráfico de Oferta y Demanda Mejorado */}
          <TabsContent value="oferta-demanda" className="space-y-8">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-6">
                {/* Controles de Demanda */}
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 bg-gradient-to-br from-red-500 to-red-600 rounded-xl">
                        <TrendingDown className="h-5 w-5 text-white" />
                      </div>
                      Curva de Demanda
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-sm font-medium">Pendiente</Label>
                        <Badge variant="outline" className="text-xs">
                          {demandSlope[0].toFixed(1)}
                        </Badge>
                      </div>
                      <Slider
                        value={demandSlope}
                        onValueChange={setDemandSlope}
                        max={5}
                        min={0.5}
                        step={0.1}
                        className="w-full"
                      />
                      <p className="text-xs text-slate-500 mt-2">Mayor pendiente = demanda menos elástica</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-sm font-medium">Desplazamiento</Label>
                        <Badge variant="outline" className="text-xs">
                          {demandShift[0] > 0 ? "+" : ""}
                          {demandShift[0]}
                        </Badge>
                      </div>
                      <Slider
                        value={demandShift}
                        onValueChange={setDemandShift}
                        max={30}
                        min={-30}
                        step={1}
                        className="w-full"
                      />
                      <p className="text-xs text-slate-500 mt-2">Positivo = aumento de demanda</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Controles de Oferta */}
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      Curva de Oferta
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-sm font-medium">Pendiente</Label>
                        <Badge variant="outline" className="text-xs">
                          {supplySlope[0].toFixed(1)}
                        </Badge>
                      </div>
                      <Slider
                        value={supplySlope}
                        onValueChange={setSupplySlope}
                        max={3}
                        min={0.2}
                        step={0.1}
                        className="w-full"
                      />
                      <p className="text-xs text-slate-500 mt-2">Mayor pendiente = oferta menos elástica</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-sm font-medium">Desplazamiento</Label>
                        <Badge variant="outline" className="text-xs">
                          {supplyShift[0] > 0 ? "+" : ""}
                          {supplyShift[0]}
                        </Badge>
                      </div>
                      <Slider
                        value={supplyShift}
                        onValueChange={setSupplyShift}
                        max={30}
                        min={-30}
                        step={1}
                        className="w-full"
                      />
                      <p className="text-xs text-slate-500 mt-2">Positivo = aumento de oferta</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Información del Equilibrio */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-violet-50">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl">
                        <Info className="h-5 w-5 text-white" />
                      </div>
                      Punto de Equilibrio
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white/80 rounded-xl">
                        <p className="text-xs text-slate-600 mb-1">Cantidad</p>
                        <p className="text-lg font-bold text-blue-700">{equilibrium.quantity.toFixed(1)}</p>
                      </div>
                      <div className="text-center p-3 bg-white/80 rounded-xl">
                        <p className="text-xs text-slate-600 mb-1">Precio</p>
                        <p className="text-lg font-bold text-blue-700">${equilibrium.price.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Excedente Consumidor:</span>
                        <Badge className="bg-green-100 text-green-700 border-green-200" variant="outline">
                          ${equilibrium.consumerSurplus.toFixed(0)}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Excedente Productor:</span>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200" variant="outline">
                          ${equilibrium.producerSurplus.toFixed(0)}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-sm font-medium text-slate-700">Excedente Total:</span>
                        <Badge className="bg-violet-100 text-violet-700 border-violet-200" variant="outline">
                          ${equilibrium.totalSurplus.toFixed(0)}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-2">
                        <Switch id="show-equilibrium" checked={showEquilibrium} onCheckedChange={setShowEquilibrium} />
                        <Label htmlFor="show-equilibrium" className="text-xs">
                          Mostrar equilibrio
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Controles de Animación */}
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                        <Settings className="h-5 w-5 text-white" />
                      </div>
                      Animación
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Button
                        onClick={() => setIsPlaying(!isPlaying)}
                        variant={isPlaying ? "default" : "outline"}
                        size="sm"
                        className="flex-1"
                      >
                        {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                        {isPlaying ? "Pausar" : "Reproducir"}
                      </Button>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Velocidad: {animationSpeed[0]}x</Label>
                      <Slider
                        value={animationSpeed}
                        onValueChange={setAnimationSpeed}
                        max={3}
                        min={0.5}
                        step={0.5}
                        className="w-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl">Gráfico de Oferta y Demanda</CardTitle>
                    <p className="text-slate-600">Interactúa con los controles para ver cómo cambia el equilibrio</p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[500px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={ofertaDemandaData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis
                            dataKey="quantity"
                            label={{ value: "Cantidad", position: "insideBottom", offset: -10 }}
                            stroke="#64748b"
                          />
                          <YAxis label={{ value: "Precio ($)", angle: -90, position: "insideLeft" }} stroke="#64748b" />
                          <Tooltip
                            formatter={(value, name) => [
                              `$${Number(value).toFixed(2)}`,
                              name === "demand" ? "Demanda" : "Oferta",
                            ]}
                            labelFormatter={(value) => `Cantidad: ${value}`}
                            contentStyle={{
                              backgroundColor: "rgba(255, 255, 255, 0.95)",
                              border: "1px solid #e2e8f0",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            }}
                          />
                          <Legend />

                          <Line
                            type="monotone"
                            dataKey="demand"
                            stroke="#ef4444"
                            strokeWidth={3}
                            dot={false}
                            name="Demanda"
                            strokeDasharray={animateChanges ? "5 5" : "0"}
                          />
                          <Line
                            type="monotone"
                            dataKey="supply"
                            stroke="#22c55e"
                            strokeWidth={3}
                            dot={false}
                            name="Oferta"
                            strokeDasharray={animateChanges ? "5 5" : "0"}
                          />

                          {showEquilibrium && (
                            <>
                              <ReferenceLine
                                x={equilibrium.quantity}
                                stroke="#6366f1"
                                strokeDasharray="8 4"
                                strokeWidth={2}
                              />
                              <ReferenceLine
                                y={equilibrium.price}
                                stroke="#6366f1"
                                strokeDasharray="8 4"
                                strokeWidth={2}
                              />
                            </>
                          )}
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Gráfico de Excedentes */}
          <TabsContent value="excedentes" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl">Excedentes del Consumidor y Productor</CardTitle>
                    <p className="text-slate-600">Visualización de los beneficios económicos en el mercado</p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[500px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={ofertaDemandaData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis
                            dataKey="quantity"
                            label={{ value: "Cantidad", position: "insideBottom", offset: -10 }}
                          />
                          <YAxis label={{ value: "Precio ($)", angle: -90, position: "insideLeft" }} />
                          <Tooltip
                            formatter={(value, name) => [
                              `$${Number(value).toFixed(2)}`,
                              name === "demand" ? "Demanda" : "Oferta",
                            ]}
                            contentStyle={{
                              backgroundColor: "rgba(255, 255, 255, 0.95)",
                              border: "1px solid #e2e8f0",
                              borderRadius: "8px",
                            }}
                          />

                          {/* Excedente del consumidor */}
                          <Area
                            type="monotone"
                            dataKey="demand"
                            stroke="#ef4444"
                            fill="#10b981"
                            fillOpacity={0.3}
                            name="Excedente Consumidor"
                          />

                          {/* Excedente del productor */}
                          <Area
                            type="monotone"
                            dataKey="supply"
                            stroke="#22c55e"
                            fill="#3b82f6"
                            fillOpacity={0.3}
                            name="Excedente Productor"
                          />

                          <Line type="monotone" dataKey="demand" stroke="#ef4444" strokeWidth={3} dot={false} />
                          <Line type="monotone" dataKey="supply" stroke="#22c55e" strokeWidth={3} dot={false} />

                          <ReferenceLine x={equilibrium.quantity} stroke="#6366f1" strokeDasharray="5 5" />
                          <ReferenceLine y={equilibrium.price} stroke="#6366f1" strokeDasharray="5 5" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg">Análisis de Bienestar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-100 rounded-xl">
                      <h4 className="font-semibold text-green-800 mb-2">Excedente del Consumidor</h4>
                      <p className="text-2xl font-bold text-green-700">${equilibrium.consumerSurplus.toFixed(0)}</p>
                      <p className="text-xs text-green-600 mt-1">Beneficio que obtienen los consumidores</p>
                    </div>

                    <div className="p-4 bg-blue-100 rounded-xl">
                      <h4 className="font-semibold text-blue-800 mb-2">Excedente del Productor</h4>
                      <p className="text-2xl font-bold text-blue-700">${equilibrium.producerSurplus.toFixed(0)}</p>
                      <p className="text-xs text-blue-600 mt-1">Beneficio que obtienen los productores</p>
                    </div>

                    <div className="p-4 bg-violet-100 rounded-xl">
                      <h4 className="font-semibold text-violet-800 mb-2">Bienestar Total</h4>
                      <p className="text-2xl font-bold text-violet-700">${equilibrium.totalSurplus.toFixed(0)}</p>
                      <p className="text-xs text-violet-600 mt-1">Suma de ambos excedentes</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Interpretación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full mt-1 flex-shrink-0"></div>
                        <p className="text-slate-700">
                          <strong>Área verde:</strong> Excedente del consumidor - diferencia entre lo que están
                          dispuestos a pagar y lo que realmente pagan
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mt-1 flex-shrink-0"></div>
                        <p className="text-slate-700">
                          <strong>Área azul:</strong> Excedente del productor - diferencia entre el precio de mercado y
                          el costo mínimo de producción
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-3 h-3 bg-violet-400 rounded-full mt-1 flex-shrink-0"></div>
                        <p className="text-slate-700">
                          <strong>Líneas punteadas:</strong> Punto de equilibrio donde se maximiza el bienestar total
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Gráfico de Elasticidad Mejorado */}
          <TabsContent value="elasticidad" className="space-y-8">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl">
                        <Info className="h-5 w-5 text-white" />
                      </div>
                      Parámetros
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-sm font-medium">Elasticidad</Label>
                        <Badge variant="outline" className="text-xs">
                          {elasticidad[0].toFixed(1)}
                        </Badge>
                      </div>
                      <Slider
                        value={elasticidad}
                        onValueChange={setElasticidad}
                        max={5}
                        min={0.1}
                        step={0.1}
                        className="w-full"
                      />
                      <div className="text-xs mt-2">
                        {elasticidad[0] > 1 ? (
                          <span className="text-red-600 font-medium">Elástica</span>
                        ) : elasticidad[0] === 1 ? (
                          <span className="text-yellow-600 font-medium">Unitaria</span>
                        ) : (
                          <span className="text-green-600 font-medium">Inelástica</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-sm font-medium">Precio Base</Label>
                        <Badge variant="outline" className="text-xs">
                          ${precioInicial[0]}
                        </Badge>
                      </div>
                      <Slider
                        value={precioInicial}
                        onValueChange={setPrecioInicial}
                        max={20}
                        min={5}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="show-revenue" checked={showIngresoTotal} onCheckedChange={setShowIngresoTotal} />
                      <Label htmlFor="show-revenue" className="text-sm">
                        Mostrar ingreso total
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-violet-50 to-purple-50">
                  <CardHeader>
                    <CardTitle className="text-lg">Interpretación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-white/80 rounded-xl">
                        <h4 className="font-semibold mb-1">
                          {elasticidad[0] > 1
                            ? "Demanda Elástica"
                            : elasticidad[0] === 1
                              ? "Demanda Unitaria"
                              : "Demanda Inelástica"}
                        </h4>
                        <p className="text-slate-600">
                          {elasticidad[0] > 1
                            ? "Los consumidores son muy sensibles a cambios de precio. Ejemplos: bienes de lujo, entretenimiento."
                            : elasticidad[0] === 1
                              ? "Cambio proporcional en cantidad y precio. Punto de maximización del ingreso."
                              : "Los consumidores son poco sensibles a cambios de precio. Ejemplos: medicinas, gasolina."}
                        </p>
                      </div>

                      <div className="p-3 bg-white/80 rounded-xl">
                        <h4 className="font-semibold mb-1">Fórmula</h4>
                        <p className="font-mono text-xs bg-slate-100 p-2 rounded">Ed = (% Δ Cantidad) / (% Δ Precio)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl">Curva de Demanda con Elasticidad Variable</CardTitle>
                    <p className="text-slate-600">Observa cómo cambia la forma de la curva según la elasticidad</p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[500px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={elasticidadData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis
                            dataKey="cantidad"
                            label={{ value: "Cantidad", position: "insideBottom", offset: -10 }}
                            stroke="#64748b"
                          />
                          <YAxis label={{ value: "Precio ($)", angle: -90, position: "insideLeft" }} stroke="#64748b" />
                          <Tooltip
                            formatter={(value, name) => [
                              name === "precio" ? `$${Number(value).toFixed(2)}` : Number(value).toFixed(1),
                              name === "precio" ? "Precio" : name === "cantidad" ? "Cantidad" : "Ingreso Total",
                            ]}
                            contentStyle={{
                              backgroundColor: "rgba(255, 255, 255, 0.95)",
                              border: "1px solid #e2e8f0",
                              borderRadius: "8px",
                            }}
                          />
                          <Legend />

                          <Line
                            type="monotone"
                            dataKey="precio"
                            stroke="#8b5cf6"
                            strokeWidth={4}
                            dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }}
                            name="Demanda"
                          />

                          {showIngresoTotal && (
                            <Line
                              type="monotone"
                              dataKey="ingresoTotal"
                              stroke="#f59e0b"
                              strokeWidth={3}
                              strokeDasharray="8 4"
                              dot={false}
                              name="Ingreso Total"
                            />
                          )}
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Gráfico de Ingreso Total */}
          <TabsContent value="ingreso-total" className="space-y-8">
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Relación entre Precio e Ingreso Total</CardTitle>
                <p className="text-slate-600">Cómo la elasticidad afecta los ingresos cuando cambian los precios</p>
              </CardHeader>
              <CardContent>
                <div className="h-[500px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={elasticidadData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis
                        dataKey="precio"
                        label={{ value: "Precio ($)", position: "insideBottom", offset: -10 }}
                        stroke="#64748b"
                      />
                      <YAxis
                        label={{ value: "Ingreso Total ($)", angle: -90, position: "insideLeft" }}
                        stroke="#64748b"
                      />
                      <Tooltip
                        formatter={(value) => [`$${Number(value).toFixed(2)}`, "Ingreso Total"]}
                        contentStyle={{
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          border: "1px solid #e2e8f0",
                          borderRadius: "8px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="ingresoTotal"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.3}
                        strokeWidth={3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-xl">
                    <h4 className="font-semibold text-green-800 mb-2">Demanda Elástica</h4>
                    <p className="text-sm text-green-700">
                      Una reducción de precio aumenta el ingreso total porque el aumento en cantidad vendida compensa la
                      reducción de precio.
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-xl">
                    <h4 className="font-semibold text-yellow-800 mb-2">Demanda Unitaria</h4>
                    <p className="text-sm text-yellow-700">
                      El ingreso total se maximiza cuando la elasticidad es igual a 1. Cambios de precio no afectan el
                      ingreso total.
                    </p>
                  </div>

                  <div className="p-4 bg-red-50 rounded-xl">
                    <h4 className="font-semibold text-red-800 mb-2">Demanda Inelástica</h4>
                    <p className="text-sm text-red-700">
                      Un aumento de precio aumenta el ingreso total porque la reducción en cantidad es proporcionalmente
                      menor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gráfico de FPP Mejorado */}
          <TabsContent value="fpp" className="space-y-8">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl">
                        <Settings className="h-5 w-5 text-white" />
                      </div>
                      Recursos Disponibles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-sm font-medium">Recursos para Bien A</Label>
                        <Badge variant="outline" className="text-xs">
                          {recursosA[0]}
                        </Badge>
                      </div>
                      <Slider
                        value={recursosA}
                        onValueChange={setRecursosA}
                        max={100}
                        min={20}
                        step={5}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-sm font-medium">Recursos para Bien B</Label>
                        <Badge variant="outline" className="text-xs">
                          {recursosB[0]}
                        </Badge>
                      </div>
                      <Slider
                        value={recursosB}
                        onValueChange={setRecursosB}
                        max={100}
                        min={20}
                        step={5}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-sm font-medium">Eficiencia Tecnológica</Label>
                        <Badge variant="outline" className="text-xs">
                          {eficiencia[0]}%
                        </Badge>
                      </div>
                      <Slider
                        value={eficiencia}
                        onValueChange={setEficiencia}
                        max={100}
                        min={50}
                        step={5}
                        className="w-full"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-50">
                  <CardHeader>
                    <CardTitle className="text-lg">Conceptos Clave</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Puntos en la curva</p>
                          <p className="text-slate-600">Producción eficiente</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Puntos dentro</p>
                          <p className="text-slate-600">Producción ineficiente</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-3 h-3 bg-gray-400 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Puntos fuera</p>
                          <p className="text-slate-600">Inalcanzables</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Pendiente</p>
                          <p className="text-slate-600">Costo de oportunidad</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Punto Seleccionado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Bien A:</span>
                        <Badge variant="outline">{puntoSeleccionado.x.toFixed(1)}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Bien B:</span>
                        <Badge variant="outline">{puntoSeleccionado.y.toFixed(1)}</Badge>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-xs text-slate-500">
                          Costo de oportunidad de A: {(puntoSeleccionado.y / puntoSeleccionado.x).toFixed(2)} unidades
                          de B
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl">Frontera de Posibilidades de Producción</CardTitle>
                    <p className="text-slate-600">
                      Explora las combinaciones posibles de producción y el costo de oportunidad
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[500px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={fppData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis
                            dataKey="bienA"
                            label={{ value: "Bien A (unidades)", position: "insideBottom", offset: -10 }}
                            stroke="#64748b"
                          />
                          <YAxis
                            label={{ value: "Bien B (unidades)", angle: -90, position: "insideLeft" }}
                            stroke="#64748b"
                          />
                          <Tooltip
                            formatter={(value, name) => [
                              Number(value).toFixed(1),
                              name === "eficiente"
                                ? "Producción Eficiente"
                                : name === "ineficiente"
                                  ? "Producción Ineficiente"
                                  : "Imposible",
                            ]}
                            contentStyle={{
                              backgroundColor: "rgba(255, 255, 255, 0.95)",
                              border: "1px solid #e2e8f0",
                              borderRadius: "8px",
                            }}
                          />

                          {/* Área posible pero ineficiente */}
                          <Area type="monotone" dataKey="eficiente" stroke="none" fill="#10b981" fillOpacity={0.2} />

                          {/* Frontera eficiente */}
                          <Line
                            type="monotone"
                            dataKey="eficiente"
                            stroke="#2563eb"
                            strokeWidth={4}
                            dot={false}
                            name="Frontera Eficiente"
                          />

                          {/* Línea de producción ineficiente */}
                          <Line
                            type="monotone"
                            dataKey="ineficiente"
                            stroke="#ef4444"
                            strokeWidth={2}
                            strokeDasharray="8 4"
                            dot={false}
                            name="Producción Ineficiente"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Gráfico de Costo de Oportunidad */}
          <TabsContent value="costo-oportunidad" className="space-y-8">
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Visualización del Costo de Oportunidad</CardTitle>
                <p className="text-slate-600">Comprende cómo cada decisión implica renunciar a alternativas</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                      <h3 className="text-xl font-bold text-amber-800 mb-4">Ejemplo: Tiempo de Estudio</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                          <span className="font-medium">Estudiar Economía</span>
                          <Badge className="bg-blue-100 text-blue-700">4 horas</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                          <span className="font-medium">Trabajar (ganancia)</span>
                          <Badge className="bg-green-100 text-green-700">$60</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-amber-100 rounded-xl border-2 border-amber-300">
                          <span className="font-bold">Costo de Oportunidad</span>
                          <Badge className="bg-amber-200 text-amber-800">$60</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-800 mb-4">Ejemplo: Inversión</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                          <span className="font-medium">Invertir en Acciones</span>
                          <Badge className="bg-purple-100 text-purple-700">$10,000</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                          <span className="font-medium">Depósito a plazo (5%)</span>
                          <Badge className="bg-green-100 text-green-700">$500/año</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-100 rounded-xl border-2 border-blue-300">
                          <span className="font-bold">Costo de Oportunidad</span>
                          <Badge className="bg-blue-200 text-blue-800">$500/año</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-800 mb-4">Principios Clave</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                            1
                          </div>
                          <p className="text-green-700">
                            <strong>Escasez:</strong> Los recursos son limitados, por lo que debemos elegir
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                            2
                          </div>
                          <p className="text-green-700">
                            <strong>Alternativas:</strong> Siempre hay múltiples opciones disponibles
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                            3
                          </div>
                          <p className="text-green-700">
                            <strong>Mejor alternativa:</strong> El costo es el valor de la mejor opción no elegida
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                            4
                          </div>
                          <p className="text-green-700">
                            <strong>Decisiones racionales:</strong> Comparar beneficios vs costos de oportunidad
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-800 mb-4">Fórmula del Costo de Oportunidad</h3>
                      <div className="bg-white p-4 rounded-xl border-2 border-purple-300 mb-4">
                        <p className="font-mono text-lg text-center text-purple-700">
                          CO = Valor de la mejor alternativa sacrificada
                        </p>
                      </div>
                      <div className="space-y-2 text-sm text-purple-700">
                        <p>
                          <strong>Donde:</strong>
                        </p>
                        <p>• CO = Costo de Oportunidad</p>
                        <p>• Se mide en las mismas unidades que la alternativa (dinero, tiempo, etc.)</p>
                        <p>• Solo considera la MEJOR alternativa, no todas las alternativas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Experimentos Sugeridos Mejorados */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-blue-50 mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">🧪 Experimentos Sugeridos</CardTitle>
            <p className="text-slate-600">Prueba estos escenarios para profundizar tu comprensión</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {params.id === "4" && (
                <>
                  <div className="p-6 border border-blue-200 rounded-2xl bg-white/80 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-xl">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-lg">Aumento de Demanda</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      Configura el desplazamiento de demanda a +20 y observa cómo aumentan tanto el precio como la
                      cantidad de equilibrio.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                        Aumento de ingresos
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                        Mayor población
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 border border-emerald-200 rounded-2xl bg-white/80 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-emerald-100 rounded-xl">
                        <TrendingDown className="h-5 w-5 text-emerald-600" />
                      </div>
                      <h4 className="font-semibold text-lg">Mejora Tecnológica</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      Aumenta el desplazamiento de oferta a +15 para simular una mejora tecnológica que reduce costos de
                      producción.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">
                        Innovación
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                        Eficiencia
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 border border-violet-200 rounded-2xl bg-white/80 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-violet-100 rounded-xl">
                        <Settings className="h-5 w-5 text-violet-600" />
                      </div>
                      <h4 className="font-semibold text-lg">Elasticidades Diferentes</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      Compara una demanda muy elástica (pendiente 0.5) con una muy inelástica (pendiente 4) y observa
                      los efectos.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs bg-violet-50 text-violet-700 border-violet-200">
                        Sensibilidad al precio
                      </Badge>
                    </div>
                  </div>
                </>
              )}

              {params.id === "5" && (
                <>
                  <div className="p-6 border border-red-200 rounded-2xl bg-white/80 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-red-100 rounded-xl">
                        <TrendingUp className="h-5 w-5 text-red-600" />
                      </div>
                      <h4 className="font-semibold text-lg">Bienes de Lujo</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      Configura elasticidad &gt; 2 y observa cómo el ingreso total disminuye cuando aumenta el precio.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                        Joyas
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">
                        Autos deportivos
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 border border-green-200 rounded-2xl bg-white/80 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-100 rounded-xl">
                        <TrendingDown className="h-5 w-5 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-lg">Bienes Necesarios</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      Configura elasticidad &lt; 0.5 y analiza cómo el ingreso total aumenta con el precio.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                        Medicinas
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                        Gasolina
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 border border-yellow-200 rounded-2xl bg-white/80 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-yellow-100 rounded-xl">
                        <Info className="h-5 w-5 text-yellow-600" />
                      </div>
                      <h4 className="font-semibold text-lg">Elasticidad Unitaria</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      Configura elasticidad = 1 y observa cómo el ingreso total permanece constante.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">
                        Punto de maximización
                      </Badge>
                    </div>
                  </div>
                </>
              )}

              {(params.id === "1" || params.id === "2") && (
                <>
                  <div className="p-6 border border-teal-200 rounded-2xl bg-white/80 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-teal-100 rounded-xl">
                        <TrendingUp className="h-5 w-5 text-teal-600" />
                      </div>
                      <h4 className="font-semibold text-lg">Crecimiento Económico</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      Aumenta ambos recursos y la eficiencia al 100% para observar la expansión de la FPP.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs bg-teal-50 text-teal-700 border-teal-200">
                        Progreso tecnológico
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                        Más recursos
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 border border-purple-200 rounded-2xl bg-white/80 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-100 rounded-xl">
                        <Users className="h-5 w-5 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-lg">Especialización</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      Aumenta recursos de un bien y reduce del otro para simular ventaja comparativa.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                        Ventaja comparativa
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-indigo-50 text-indigo-700 border-indigo-200">
                        Comercio
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 border border-orange-200 rounded-2xl bg-white/80 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-100 rounded-xl">
                        <TrendingDown className="h-5 w-5 text-orange-600" />
                      </div>
                      <h4 className="font-semibold text-lg">Ineficiencia</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      Reduce la eficiencia al 70% y analiza la pérdida de producción potencial.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">
                        Desempleo
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                        Recursos ociosos
                      </Badge>
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Guía de Interpretación */}
        <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">📚 Guía de Interpretación</CardTitle>
            <p className="text-slate-600">Cómo leer y analizar los gráficos económicos</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">Elementos Clave</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-slate-800">Ejes del Gráfico</p>
                      <p className="text-sm text-slate-600">
                        X = Cantidad, Y = Precio. Siempre verifica las unidades y escalas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-slate-800">Pendiente de las Curvas</p>
                      <p className="text-sm text-slate-600">
                        Indica la sensibilidad: pendiente pronunciada = menos sensible al precio.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-slate-800">Desplazamientos</p>
                      <p className="text-sm text-slate-600">
                        Movimientos de toda la curva debido a factores externos (ingresos, tecnología, etc.).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-slate-800">Puntos de Intersección</p>
                      <p className="text-sm text-slate-600">
                        Representan equilibrios donde las fuerzas del mercado se balancean.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">Análisis Económico</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <h4 className="font-semibold text-blue-800 mb-2">Causa y Efecto</h4>
                    <p className="text-sm text-blue-700">
                      Identifica qué variable cambia primero (causa) y cómo afecta a las demás (efecto).
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl">
                    <h4 className="font-semibold text-green-800 mb-2">Equilibrio vs Desequilibrio</h4>
                    <p className="text-sm text-green-700">
                      Observa cómo el mercado tiende hacia el equilibrio cuando hay exceso de oferta o demanda.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <h4 className="font-semibold text-purple-800 mb-2">Bienestar Económico</h4>
                    <p className="text-sm text-purple-700">
                      Las áreas bajo las curvas representan beneficios para consumidores y productores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
