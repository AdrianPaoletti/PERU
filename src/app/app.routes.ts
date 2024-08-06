import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './features/authenticate/pages/login/login.component';
import { NotFoundComponent } from './features/not-found/pages/not-found.component';
import { SellsComponent } from './features/sells/pages/sells/sells.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: ':enterprise/sells',
        component: SellsComponent,
        canActivate: [authGuard],
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
