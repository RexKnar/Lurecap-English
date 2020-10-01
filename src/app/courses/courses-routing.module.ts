import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseAboutComponent } from './course-about/course-about.component';
import { CoursesComponent } from './courses.component';

const routes: Routes = [

  {
    path: "courses",
    component : CoursesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
