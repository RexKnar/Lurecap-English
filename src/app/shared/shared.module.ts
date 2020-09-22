import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [CourseCardComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CourseCardComponent,
    NavbarComponent, 
    FooterComponent
  ]
})
export class SharedModule { }
