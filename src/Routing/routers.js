import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";



import GenrePage from "../Pages/GenrePage";

import MoviesCard from "../components/MoviesListCards/moviesDetails/MoviesCard";


import MoviePage from "../Pages/MoviePage";

import MoviesSerch from "../components/Searchbar/MoviesSerch";

import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";

import GenreList from "../components/genres/genreList/GenreList";





const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {
                index: true,
                element:<MoviePage/>
            },
            {
                path: 'movies',
                element:<MoviePage/>


            },
            {
                path: 'search',
                element:<MoviesSerch/>,
               
            },

            {
                path: 'movies/:id',
                element:<MoviesCard/>,
                children:[
                    {
                        path: 'cast',
                        element: <Cast/>
                    },
                    {
                        path: "reviews",
                        element: <Reviews/>

                    }
                ]

            },

            {
                path: 'genres',
                element: <GenrePage/>,
                children:[
                    {
                        index: true,
                        element:<MoviePage/>
                    },
                    {
                        path:"/genres/:id",
                        element:<GenreList/>

                        },


                ]
            },


            {
                path: "*",
                element: <h1>404 Not Found</h1>,
            },

        ]
    }
]);

export {
    router
}
