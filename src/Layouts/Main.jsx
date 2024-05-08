import { Outlet } from "react-router-dom";
import NavBar from "../Shered/NavBar/NavBar";
import Footer from "../Shered/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;