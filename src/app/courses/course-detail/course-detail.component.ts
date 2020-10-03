import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetail, CourseDetails } from 'src/app/shared/models/Course';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  currentCourseId: number;
  currentCourseDetails: CourseDetail;
  constructor(private readonly _courseService: CourseService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentCourseId = parseInt(this.route.snapshot.queryParamMap.get('CourseId'));
    this.getCurrentCourseDetails(this.currentCourseId);

  }
  getCurrentCourseDetails(currentCourseId): void {
    this._courseService.getCourseDetails(currentCourseId).subscribe((data: any) => {
      this.currentCourseDetails = data;
    });
  }
}
