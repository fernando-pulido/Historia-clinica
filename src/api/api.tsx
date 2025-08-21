import axios from 'axios'
import { useEffect, useState } from 'react'
import FormPatients from '../Components/Form/FormPatients'
import './Api.css'

type Character = { id: number; name: string; image: string }

const Api = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="patients-container">
      {characters.map(patients => (
        <FormPatients
          key={patients.id}
          name={patients.name}
          image={patients.image}
        />
      ))}
    </div>
  )
}

export default Api
