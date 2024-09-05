import NavBar from "../components/NavbarComponents/NavBar.tsx";
import {Outlet} from "react-router-dom";

const LayoutPage = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default LayoutPage;