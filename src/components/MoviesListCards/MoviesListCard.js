import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import css from './Movies.module.css';
import { useDispatch } from "react-redux";
import { moviesActions } from "../../redux/slices/moviesSlice";
import Rating from "@mui/material/Rating";





const MoviesListCard = React.memo(({ movie }) => {
    const { backdrop_path, title, id } = movie;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ratingForMovie, setRatingForMovie] = useState(() => {
        const storedRating = localStorage.getItem(`movie-rating-${id}`);
        return storedRating ? parseFloat(storedRating) : 2;
    });


    const handleRatingChange = (event, newValue) => {
        if (newValue !== null) {
            setRatingForMovie(newValue);
            dispatch(moviesActions.setMovieRating({ id, rating: newValue }));
            localStorage.setItem(`movie-rating-${id}`, newValue);
        }

    };



    return (
        <div className={css.cardBlock}>
            <a className={css.link} onClick={() => navigate(`/movies/${id}`)}>
                <div className={css.Block}>
                    <img
                        className={css.Img}
                        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                        alt={title}
                    />
                </div>
                <h2>{title}</h2>
            </a>
            <Rating
                name={`movie-rating-${id}`}
                value={ratingForMovie}
                onChange={handleRatingChange}

            />
        </div>
    );
}, (prevProps, nextProps) => {

    return prevProps.movie.id === nextProps.movie.id && prevProps.ratingForMovie === nextProps.ratingForMovie;
});

export default MoviesListCard;
