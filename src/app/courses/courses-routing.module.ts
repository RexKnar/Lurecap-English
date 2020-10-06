import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesComponent } from './courses.component';

const routes: Routes = [

  {
    path: "courses",
    component : CoursesComponent
  },
  {
    path: "course-detail",
    component : CourseDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
