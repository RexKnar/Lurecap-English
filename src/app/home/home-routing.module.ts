import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { TermsandcondtionsComponent } from './components/termsandcondtions/termsandcondtions.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';

const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'contact-page',
    component: ContactPageComponent
  },
  {
    path: 'terms-and-conditions',
     component: TermsandcondtionsComponent
    },
  {
    path:'privacy-policy',
    component: PrivacypolicyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
