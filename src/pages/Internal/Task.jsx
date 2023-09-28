import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";
import { Top } from "../../components";


const Task = ( { setCurrentPath, logoutRoutes, firebaseApp } ) => {
    const navigate = useNavigate();

    useEffect( () => {
        setCurrentPath( window.location.pathname );
        verifyLogin( logoutRoutes, window.location.pathname, navigate, firebaseApp );
    }, [] )
    return <>
        <Top hasMenu={ false } hasArrowBack={ true } hasImage={ true } title={ 'Nova Task' } subtitle={ 'Crie sua tarefa...' } />
    </>;
}

export default Task;