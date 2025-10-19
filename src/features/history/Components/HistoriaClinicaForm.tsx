import React, { useState } from 'react'
import { HistoriaClinic } from '../../../types/typeGeneral'

type Props = {
  onAdd: (nueva: HistoriaClinic) => void
}

const HistoriaClinicaForm: React.FC<Props> = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    sexo: '',
    diagnostico: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const nuevaHistoria: HistoriaClinic = {
      id: Date.now(),
      nombre: formData.nombre,
      edad: Number(formData.edad),
      sexo: formData.sexo,
      diagnostico: formData.diagnostico,
      fecha: new Date().toISOString().split('T')[0],
    }
    onAdd(nuevaHistoria)
    setFormData({ nombre: '', edad: '', sexo: '', diagnostico: '' })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Registrar Historia Clínica</h3>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre del paciente"
        value={formData.nombre}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="edad"
        placeholder="Edad"
        value={formData.edad}
        onChange={handleChange}
        required
      />

      <select
        name="sexo"
        value={formData.sexo}
        onChange={handleChange}
        required
      >
        <option value="">Seleccione sexo</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </select>

      <textarea
        name="diagnostico"
        placeholder="Diagnóstico"
        value={formData.diagnostico}
        onChange={handleChange}
        required
      />

      <button type="submit">Guardar</button>
    </form>
  )
}

export default HistoriaClinicaForm
