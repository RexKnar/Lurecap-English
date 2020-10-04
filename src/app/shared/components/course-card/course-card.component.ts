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
  // courseCardList: CourseList[] = [];

  constructor(
    private readonly _courseService: CourseService,
    private readonly _router: Router

  ) { }
  courseCardList: CourseList[] = [
    {
      courseMasterId: 8,
      courseName: 'BASIC ENGLISH SPEAKING',
      rating: 3,
      courseAmount: 500,
      description: 'This course will help you reach that goal. Speak English Professionally: In person, Online and On the Phone will boost your English speaking skills.',
      provideWhat: 'string',
      dicountAmount: 450,
      language: 'string',
      courseType: 'string',
      imageUrl: 'assets/img/online.jpg',
      count: 50,
      statusFlag: 1,
      learnersNumber: 0,
      tutorName: 'Amal J Eronimus',
      tutorId: 1
    },
    {
      courseMasterId: 8,
      courseName: 'MEDIUM ENGLISH SPEAKING',
      rating: 0,
      courseAmount: 0,
      description: 'This course will help you reach that goal. Speak English Professionally: In person, Online and On the Phone will boost your English speaking skills.',
      provideWhat: 'string',
      dicountAmount: 0,
      language: 'string',
      courseType: 'string',
      imageUrl: 'assets/img/online.jpg',
      count: 0,
      statusFlag: 1,
      learnersNumber: 0,
      tutorName: 'Amal J Eronimus',
      tutorId: 1
    },
    {
      courseMasterId: 8,
      courseName: 'EXPERT ENGLISH SPEAKING',
      rating: 0,
      courseAmount: 0,
      description: 'This course will help you reach that goal. Speak English Professionally: In person, Online and On the Phone will boost your English speaking skills.',
      provideWhat: 'string',
      dicountAmount: 0,
      language: 'string',
      courseType: 'string',
      imageUrl: 'assets/img/online.jpg',
      count: 0,
      statusFlag: 1,
      learnersNumber: 0,
      tutorName: 'Amal J Eronimus',
      tutorId: 1
    },

  ];
  ngOnInit(): void {
    // this.get();


  }

  get() {
    this._courseService.getCourseList().subscribe((data: any) => {
      // this.courseCardList = data.allCourse;
    });

  }
}

