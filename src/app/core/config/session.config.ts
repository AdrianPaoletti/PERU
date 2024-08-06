import { environment } from '../../../environments/environment.dev';

export class SessionConfig {
    static token: string = '';
    static enterprise: string = 'a';
    static baseUrl: string = environment.baseUrl;

    static clear(): void {
        this.token = '';
        this.enterprise = '';
    }
}
