import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";


const adminList = ['Philip', 'Jeronimo', 'Anita']

const AuthContext = React.createContext();

function AuthProvider({children}) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    const login = ({username}) => {
        const isAdmin = adminList.find(admin => admin === username)

        setUser({username, isAdmin})
        navigate('/profile')
    }

    const logout = () => {
        setUser(null)
        navigate('/')
    }

    const auth = {user, login, logout}

    return (
        <AuthContext.Provider value={auth}>
            {children}    
        </AuthContext.Provider>
    )
}

function useAuth() {
    const auth = React.useContext(AuthContext)
    return auth
}

function AuthRoute (props) {
    const auth = useAuth()
    // return auth.user ? <Navigate to="/profile" /> : null
    if (!auth.user) {
        return <Navigate to="/login" />
    }
    return props.children
    
}


export { AuthProvider, useAuth, AuthRoute }