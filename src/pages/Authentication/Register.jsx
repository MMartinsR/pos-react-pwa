import { Button, TextField, Box, AuthTop, Stack } from "../../components"
import { register, verifyLogin } from "../../utils/auth";

import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import { InputAdornment } from "@mui/material";
import { AccountCircleOutlined, LockOutlined } from "@material-ui/icons";


const Register = ( { setCurrentPath, logoutRoutes, firebaseApp } ) => {
    const navigate = useNavigate();

    useEffect( () => {
        setCurrentPath( window.location.pathname );
        verifyLogin( logoutRoutes, window.location.pathname, navigate, firebaseApp );
    }, [] )

    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );

    async function cadastrarNoApp () {
        await register( firebaseApp, { email, password }, navigate );
    }

    return <>
        <AuthTop title_page={ "Cadastro" } subtitle_page={ "Cadastre-se no app..." } />
        <Box
            component="div"
            sx={ { mt: 3, mb: 3, pl: 4, pr: 4 } }
            noValidate={ true }
            autoComplete="off"
        >
            <TextField
                InputProps={ {
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleOutlined
                                style={ {
                                    color: '#333'
                                } } />
                        </InputAdornment>
                    ),
                } }
                variant={ "filled" } fullWidth={ true } label={ "Email" } value={ email } type={ "email" } onChange={ ( e ) => {
                    setEmail( e.target.value );
                } } />
        </Box>

        <Box
            component="div"
            sx={ { mt: 3, mb: 3, pl: 4, pr: 4 } }
            noValidate={ true }
            autoComplete="off"
        >
            <TextField
                InputProps={ {
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockOutlined
                                style={ {
                                    color: '#333'
                                } } />
                        </InputAdornment>
                    ),
                } }
                variant={ "filled" } fullWidth={ true } label={ "Senha" } value={ password } type={ "password" } onChange={ ( e ) => {
                    setPassword( e.target.value );
                } } />
        </Box>

        <Box
            component="div"
            sx={ { mt: 3, mb: 3, pl: 4, pr: 4 } }
            noValidate={ true }
            autoComplete="off"
        >
            <Button
                startIcon={ <LoginIcon sx={ { color: '#fff' } } /> }
                fullWidth={ true }
                label={ "Cadastrar" }
                onClick={ cadastrarNoApp }
                uppercase={ true } />
        </Box>
        <Stack sx={ { mt: 4, mb: 4 } } alignItems={ 'center' }>
            <Link style={ {
                color: '#333',
                textDecoration: 'none',
                fontWeight: '200 !important',
                fontSize: 16
            } } to={ "/login" }>Entrar</Link>
        </Stack>

    </>
};

export default Register;