import { use } from "react";
import AuthContext from "../contexts/AuthContext";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router";


const PrivateRoutes = ({children}) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to={'/login'} state={location.pathname}></Navigate>
    }

    return children
};

export default PrivateRoutes;