import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUsWhyComponent } from './components/about-us/about-us-why/about-us-why.component';
import { HomeComponent } from './components/home/home.component';
import {CourseProvideComponent} from './components/home/course-provide/course-provide.component';
import { CourseOutcomeComponent } from './components/home/course-outcome/course-outcome.component';
import { HomeSliderComponent } from './components/home/home-slider/home-slider.component';
import {HomeIntroComponent} from './components/home/home-intro/home-intro.component';
import {HomeDetailComponent } from './components/home/home-detail/home-detail.component';
import {ContactPageComponent} from './components/contact-page/contact-page.component';
import {HomeContentComponent} from './components/home/home-content/home-content.component';
import {HomeBriefComponent} from './components/home/home-brief/home-brief.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { TermsandcondtionsComponent } from './components/termsandcondtions/termsandcondtions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeBannerComponent } from './components/home/home-banner/home-banner.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesModule } from '../courses/courses.module';
import { AboutValueComponent } from './components/about-us/about-value/about-value.component';

@NgModule({
    declarations: [AboutUsComponent,
      AboutUsWhyComponent,
      CourseProvideComponent,
      CourseOutcomeComponent,
      HomeComponent,
      HomeSliderComponent,
      HomeIntroComponent,
      HomeDetailComponent,
      ContactPageComponent,
      HomeContentComponent,
      HomeBriefComponent,
      PrivacypolicyComponent,
      TermsandcondtionsComponent,
      HomeBannerComponent,
      AboutValueComponent,
  
    ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      SharedModule,
      CoursesModule
    ]
  })
export class HomeModule { }
