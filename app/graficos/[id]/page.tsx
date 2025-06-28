"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen, Calculator, BarChart3, TrendingUp, DollarSign, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, ReferenceLine, BarChart, Bar } from "recharts"

const graficosData = {
  1: {
    titulo: "Gráficos: Los Diez Principios de la Economía",
    descripcion: "Visualizaciones interactivas de los conceptos fundamentales económicos",
    graficos: [
      {
        id: "frontera-posibilidades",
        titulo: "Frontera de Posibilidades de Producción",
        descripcion: "Explora las disyuntivas y el costo de oportunidad",
        tipo: "interactivo",
      },
      {
        id: "flujo-circular",
        titulo: "Diagrama de Flujo Circular",
        descripcion: "Visualiza cómo fluye el dinero en la economía",
        tipo: "estatico",
      },
    ],
  },
  2: {
    titulo: "Gráficos: Pensando como Economista",
    descripcion: "Modelos económicos fundamentales y herramientas de análisis",
    graficos: [
      {
        id: "fpp-interactiva",
        titulo: "Frontera de Posibilidades de Producción Interactiva",
        descripcion: "Manipula recursos y tecnología para ver cambios en la FPP",
        tipo: "interactivo",
      },
      {
        id: "modelos-economicos",
        titulo: "Comparación de Modelos Económicos",
        descripcion: "Visualiza diferentes supuestos y sus efectos",
        tipo: "comparativo",
      },
    ],
  },
  3: {
    titulo: "Gráficos: Interdependencia y Comercio",
    descripcion: "Visualización de ventaja comparativa y ganancias del comercio",
    graficos: [
      {
        id: "ventaja-comparativa",
        titulo: "Calculadora de Ventaja Comparativa",
        descripcion: "Calcula y visualiza ventajas comparativas entre países",
        tipo: "calculadora",
      },
      {
        id: "ganancias-comercio",
        titulo: "Ganancias del Comercio",
        descripcion: "Muestra cómo el comercio beneficia a ambas partes",
        tipo: "interactivo",
      },
    ],
  },
  4: {
    titulo: "Gráficos: Oferta y Demanda",
    descripcion: "Simulaciones interactivas del funcionamiento de los mercados",
    graficos: [
      {
        id: "oferta-demanda-basico",
        titulo: "Modelo Básico de Oferta y Demanda",
        descripcion: "Manipula factores para ver cambios en equilibrio",
        tipo: "simulacion",
      },
      {
        id: "desplazamientos",
        titulo: "Desplazamientos de Curvas",
        descripcion: "Analiza cómo diferentes factores afectan las curvas",
        tipo: "interactivo",
      },
    ],
  },
  5: {
    titulo: "Gráficos: Elasticidad y Aplicaciones",
    descripcion: "Herramientas interactivas para entender la elasticidad",
    graficos: [
      {
        id: "elasticidad-calculadora",
        titulo: "Calculadora de Elasticidad",
        descripcion: "Calcula diferentes tipos de elasticidad",
        tipo: "calculadora",
      },
      {
        id: "elasticidad-ingreso-total",
        titulo: "Elasticidad e Ingreso Total",
        descripcion: "Visualiza la relación entre elasticidad e ingresos",
        tipo: "interactivo",
      },
    ],
  },
  6: {
    titulo: "Gráficos: Políticas Gubernamentales",
    descripcion: "Simulaciones del impacto de políticas en los mercados",
    graficos: [
      {
        id: "controles-precios",
        titulo: "Simulador de Controles de Precios",
        descripcion: "Analiza efectos de precios máximos y mínimos",
        tipo: "simulacion",
      },
      {
        id: "impuestos-mercado",
        titulo: "Efectos de Impuestos en el Mercado",
        descripcion: "Visualiza incidencia fiscal y pérdida de peso muerto",
        tipo: "interactivo",
      },
    ],
  },
  7: {
    titulo: "Gráficos: Excedentes y Eficiencia",
    descripcion: "Análisis visual del bienestar económico",
    graficos: [
      {
        id: "excedentes-interactivo",
        titulo: "Calculadora de Excedentes",
        descripcion: "Calcula excedente del consumidor y productor",
        tipo: "calculadora",
      },
      {
        id: "eficiencia-mercado",
        titulo: "Análisis de Eficiencia del Mercado",
        descripcion: "Visualiza condiciones de eficiencia económica",
        tipo: "interactivo",
      },
    ],
  },
  8: {
    titulo: "Gráficos: Costos de los Impuestos",
    descripcion: "Análisis visual de la pérdida de peso muerto",
    graficos: [
      {
        id: "perdida-peso-muerto",
        titulo: "Simulador de Pérdida de Peso Muerto",
        descripcion: "Visualiza cómo los impuestos crean ineficiencias",
        tipo: "simulacion",
      },
      {
        id: "curva-laffer",
        titulo: "Curva de Laffer Interactiva",
        descripcion: "Explora la relación entre tasas de impuestos e ingresos",
        tipo: "interactivo",
      },
    ],
  },
  9: {
    titulo: "Gráficos: Comercio Internacional",
    descripcion: "Análisis visual del comercio y políticas comerciales",
    graficos: [
      {
        id: "comercio-internacional",
        titulo: "Simulador de Comercio Internacional",
        descripcion: "Analiza efectos del comercio en países exportadores e importadores",
        tipo: "simulacion",
      },
      {
        id: "aranceles-cuotas",
        titulo: "Efectos de Aranceles y Cuotas",
        descripcion: "Compara impactos de diferentes políticas comerciales",
        tipo: "comparativo",
      },
    ],
  },
}

// Componentes de gráficos específicos
function ExcedentesInteractivo() {
  const [precio, setPrecio] = useState([50])
  const [interceptoDemanda, setInterceptoDemanda] = useState([100])
  const [interceptoOferta, setInterceptoOferta] = useState([20])

  // Calcular puntos de las curvas
  const generarDatos = () => {
    const datos = []
    for (let q = 0; q <= 100; q += 5) {
      const pDemanda = interceptoDemanda[0] - q
      const pOferta = interceptoOferta[0] + q * 0.8
      datos.push({
        cantidad: q,
        demanda: Math.max(0, pDemanda),
        oferta: Math.max(0, pOferta),
        precio: precio[0],
      })
    }
    return datos
  }

  // Calcular equilibrio
  const calcularEquilibrio = () => {
    const pendienteDemanda = -1
    const pendienteOferta = 0.8
    const qEquilibrio = (interceptoDemanda[0] - interceptoOferta[0]) / (1 + 0.8)
    const pEquilibrio = interceptoDemanda[0] + pendienteDemanda * qEquilibrio
    return { q: qEquilibrio, p: pEquilibrio }
  }

  // Calcular excedentes
  const calcularExcedentes = () => {
    const equilibrio = calcularEquilibrio()
    const excedentesConsumidor = 0.5 * equilibrio.q * (interceptoDemanda[0] - equilibrio.p)
    const excedentesProductor = 0.5 * equilibrio.q * (equilibrio.p - interceptoOferta[0])
    return {
      consumidor: excedentesConsumidor,
      productor: excedentesProductor,
      total: excedentesConsumidor + excedentesProductor,
    }
  }

  const datos = generarDatos()
  const equilibrio = calcularEquilibrio()
  const excedentes = calcularExcedentes()

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-4">Controles Interactivos</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Intercepto de Demanda: {interceptoDemanda[0]}
              </label>
              <Slider
                value={interceptoDemanda}
                onValueChange={setInterceptoDemanda}
                max={150}
                min={50}
                step={5}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Intercepto de Oferta: {interceptoOferta[0]}
              </label>
              <Slider
                value={interceptoOferta}
                onValueChange={setInterceptoOferta}
                max={50}
                min={0}
                step={5}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Resultados</h4>
          <div className="space-y-3">
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-sm text-blue-600">Equilibrio</div>
              <div className="font-semibold">P = ${equilibrio.p.toFixed(2)}, Q = {equilibrio.q.toFixed(1)}</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-sm text-green-600">Excedente del Consumidor</div>
              <div className="font-semibold">${excedentes.consumidor.toFixed(2)}</div>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <div className="text-sm text-orange-600">Excedente del Productor</div>
              <div className="font-semibold">${excedentes.productor.toFixed(2)}</div>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <div className="text-sm text-purple-600">Excedente Total</div>
              <div className="font-semibold">${excedentes.total.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={datos}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="cantidad" label={{ value: 'Cantidad', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Precio ($)', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              formatter={(value, name) => [
                `$${Number(value).toFixed(2)}`, 
                name === 'demanda' ? 'Demanda' : name === 'oferta' ? 'Oferta' : 'Precio'
              ]}
            />
            <Line type="monotone" dataKey="demanda" stroke="#3b82f6" strokeWidth={3} name="Demanda" dot={false} />
            <Line type="monotone" dataKey="oferta" stroke="#ef4444" strokeWidth={3} name="Oferta" dot={false} />
            <ReferenceLine x={equilibrio.q} stroke="#8b5cf6" strokeDasharray="5 5" />
            <ReferenceLine y={equilibrio.p} stroke="#8b5cf6" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function CurvaLafferInteractiva() {
  const [tasaImpuesto, setTasaImpuesto] = useState([30])

  const generarDatosLaffer = () => {
    const datos = []
    for (let tasa = 0; tasa <= 100; tasa += 2) {
      // Función de Laffer simplificada: R = t * (100 - t) * factor
      const baseImponible = Math.max(0, 100 - tasa * 0.8)
      const recaudacion = (tasa / 100) * baseImponible * 100
      const perdidaPesoMuerto = Math.pow(tasa / 100, 2) * 50
      
      datos.push({
        tasa,
        recaudacion,
        perdidaPesoMuerto,
        baseImponible,
        tasaActual: tasa === tasaImpuesto[0] ? recaudacion : null,
      })
    }
    return datos
  }

  const datos = generarDatosLaffer()
  const puntoActual = datos.find(d => d.tasa === tasaImpuesto[0])

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-4">Control de Tasa de Impuesto</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Tasa de Impuesto: {tasaImpuesto[0]}%
              </label>
              <Slider
                value={tasaImpuesto}
                onValueChange={setTasaImpuesto}
                max={100}
                min={0}
                step={2}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Resultados en Tasa Actual</h4>
          <div className="space-y-3">
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-sm text-green-600">Recaudación Fiscal</div>
              <div className="font-semibold">${puntoActual?.recaudacion.toFixed(2)}</div>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="text-sm text-red-600">Pérdida de Peso Muerto</div>
              <div className="font-semibold">${puntoActual?.perdidaPesoMuerto.toFixed(2)}</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-sm text-blue-600">Base Imponible</div>
              <div className="font-semibold">{puntoActual?.baseImponible.toFixed(1)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={datos}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tasa" label={{ value: 'Tasa de Impuesto (%)', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Valor ($)', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              formatter={(value, name) => [
                `$${Number(value).toFixed(2)}`, 
                name === 'recaudacion' ? 'Recaudación' : 
                name === 'perdidaPesoMuerto' ? 'Pérdida de Peso Muerto' : 'Base Imponible'
              ]}
            />
            <Line type="monotone" dataKey="recaudacion" stroke="#10b981" strokeWidth={3} name="Recaudación" dot={false} />
            <Line type="monotone" dataKey="perdidaPesoMuerto" stroke="#ef4444" strokeWidth={3} name="Pérdida de Peso Muerto" dot={false} />
            <ReferenceLine x={tasaImpuesto[0]} stroke="#8b5cf6" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-amber-50 p-4 rounded-lg">
        <h5 className="font-semibold text-amber-800 mb-2">Interpretación de la Curva de Laffer</h5>
        <ul className="text-sm text-amber-700 space-y-1">
          <li>• <strong>Lado izquierdo (tasas bajas):</strong> Aumentar impuestos incrementa la recaudación</li>
          <li>• <strong>Punto máximo:</strong> Tasa que maximiza la recaudación fiscal</li>
          <li>• <strong>Lado derecho (tasas altas):</strong> Aumentar impuestos reduce la recaudación</li>
          <li>• <strong>Pérdida de peso muerto:</strong> Aumenta cuadráticamente con la tasa de impuesto</li>
        </ul>
      </div>
    </div>
  )
}

