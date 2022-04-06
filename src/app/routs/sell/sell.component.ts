import { Component, OnInit } from '@angular/core';
import { IAction } from '../../redux/combiner';
import { RDX_SELL_ACCOUNT_FETCH, RDX_SELL_ACCOUNT_SEND_EMAIL } from '../../redux/sell/actions';
import { getSellIsAccountId, getSellIsOnboard, getSellAccountId, getSellIsOnboardSuccess, getSellIsEmail } from '../../redux/sell/selectors';
import { ISellFetch } from '../../redux/combiner';
import { Store } from '@ngrx/store';
import { Observable,  SubscriptionLike } from 'rxjs';
import { Validators, FormControl } from '@angular/forms';
import { MyErrorStateMatcher } from '../../error-state-matcher';
import { transformFormAbove } from 'src/app/animations/animator';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
  animations: [
    transformFormAbove
  ]
})
export class SellComponent implements OnInit {
  isOnboard: Observable<boolean>;
  isAccountId: Observable<boolean>;
  isOnboardSuccess: Observable<boolean>;
  isEmail: Observable<boolean>;

  // isOnboardUrlSub: SubscriptionLike;
  email: string
  emailFormControl: FormControl;
  password: string;
  passwordFormControl: FormControl;
  country: string;
  countryFormControl: FormControl;
  errorStateMatcher: MyErrorStateMatcher;
  constructor(
    private store: Store
  ) {
    this.isOnboard = this.store.select(getSellIsOnboard);
    this.isAccountId = this.store.select(getSellIsAccountId);
    this.isOnboard = this.store.select(getSellIsOnboard);
    this.isOnboardSuccess = this.store.select(getSellIsOnboardSuccess);
    this.isEmail = this.store.select(getSellIsEmail);
    // this.isOnboardUrlSub = this.store.select(getSellIsOnboardUrl).subscribe(res => {
    //   if(res) {
    //     this.store.select(getSellAccountUrl).subscribe(res => {
    //       window.location.href = res;
    //     });
    //   }
    // });
    this.email = '';
    this.emailFormControl = new FormControl('', [
      Validators.required
    ]);
    this.password = '';
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.country = '';
    this.countryFormControl = new FormControl('', [
      Validators.required
    ])
  }
  ngOnInit() {

  }
  createAccount() {
    console.log(this.country);
    this.store.dispatch<IAction<any>>({
      type: RDX_SELL_ACCOUNT_FETCH,
      payload: this.country,
      component: 'sell'
    });
  }
  register() {
    this.store.dispatch<IAction<ISellFetch>>({
      type: RDX_SELL_ACCOUNT_SEND_EMAIL,
      payload: {
        email: this.email,
        password: this.password
      },
      component: 'sell'
    });
  }
  // fetch() {
  //   if(!this.emailFormControl.hasError('required') && !this.passwordFormControl.hasError('required')) {
  //     this.store.dispatch<IAction<any>>({
  //       type: RDX_SELL_AC,
  //       component: 'sell'
  //     })
  //   }
  // }


}
