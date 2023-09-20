
import movie from "./movie.json"
import style from "./movieDetails.module.css"
export function Moviedetails() {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <div className={style.detailsContainer}>
            <img width={300} height={415} className={`${style.col} ${style.imageCol}`} src={imageUrl} alt={movie.title} />
            <div className={`${style.col} ${style.movieDetails}`}>
                <p className={style.firstItem}><strong>Titulo: </strong>{movie.title}</p>
                <p><strong>Descripcion: </strong>{movie.overview}</p>
                <p><strong>Generos: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
            </div>
        </div>

    );
}
