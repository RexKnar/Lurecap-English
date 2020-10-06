
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../shared/shared.module';
import { CourseIntroComponent } from './course-intro/course-intro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { BarRatingModule } from 'ngx-bar-rating';


@NgModule({
  declarations: [CoursesComponent,  CourseDetailComponent, CourseIntroComponent,  CourseListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    NgbModule,
    BarRatingModule,
  ],
  exports: [
    CourseListComponent
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesModule { }
