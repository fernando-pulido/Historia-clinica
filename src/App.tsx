import React, { useState } from 'react'
import TabsLayout from './layouts/TabsLayout'
import { HistoriaClinic } from './types/typeGeneral'
import './App.css'

const App: React.FC = () => {
  const [historias, setHistorias] = useState<HistoriaClinic[]>([])

  const agregarHistoria = (nueva: HistoriaClinic) => {
    setHistorias(prev => [...prev, nueva])
  }

  return (
    <div className="app-container">
      <h1>Gestión de Historias Clínicas</h1>
      <TabsLayout historias={historias} onAdd={agregarHistoria} />
    </div>
  )
}

export default App
