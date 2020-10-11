import { COURSE_CARD_API_CONFIG, PAYMENT_API_CONFIG } from './../models/Constants';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ROUTE_CONFIG } from '../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private readonly httpClient: HttpClient) { }

  payuOrder(courseMasterId:number):Observable<any>{
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + PAYMENT_API_CONFIG.PayuOrderUrl+courseMasterId,courseMasterId);
  }
  
}
