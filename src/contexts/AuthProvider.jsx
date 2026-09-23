import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateProfileFunc = (displayName, photoURL)=>{
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL
        })
    }
    const signInUserWithEmailPass = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        updateProfileFunc,
        signInUserWithEmailPass,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;