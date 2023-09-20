import style from "../module/movieGrid.module.css"
import { MovieCard } from "./moviecard";
import movies from "./movies.json"

export function MoviesGrid() {

    return (

        <>
            <ul className={style.movieGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </>

    );
}

