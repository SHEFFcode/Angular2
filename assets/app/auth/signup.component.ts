import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';

@Component({
    selector: 'my-signup',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input [ngFormControl]="myForm.find('firstName')" type="text" id="firstName" class="form-control">
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input [ngFormControl]="myForm.find('lastName')" type="text" id="lastName" class="form-control">
                </div>
                <div class="form-group">
                    <label for="email">Mail</label>
                    <input [ngFormControl]="myForm.find('email')" type="email" id="email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input [ngFormControl]="myForm.find('password')" type="password" id="password" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign Up</button>
            </form>
        </section>
    `
})

export class SignupComponent implements OnInit {
    myForm: ControlGroup;
    constructor(private _fb:FormBuilder) { }
    ngOnInit () {
        this.myForm = this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required]
        });
    }
    onSubmit () {
        console.log(this.myForm.value);
    }
    private isEmail(control: Control): {[s: string]: boolean} {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    }
}