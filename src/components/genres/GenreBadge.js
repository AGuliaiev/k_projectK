import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { genreActions} from '../../redux/slices/genreSlice';
import Genre from './Genre/Genre';
import css from './Genre/genre.module.css'


const GenreBadge = () => {
    const dispatch = useDispatch();
    const {genres}  = useSelector(state => state.genreSlice.genres);

    useEffect(() => {
        dispatch(genreActions.all());
    }, [dispatch]);

    if (!genres || genres.length === 0) {
        return <div>Loading...</div>;
    }


    return (
        <div className={css.Genre}>
            <h1 className={css.title}>Genre</h1>


            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}


        </div>
    );
};

export default GenreBadge;
