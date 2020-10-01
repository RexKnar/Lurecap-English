import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUsWhyComponent } from './components/about-us/about-us-why/about-us-why.component';


@NgModule({
  declarations: [AboutUsComponent, AboutUsWhyComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
