import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const Authproviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    //
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
            //for jwt
            if (currentUser) {
                
              // console.log(loggedUser)
                axios.post('https://car-doctor-server-beige-ten-37.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response',res.data)
                    })
            }else{
                axios.post('https://car-doctor-server-beige-ten-37.vercel.app/logout',loggedUser,{withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }

        })
        return () => {
            return unsubscribe()
        }
    }, [])
    const authInfo = { user, loading, createUser, logIn, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
Authproviders.propTypes = {
    children: PropTypes.node
}
export default Authproviders;