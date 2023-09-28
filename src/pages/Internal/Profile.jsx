import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";
import { TopMenu } from "../../components";

const Profile = ( { setCurrentPath, logoutRoutes, firebaseApp } ) => {
    const navigate = useNavigate();

    useEffect( () => {
        setCurrentPath( window.location.pathname );
        verifyLogin( logoutRoutes, window.location.pathname, navigate, firebaseApp );
    }, [] )
    return <>
        <TopMenu hasMenu={ true } hasArrowBack={ false } hasImage={ true } />
    </>;
}

export default Profile;