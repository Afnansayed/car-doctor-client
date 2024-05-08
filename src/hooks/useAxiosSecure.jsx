import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-beige-ten-37.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const naviGate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, err => {
            console.log('error tracked in the interceptor', err.response)

            if (err.response.status === 401 || err.response.status === 403) {

                logOut()
                    .then(() => {
                       naviGate('/login') 
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        })
    }, [])
    return axiosSecure;
};

export default useAxiosSecure;