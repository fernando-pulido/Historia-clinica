import React from 'react'
import { Flex, Layout } from 'antd'

import TabsLayout from './TabsLayout'

import './LayoutGeneral.css'

const { Header, Footer, Content } = Layout

const LayoutGeneral: React.FC = () => (
  <Flex gap="middle" wrap>
    <Layout className="layout-container">
      <Header className="header">Historia Clinica</Header>
      <Content className="content">
        <TabsLayout />
      </Content>
      <Footer className="footer">Footer</Footer>
    </Layout>
  </Flex>
)

export default LayoutGeneral
