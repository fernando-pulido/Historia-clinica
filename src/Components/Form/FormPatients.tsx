import { Card } from 'antd'

import './FormPatients.css'

type FormPatientsProps = {
  name: string
  image: string
}

const { Meta } = Card

const FormPatients = ({ name, image }: FormPatientsProps) => (
  <Card style={{ width: 240 }} cover={<img alt="example" src={image} />}>
    <Meta title={name} description="www.instagram.com" />
  </Card>
)

export default FormPatients
