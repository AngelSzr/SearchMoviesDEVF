const CardMovie = ({ Poster, Title, Year, imdbID }) => {
    return (
        <div className="card mt-3">
            <img src={Poster} className="card-img-top" alt={Title} />
            <div className="card-body">
                <h5 className="card-title line-clamp">{Title}</h5>
                <p>{Year}</p>
            </div>
        </div>
    )
}
export default CardMovie