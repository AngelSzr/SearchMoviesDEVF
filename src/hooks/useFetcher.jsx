import { useEffect, useState } from "react"

//utils
import { getMovies, getMovie } from "../utils/getMovies"

const useFetcher = (query = 'batman') => {
    const [dataState, setDataState] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    //el mismo de .then se podría con un async/await

    const getData = async () => {
        const { data } = await getMovies(query)
        if (data.Error) {
            setError(data.Error)
            setDataState([])
        } else {
            setDataState(data.Search)
        }
        setLoading(false)
        //También es posible hacerlo con algo el valor de e.target."podríamos poner un name en el input".value
    }

    useEffect(() => {
        getData()
    }, [query])

    return { dataState, loading, error }
}

export default useFetcher