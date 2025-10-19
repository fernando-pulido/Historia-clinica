import React from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'

import { HistoriaClinic } from '../types/typeGeneral'
import HistoriaClinicaForm from '../features/history/Components/HistoriaClinicaForm'
import HistoriaClinicaList from '../features/history/Components/HistoriaClinicaList'

interface Props {
  historias: HistoriaClinic[]
  onAdd: (nueva: HistoriaClinic) => void
}

const TabsLayout: React.FC<Props> = ({ historias, onAdd }) => {
  const onChange = (key: string) => console.log('Pestaña:', key)

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Registrar Historia Clínica',
      children: <HistoriaClinicaForm onAdd={onAdd} />,
    },
    {
      key: '2',
      label: 'Base de Datos',
      children: <HistoriaClinicaList historias={historias} />,
    },
    {
      key: '3',
      label: 'Pacientes',
      children: <HistoriaClinicaList historias={historias} />,
    },
  ]

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
}

export default TabsLayout
