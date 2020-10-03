import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AthenticationService } from '../../../shared/services/athentication.service';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder,
                private readonly _athenticationService: AthenticationService) { }
    get f() {
        return this.registerForm.controls;
    }

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            passWord: ['', [Validators.required]],
            name: ['', [Validators.required]],
            emailId: ['', [Validators.required]],
            phoneNumber: ['', [Validators.required]],
            city: ['', [Validators.required]],
            gender: ['', [Validators.required]],


        });
    }
    onSubmitRegisterForm() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return false;
        }
    }
    newRegister() {
        if (this.registerForm.invalid) {
            return;
        }
        this.registerForm.value.gender = parseInt(this.registerForm.value.gender);
        this.registerForm.value.userName = this.registerForm.value.emailId;
        this.registerForm.value.userId = '';
        this.registerForm.value.mailDate = '2020-10-02T21:19:47.437Z';
        this._athenticationService.Registeration(this.registerForm.value).subscribe((data: any) => {
            this.registerForm.reset();
            this.submitted = false;
        });

    }

}
