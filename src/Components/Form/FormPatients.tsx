import './FormPatients.css'
type FormPatientsProps = {
  name: string
  image: string
}

const FormPatients = ({ name, image }: FormPatientsProps) => {
  return (
    <div>
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">paciente registrado en el sistema</p>
          <a href="#" className="btn btn-primary">
            ver detalles
          </a>
        </div>
      </div>
    </div>
  )
}

export default FormPatients
