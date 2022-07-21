import CardMovie from "./CardMovie"

const Movies = ({ data, error }) => {
    console.log(data);
    return (
        error ? <p className="text-center">No se encontraron resultados</p> : (<ul className="row">
            {data.map(item => (
                <li className="col-12 col-md-2 col-lg-3">
                    <CardMovie  {...item} />
                </li>

            )//Aqui usamos {...item} para pasar los datos a nuestro CardMovie, pero se necesita especificar los props de CardMovie con el mismo resultado que tenemos. La razón por la que no te corría anteriormente es porque creo que debes de usar parentesis '()' cuando vas a agregar un componente a renderizar y usas '{ }' cuando va a ser una función
            )}
        </ul>))
}

export default Movies