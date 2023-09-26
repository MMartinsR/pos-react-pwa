import { Button, TextField, Box, AuthTop, Stack } from "../../components"
import { login, resendEmail, verifyLogin } from "../../utils/auth";

import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import { InputAdornment } from "@mui/material";
import { AccountCircleOutlined, LockOutlined } from "@material-ui/icons";


const Login = ({ setCurrentPath, logoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();
    const [showResendEmail, setShowResendEmail] = useState(false);

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(logoutRoutes, window.location.pathname, navigate);
    }, [])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function entrarNoApp() {
        await login(firebaseApp, {email, password}, navigate, setShowResendEmail);
    }

    async function _resendEmail() {
        await resendEmail(firebaseApp, {email, password}, setShowResendEmail);
    }

    return <>
        <AuthTop title_page={"Bem-vindo"} subtitle_page={"Efetue login para entrar..."}/>
        <Box
            component="div"
            sx={{ mt: 3, mb: 3, pl: 4, pr: 4 }}
            noValidate={true}
            autoComplete="off"
        >
                <TextField 
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircleOutlined  
                                style={{
                                color: '#333'
                                }}/>
                          </InputAdornment>
                        ),
                      }}
                    variant={"filled"} fullWidth={true} label={"Email"} value={email} type={"email"} onChange={(e) => {
                setEmail(e.target.value);
                }}/>
        </Box>

        <Box
            component="div"
            sx={{ mt: 3, mb: 1, pl: 4, pr: 4 }}
            noValidate={true}
            autoComplete="off"
        >
            <TextField 
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlined 
                            style={{
                                color: '#333'
                            }} />
                      </InputAdornment>
                    ),
                  }}
                variant={"filled"} fullWidth={true} label={"Senha"} value={password} type={"password"} onChange={(e) => {
                setPassword(e.target.value);
            }}/>
        </Box>
        
        <Box
            component="div"
            sx={{ mt: 0, mb: 0, pl: 4, pr: 4 }}
            noValidate={true}
            autoComplete="off"
        >
            <Stack sx={{ mt: 0, mb: 0 }} alignItems={'end'}>
                <Link style={{
                    color: '#333',
                    textDecoration: 'none',
                    fontWeight: '200 !important',
                    fontSize: 16
                }} to={"/recovery-password"}>Esqueceu a senha?</Link>
            </Stack>
        </Box>        
        
        <Box
            component="div"
            sx={{ mt: 3, mb: 3, pl: 4, pr: 4 }}
            noValidate={true}
            autoComplete="off"
        >
            <Button
                startIcon={<LoginIcon sx={{ color: '#fff'}}/>} 
                fullWidth={true}
                label={"Entrar"}
                onClick={entrarNoApp}
                uppercase={true}/>
        </Box>
        { showResendEmail ? 
            <Box
            component="div"
            sx={{ mt: 3, mb: 3, pl: 4, pr: 4 }}
            noValidate={true}
            autoComplete="off"
            >
                <Button
                    startIcon={<LoginIcon sx={{ color: '#fff'}}/>} 
                    fullWidth={true}
                    label={"Reenviar e-mail"}
                    onClick={_resendEmail}
                    uppercase={true}/>
            </Box> 
            : null}
        
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