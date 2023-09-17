import React, {Suspense} from 'react';
import css from './../Movies.module.css'
import {Link, Outlet} from "react-router-dom";
import Loader from "../../Loader/Loader";

import StarsRating from "../../StarsRating";

const MovieInfo = ({ info }) => {

    const {
        title,
        original_language,
        overview,

        poster_path,
        genres,
        vote_average,
        release_date


    } = info;


    const genresStr = genres.map((genre) => genre.name).join(', ');
    const voteAvarage = vote_average.toFixed(1);
    const realiseDate = release_date.slice(0, 4);

    return (
        <div>
            <div className={css.wrapper}>
                <img
                    className={css.Post}
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                />
                <div className={css.Info}>
                    <h1>{title} ({realiseDate})</h1>
                    <p>User score: {voteAvarage}</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>

                    <p>Original language: {original_language}</p>

                    <StarsRating/>
                    <h3>Genres</h3>
                    <h3>
                        {genresStr}
                    </h3>
                </div>
            </div>

            <ul className={css.linksCR}>
                <li>
                    <Link className={css.castLink} to="cast">
                        Cast
                    </Link>
                </li>
                <li>
                    <Link className={css.reviewsLink} to="reviews">
                        Reviews
                    </Link>
                </li>
            </ul>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MovieInfo;
