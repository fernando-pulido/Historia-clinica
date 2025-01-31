import React from 'react'
import type { FormProps } from 'antd'
import { Button, Form, Input, DatePicker, InputNumber } from 'antd'

type FieldType = {
  username: string
  lastName: string
  DateBirth: string
  id: number
}

const onFinish: FormProps<FieldType>['onFinish'] = values => {
  console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
  console.log('Failed:', errorInfo)
}

const PersonalData: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Nombres"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Apellidos"
      name="lastName"
      rules={[{ required: true, message: 'Please input your lastName!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Fecha Nacimiento"
      name="DateBirth"
      rules={[{ required: true, message: 'Please input you DateBirth!' }]}
    >
      <DatePicker />
    </Form.Item>

    <Form.Item
      label="Identificacion"
      name="Id"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <InputNumber style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
)

export default PersonalData
