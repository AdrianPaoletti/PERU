import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isAuth(): boolean {
        return !!this.getAuthToken()?.length;
    }

    getAuthToken(): string | null | undefined {
        return localStorage.getItem('token');
    }
}
