import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesComponent } from './courses.component';
import { PleaseWaitComponent } from './please-wait/please-wait.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [

  {
    path: "courses",
    component : CoursesComponent
  },
  {
    path: "course-detail",
    component : CourseDetailComponent
  },
  {
    path: "thankyou",
    component : ThankyouComponent
  },
  {
    path: "please-wait",
    component : PleaseWaitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
