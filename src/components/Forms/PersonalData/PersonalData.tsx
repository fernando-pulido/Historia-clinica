import { FC } from 'react'
import './PersonData.css'
type FormProps = {
  patient: boolean
  userName: string
  lastName: string
  birthdate: string
  id: number
  gender: string
  occupation: string
  academicLevel: string
  maritalStatus: string
  address: string
  eps: string
  contactNuMber: string
  emergencyContactNumber: string
}

const PersonalData: FC<FormProps> = ({
  lastName,
  userName,
  birthdate,
  academicLevel,
  address,
  contactNuMber,
  emergencyContactNumber,
  eps,
  gender,
  id,
  maritalStatus,
  occupation,
}) => {
  return (
    <div className="container-form">
      <form action="" className="form-group ">
        <label htmlFor="userName">Nombre</label>

        <input type="text" id="userName" value={userName} />

        <label htmlFor="lastName">Apellidos</label>
        <input type="text" id="lastName" value={lastName} />
        <label htmlFor="id">ID</label>
        <input type="text" id="id" value={id} />

        <label htmlFor="birthdate">Fecha de Nacimiento</label>
        <input type="date" id="birthdate" value={birthdate} />

        <label htmlFor="contactNuMber">Número de Contacto</label>
        <input type="number" id="contactNuMber" value={contactNuMber} />

        <label htmlFor="emergencyContactNumber">
          Número de Contacto de Emergencia
        </label>
        <input
          type="number"
          id="emergencyContactNumber"
          value={emergencyContactNumber}
        />

        <label htmlFor="eps">EPS</label>
        <input type="text" id="eps" value={eps} />

        <label htmlFor="occupation">Ocupación</label>
        <input type="text" id="occupation" value={occupation} />

        <label htmlFor="address">Dirección</label>
        <input type="text" id="address" value={address} />

        <label htmlFor="gender">Sexo</label>
        <select id="gender" value={gender}>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
        </select>

        <label htmlFor="maritalStatus">Estado Civil</label>
        <select id="maritalStatus" value={maritalStatus}>
          <option value="single">Soltero</option>
          <option value="married">Casado</option>
          <option value="divorced">Divorciado</option>
        </select>

        <label htmlFor="academicLevel">Nivel Académico</label>
        <select id="academicLevel" value={academicLevel}>
          <option value="undergraduate">Primaria</option>
          <option value="graduate">Secundaria</option>
          <option value="postgraduate">Licenciatura</option>
        </select>
      </form>
    </div>
  )
}

export default PersonalData
