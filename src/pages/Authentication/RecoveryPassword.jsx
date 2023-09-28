import { Button, TextField, Box, AuthTop, Stack } from "../../components"
import { register, sendPasswordReset, verifyLogin } from "../../utils/auth";

import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import { InputAdornment } from "@mui/material";
import { AccountCircleOutlined, LockOutlined } from "@material-ui/icons";


const RecoveryPassword = ( { setCurrentPath, logoutRoutes, firebaseApp } ) => {
    const navigate = useNavigate();

    useEffect( () => {
        setCurrentPath( window.location.pathname );
        verifyLogin( logoutRoutes, window.location.pathname, navigate, firebaseApp );
    }, [] )

    const [ email, setEmail ] = useState( "" );

    async function recuperarSenha () {
        await sendPasswordReset( firebaseApp, email, navigate );
    }

    return <>
        <AuthTop title_page={ "Esqueci minha senha" } subtitle_page={ "Insira seu email para recuperar a senha..." } />
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
            <Button
                startIcon={ <LoginIcon sx={ { color: '#fff' } } /> }
                fullWidth={ true }
                label={ "Recuperar senha" }
                onClick={ recuperarSenha }
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

export default RecoveryPassword;