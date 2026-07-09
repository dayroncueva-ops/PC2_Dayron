import { useState } from "react";
import type { getApiErrorMessage } from "../utils/apiError";


export function useAsyncAction (defaultErrorMessage:string ) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    async function execute <T> (action: ()=>Promise<T>):Promise<T|null> {
        setLoading(true);
        setError("");
        try {
            return await action ();
        } catch (error) {
            setError(getApiErrorMessage(error,defaultErrorMessage));
            return null;
        } finally {
            setLoading(false);
        }
    }
    return {loading, error, setError,execute}
}