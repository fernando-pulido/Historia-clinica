import React from 'react'
import { HistoriaClinic } from '../../../types/typeGeneral'
import HistoriaClinicaCard from './HistoriClinicCard'

type Props = {
  historias: HistoriaClinic[]
}

const HistoriaClinicaList: React.FC<Props> = ({ historias }) => {
  if (historias.length === 0) {
    return <p>No hay historias clínicas registradas.</p>
  }

  return (
    <div className="list">
      {historias.map(h => (
        <HistoriaClinicaCard key={h.id} historia={h} />
      ))}
    </div>
  )
}

export default HistoriaClinicaList
