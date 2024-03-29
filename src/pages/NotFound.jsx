import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../utils/auth";

const NotFound = ({ setCurrentPath, logoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(logoutRoutes, window.location.pathname, navigate, firebaseApp);
    }, [])
    return 'Página não encontrada';
}

export default NotFound;