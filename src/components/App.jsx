import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import Loading from './Loading'
import Movies from './Movies'
const apiKey = 'ea92314d'

//Components


function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getMovies = (query = 'batman') => {
    return axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`).then(response => response).catch()
  }
  //el mismo de .then se podría con un async/await

  const getData = async () => {

  }

  useEffect(() => {
    getData()
  }, [])


  const searchRef = useRef(null) //Esto es un hook, que me permite hacer referencia al valor de html, en este caso me hace referencia a mi input para buscarla película, por lo que con handleSubmit puedo obtener lo que escribo en el input
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await getMovies(searchRef.current.value)
    if (data.Error) {
      setError(data.Error)
      setMovies([])
    } else {
      setMovies(data.Search)
    }
    setLoading(false)
    //También es posible hacerlo con algo el valor de e.target."podríamos poner un name en el input".value
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
        {loading ? <Loading /> : <Movies error={error} data={movies} />}
      </div>
      {/*El estado de Loading cambia en el handleSubmit */}
    </div>
  )
}

export default App
