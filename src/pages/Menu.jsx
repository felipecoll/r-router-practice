import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../auth/auth'

const routes = [
    { path: '/', name: 'Home', private: false },
    { path: '/contact', name: 'Contact', private: false },
    { path: '/profile', name: 'Profile', private: true },
    { path: '/login', name: 'Login', private: false, publicOnly: true },
    { path: '/logout', name: 'Logout', private: true }
]

const Menu = () => {
    const auth = useAuth()

  return (
   <nav>
      <ul>
        {routes.map((route, index) => {
          // Si la ruta es privada y no hay un usuario autenticado, la omito
          if (route.private && !auth.user) return null;
          // Si la ruta no es privada y hay un usuario autenticado, la omito
          if (!route.private && auth.user && (route.path === '/login' || route.path === '/logout')) return null;

          return (
            <li key={index}>
              <NavLink 
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'white'
                })} 
                to={route.path} 
                end
              >
                {route.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}


export default Menu