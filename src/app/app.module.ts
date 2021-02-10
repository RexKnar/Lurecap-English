import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { CommunityModule } from './community/community.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BarRatingModule } from 'ngx-bar-rating';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageService } from './shared/services/LocalStorageService';

import { AuthInterceptor } from "src/app/shared/interceptors/AuthInterceptor"
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    SharedModule,
    BarRatingModule,
    HomeModule,
    CoreModule,
    FormsModule,
    NgbModule,
    CommunityModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: false,
      enableHtml: true,
   }),
  ],
  exports: [
    BarRatingModule
  ],

  providers: [
    {
       provide:HTTP_INTERCEPTORS,
       useClass:AuthInterceptor,
       multi:true
    }, LocalStorageService,],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
