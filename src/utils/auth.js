import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { DataModel } from "../data/datamodel";

const userIsLoggedIn = async (firebaseApp) => {
    const dataModel = new DataModel('user', firebaseApp);
    const user = await dataModel.getLocal();
    console.log(user);
    // if(user.length > 0){
    //     return user[0]
    // }
    // return null;
}

const verifyLogin = async (loggoutRoutes, currentPath, navigate, firebaseApp) => {
    const isLoggedIn = await userIsLoggedIn(firebaseApp);
    
    if(isLoggedIn && loggoutRoutes.includes(currentPath)){
        navigate('/')
    } else if(!isLoggedIn && !loggoutRoutes.includes(currentPath)){
        navigate('/login')
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

// Save on localStorage
const saveLogin = (firebaseApp, data) => {
    const dataModel = new DataModel('user', firebaseApp);
    dataModel.createLocal(data, data.uid);
}

const login = async (firebaseApp, data, navigate, setShowResendEmail) => {
    try {
        const auth = getAuth(firebaseApp);
        const response = await signInWithEmailAndPassword(auth, data.email, data.password);
        const {email, displayName, emailVerified, photoURL, uid, accessToken} = response.user;

        if (emailVerified) {
            saveLogin(firebaseApp, {email, displayName, photoURL, uid, accessToken});
            updateUserStatus(firebaseApp, uid);
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
        await confirmAccount(response.user);

        const {email, displayName, emailVerified, photoURL, uid} = response.user;
        await saveUserInDatabase(firebaseApp, {email, displayName, emailVerified, photoURL, uid});

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

const saveUserInDatabase = async (firebaseApp, user) => {
    const dataModel = new DataModel('user', firebaseApp);
    dataModel.create(user);
}

const updateUserStatus = async (firebaseApp, id) => {
    const dataModel = new DataModel('user', firebaseApp);
    dataModel.update({
        'emailVerified': true
    }, id);
}

export {
    verifyLogin,
    login,
    logout,
    register,
    resendEmail,
    sendPasswordReset
}