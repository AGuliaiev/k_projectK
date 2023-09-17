
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import css from './Movies.module.css';
import { useDispatch } from "react-redux";
import { moviesActions } from "../../redux/slices/moviesSlice";
import Rating from "@mui/material/Rating";


const MoviesListCard = ({ movie }) => {
    const { backdrop_path, title, id } = movie;
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [ratingForMovie, setRatingForMovie] = useState(2);

    const handleRatingChange = (event, newValue) => {

        setRatingForMovie(newValue);


        dispatch(moviesActions.setMovieRating({ id, rating: newValue }));
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
};

export default MoviesListCard;
