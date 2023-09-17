import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import css from './../Genre/genre.module.css'

import GenreMovies from "./GenreMovies";


import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../../redux/slices/genreSlice";


const GenreList = () => {

  const dispatch = useDispatch();
  const {movies} = useSelector(state => state.genreSlice);

    const { id } = useParams();



    useEffect(() => {

        dispatch(genreActions.genreById(id))

    }, [id]);

    if (!movies) {
        return <div>Loading...</div>;
    }

    return (
        <div>

            <div className={css.listGenre}>

                {
                    movies.results?.map(movie => (
                        <GenreMovies
                            key={movie.id}
                            movie={movie}

                        />
                    ))}
            </div>
        </div>
    );
};

export default GenreList;
