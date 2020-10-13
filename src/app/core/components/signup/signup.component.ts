import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AthenticationService } from '../../../shared/services/athentication.service';
import { ToastrService } from 'ngx-toastr';
import {MessageConstants} from '../../../shared/models/messageConstants';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../../../shared/services/payment.service';
import { LocalStorageService } from 'src/app/shared/services/LocalStorageService';



@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    courseId: any;
    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private toastr: ToastrService,
                private _paymentService: PaymentService,
                public _localStorageService: LocalStorageService,
                private readonly _router: Router,
                private readonly _athenticationService: AthenticationService) { }
    get f() {
        return this.registerForm.controls;
    }

    ngOnInit(): void {
        this.courseId = parseInt(this.route.snapshot.queryParamMap.get('courseid'));
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
            if (data.response)
            {
                this._localStorageService.setAuthorizationData(data.response);
                this.toastr.success(
                MessageConstants.REGISTER_SUCCESS, '',
                 { timeOut: 2000, }
                 );
                if (this.courseId )
            {
                this.purchaseCourse(this.courseId);
            }
                this.registerForm.reset();

                this.submitted = false;
            }
            else{
                this.toastr.error(
                    MessageConstants.REGISTER_FAILED, '',
                     { timeOut: 2000, }
                     );
            }

        });

    }

    purchaseCourse(courseId: number){
        this._paymentService.payuOrder(courseId).subscribe((data: any) => {
            if (data.redirectUrl)
            {
                this._router.navigate(['/please-wait'], { queryParams: { paymentId: data.paymentId } });
                window.open(data.redirectUrl);
            }
        });
    }

}
