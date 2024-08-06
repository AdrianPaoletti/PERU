import {
    HttpEvent,
    HttpHandlerFn,
    HttpInterceptorFn,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

export const mockedInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
    const shouldMock: boolean = true;

    if (shouldMock) {
        const mockResponse = new HttpResponse({
            status: 200,
            body: { data: `mapfre` },
        });

        return of(mockResponse);
    }

    return next(req);
};
