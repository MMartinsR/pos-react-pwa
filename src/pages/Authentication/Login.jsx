import { Button, TextField } from "../../components"
import { useState } from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, verifyLogin } from "../../utils/auth";


const Login = ({ setCurrentPath, logoutRoutes }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(logoutRoutes, window.location.pathname, navigate);
    }, [])

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function entrarNoApp() {
        console.log(email);
        console.log(senha);

        login({email, senha}, navigate);
    }

    return <>
        <TextField label={"Email"} value={email} type={"email"} onChange={(e) => {
            setEmail(e.target.value);
        }}/>
        <TextField label={"Senha"} value={senha} type={"password"} onChange={(e) => {
            setSenha(e.target.value);
        }}/>
        <Button label={"Entrar"} onClick={entrarNoApp}/>
    </>
};

export default Login;