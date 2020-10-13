import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PaymentService } from 'src/app/shared/services/payment.service';

@Component({
  selector: 'app-please-wait',
  templateUrl: './please-wait.component.html',
  styleUrls: ['./please-wait.component.scss']
})
export class PleaseWaitComponent implements OnInit {

  constructor(private _paymentService: PaymentService,  private readonly _router: Router,
    private route: ActivatedRoute,) { }
  paymentId:any;

  ngOnInit(): void {
    this.paymentId = parseInt(this.route.snapshot.queryParamMap.get('paymentid'));
    setTimeout(() => {
      this.verifyPayment(this.paymentId);
  }, 1000);
   


  }
  ngOnDestroy() {
    
  }
  verifyPayment(paymentId:any): any{
    this._paymentService.verifyPayment(paymentId).subscribe((data:any)=>{
      if(data.result)
      {
        
        this._router.navigate(['/thankyou']);
      }
    })
  }

}
