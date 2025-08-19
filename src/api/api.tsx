/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useEffect, useState } from 'react'

type Character = { id: number; name: string; image: string }

const api = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h2>Pacientes </h2>
      {characters.map(patients => (
        <div key={patients.id}>
          <img src={patients.image} alt={patients.name} width={100} />
          <p>{patients.name}</p>
        </div>
      ))}
    </div>
  )
}

export default api
