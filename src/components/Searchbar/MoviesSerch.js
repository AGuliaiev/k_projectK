import { useEffect, useState } from 'react';
import {Outlet, useSearchParams} from 'react-router-dom';




import {MoviesSerchList} from "./MoviesSerchList";
import Searchbar from "./Searchbar";
import Loader from "../Loader/Loader";
import {serService} from "../../services/sercheService";






  const MoviesSerch = () => {


    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const isLoaded = movies !== null;
      useEffect(() => {


        const query = searchParams.get('query') ?? '';
        if (!query) {
            return;
        }

        serService(query)
            .then(data => setMovies(data.results))
            .catch(error => {
                console.error( error);
            });


    }, [searchParams]);

    const handleChange = evt => {
        setQuery(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        setSearchParams(query !== '' ? { query } : {});
    };

    return (
        <>

            <Searchbar
                onSubmit={handleSubmit}
                query={searchParams.get('query') ?? ''}
                onChange={handleChange}
            />
            <Outlet/>
            {searchParams &&
                ((!isLoaded && <Loader />) ||
                    (isLoaded && (
                        <>
                            <MoviesSerchList movies={movies} />
                        </>
                    )))}
        </>
    );
}

export default MoviesSerch;


