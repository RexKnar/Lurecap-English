
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../shared/shared.module';
import { CourseAboutComponent } from './course-about/course-about.component';
import { CourseIntroComponent } from './course-intro/course-intro.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';


@NgModule({
  declarations: [CoursesComponent, CourseAboutComponent, CourseDetailComponent, CourseIntroComponent,  CourseListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesModule { }
