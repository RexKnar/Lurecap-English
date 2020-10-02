import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUsWhyComponent } from './components/about-us/about-us-why/about-us-why.component';
import { CourseProvideComponent } from './components/course-provide/course-provide.component';
import { CourseOutcomeComponent } from './components/course-outcome/course-outcome.component';

@NgModule({
  declarations: [AboutUsComponent, AboutUsWhyComponent, CourseProvideComponent, CourseOutcomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
