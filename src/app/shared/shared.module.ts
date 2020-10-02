import { DescriptionPipe } from './Pipes/Description.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarRatingModule } from 'ngx-bar-rating';




@NgModule({
declarations: [CourseCardComponent, NavbarComponent, FooterComponent,DescriptionPipe],
imports: [
CommonModule,
BarRatingModule
],
exports: [
NavbarComponent,
FooterComponent,
CourseCardComponent
]
})
export class SharedModule { }