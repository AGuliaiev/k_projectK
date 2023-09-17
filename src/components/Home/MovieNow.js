import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { moviesActions} from "../../redux/slices/moviesSlice";

import css from './../MoviesListCards/Movies.module.css'

import Movie from "./Movie";

const MovieNow = () => {
    const dispatch = useDispatch();
    const {movies}  = useSelector(state => state.movies);
    console.log('eewew', movies)


    useEffect(() => {
        dispatch(moviesActions.allNow());

    }, [ dispatch]);

    if (!movies) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 className={css.movieTitle}>Trending today</h1>
            <div className={css.moviesList}>

                {movies.results?.map(movie => <Movie key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default MovieNow
