import React from 'react';

import css from './Serchbar.module.css';

export default function Searchbar({ onChange, onSubmit, query }) {

    return (

        <form className={css.form} onSubmit={onSubmit}>

            <input
                className={css.searchInput}
                defaultValue={query}
                type="text"
                onChange={onChange}
            />
            <button className={css.searchButton} type="submit">
                Search
            </button>
        </form>
    );
}