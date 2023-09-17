
import {  useSelector } from "react-redux";

import MoviesListCard from "./MoviesListCard";
import css from './Movies.module.css'

import React from "react";



const MoviesList = () => {

    const {movies}  = useSelector(state => state.movies);


    if (!movies) {
        return <div>Loading...</div>;
    }

    return (
        <div className={css.moviesList}>

            {movies.results?.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}

        </div>
    );
};

export default MoviesList
