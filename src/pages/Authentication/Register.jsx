import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";

const Register = ({ setCurrentPath, logoutRoutes }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(logoutRoutes, window.location.pathname, navigate);
    }, [])
    return 'Register'
};

export default Register;