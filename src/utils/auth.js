import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

const userisLoggedIn = () => {
    const user = localStorage.getItem('user');
    if (user) {
        return JSON.parse(user);
    }
    return null;
}

const verifyLogin = (logoutRoutes, currentPath, navigate) => {

  const isLoggedIn = userisLoggedIn();

  if (isLoggedIn && logoutRoutes.includes(currentPath)) {
      navigate('/');
  } else if (!isLoggedIn && !logoutRoutes.includes(currentPath)) {
      navigate('/login');
  }
}

const sendPasswordReset = async (firebaseApp, email, navigate) => {
    try {
        const auth = getAuth(firebaseApp);
        await sendPasswordResetEmail(auth, email);
        alert('Link de recuperação enviado com sucesso.');
        navigate('/login');
    }  catch (error) {
        if(error.toString().indexOf('auth/invalid-email') > -1) {
            alert('Dados de usuário inválidos.');
        } else {
            alert(error);
        }
    }
}

const saveLogin = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
}

const login = async (firebaseApp, data, navigate, setShowResendEmail) => {
    try {
        const auth = getAuth(firebaseApp);
        const response = await signInWithEmailAndPassword(auth, data.email, data.password);
        const {email, displayName, emailVerified, photoURL, uid, accessToken} = response.user;

        if (emailVerified) {
            saveLogin({email, displayName, photoURL, uid, accessToken});
            navigate('/');
            setShowResendEmail(false);
        } else {
            alert('Você precisa confirmar seu e-mail.');
            setShowResendEmail(true);
        }

        
    } catch (error) {
        if(error.toString().indexOf('auth/invalid-email') > -1) {
            alert('Dados de usuário inválidos.');
        } else {
            alert(error.toString());
        }
    }
}

const confirmAccount = async (user) => {
    await sendEmailVerification(user);
}

const resendEmail = async (firebaseApp, data, setShowResendEmail) => {
    try {
        const auth = getAuth(firebaseApp);
        const response = await signInWithEmailAndPassword(auth, data.email, data.password);
        confirmAccount(response.user);
        setShowResendEmail(false);
        alert('E-mail reenviado com sucesso.')
    } catch (error) {
        alert(error);
    }
}

const register = async (firebaseApp, data, navigate) => {
    try {
        // Criando usuário no firebase
        const auth = getAuth(firebaseApp);
        const response = await createUserWithEmailAndPassword(auth, data.email, data.password);

        // Envio de e-amil de confirmação
        confirmAccount(response.user);

        alert('Usuário cadastrado com sucesso. Verifique sua caixa de mensagem.');
        navigate('/login');
    } catch (error) {
        if(error.toString().indexOf('auth/wrong-password') > -1) {
            alert('Password inválido.');
        } else if (error.toString().indexOf('auth/invalid-email') > -1) {
            alert('E-mail inválido.');
        } else if (error.toString().indexOf('auth/weak-password') > -1) {
            alert('Senha precisa ter 6 ou mais caracteres.');
        }else {
            alert(error.toString());
        }
    }
}

const logout = async (firebaseApp, navigate) => {
    localStorage.clear();
    navigate('/login');
}

export {
    verifyLogin,
    login,
    logout,
    register,
    resendEmail,
    sendPasswordReset
}