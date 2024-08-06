import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { SessionConfig } from '../config/session.config';

@Injectable({
    providedIn: 'root',
})
export class EnterpriseService {
    private readonly _http = inject(HttpClient);
    private readonly _baseUrl = SessionConfig.baseUrl;

    getEnterpriseName(): Observable<string> {
        return this._http
            .get<{ data: string }>(`${this._baseUrl}/enterprise`)
            .pipe(map(({ data }) => data));
    }
}
