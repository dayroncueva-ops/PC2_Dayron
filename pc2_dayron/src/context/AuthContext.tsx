import { useState, type ReactNode } from "react";
import { TOKEN_KEY } from "../api/api";


interface AuthContextValue {

}

const AuthContext = createContext<AuthContextValue | undefined> (undefined)
export function AuthProvider ({children}:{children:ReactNode}) {
    const [token, setToken] = useState<string | null> (()=>localStorage.getItem(TOKEN_KEY))
    const [loading,setLoading] = useState(Boolean(localStorage.getItem(TOKEN_KEY)))
    const [user, setUser]  = useState<User|null>(null)
    // falto implemtar la clase de user
}
const logout () => {
    localStorage.removeItem(TOKEN_KEY)
    setToken(null)
    setUser(null)
}
const refreshUser = async  () => {
    const storedToken = localStorage.getItem(TOKEN_KEY)
    if (!storedToken) {
        setLoading(false)
        setUser(null)
        return 
    }
}
const login = async ()
const register = async (payload:RegisterRequest) => {
    const {data}= await api.post<AuthResponse>('/auth/register',payload)
} 
// falta terminarr