import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { enterUp, leaveLeft, leaveRight, leaveUp } from 'src/app/animations/animator';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { RDX_BUY_FETCH } from 'src/app/redux/buy/actions';
import { getBuyFetchErrorMessage, getBuyIsFetch, getBuyIsFetchError, getBuyIsFetchSuccess, getBuyIsPlease } from 'src/app/redux/buy/selectors';
import { IAction, IBuyFetch } from 'src/app/redux/combiner';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
  animations: [
    leaveLeft,
    leaveRight,
    leaveUp,
    enterUp
  ]
})
export class BuyComponent implements OnInit {
  email: string;
  emailFormControl: FormControl;
  password: string;
  passwordFormControl: FormControl;
  errorStateMatcher: MyErrorStateMatcher;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: SubscriptionLike;
  fetchErrorMessage: Observable<string>;
  isPlease: Observable<boolean>;
  constructor(
    private router: Router,
    private store: Store
  ) {
    this.email = '';
    this.emailFormControl = new FormControl('', [
      Validators.required
    ]);
    this.password = '';
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.isFetch = this.store.select(getBuyIsFetch);
    this.isFetchSuccess = this.store.select(getBuyIsFetchSuccess);
    this.fetchErrorMessage = this.store.select(getBuyFetchErrorMessage);
    this.isFetchError = this.store.select(getBuyIsFetchError).subscribe(res => {
        if (res) {
          this.passwordFormControl.setErrors({ backend: true });
        }
    });
    this.isPlease = this.store.select(getBuyIsPlease);
   }

  ngOnInit(): void {
  }
  register() {
    this.store.dispatch<IAction<IBuyFetch>>({
      type: RDX_BUY_FETCH,
      payload: {
        email: this.email,
        password: this.password
      },
      component: 'buy'
    })  
  }

}
