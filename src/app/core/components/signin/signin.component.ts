import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AthenticationService } from 'src/app/shared/services/athentication.service';
import { ToastrService } from "ngx-toastr";
import {MessageConstants} from '../../../shared/models/messageConstants';
import { LocalStorageService } from 'src/app/shared/services/LocalStorageService';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    courseId: any;
    constructor(private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private _localStorageService:LocalStorageService,
        private _paymentService: PaymentService,
        private readonly _router: Router,
        private readonly _athenticationService: AthenticationService) { }
    get f() {
        return this.loginForm.controls;
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            password: ['', [Validators.required]],
            username: ['', [Validators.required]],


        });

        this.courseId = parseInt(this.route.snapshot.queryParamMap.get('courseid'));
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
            if(data.isAuthorize)
            {
                this._localStorageService.setAuthorizationData(data);
                this.toastr.success(
                    MessageConstants.LOGIN_SUCCESS, "",
                     { timeOut: 2000, }
                     );
                this.loginForm.reset();
                this.submitted = false;
                if (this.courseId )
                {
                    this.purchaseCourse(this.courseId);
                }
            }
            else{
                this.toastr.error(
                    "Sorry! Please Login Again", "",
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
