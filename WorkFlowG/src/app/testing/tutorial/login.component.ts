import {Component} from '@angular/core';
import {AuthService} from "./AuthService";

@Component({
    selector: 'app-login',
    template: `
    <a>
      <span *ngIf="needsLogin()">Login</span>
      <span *ngIf="!needsLogin()">Logout</span>
    </a>
  `
})
export class LoginComponent {

    constructor(private auth: AuthService) {

    }

    needsLogin() {
        return !this.auth.isAuthenticated();
    }
}