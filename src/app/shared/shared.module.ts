import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page/contact-page.component';



@NgModule({
  declarations: [CourseCardComponent, NavbarComponent, FooterComponent, ContactPageComponent],
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
