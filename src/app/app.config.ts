import {
    provideHttpClient,
    withFetch,
    withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { mockedInterceptor } from './core/interceptors/mock.interceptor';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(withFetch(), withInterceptors([mockedInterceptor])),
    ],
};
