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
  ],
  imports: [
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
      mainReducer: mainReducer
    }, {}),
    EffectsModule.forRoot([
      SellEffectsService,
      ConfirmEffectsService,
      LoginEffectsService,
      OnboardService,
      MainEffectsService,
      BuyService
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
