import http from './http';

interface LoginPayload {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
    user: any; // Tu peux remplacer "any" par une interface User si tu connais la structure
}

export default {
    login(payload: LoginPayload) {
        return http.post<LoginResponse>('/login', payload);
    }
};
