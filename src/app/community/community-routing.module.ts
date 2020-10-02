import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityPageComponent } from './community-page/community-page.component';

const routes: Routes = [
  {
    path: 'community',
    component : CommunityPageComponent
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
