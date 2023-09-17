
import React from 'react';
import { NavLink } from "react-router-dom";
import css from './Header.module.css';
import ControlledSwitches from "../ThemeMenu/ControlledSwitches";


const Header = ({ isDarkMode, onToggle }) => {
    const label = isDarkMode ?   'Light theme' : 'Dark theme';
    const containerClassName = isDarkMode ? `${css.container} ${css['dark-background']}` : css.container;
    return (
        <div >

            <div className={containerClassName}>
                <div style={{ color: "gold", fontSize: "40px" }}>The MovieDB</div>
                <div className={css.Wrapper}>
                    <div>
                        <NavLink to={'movies'}>Movies</NavLink>
                    </div>
                    <div><NavLink to={'genres'}>Genres</NavLink></div>
                    <div> <NavLink to={'search'}>Search</NavLink></div>
                </div>
                <div className={css.Switch}>
                    <h3 className={css.word}>
                        {label}
                    </h3>
                    <div className={css.off}>
                        <ControlledSwitches isDarkMode={isDarkMode} onToggle={onToggle} label={label} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
