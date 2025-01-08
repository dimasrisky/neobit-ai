import React from 'react'
import { getAuth } from "firebase/auth";
import { Outlet, Navigate } from "react-router-dom";

const IsLoggedIn: React.FC = () => {
    const auth = getAuth()
    if(auth.currentUser){
        return <Outlet />
    }else{
        return <Navigate to={'/login'} />
    }
}

export default IsLoggedIn