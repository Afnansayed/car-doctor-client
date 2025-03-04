import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authproviders";

const NavBar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(() => {
            console.log(`signOut successful`)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const navLink = <>
           <NavLink className={({isActive}) => isActive ? 'text-red-600 rounded-sm border-red-500 border-2 p-2 font-bold': ''} to='/'>Home </NavLink>
           <NavLink className={({isActive}) => isActive ? 'text-red-600 rounded-sm border-red-500 border-2 p-2 font-bold': ''} to='/about'>About </NavLink>


          {user ? <>  
            <NavLink onClick={handleLogOut}  >Log Out</NavLink>
            <NavLink className={({isActive}) => isActive ? 'text-red-600 rounded-sm border-red-500 border-2 p-2 font-bold': ''} to='/bookings'>Bookings</NavLink>
          </> :  <NavLink className={({isActive}) => isActive ? 'text-red-600 rounded-sm border-red-500 border-2 p-2 font-bold': ''} to='/login'>LogIn</NavLink>}
           <NavLink className={({isActive}) => isActive ? 'text-red-600 rounded-sm border-red-500 border-2 p-2 font-bold': ''} to='/signUp'>Sign Up</NavLink>
          
    </>
    return (
        <div className="navbar bg-base-100 h-36">
            <div className="navbar-start">
            <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src={logo}></img></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-warning uppercase">Appointment</a>
            </div>
        </div>
    );
};

export default NavBar;