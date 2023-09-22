import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";
import { Top } from "../../components";

const Home = ({ setCurrentPath, logoutRoutes }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('Mariana');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(logoutRoutes, window.location.pathname, navigate);
    }, [])
    return <>
        <Top hasMenu={true} hasImage={true} title={`Ola, ${username}`} subtitle={'Organize suas ideias...'}/>
    </>
};


export default Home;