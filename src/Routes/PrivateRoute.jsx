import { useContext } from "react";
import { AuthContext } from "../Providers/Authproviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
   // console.log(location)
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>;
    }
     if(user?.email){
        return children;
     }
    return  <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default PrivateRoute;