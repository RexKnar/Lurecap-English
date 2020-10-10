import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityRoutingModule } from './community-routing.module';
import { CommunityPageComponent } from './community-page/community-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommunityDetailComponent } from './community-detail/community-detail.component';
import { CommunityBenefitsComponent } from './community-benefits/community-benefits.component';
import { CommunityDeclareComponent } from './community-declare/community-declare.component';

@NgModule({
  declarations: [CommunityPageComponent, CommunityDetailComponent, CommunityBenefitsComponent, CommunityDeclareComponent],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    BrowserModule,
   
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CommunityModule { }
