import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONTACT_US_API_CONFIG, ROUTE_CONFIG } from '../models/Constants';
import { Contact, InstituteInput } from '../models/contact-us';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private readonly httpClient: HttpClient) { }

  sendQueries(queries: Contact){
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + CONTACT_US_API_CONFIG.SendQueries, queries );
  }

  instituteRegister(input: InstituteInput)
  {
    console.log(input)
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + CONTACT_US_API_CONFIG.SendQueries, input );
  }
}
