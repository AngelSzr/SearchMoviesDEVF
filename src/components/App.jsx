
import { useState } from 'react'
import { useRef } from 'react'
//hooks
import useFetcher from '../hooks/useFetcher'
import { getMovies, getMovie } from '../utils/getMovies'

//Components

import Loading from './Loading'
import Movies from './Movies'

function App() {


  const [query, setQuery] = useState('fox')
  const { dataState: movies, loading, error } = useFetcher(query)
  //No se te olvide utilizar como si fuera una función, por que lo es.
  const searchRef = useRef(null) //Esto es un hook, que me permite hacer referencia al valor de html, en este caso me hace referencia a mi input para buscarla película, por lo que con handleSubmit puedo obtener lo que escribo en el input

  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(searchRef.current.value)
    e.target.reset();
  }


  return (
    <div className="container">
      <h4 className="py-4 text-center">Buscador</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="search"
            ref={searchRef} className="form-control" placeholder="Ingrese nombre de la película"
          />
          <button className="btn btn-primary">Buscar</button>
        </div>
      </form>
      <div className="py-4">
        {loading ? <Loading /> : <Movies data={movies} />}
      </div>
      {/*El estado de Loading cambia en el handleSubmit */}
    </div>
  )
}

export default App
