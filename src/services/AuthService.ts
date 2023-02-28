import Api from "../providers";
import { LoginDTO } from "../schemas/DTO";
import { AuthData } from "../schemas/Models";

const postAuthLogin = (login: LoginDTO) => Api.post<AuthData>(`/login`, login)

export const AuthService = {
    postAuthLogin
}