import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { IAction, ISellFetch } from 'src/app/redux/combiner';
import { RDX_LOGIN_FETCH } from 'src/app/redux/login/actions';
import { getLoginFetchErrorMessage, getLoginIsFetch, getLoginIsFetchError, getLoginIsFetchSuccess } from 'src/app/redux/login/selectors';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  emailFormControl: FormControl;
  email: string;
  passwordFormControl: FormControl;
  password: string;
  errorStateMatcher: MyErrorStateMatcher;

  isFetch: Observable<boolean>;
  isFetchSuccessSub: SubscriptionLike;
  isFetchError: Observable<boolean>;
  fetchErrorMessage: Observable<string>; 
  constructor(
    private router: Router,
    private store: Store
  ) { 
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.email = '';
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.password = '';
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.isFetch = this.store.select(getLoginIsFetch);
    this.isFetchSuccessSub = this.store.select(getLoginIsFetchSuccess).subscribe(res => {
      if(res) {
        this.router.navigate(['/main'])
      }
    });
    this.isFetchError = this.store.select(getLoginIsFetchError);
    this.fetchErrorMessage = this.store.select(getLoginFetchErrorMessage);
  }

  ngOnInit(): void {

  }

  login() {
    this.store.dispatch<IAction<ISellFetch>>({
      type: RDX_LOGIN_FETCH,
      payload: {
        email: this.email,
        password: this.password
      },
      component: 'login'
    });
  }
  ngOnDestroy(): void {
    this.isFetchSuccessSub.unsubscribe();
  }

}
