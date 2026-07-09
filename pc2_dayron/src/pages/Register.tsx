import { useNavigate } from "react-router-dom";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {useAsyncAction} from "../hooks/useAsyncAction";

function Register () {
    const navigate = useNavigate();
    const {registerUser} =  useAuth ();
    const action= useAsyncAction ('No se pudo registrar')
    async function handleRegister (e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const success = await action.execute (async()=>{
            await registerUser({
                // datosss
            });
            return true;
        });
        if (success) navigate("/dashboard");
    
    }

    return (
        <main className="mx auto">
            <h1 className="mb-6">
                Registro
            </h1>
            <form className="space-y-4" onSubmit={handleRegister}>
                <div>
                    <label className="mb-1" htmlFor="username"> 
                        Nombre Usuario
                    </label>
                    <input type="w-full rounded border border-slate-300 px-3 py-2"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Dayron"
                    required
                    />
                </div>
                <div>
                    <label className="mb-1" htmlFor="email"> 
                    
                        Email
                    </label>
                    <input type="w-full rounded border border-slate-300 px-3 py-2"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="dayron@utec.eud.pe"
                    required
                    />
                </div>
                <div>
                    <label className="mb-1" htmlFor="password"> 
                    
                        Password
                    </label>
                    <input type="w-full rounded border border-slate-300 px-3 py-2"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    required
                    />
                </div>
                <div>
                    <label className="mb-1" htmlFor="fullName"> 
                    
                        Nombre completo
                    </label>
                    <input type="w-full rounded border border-slate-300 px-3 py-2"
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Dayron Cueva"
                    required
                    />
                </div>
                {action.error && <p className="text-sm text-red-600">{action.error}</p>}
                <button className="w-full rounded by-slate-900 px-4 py-2 text-white disabled-opacity-50"
                type="submit"
                disabled={action.loading}>
                    {action.loading ? "Registando..": "Registrarse"}
                </button>
            </form>
            <p className="mt-4 text-sm">
                ¿Ya tienes una cuenta? <Link className="underline" to="/login"> Iniciar Sesion</Link>
            </p>
        </main>
    )
}
export default Register;