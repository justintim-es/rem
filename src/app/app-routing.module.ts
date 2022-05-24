import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './routs/landing/landing.component';
import { SellComponent } from './routs/sell/sell.component';
import { BuyComponent } from './routs/buy/buy.component'
import { ConfirmComponent } from './routs/confirm/confirm.component';
import { LoginComponent } from './routs/login/login.component';
import { MainComponent } from './routs/main/main.component';
import { OnboardedComponent } from './routs/onboarded/onboarded.component';
import { ConfirmBuyComponent } from './routs/confirm-buy/confirm-buy.component';
import { MainWalletSendComponent } from './routs/main/main-wallet/main-wallet-send/main-wallet-send.component';
import { OnboardFailComponent } from './routs/onboard-fail/onboard-fail.component';
import { MainWalletStatusComponent } from './routs/main/main-wallet/main-wallet-status/main-wallet-status.component';
import { MainWalletProtectComponent } from './routs/main/main-wallet/main-wallet-protect/main-wallet-protect.component';
import { MainWalletPrevTransactionComponent } from './routs/main/main-wallet/main-wallet-prev-transaction/main-wallet-prev-transaction.component';
import { MainBuyDefencesComponent } from './routs/main/main-buy/main-buy-defences/main-buy-defences.component';
import { PaymentSuccessComponent } from './routs/payment-success/payment-success.component';
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
    path: 'confirm-buy/:token', component: ConfirmBuyComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'onboarded/:token', component: OnboardedComponent
  },
  {
    path: 'onboard-fail/:token', component: OnboardFailComponent
  },
  {
    path: 'transfer/:liber', component: MainWalletSendComponent
  },
  {
    path: 'main-wallet-status', component: MainWalletStatusComponent
  },
  {
    path: 'main-wallet-protect/:index/:gladiator/:sell', component: MainWalletProtectComponent
  },
  {
    path: 'main-wallet-prev-transaction/:index', component: MainWalletPrevTransactionComponent
  },
  {
    path: 'main-buy-defences/:rationem', component: MainBuyDefencesComponent
  },
  {
    path: 'payment-success/:sell/:recognition', component: PaymentSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
