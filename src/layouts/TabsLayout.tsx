import React from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import Api from '../api/api'

const onChange = (key: string) => {
  console.log(key)
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Lista Pacientes ',
    children: <Api />,
  },
  {
    key: '2',
    label: 'Historias Clinicas',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Agendar ',
    children: 'Content of Tab Pane 3',
  },
]

const TabsLayout: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
)

export default TabsLayout
