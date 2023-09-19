import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin, logout } from "../../utils/auth";
import { Button } from "../../components";

const Settings = ({ setCurrentPath, logoutRoutes }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(logoutRoutes, window.location.pathname, navigate);
    }, [])
    return <>
        Settings
        <Button label={"Sair"} onClick={() => logout(navigate)}/>
    </>;
}

export default Settings;