import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth-wrapper',
    standalone: true,
    imports: [],
    templateUrl: './auth-wrapper.component.html',
    styleUrl: './auth-wrapper.component.scss',
})
export class AuthWrapperComponent implements OnInit {
    isLogin: boolean = false;

    constructor(private readonly _router: Router) {}

    ngOnInit(): void {
        this.isLogin = this._router.url.includes('login');
    }
}
