import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
    ) {}

    login(username: string | null, password: string | null) {
        return this.http.post<{access_token: string}>(environment.backendUrl + '/auth', {username, password});
    }

    setSession(authToken: string) {
        localStorage.setItem('expires_at', (Date.now() + 60 * 60 * 1000).toString());
        localStorage.setItem('id_token', authToken);
    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    public isLoggedIn() {
        const token = localStorage.getItem('id_token');
        return (token !== null && token.length > 0 && Date.now() < this.getExpiration())
    }

    getExpiration(): number {
        const expiration = localStorage.getItem('expires_at') ?? '0';
        return Number.parseInt(expiration);
    }

    register(username: string | null, password: string | null) {
        return this.http.post(environment.backendUrl + '/user', {username, password});
    }
}