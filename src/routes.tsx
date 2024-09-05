import {createBrowserRouter} from "react-router-dom";
import GameDetailsPage from "./pages/GameDetailsPage.tsx";
import LayoutPage from "./pages/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPage />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage />},
            { path: 'games/:slug', element: <GameDetailsPage />}
        ]
    }
])

export default router