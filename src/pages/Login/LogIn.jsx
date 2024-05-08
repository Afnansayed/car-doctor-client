import { Link, useLocation, useNavigate } from 'react-router-dom';
import  img from '../../assets/images/login/login.svg'
import useAuth from '../../hooks/useAuth';
// import { useContext } from 'react';
// import { AuthContext } from '../../Providers/Authproviders';
// import axios from 'axios';

const LogIn = () => {

    //using custom hook 
     const {logIn} = useAuth();

    // const {logIn} = useContext(AuthContext);
    const location = useLocation();
 //  console.log(location)
    const navigate = useNavigate();
    const handleLogIn = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email =  form.get('email');
        const password =  form.get('password');
         //console.log(name,email,password)

         //login
         logIn(email,password)
         .then(res => {
            console.log(res.user)
             navigate(location?.state ? location?.state : '/')
            //
            // const user = {email};
            // axios.post('https://car-doctor-server-beige-ten-37.vercel.app/jwt', user ,{withCredentials: true})
            // .then(res => {
            //     console.log(res.data)
            //     if(res.data.success){
            //         navigate(location?.state ? location?.state : '/')
            //     }
            // })
         })
         .catch(error => {
            console.error(error)
         })
    }
    return (
        <div className="hero min-h-screen bg-base-200 my-12">
            <div className="hero-content flex-col lg:flex-row lg:gap-12">
                <div className="text-center lg:text-left w-1/2">
                   <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-center font-bold text-orange-400 text-2xl mt-5'>Log In</h2>
                    <form onSubmit={handleLogIn} className="card-body">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <h3 className='text-center mb-5'>Have an account ? 
                    <Link to='/signUp'><span className='text-red-500'>SignUp</span></Link></h3>
                </div>
            </div>
        </div>
    );
};

export default LogIn;