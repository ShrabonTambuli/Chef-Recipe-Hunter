import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
        } )
        .catch(error => {
            console.log(error.message)
        })
    }

    const githubSignIn = () =>{
        signInWithPopup(auth, provider2)
        .then(result =>{
            const user = result.user;
            console.log(user);
        } )
        .catch(error => {
            console.log(error.message)
        })
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    }, [])


    const authInfo = {
        provider,
        provider2,
        user,
        createUser,
        singIn,
        logOut,
        loading,
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;