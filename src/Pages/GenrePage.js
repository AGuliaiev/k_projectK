import React from 'react';
import GenreBadge from "../components/genres/GenreBadge";
import {Outlet} from "react-router-dom";
import css from './../components/genres/Genre/genre.module.css'

const GenrePage = () => {
    return (
        <div  className={css.AllPage}>
            <GenreBadge/>
            <Outlet/>
        </div>
    )
};

export default GenrePage;