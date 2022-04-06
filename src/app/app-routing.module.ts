import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './routs/landing/landing.component';
import { SellComponent } from './routs/sell/sell.component';
import { BuyComponent } from './routs/buy/buy.component'
import { ConfirmComponent } from './routs/confirm/confirm.component';
import { LoginComponent } from './routs/login/login.component';
import { MainComponent } from './routs/main/main.component';
import { OnboardedComponent } from './routs/onboarded/onboarded.component';
const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'sell', component: SellComponent
  },
  {
    path: 'buy', component: BuyComponent
  },
  {
    path: 'confirm/:token', component: ConfirmComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'onboarded/:token', component: OnboardedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
