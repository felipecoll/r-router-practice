import { useState } from 'react'
import { useAuth } from '../auth/auth'
import { Navigate } from 'react-router-dom';


const Login = () => {
  const auth = useAuth();  
  const [username, setUsername] = useState("");

  const login = (e) => {
      e.preventDefault();
      auth.login({ username }); 
  };

  if (auth.user) {
      return (
         <Navigate to="/profile" />
      );
  }

  return (
      <>
          <h1>Login - Bienvenido</h1>

          <form onSubmit={login}>
              <label htmlFor="usuario">Ingrese su usuario</label>
              <input
                  type="text"
                  id="usuario"
                  name="user"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />

              <button type="submit">Ingresar</button>
          </form>
      </>
  );
};

export default Login