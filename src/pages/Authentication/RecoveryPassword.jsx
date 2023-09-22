import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";
import { AuthTop } from "../../components";

const RecoveryPassword = ({ setCurrentPath, logoutRoutes }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(logoutRoutes, window.location.pathname, navigate);
    }, [])
    return <>
        <AuthTop title_page={"Esqueceu sua senha"} subtitle_page={"Insira seu e-mail para recuperar sua senha..."}/>
    </>
};

export default RecoveryPassword;