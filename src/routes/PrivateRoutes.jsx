// import { use } from "react";
// import { Navigate, useLocation } from "react-router";
// import AuthContext from "../contexts/AuthContext";
// import Loading from "../components/Loading";

// const PrivateRoutes = ({ children }) => {
//     const { user, loading } = use(AuthContext);
//     const location = useLocation();

//     if (loading) {
//         return <Loading />;
//     }

//     if (!user) {
//         return (
//             <Navigate
//                 to="/login"
//                 state={location.pathname}
//                 replace
//             />
//         );
//     }

//     return children;
// };

// export default PrivateRoutes;



import { use } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../contexts/AuthContext";
import Loading from "../components/Loading";

const PrivateRoutes = ({ children }) => {
    const authInfo = use(AuthContext);

    console.log("========== PRIVATE ROUTE ==========");
    console.log("AUTH INFO:", authInfo);

    const { user, loading } = authInfo;
    const location = useLocation();

    console.log("USER:", user);
    console.log("LOADING:", loading);

    if (loading) {
        console.log("LOADING...");
        return <Loading />;
    }

    if (!user) {
        console.log("NO USER → REDIRECTING TO LOGIN");

        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        );
    }

    console.log("USER FOUND → ACCESS GRANTED");

    return children;
};

export default PrivateRoutes;