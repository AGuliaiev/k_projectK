
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./../Genre/genre.module.css";
import GenreMovies from "./GenreMovies";
import { useDispatch, useSelector } from "react-redux";
import { genreActions } from "../../../redux/slices/genreSlice";
import { Pagination } from "@mui/material";

const GenreList = () => {
    const dispatch = useDispatch();
    const { movies, pages } = useSelector((state) => state.genreSlice);
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(genreActions.genreById({ id, page: currentPage }));
    }, [id, currentPage, dispatch]);

    if (!movies) {
        return <div>Loading...</div>;
    }
    console.log('Movies:', movies);
    console.log('Pages:', pages);

    return (
        <div>
            <div className={css.listGenre}>
                {movies.results?.map((movie) => (
                    <GenreMovies key={movie.id} movie={movie} />
                ))}
            </div>
            <Pagination
                count={pages.total_pages}
                page={currentPage}
                onChange={(event, page) => setCurrentPage(page)}
                variant="outlined"
                shape="rounded"
                style={{ display: "flex", justifyContent: "center", margin: "15px" }}
            />
        </div>
    );
};

export default GenreList;
