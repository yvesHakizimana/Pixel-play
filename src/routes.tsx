import {createBrowserRouter} from "react-router-dom";
import GameDetailsPage from "./pages/GameDetailsPage.tsx";
import LayoutPage from "./pages/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPage />,
        children: [
            { index: true, element: <HomePage />},
            { path: 'games/:id', element: <GameDetailsPage />}
        ]
    }
])

export default router