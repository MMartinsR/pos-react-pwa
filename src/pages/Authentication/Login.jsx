import { Button, TextField } from "../../components"
import { login, verifyLogin } from "../../utils/auth";

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/material';


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
        <Box
            component="div"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate ="true"
            autoComplete="off"
        >
                <TextField variant={"filled"} fullWidth={true} label={"Email"} value={email} type={"email"} onChange={(e) => {
                setEmail(e.target.value);
                }}/>
        </Box>

        <Box
            component="div"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate ="true"
            autoComplete="off"
        >
            <TextField variant={"filled"} fullWidth={true} label={"Senha"} value={senha} type={"password"} onChange={(e) => {
                setSenha(e.target.value);
            }}/>
        </Box>
        
        <Box
            component="div"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate ="true"
            autoComplete="off"
        >
            <Button 
                fullWidth={true}
                label={"Entrar"}
                onClick={entrarNoApp}/>
        </Box>

    </>
};

export default Login;