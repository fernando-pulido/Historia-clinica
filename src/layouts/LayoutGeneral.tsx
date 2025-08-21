import React from 'react'
import { Flex, Layout } from 'antd'

import Api from '../api/api'

import './LayoutGeneral.css'
import TabsLayout from './TabsLayout'

const { Header, Footer, Content } = Layout

const LayoutGeneral: React.FC = () => (
  <Flex gap="middle" wrap>
    <Layout className="layout-container">
      <Header className="header">Historias Clinicas</Header>
      <Content className="content">
        <TabsLayout />
      </Content>
      <Footer className="footer">Footer</Footer>
    </Layout>
  </Flex>
)

export default LayoutGeneral
