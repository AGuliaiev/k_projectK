
import React, { useState } from 'react';
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import css from './MainLayut.module.css';

const MainLayout = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode') === 'true');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const containerClassName = isDarkMode ? `${css.container} ${css['dark-background']}` : `${css.container} ${css['light-background']}`;

    return (
        <div className={containerClassName}>
            <Header isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
            <Outlet />
        </div>
    );
};

export default MainLayout;

