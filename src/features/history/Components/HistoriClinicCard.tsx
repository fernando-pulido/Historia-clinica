import React from 'react'
import { HistoriaClinic } from '../../../types/typeGeneral'

interface Props {
  historia: HistoriaClinic
}

const HistoriaClinicaCard: React.FC<Props> = ({ historia }) => {
  return (
    <div className="card">
      <h4>{historia.nombre}</h4>
      <p>
        <strong>Edad:</strong> {historia.edad}
      </p>
      <p>
        <strong>Sexo:</strong> {historia.sexo}
      </p>
      <p>
        <strong>Diagnóstico:</strong> {historia.diagnostico}
      </p>
      <p>
        <em>Fecha:</em> {historia.fecha}
      </p>
    </div>
  )
}

export default HistoriaClinicaCard
