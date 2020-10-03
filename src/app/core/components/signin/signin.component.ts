import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AthenticationService } from 'src/app/shared/services/athentication.service';
import { ToastrService } from "ngx-toastr";
import {MessageConstants} from '../../../shared/models/messageConstants';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private readonly _athenticationService: AthenticationService) { }
    get f() {
        return this.loginForm.controls;
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            password: ['', [Validators.required]],
            username: ['', [Validators.required]],


        });
    }
    onSubmitLoginForm() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return false;
        }
    }
    userLogin() {
        if (this.loginForm.invalid) {
            return;
        }
        this._athenticationService.Userlogin(this.loginForm.value).subscribe((data: any) => {
            this.toastr.success(
                MessageConstants.LOGIN_SUCCESS, "",
                 { timeOut: 2000, }
                 );
            this.loginForm.reset();
            this.submitted = false;
        });

    }

}
