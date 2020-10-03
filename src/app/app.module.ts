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
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    SharedModule,
    BarRatingModule,
    HomeModule,
    CoreModule,
    NgbModule,
    CommunityModule
  ],
  exports: [
    BarRatingModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
