import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './../MoviesListCards/Movies.module.css'

const Movie = ({movie}) => {
    const {backdrop_path, title, id} = movie;

    const navigate = useNavigate();
    return (
        <div className={css.cardBlock}>
            <a className={css.link} onClick={() => navigate(`/movies/${id}`)}>
                <div className={css.Block}>
                    <img
                        className={css.Img}
                        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                        alt={title}
                    />
                    <h2>{title}</h2>
                </div>
            </a>
        </div>
    );
};

export default Movie;