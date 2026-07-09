import axios from 'axios'
import type {ErrorResponse} from "../types/api";

export function getApiErrorMessage (error:unknown, fallback:string): string {
    if axios.isAxiosError<ErrorResponse>(error) {
        const status = error.response?.status;
        const apiMessage = error.response?.data?.message?? error.response.data?.error;
        if (apiMessage) return apiMessage;
        if (status===400) return "Bad request, datos impedidos, mal igreso probablement"
        if (status===403) return "No authorizacion"
        if (status===500) return "Prolema del backedn o error interno del servidor"
        if (error.code==="Error network") return "verifica que springboot corra"
        return fallback;

    }
    return "ocurrio un error inesperado";
} 
