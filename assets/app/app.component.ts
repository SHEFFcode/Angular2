import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";

@Component({
    selector: 'my-app',
    template: ` 
    <div class="container">
        <my-header></my-header>
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent]
})
@Routes([
    {path: '/', component: MessagesComponent},
    {path: '/auth', component: AuthenticationComponent},
])
export class AppComponent {
    constructor(private _router: Router) { }
    ngOnInit() {
        this._router.navigate(['/']);
    }
}