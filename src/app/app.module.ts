import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LandingComponent } from './routs/landing/landing.component';
import { MatButtonModule } from '@angular/material/button';
import { BuyComponent } from './routs/buy/buy.component';
import { SellComponent } from './routs/sell/sell.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { sellReducer } from './redux/sell/reducer';
import { SellEffectsService } from './redux/sell/sell-effects.service';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmComponent } from './routs/confirm/confirm.component';
import { confirmReducer } from './redux/confirm/reducer';
import { ConfirmEffectsService } from './redux/confirm/confirm-effects.service';
import { LoginComponent } from './routs/login/login.component';
import { LoginEffectsService } from './redux/login/login-effects.service';
import { MainComponent } from './routs/main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { loginReducer } from './redux/login/reducer';
import { MatTabsModule } from '@angular/material/tabs';
import { OnboardedComponent } from './onboarded/onboarded.component';
import { onboardReducer } from './redux/onboard/reducer';
import { OnboardService } from './redux/onboard/onboard.service';
import { mainReducer } from './redux/main/reducer';
import { MainEffectsService } from './redux/main/main-effects.service';
import { MainSellComponent } from './routs/main/main-sell/main-sell.component';
import { MainWalletComponent } from './routs/main/main-wallet/main-wallet.component';
import { BuyService } from './redux/buy/buy.service';
import { buyReducer } from './redux/buy/reducer';
import { ConfirmBuyComponent } from './routs/confirm-buy/confirm-buy.component';
import { confirmBuyReducer } from './redux/confirm-buy/reducer';
import { ConfirmBuyService } from './redux/confirm-buy/confirm-buy.service';
import { tokenReducer } from './redux/token/reducer';
import { mainWalletReducer } from './redux/main-wallet/reducer';
import { MainWalletService } from './redux/main-wallet/main-wallet.service';
import { MainWalletSendComponent } from './routs/main/main-wallet/main-wallet-send/main-wallet-send.component';
import { MatIconModule } from '@angular/material/icon';
import { transferReducer } from './redux/transfer/reducer';
import { TransferService } from './redux/transfer/transfer.service';
import { OnboardFailComponent } from './routs/onboard-fail/onboard-fail.component';
import { onboardFailReducer } from './redux/onboard-fail/reducer';
import { OnboardFailService } from './redux/onboard-fail/onboard-fail.service';
import { MatCardModule } from '@angular/material/card';
import { mainSellReducer } from './redux/main-sell/reducer';
import { MainSellService } from './redux/main-sell/main-sell.service';
import { MainWalletStatusComponent } from './routs/main/main-wallet/main-wallet-status/main-wallet-status.component';
import { ClipboardModule } from 'ngx-clipboard';
import { MainWalletProtectComponent } from './routs/main/main-wallet/main-wallet-protect/main-wallet-protect.component';
import { MainWalletProtectService } from './redux/main-wallet-protect/main-wallet-protect.service';
import { mainWalletProtectReducer } from './redux/main-wallet-protect/reducer';
import { MainWalletProtectBuyComponent } from './routs/main/main-wallet/main-wallet-protect/main-wallet-protect-buy/main-wallet-protect-buy.component';
import { MainWalletProtectBurnComponent } from './routs/main/main-wallet/main-wallet-protect/main-wallet-protect-burn/main-wallet-protect-burn.component';
import { MainWalletProtectBurnService } from './redux/main-wallet-protect-burn/main-wallet-protect-burn.service';
import { mainWalletProtectBurnReducer } from './redux/main-wallet-protect-burn/reducer';
import { unitReducer } from './redux/unit/reducer';
import { IschinComponent } from './routs/main/main-sell/ischin/ischin.component';
import { mainSellIschinReducer } from './redux/main-sell-ischin/reducer';
import { MainSellIschinService } from './redux/main-sell-ischin/main-sell-ischin.service';
import { MainWalletPrevTransactionComponent } from './routs/main/main-wallet/main-wallet-prev-transaction/main-wallet-prev-transaction.component';
import { MainWalletPrevTransactionService } from './redux/main-wallet-prev-transaction/main-wallet-prev-transaction.service';
import { mainWalletPrevTransactionReducer } from './redux/main-wallet-prev-transaction/reducer';
import { MainSellForComponent } from './routs/main/main-sell/main-sell-for/main-sell-for.component';
import { mainSellForReducer } from './redux/main-sell-for/reducer';
import { MainSellForService } from './redux/main-sell-for/main-sell-for.service';
import { MainBuyComponent } from './routs/main/main-buy/main-buy.component';
import { MainBuyService } from './redux/main-buy/main-buy.service';
import { mainBuyReducer } from './redux/main-buy/reducer';
import { MainBuyButtonComponent } from './routs/main/main-buy/main-buy-button/main-buy-button.component';
import { MainBuyDefencesComponent } from './routs/main/main-buy/main-buy-defences/main-buy-defences.component';
import { MainBuyDefencesService } from './redux/main-buy-defences/main-buy-defences.service';
import { mainBuyDefencesReducer } from  './redux/main-buy-defences/reducer';
import { PaymentSuccessComponent } from './routs/payment-success/payment-success.component';
import { PaymentSuccessService } from './redux/payment-success/payment-success.service';
import { paymentSuccessReducer } from './redux/payment-success/reducer';
import { MainPayoutComponent } from './routs/main/main-payout/main-payout.component';
import { mainPayoutReducer } from './redux/main-payout/reducer';
import { MainPayoutService } from './redux/main-payout/main-payout.service';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BuyComponent,
    SellComponent,
    ConfirmComponent,
    LoginComponent,
    MainComponent,
    OnboardedComponent,
    MainSellComponent,
    MainWalletComponent,
    ConfirmBuyComponent,
    MainWalletSendComponent,
    OnboardFailComponent,
    MainWalletStatusComponent,
    MainWalletProtectComponent,
    MainWalletProtectBuyComponent,
    MainWalletProtectBurnComponent,
    IschinComponent,
    MainWalletPrevTransactionComponent,
    MainSellForComponent,
    MainBuyComponent,
    MainBuyButtonComponent,
    MainBuyDefencesComponent,
    PaymentSuccessComponent,
    MainPayoutComponent,
  ],
  imports: [
    ClipboardModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatSelectModule,
    BrowserModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      sellReducer: sellReducer,
      confirmReducer: confirmReducer,
      loginReducer: loginReducer,
      buyReducer: buyReducer,
      onboardReducer: onboardReducer,
      mainReducer: mainReducer,
      confirmBuyReducer: confirmBuyReducer,
      tokenReducer: tokenReducer,
      mainWalletReducer: mainWalletReducer,
      transferReducer: transferReducer,
      onboardFailReducer: onboardFailReducer,
      mainSellReducer: mainSellReducer,
      mainWalletProtectReducer: mainWalletProtectReducer,
      mainWalletProtectBurnReducer: mainWalletProtectBurnReducer,
      unitReducer: unitReducer,
      mainSellIschinReducer: mainSellIschinReducer,
      mainWalletPrevTransactionReducer: mainWalletPrevTransactionReducer,
      mainSellForReducer: mainSellForReducer,
      mainBuyReducer: mainBuyReducer,
      mainBuyDefencesReducer: mainBuyDefencesReducer,
      paymentSuccessReducer: paymentSuccessReducer,
      mainPayoutReducer: mainPayoutReducer,
    }, {}),
    EffectsModule.forRoot([
      SellEffectsService,
      ConfirmEffectsService,
      LoginEffectsService,
      OnboardService,
      MainEffectsService,
      BuyService,
      ConfirmBuyService,
      MainWalletService,
      TransferService,
      OnboardFailService,
      MainSellService,
      MainWalletProtectService,
      MainWalletProtectBurnService,
      MainSellIschinService,
      MainWalletPrevTransactionService,
      MainSellForService,
      MainBuyService,
      PaymentSuccessService,
      MainBuyDefencesService,
      MainPayoutService
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
