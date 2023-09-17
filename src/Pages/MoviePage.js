
import MoviesList from "../components/MoviesListCards/MoviesList";
import {Pagination} from "@mui/material";

import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useRef} from "react";
import {moviesActions} from "../redux/slices/moviesSlice";




const MoviePage = () => {
    const [query, setQuery] = useSearchParams();
    const defaultPage = useRef(+query.get('page'));
    const {pages} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const { id } = useParams();


    const page = query.get('page');


    useEffect(() => {
        dispatch(moviesActions.all({page}));



    }, [page, id]);


    return (
        <div style={{width:'100vw'}}>

            <MoviesList/>

            <Pagination
                count={pages.total_pages}
                defaultPage={defaultPage.current}
                variant="outlined"
                shape="rounded"
                onChange={(e, page) => setQuery({page: page.toString()})}

                style={{display: 'flex', justifyContent: 'center', margin: '15px'}}
            />

        </div>
    );
};

export default MoviePage;