import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUsWhyComponent } from './components/about-us/about-us-why/about-us-why.component';
import { CourseProvideComponent } from './components/course-provide/course-provide.component';
import { CourseOutcomeComponent } from './components/course-outcome/course-outcome.component';
import { HomeComponent } from './components/home/home.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { HomeIntroComponent } from './components/home-intro/home-intro.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

@NgModule({
    declarations: [AboutUsComponent,
      AboutUsWhyComponent,
      CourseProvideComponent,
      CourseOutcomeComponent,
      HomeComponent,
      HomeSliderComponent,
      HomeIntroComponent,
      HomeDetailComponent,
      ContactPageComponent
    ],
    imports: [
      CommonModule,
      HomeRoutingModule
    ]
  })
export class HomeModule { }
