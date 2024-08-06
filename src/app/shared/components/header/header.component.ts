import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    isAuthRoute: boolean = false;

    constructor(private readonly _router: Router) {}

    ngOnInit(): void {
        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.isAuthRoute = event.urlAfterRedirects.includes('login');
            }
        });
    }
}
