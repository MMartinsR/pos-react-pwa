import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, verifyLogin } from "../../utils/auth";
import { Button, Top } from "../../components";

const Settings = ({ setCurrentPath, logoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath( window.location.pathname );
        verifyLogin(logoutRoutes, window.location.pathname, navigate, firebaseApp);
    }, [])
    return <>
        <Top hasMenu={ true } hasImage={ true } title={ 'Configurações' } subtitle={ 'Configurações do app...' } />
        <Button label={ "Sair" } onClick={ () => logout( firebaseApp, navigate ) } />
    </>;
}

export default Settings;