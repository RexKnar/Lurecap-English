import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { CommunityModule } from './community/community.module';
import { HttpClientModule } from '@angular/common/http';
import { BarRatingModule } from 'ngx-bar-rating';
import { TermsandcondtionsComponent } from './termsandcondtions/termsandcondtions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    TermsandcondtionsComponent,
    PrivacypolicyComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    SharedModule,
    BarRatingModule,
    HomeModule,
    CommunityModule,
    CoreModule
  ],
  exports: [
    BarRatingModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
