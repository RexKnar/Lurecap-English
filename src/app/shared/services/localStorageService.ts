import { Injectable } from '@angular/core';
import { LoginResponse } from '../models/token';

@Injectable()
export class LocalStorageService {
    public setAuthorizationData(auth: LoginResponse): void {
        sessionStorage.setItem('currentUser', JSON.stringify(auth));
    }
    public getAuthorizationData(): LoginResponse {
        const tokenData = JSON.parse(sessionStorage.getItem('currentUser'));
        return tokenData == null ? null : tokenData;
    }
    
}
