
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../shared/shared.module';
import { CourseAboutComponent } from './course-about/course-about.component'


@NgModule({
  declarations: [CoursesComponent, CourseAboutComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesModule { }
