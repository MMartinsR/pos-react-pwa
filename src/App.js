import './App.css';

import { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Loading } from './components';
import routes from './routes';


const routesWithoutMenu = ['/task', '/login', '/register', '/recovery-password'];
const logoutRoutes = ['/login', '/register', '/recovery-password'];

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  return <Router>
    <Suspense fallback={<Loading/>}>
      <Routes>
        {
          routes.map((route, idx) => (
            <Route key={`${idx}_rotas`} exact path={route.path} element={<route.element logoutRoutes={logoutRoutes} setCurrentPath={setCurrentPath} />} />
          ))
        }
      </Routes>
    </Suspense>
    <br/>
    { !routesWithoutMenu.includes(currentPath) ? 
        routes.map((route, idx) => {
          if (route.tab) {
            return <Link key={`${idx}_menu`} to={route.path}>{route.title}</Link>
          }

          return null;
        }) : null
    }
  </Router>
}

export default App;
