import { useState, type ReactNode } from "react";
import { TOKEN_KEY } from "../api/api";


interface AuthContextValue {

}

const AuthContext = createContext<AuthContextValue | undefined> (undefined)
export function AuthProvider ({children}:{children:ReactNode}) {
    const [token, setToken] = useState<string | null> (()=>localStorage.getItem(TOKEN_KEY))
    const [loading,setLoading] = useState(Boolean(localStorage.getItem(TOKEN_KEY)))
}
const logout () => {
    localStorage.removeItem(TOKEN_KEY)
    setToken(null)
    setUser(null)
}
c