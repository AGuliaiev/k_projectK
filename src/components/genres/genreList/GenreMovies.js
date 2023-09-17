import React, {useEffect, useState} from 'react';

import { useNavigate} from "react-router-dom";
import css from './../Genre/genre.module.css'

const GenreMovies = ({ movie }) => {

    const {poster_path, title, id} = movie;
    const navigate = useNavigate();




    return (

        <div style={{width:"300px"}}>



            <a className={css.link} onClick={()=>navigate(`/movies/${id}`)}>
                <div className={css.block}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                    />
                    <h2 >{title}</h2>


                </div>
            </a>

        </div>


    );
};

export default GenreMovies;
