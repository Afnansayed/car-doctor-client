import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/Login/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },{
            path:'/login',
            element: <LogIn/>
        },{
            path: '/signUp',
            element: <SignUp></SignUp>
        },{
          path: '/checkout/:id',
          element: <PrivateRoute><CheckOut/></PrivateRoute> ,
          loader: ({params}) => fetch(`https://car-doctor-server-beige-ten-37.vercel.app/services/${params.id}`)
        },{
          path:'/bookings',
          element: <PrivateRoute> <Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;