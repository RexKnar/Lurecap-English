import { COURSE_CARD_API_CONFIG } from './../models/Constants';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ROUTE_CONFIG } from '../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private readonly httpClient: HttpClient) { }

  getCourseList():Observable<any>{
    return this.httpClient.get<any>(ROUTE_CONFIG.baseUrl + COURSE_CARD_API_CONFIG.GetAllCourseList);
  }
}
