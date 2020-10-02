import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandcondtionsComponent } from './termsandcondtions/termsandcondtions.component';

const routes: Routes = [

  {
    path:'',
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'terms-and-conditions',
     component: TermsandcondtionsComponent
    },
  {
    path:'privacy-policy',
    component: PrivacypolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
