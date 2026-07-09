import axios,{AxiosError} from 'axios'

export const TOKEN_KEY = 'el_token'
const api= axios.create ({baseURL:import.meta.env.VITE_API_URL || '/api',})
api.interceptors.request.use((config)=> {
    const token=localStorage.getItem(TOKEN_KEY)
    if (token) {config.headers.Authorization=`Bearer ${token}`}
    return config
})

api.interceptors.response.use((response)=> response, 
(error:AxiosError)=> {
    if (error.response?.status===4001) {
        localStorage.removeItem(TOKEN_KEY)
        if (window.location.pathname!== '/login') {
            window.location.href='/login'
        }
    }
    return Promise.reject(error)
},
)

export function getErrorMessage (error:unknown):string {
    if (axios.isAxiosError(error)) {
        const data = error.response?.data
        if (data && typeof data==='object' && 'message' in data) {
            return String (data.message)
        }
        return error.message || 'No se puedo completar la solicitud'
    }
    return 'Ocurrio un error inesperado'
}
export default api