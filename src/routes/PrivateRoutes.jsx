import { use } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../contexts/AuthContext";
import Loading from "../components/Loading";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return (
            <Navigate
                to="/login"
                state={location.pathname}
                replace
            />
        );
    }

    return children;
};

export default PrivateRoutes;

