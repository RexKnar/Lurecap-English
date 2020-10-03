import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, Register } from '../models/athentication';
import {  CORE_API_CONFIG, ROUTE_CONFIG } from '../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class AthenticationService {

  constructor(private readonly httpClient: HttpClient) { }

  Registeration(signup: Register){
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + CORE_API_CONFIG.SignupURL, signup );
  }
  Userlogin(signin: Login){
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + CORE_API_CONFIG.SiginURL, signin );
  }
}
