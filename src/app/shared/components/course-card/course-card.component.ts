import { CourseService } from './../../services/course.service';
import { Router } from '@angular/router';
import { CourseList } from './../../models/Course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
    coursecardlist:CourseList[]=[];

  constructor(
      private readonly _courseService: CourseService,
      private readonly _router:Router

  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this._courseService.getCourseList().subscribe((data: any) => {
      this.coursecardlist = data.allCourse;
    
    });
  
}
}

