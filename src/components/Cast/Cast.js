import React from 'react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import noAvatar from '../imeges/noAva.jpeg';
import {fetchCasts} from "../../services/castService";





export default function Cast() {
    const [cast, setCast] = useState(null);
    const { id } = useParams();
    // const dispatch = useDispatch();
    const isLoaded = cast !== null;

    // const movie = useSelector((state) => state.casts);
    // console.log('cast', movie)
    //
    //
    // useEffect(() => {
    //     dispatch(castActions.allCast(id));
    // }, [id]);



    useEffect(() => {
        fetchCasts(id)
            .then(setCast)
            .catch(error => {
                console.log(error);
            });
    }, [id]);
    // useEffect(() => {
    //     if (movie) {
    //
    //         const castData = movie.cast;
    //         setCast(castData);
    //     }
    // }, [movie]);
    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (

        <>
            <ul className={css.castList}>
                {cast.map(({ character, id, name, profile_path }) => (
                    <li className={css.castItem} key={`${id}-${character}`}>
                        <img
                            className={css.castAvatar}
                            width="160"
                            src={
                                profile_path
                                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                                    : noAvatar
                            }
                            alt={name}
                        />

                        <div>
                            <p className={css.realName}>{name}</p>
                            <p className={css.castName}>{character}</p>
                        </div>
                    </li>
                ))}
            </ul>
            {!cast.length && <p>No cast members found for this movie.</p>}
        </>
    );
}
