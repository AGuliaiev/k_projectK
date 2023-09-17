
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { moviesActions} from '../../../redux/slices/moviesSlice';
import MovieInfo from './MovieInfo';
import StartPage from "../../../Pages/StartPage";

const MoviesCard = () => {
    const { id } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(moviesActions.fetchMovieById(id));
    }, [id, dispatch]);


    const movie = useSelector((state) => state.movies.movieById);


    return (
        <div>
            {movie ? (
                <div>
                    <MovieInfo info={movie}/>

                </div>
            ) : (
                <p>Loading...</p>
            )}

        </div>


    );
};

export default MoviesCard;
