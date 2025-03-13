
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Post from './pages/Post'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Menu from './pages/Menu'
import Logout from './pages/Logout'
import { AuthProvider, AuthRoute } from './auth/auth'
import './App.css'

function App() {
  
  return (
    <>
     <HashRouter>
      <AuthProvider>
      <Menu />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/post" element={<Post />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />

              <Route path="/logout" 
              element={<AuthRoute>
                <Logout/>
              </AuthRoute>} />

              <Route path="/*" element={<h1>NOT FOUND!</h1>} />
          </Routes>
        </AuthProvider>
     </HashRouter>
    </>
  )
}

export default App
