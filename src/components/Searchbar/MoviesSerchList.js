
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './MovSerch.module.css';
import NoImage from './../imeges/noImage.jpeg';

export const MoviesSerchList = ({ movies }) => {
    const location = useLocation();
    if (!Array.isArray(movies)) {
        return null; // or any other appropriate handling
    }

    return (
        <ul className={css.moviesList}>
            {movies.map(({ id, title, original_name, poster_path }) => (
                <Link
                    key={id}
                    className={css.movieLink}
                    to={`/movies/${id}`}
                    state={{ from: location }}

                >
                    <li className={css.movieItem} key={id}>
                        <div>
                            <img
                                className={css.movieImg}
                                width="250"
                                src={
                                    poster_path
                                        ? 'https://image.tmdb.org/t/p/w500/'.concat(poster_path)
                                        : NoImage
                                }
                                alt={original_name}
                            />
                            <h3 className={css.movieTitle}>{title}</h3>
                            {/*?? original_name*/}
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    );
};


