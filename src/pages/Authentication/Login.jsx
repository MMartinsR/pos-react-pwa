import { Button, TextField } from "../../components"
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function entrarNoApp() {
        console.log(email);
        console.log(senha);
    }

    return <>
        <TextField label={"Email"} value={email} type={"email"} onChange={(e) => {
            setEmail(e.target.value);
        }}/>
        <TextField label={"Senha"} value={senha} type={"password"} onChange={(e) => {
            setSenha(e.target.value);
        }}/>
        <Button label={"Entrar"} onClick={entrarNoApp} variant={"text"}/>
    </>
};

export default Login;