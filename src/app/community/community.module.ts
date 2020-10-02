import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityRoutingModule } from './community-routing.module';
import { CommunityPageComponent } from './community-page/community-page.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CommunityPageComponent],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    BrowserModule,
   
  ]
})
export class CommunityModule { }
