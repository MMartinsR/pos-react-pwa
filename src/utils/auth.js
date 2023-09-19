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

const login = (data, navigate) => {
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/')
}

const logout = (navigate) => {
    localStorage.clear();
    navigate('/login');
}

export {
    verifyLogin,
    login,
    logout
}