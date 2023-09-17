import React from 'react';

import {useNavigate} from "react-router-dom";
import css from './genre.module.css'

const Genre = ({genre}) => {

    const {name, id} = genre;
    const navigate = useNavigate();
    return (
        <div className={css.wrapper} onClick={()=>navigate(`/genres/${id}`)}>

            <a className={css.link} >
                <div className={css.word}> {name}</div>
            </a>
        </div>

    );
};

export default Genre;
