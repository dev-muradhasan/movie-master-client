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
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
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

            // PUBLIC
            {
                path: "/movies/:id",
                Component: MovieDetails,
            },

            // PRIVATE
            {
                path: "/movies/add",
                element: (
                    <PrivateRoutes>
                        <AddMovie />
                    </PrivateRoutes>
                ),
            },

            {
                path: "/movies/update/:id",
                element: (
                    <PrivateRoutes>
                        <UpdateMovie />
                    </PrivateRoutes>
                ),
            },

            {
                path: "/my-collection",
                element: (
                    <PrivateRoutes>
                        <MyCollection />
                    </PrivateRoutes>
                ),
            },

            {
                path: "/watchlist",
                element: (
                    <PrivateRoutes>
                        <Watchlist />
                    </PrivateRoutes>
                ),
            },

            // PUBLIC
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

export default router;