import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { IAction } from 'src/app/redux/combiner';
import { RDX_PAYMENT_SUCCESS_LOGIN } from 'src/app/redux/payment-success/actions';
import { IPaymentSuccessLogin } from 'src/app/redux/payment-success/interfaces';
import { getPaymentSuccessFetchErrorMessage, getPaymentSuccessIsLoginFetch, getPaymentSuccessIsLoginFetchError, getPaymentSuccessIsLoginFetchSuccess, getPaymentSuccessIsTransferFetch, getPaymentSuccessIsTransferFetchError, getPaymentSuccessIsTransferFetchSuccess } from 'src/app/redux/payment-success/selectors';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit, OnDestroy {
  email: string;
  emailFormControl: FormControl;
  password: string;
  passwordFormControl: FormControl;
  activatedRouteSub: SubscriptionLike;
  recognition: string;
  sell: string;
  errorStateMatcher: MyErrorStateMatcher;

  isLoginFetch: Observable<boolean>;
  isLoginFetchError: SubscriptionLike;
  isTransferFetch: Observable<boolean>;
  isTransferFetchSuccesss: SubscriptionLike;
  isTransferFetchError: SubscriptionLike;
  fetchErrorMessage: Observable<string>;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.email = '';
    this.emailFormControl = new FormControl('', [
      Validators.required
    ]);
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ])
    this.password = '';
    this.recognition = '';
    this.sell = '';
    this.activatedRouteSub = this.activatedRoute.paramMap.subscribe(res => {
      this.recognition = res.get('recognition')!;
      this.sell = res.get('sell')!
    });
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.isLoginFetch = this.store.select(getPaymentSuccessIsLoginFetch);
    this.isLoginFetchError = this.store.select(getPaymentSuccessIsLoginFetchError).subscribe(res => {
      if (res) {
        this.passwordFormControl.setErrors({ backend: true });
      }
    });
    this.isTransferFetch = this.store.select(getPaymentSuccessIsTransferFetch);
    this.isTransferFetchSuccesss = this.store.select(getPaymentSuccessIsTransferFetchSuccess).subscribe(res => {
      if (res) {
        this.router.navigate(['/main'])
      }
    })
    this.isTransferFetchError = this.store.select(getPaymentSuccessIsTransferFetchError).subscribe(res => {
      if (res) {
        this.passwordFormControl.setErrors({ backend: true });
      }
    });
    this.fetchErrorMessage = this.store.select(getPaymentSuccessFetchErrorMessage);
  }

  ngOnInit(): void {
  }
  cashOut() {
    this.store.dispatch<IAction<IPaymentSuccessLogin>>({
      type: RDX_PAYMENT_SUCCESS_LOGIN,
      payload: {
        email: this.email,
        password: this.password,
        recognition: this.recognition,
        sell: this.sell
      },
      component: 'payment-success;'
    })
  }
  ngOnDestroy(): void {
    this.activatedRouteSub.unsubscribe()
  }
}
