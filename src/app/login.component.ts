import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
    templateUrl: '/login.component.html'
})
export class LoginComponent {

    form
    credentials

    constructor(private auth: ApiService, private fb: FormBuilder) {
        this.form = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")])]
        })
    }

    login(credentials){
        this.auth.login(credentials);
    }
}