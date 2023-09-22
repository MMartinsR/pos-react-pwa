import { Button, TextField, Box, AuthTop, Stack } from "../../components"
import { login, verifyLogin } from "../../utils/auth";

import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import { InputAdornment } from "@mui/material";
import { AccountCircleOutlined, LockOutlined } from "@material-ui/icons";


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
        <AuthTop title_page={"Bem-vindo"} subtitle_page={"Efetue login para entrar..."}/>
        <Box
            component="div"
            sx={{ mt: 3, mb: 3, pl: 4, pr: 4 }}
            noValidate ="true"
            autoComplete="off"
        >
                <TextField 
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircleOutlined />
                          </InputAdornment>
                        ),
                      }}
                    variant={"filled"} fullWidth={true} label={"Email"} value={email} type={"email"} onChange={(e) => {
                setEmail(e.target.value);
                }}/>
        </Box>

        <Box
            component="div"
            sx={{ mt: 3, mb: 3, pl: 4, pr: 4 }}
            noValidate ="true"
            autoComplete="off"
        >
            <TextField 
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlined />
                      </InputAdornment>
                    ),
                  }}
                variant={"filled"} fullWidth={true} label={"Senha"} value={senha} type={"password"} onChange={(e) => {
                setSenha(e.target.value);
            }}/>
        </Box>
        
        <Box
            component="div"
            sx={{ mt: 3, mb: 3, pl: 4, pr: 4 }}
            noValidate ="true"
            autoComplete="off"
        >
            <Button
                startIcon={<LoginIcon sx={{ color: '#fff'}}/>} 
                fullWidth={true}
                label={"Entrar"}
                onClick={entrarNoApp}
                uppercase={true}/>
        </Box>
        <Stack sx={{ mt: 4, mb: 4 }} alignItems={'center'}>
            <Link style={{
                color: '#333',
                textDecoration: 'none',
                fontWeight: '200 !important',
                fontSize: 16
            }} to={"/register"}>Cadastrar-me</Link>
        </Stack>

    </>
};

export default Login;