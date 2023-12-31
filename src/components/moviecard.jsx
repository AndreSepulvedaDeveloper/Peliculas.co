
import { Link } from "react-router-dom";
import style from "../module/movieCard.module.css"
export function MovieCard({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (

        <li className={style.movieCard}>
            <Link to="/movies">
                <img width={230} height={345} className={style.movieImage} src={imageUrl} alt="" />
                <div>
                    {movie.title}
                </div>
            </Link>
        </li >

    );
}
