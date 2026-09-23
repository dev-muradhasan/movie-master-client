import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import AddMovie from "../pages/AddMovie";
import UpdateMovie from "../pages/UpdateMovie";
import MyCollection from "../pages/MyCollection";
import Watchlist from "../pages/Watchlist";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ErrorPage from "../pages/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <ErrorPage />,

        children: [
            {
                index: true,
                Component: Home,
            },

            {
                path: "/movies",
                Component: Movies,
            },

            {
                path: "/movies/:id",
                Component: MovieDetails,
            },

            {
                path: "/movies/add",
                Component: AddMovie,
            },

            {
                path: "/movies/update/:id",
                Component: UpdateMovie,
            },

            {
                path: "/my-collection",
                Component: MyCollection,
            },

            {
                path: "/watchlist",
                Component: Watchlist,
            },

            {
                path: "/login",
                Component: Login,
            },

            {
                path: "/register",
                Component: Register,
            },
        ],
    },

    {
        path: "*",
        Component: NotFound,
    },
]);

export default Router;