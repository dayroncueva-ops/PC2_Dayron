interface RegisterBody {

  "username": string,
  "email": string,
  "password": string,
  "fullName": string

}
interface LoginBody {
 "username": string,
  "password": string
}
export asyncfunction register(body:RegisterBody):Promise <AuthResponse> {
    const response = await api.post<AuthResponse> ("/auth/register",body);
    return response.data;
}
export asyncfunction login(body:Login Body):Promise <AuthResponse> {
    const response = await api.post<AuthResponse> ("/auth/login",body);
    return response.data;
}