function ComercioInternacional() {
  const [precioMundial, setPrecioMundial] = useState([45])
  const [arancel, setArancel] = useState([0])

  const generarDatosComercio = () => {
    const datos = []
    for (let q = 0; q <= 100; q += 5) {
      const demandaDomestica = 80 - q * 0.6
      const ofertaDomestica = 20 + q * 0.4
      
      datos.push({
        cantidad: q,
        demandaDomestica: Math.max(0, demandaDomestica),
        ofertaDomestica: Math.max(0, ofertaDomestica),
        precioMundial: precioMundial[0],
        precioConArancel: precioMundial[0] + arancel[0],
      })
    }
    return datos
  }

  // Calcular equilibrio de autarquía
  const calcularAutarquia = () => {
    // Demanda: P = 80 - 0.6Q, Oferta: P = 20 + 0.4Q
    const qAutarquia = (80 - 20) / (0.6 + 0.4)
    const pAutarquia = 20 + 0.4 * qAutarquia
    return { q: qAutarquia, p: pAutarquia }
  }

  // Calcular cantidades con comercio
  const calcularComercio = () => {
    const precioEfectivo = precioMundial[0] + arancel[0]
    const qDemandada = (80 - precioEfectivo) / 0.6
    const qOfrecida = (precioEfectivo - 20) / 0.4
    const importaciones = Math.max(0, qDemandada - qOfrecida)
    
    return {
      qDemandada: Math.max(0, qDemandada),
      qOfrecida: Math.max(0, qOfrecida),
      importaciones,
      precioEfectivo,
    }
  }

  // Calcular efectos del bienestar
  const calcularBienestar = () => {
    const autarquia = calcularAutarquia()
    const comercio = calcularComercio()
    
    // Cambios en excedentes (simplificado)
    const cambioConsumidor = 0.5 * (autarquia.p - comercio.precioEfectivo) * (comercio.qDemandada + autarquia.q)
    const cambioProductor = -0.5 * (autarquia.p - comercio.precioEfectivo) * (comercio.qOfrecida + autarquia.q)
    const recaudacionArancel = arancel[0] * comercio.importaciones
    const perdidaPesoMuerto = 0.5 * arancel[0] * (autarquia.q - comercio.qOfrecida) + 
                             0.5 * arancel[0] * (comercio.qDemandada - autarquia.q)
    
    return {
      cambioConsumidor,
      cambioProductor,
      recaudacionArancel,
      perdidaPesoMuerto,
      cambioTotal: cambioConsumidor + cambioProductor + recaudacionArancel,
    }
  }

  const datos = generarDatosComercio()
  const autarquia = calcularAutarquia()
  const comercio = calcularComercio()
  const bienestar = calcularBienestar()

  const esImportador = precioMundial[0] < autarquia.p

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-4">Controles de Política</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Precio Mundial: ${precioMundial[0]}
              </label>
              <Slider
                value={precioMundial}
                onValueChange={setPrecioMundial}
                max={70}
                min={30}
                step={1}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Arancel: ${arancel[0]}
              </label>
              <Slider
                value={arancel}
                onValueChange={setArancel}
                max={20}
                min={0}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Análisis del Mercado</h4>
          <div className="space-y-3">
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-sm text-blue-600">Tipo de País</div>
              <div className="font-semibold">{esImportador ? 'Importador' : 'Exportador'}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">Precio de Autarquía</div>
              <div className="font-semibold">${autarquia.p.toFixed(2)}</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-sm text-green-600">Precio Efectivo</div>
              <div className="font-semibold">${comercio.precioEfectivo.toFixed(2)}</div>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <div className="text-sm text-orange-600">
                {esImportador ? 'Importaciones' : 'Exportaciones'}
              </div>
              <div className="font-semibold">{comercio.importaciones.toFixed(1)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={datos}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="cantidad" label={{ value: 'Cantidad', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Precio ($)', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              formatter={(value, name) => [
                `$${Number(value).toFixed(2)}`, 
                name === 'demandaDomestica' ? 'Demanda Doméstica' : 
                name === 'ofertaDomestica' ? 'Oferta Doméstica' :
                name === 'precioMundial' ? 'Precio Mundial' : 'Precio con Arancel'
              ]}
            />
            <Line type="monotone" dataKey="demandaDomestica" stroke="#3b82f6" strokeWidth={3} name="Demanda Doméstica" dot={false} />
            <Line type="monotone" dataKey="ofertaDomestica" stroke="#ef4444" strokeWidth={3} name="Oferta Doméstica" dot={false} />
            <ReferenceLine y={precioMundial[0]} stroke="#10b981" strokeDasharray="5 5" label="Precio Mundial" />
            {arancel[0] > 0 && (
              <ReferenceLine y={precioMundial[0] + arancel[0]} stroke="#f59e0b" strokeDasharray="5 5" label="Precio + Arancel" />
            )}
            <ReferenceLine x={autarquia.q} y={autarquia.p} stroke="#8b5cf6" strokeDasharray="2 2" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <h5 className="font-semibold text-green-800 mb-2">Efectos en el Bienestar</h5>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Cambio Consumidor:</span>
              <span className={bienestar.cambioConsumidor >= 0 ? 'text-green-600' : 'text-red-600'}>
                ${bienestar.cambioConsumidor.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Cambio Productor:</span>
              <span className={bienestar.cambioProductor >= 0 ? 'text-green-600' : 'text-red-600'}>
                ${bienestar.cambioProductor.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Recaudación Arancel:</span>
              <span className="text-blue-600">${bienestar.recaudacionArancel.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Cambio Total:</span>
              <span className={bienestar.cambioTotal >= 0 ? 'text-green-600' : 'text-red-600'}>
                ${bienestar.cambioTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h5 className="font-semibold text-red-800 mb-2">Pérdida de Peso Muerto</h5>
          <div className="text-2xl font-bold text-red-600 mb-2">
            ${bienestar.perdidaPesoMuerto.toFixed(2)}
          </div>
          <p className="text-sm text-red-700">
            Pérdida de eficiencia económica debido al arancel. Representa transacciones 
            mutuamente beneficiosas que no ocurren por la distorsión del precio.
          </p>
        </div>
      </div>
    </div>
  )
}

function OfertaDemandaBasico() {
  const [interceptoDemanda, setInterceptoDemanda] = useState([100])
  const [pendienteDemanda, setPendienteDemanda] = useState([1])
  const [interceptoOferta, setInterceptoOferta] = useState([20])
  const [pendienteOferta, setPendienteOferta] = useState([0.8])

  const generarDatos = () => {
    const datos = []
    for (let q = 0; q <= 100; q += 2) {
      const pDemanda = interceptoDemanda[0] - pendienteDemanda[0] * q
      const pOferta = interceptoOferta[0] + pendienteOferta[0] * q
      datos.push({
        cantidad: q,
        demanda: Math.max(0, pDemanda),
        oferta: Math.max(0, pOferta),
      })
    }
    return datos
  }

  const calcularEquilibrio = () => {
    const qEq = (interceptoDemanda[0] - interceptoOferta[0]) / (pendienteDemanda[0] + pendienteOferta[0])
    const pEq = interceptoDemanda[0] - pendienteDemanda[0] * qEq
    return { q: qEq, p: pEq }
  }

  const datos = generarDatos()
  const equilibrio = calcularEquilibrio()

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-4">Parámetros de Demanda</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Intercepto: {interceptoDemanda[0]}
              </label>
              <Slider
                value={interceptoDemanda}
                onValueChange={setInterceptoDemanda}
                max={150}
                min={50}
                step={5}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Pendiente: {pendienteDemanda[0]}
              </label>
              <Slider
                value={pendienteDemanda}
                onValueChange={setPendienteDemanda}
                max={2}
                min={0.2}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Parámetros de Oferta</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Intercepto: {interceptoOferta[0]}
              </label>
              <Slider
                value={interceptoOferta}
                onValueChange={setInterceptoOferta}
                max={50}
                min={0}
                step={2}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Pendiente: {pendienteOferta[0]}
              </label>
              <Slider
                value={pendienteOferta}
                onValueChange={setPendienteOferta}
                max={2}
                min={0.2}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h5 className="font-semibold text-blue-800 mb-2">Equilibrio de Mercado</h5>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-blue-600">Precio de Equilibrio:</span>
            <div className="font-semibold text-lg">${equilibrio.p.toFixed(2)}</div>
          </div>
          <div>
            <span className="text-blue-600">Cantidad de Equilibrio:</span>
            <div className="font-semibold text-lg">{equilibrio.q.toFixed(1)}</div>
          </div>
        </div>
      </div>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={datos}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="cantidad" label={{ value: 'Cantidad', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Precio ($)', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              formatter={(value, name) => [
                `$${Number(value).toFixed(2)}`, 
                name === 'demanda' ? 'Demanda' : 'Oferta'
              ]}
            />
            <Line type="monotone" dataKey="demanda" stroke="#3b82f6" strokeWidth={3} name="Demanda" dot={false} />
            <Line type="monotone" dataKey="oferta" stroke="#ef4444" strokeWidth={3} name="Oferta" dot={false} />
            <ReferenceLine x={equilibrio.q} stroke="#8b5cf6" strokeDasharray="5 5" />
            <ReferenceLine y={equilibrio.p} stroke="#8b5cf6" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h5 className="font-semibold text-gray-800 mb-2">Ecuaciones del Modelo</h5>
        <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">
          <div>
            <div className="text-blue-600">Función de Demanda:</div>
            <div>P = {interceptoDemanda[0]} - {pendienteDemanda[0]}Q</div>
          </div>
          <div>
            <div className="text-red-600">Función de Oferta:</div>
            <div>P = {interceptoOferta[0]} + {pendienteOferta[0]}Q</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ElasticidadCalculadora() {
  const [precio1, setPrecio1] = useState([10])
  const [precio2, setPrecio2] = useState([12])
  const [cantidad1, setCantidad1] = useState([100])
  const [cantidad2, setCantidad2] = useState([80])

  const calcularElasticidad = () => {
    const deltaP = precio2[0] - precio1[0]
    const deltaQ = cantidad2[0] - cantidad1[0]
    const promP = (precio1[0] + precio2[0]) / 2
    const promQ = (cantidad1[0] + cantidad2[0]) / 2
    
    const elasticidad = (deltaQ / promQ) / (deltaP / promP)
    
    return {
      elasticidad,
      cambioP: (deltaP / promP) * 100,
      cambioQ: (deltaQ / promQ) * 100,
      tipo: Math.abs(elasticidad) > 1 ? 'Elástica' : Math.abs(elasticidad) < 1 ? 'Inelástica' : 'Unitaria',
    }
  }

  const calcularIngresoTotal = () => {
    const ingreso1 = precio1[0] * cantidad1[0]
    const ingreso2 = precio2[0] * cantidad2[0]
    const cambioIngreso = ingreso2 - ingreso1
    
    return { ingreso1, ingreso2, cambioIngreso }
  }

  const elasticidad = calcularElasticidad()
  const ingresos = calcularIngresoTotal()

  const generarDatosElasticidad = () => {
    return [
      {
        punto: 'Inicial',
        precio: precio1[0],
        cantidad: cantidad1[0],
        ingreso: ingresos.ingreso1,
      },
      {
        punto: 'Final',
        precio: precio2[0],
        cantidad: cantidad2[0],
        ingreso: ingresos.ingreso2,
      },
    ]
  }

  const datos = generarDatosElasticidad()

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-4">Punto Inicial</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Precio 1: ${precio1[0]}
              </label>
              <Slider
                value={precio1}
                onValueChange={setPrecio1}
                max={20}
                min={5}
                step={0.5}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Cantidad 1: {cantidad1[0]}
              </label>
              <Slider
                value={cantidad1}
                onValueChange={setCantidad1}
                max={150}
                min={50}
                step={5}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Punto Final</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Precio 2: ${precio2[0]}
              </label>
              <Slider
                value={precio2}
                onValueChange={setPrecio2}
                max={20}
                min={5}
                step={0.5}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Cantidad 2: {cantidad2[0]}
              </label>
              <Slider
                value={cantidad2}
                onValueChange={setCantidad2}
                max={150}
                min={50}
                step={5}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h5 className="font-semibold text-blue-800 mb-2">Elasticidad Precio</h5>
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {elasticidad.elasticidad.toFixed(3)}
          </div>
          <div className="text-sm text-blue-700">
            Demanda {elasticidad.tipo}
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h5 className="font-semibold text-green-800 mb-2">Cambio en Precio</h5>
          <div className="text-2xl font-bold text-green-600 mb-1">
            {elasticidad.cambioP.toFixed(1)}%
          </div>
          <div className="text-sm text-green-700">
            ${precio1[0]} → ${precio2[0]}
          </div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <h5 className="font-semibold text-orange-800 mb-2">Cambio en Cantidad</h5>
          <div className="text-2xl font-bold text-orange-600 mb-1">
            {elasticidad.cambioQ.toFixed(1)}%
          </div>
          <div className="text-sm text-orange-700">
            {cantidad1[0]} → {cantidad2[0]}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-64">
          <h5 className="font-semibold mb-2">Cambio en Precio y Cantidad</h5>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={datos}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="punto" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="precio" fill="#3b82f6" name="Precio ($)" />
              <Bar dataKey="cantidad" fill="#ef4444" name="Cantidad" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h5 className="font-semibold text-purple-800 mb-3">Análisis de Ingreso Total</h5>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Ingreso Inicial:</span>
              <span className="font-semibold">${ingresos.ingreso1}</span>
            </div>
            <div className="flex justify-between">
              <span>Ingreso Final:</span>
              <span className="font-semibold">${ingresos.ingreso2}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span>Cambio en Ingreso:</span>
              <span className={`font-semibold ${ingresos.cambioIngreso >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${ingresos.cambioIngreso.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="mt-3 text-xs text-purple-700">
            {Math.abs(elasticidad.elasticidad) > 1 
              ? "Con demanda elástica, precio e ingreso se mueven en direcciones opuestas"
              : "Con demanda inelástica, precio e ingreso se mueven en la misma dirección"
            }
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h5 className="font-semibold text-gray-800 mb-2">Fórmula de Elasticidad (Método del Punto Medio)</h5>
        <div className="font-mono text-sm bg-white p-3 rounded border">
          Ed = [(Q₂-Q₁)/((Q₂+Q₁)/2)] / [(P₂-P₁)/((P₂+P₁)/2)]
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Ed = [{cantidad2[0]}-{cantidad1[0]}]/[({cantidad2[0]}+{cantidad1[0]})/2] / [{precio2[0]}-{precio1[0]}]/[({precio2[0]}+{precio1[0]})/2] = {elasticidad.elasticidad.toFixed(3)}
        </div>
      </div>
    </div>
  )
}

export default function GraficosPage({ params }: { params: { id: string } }) {
  const graficos = graficosData[Number.parseInt(params.id) as keyof typeof graficosData]

  if (!graficos) {
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
              <p className="text-slate-600 mb-4">Los gráficos para este capítulo están en desarrollo.</p>
              <Link href={`/capitulo/${params.id}`}>
                <Button>Volver al contenido teórico</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const renderGrafico = (graficoId: string) => {
    switch (graficoId) {
      case "excedentes-interactivo":
        return <ExcedentesInteractivo />
      case "curva-laffer":
        return <CurvaLafferInteractiva />
      case "comercio-internacional":
        return <ComercioInternacional />
      case "oferta-demanda-basico":
        return <OfertaDemandaBasico />
      case "elasticidad-calculadora":
        return <ElasticidadCalculadora />
      default:
        return (
          <div className="text-center py-8">
            <p className="text-slate-600">Este gráfico está en desarrollo.</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
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
                  <p className="text-xs text-slate-600">Gráficos Interactivos</p>
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

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero section */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-violet-50 rounded-3xl p-8 mb-8 shadow-lg border border-blue-100">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">{graficos.titulo}</h1>
              <p className="text-xl text-slate-700 mb-6 leading-relaxed">{graficos.descripcion}</p>
              <div className="flex items-center gap-4">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  {graficos.graficos.length} gráficos interactivos
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200" variant="outline">
                  <Zap className="h-4 w-4 mr-2" />
                  Simulaciones en tiempo real
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Gráficos */}
        <div className="space-y-12">
          {graficos.graficos.map((grafico, index) => (
            <Card key={grafico.id} className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-white font-bold">
                      {index + 1}
                    </div>
                    <span>{grafico.titulo}</span>
                  </CardTitle>
                  <div className="flex items-center gap-3">
                    <Badge 
                      className={
                        grafico.tipo === 'interactivo' ? 'bg-green-100 text-green-700 border-green-200' :
                        grafico.tipo === 'simulacion' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                        grafico.tipo === 'calculadora' ? 'bg-purple-100 text-purple-700 border-purple-200' :
                        'bg-orange-100 text-orange-700 border-orange-200'
                      } 
                      variant="outline"
                    >
                      {grafico.tipo === 'interactivo' && <TrendingUp className="h-3 w-3 mr-1" />}
                      {grafico.tipo === 'simulacion' && <BarChart3 className="h-3 w-3 mr-1" />}
                      {grafico.tipo === 'calculadora' && <Calculator className="h-3 w-3 mr-1" />}
                      {grafico.tipo === 'comparativo' && <Globe className="h-3 w-3 mr-1" />}
                      {grafico.tipo.charAt(0).toUpperCase() + grafico.tipo.slice(1)}
                    </Badge>
                  </div>
                </div>
                <p className="text-slate-600 text-lg mt-2">{grafico.descripcion}</p>
              </CardHeader>
              <CardContent>
                {renderGrafico(grafico.id)}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navegación */}
        <div className="mt-12 flex justify-center">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <h3 className="font-semibold text-slate-800 mb-2">¿Terminaste de explorar?</h3>
              <p className="text-sm text-slate-600 mb-4">Continúa tu aprendizaje con ejercicios prácticos</p>
              <div className="flex gap-3 justify-center">
                <Link href={`/capitulo/${params.id}`}>
                  <Button variant="outline" className="shadow-md hover:shadow-lg transition-all duration-300">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Repasar Teoría
                  </Button>
                </Link>
                <Link href={`/ejercicios/${params.id}`}>
                  <Button className="shadow-lg hover:shadow-xl transition-all duration-300">
                    <Calculator className="h-4 w-4 mr-2" />
                    Hacer Ejercicios
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