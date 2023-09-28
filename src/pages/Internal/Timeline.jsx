import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";
import { Top } from "../../components";

const Timeline = ( { setCurrentPath, logoutRoutes, firebaseApp } ) => {
    const navigate = useNavigate();

    useEffect( () => {
        setCurrentPath( window.location.pathname );
        verifyLogin( logoutRoutes, window.location.pathname, navigate, firebaseApp );
    }, [] )
    return <>
        <Top hasMenu={ true } hasImage={ true } title={ `Agosto 2023` } subtitle={ 'Organize suas tarefas!' } />
    </>;
}

export default Timeline;