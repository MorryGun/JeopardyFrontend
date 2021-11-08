import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'nav',
    template: `
  <mat-toolbar>
    <button mat-button routerLink="/">Jeopardy</button>
    <span style="flex: 1 1 auto"></span>
    <button *ngIf="!isAuthenticated" mat-button routerLink="/register">Register</button>
    <button *ngIf="!isAuthenticated" mat-button routerLink="/login">Login</button>
    <button *ngIf="isAuthenticated" mat-button (click)=logout()>Logout</button>
  `
})
export class NavComponent {
    
    constructor(private api: ApiService) {}
    
    get isAuthenticated()
    {
        return this.api.isAuthenticated;
    }

    logout()
    {
        this.api.logout();
    }
}
