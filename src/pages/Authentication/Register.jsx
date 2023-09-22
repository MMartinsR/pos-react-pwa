import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";
import { AuthTop } from "../../components";

const Register = ({ setCurrentPath, logoutRoutes }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(logoutRoutes, window.location.pathname, navigate);
    }, [])
    return <>
        <AuthTop title_page={"Cadastre-se"} subtitle_page={"Insira seus dados para se cadastrar..."}/>
    </>
};

export default Register;