import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
    templateUrl: '/register.component.html'
})
export class RegisterComponent {

    form
    credentials

    constructor(private auth: ApiService, private fb: FormBuilder) {
        this.form = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")])]
        })
    }

    register(credentials) {
        this.auth.register(credentials);
    }
}