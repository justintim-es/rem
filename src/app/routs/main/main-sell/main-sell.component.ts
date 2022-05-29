import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { List } from 'immutable';
import { Observable, SubscriptionLike } from 'rxjs';
import { transformFormAbove, transformFromBelow } from 'src/app/animations/animator';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { IAction, IMainSellSellRationemSuccess, IMainSellSellSuccess, ISellSubmit } from 'src/app/redux/combiner';
import { RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM } from 'src/app/redux/main-sell-activate/actions';
import { getMainSellActivateIsActivateFixum, getMainSellActivateIsActivateFixumError, getMainSellActivateIsActivateFixumErrorMessage, getMainSellActivateIsActivateFixumSuccess } from 'src/app/redux/main-sell-activate/selectors';
import { RDX_MAIN_SELL_BALANCE, RDX_MAIN_SELL_CHOOSE_FIXUM, RDX_MAIN_SELL_CHOOSE_LIBER, RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH, RDX_MAIN_SELL_FIXUM_SUBMIT, RDX_MAIN_SELL_IS_ONBOARD_COMPLETE, RDX_MAIN_SELL_LIBER_SUBMIT, RDX_MAIN_SELL_SELLS, RDX_MAIN_SELL_SELL_REUSE_FETCH, RDX_MAIN_SELL_SUBMIT } from 'src/app/redux/main-sell/actions';
import { IMainSellSellActivateFixum, IMainSellSellReuseFetch } from 'src/app/redux/main-sell/interfaces';
import { getMainSellFetchErrorMessage, getMainSellFixumBalance, getMainSellIsAccount, getMainSellIsAccountCreateFetch, getMainSellIsAccountCreateFetchError, getMainSellIsAccountCreateFetchSuccess, getMainSellIsAmount, getMainSellIsFetch, getMainSellIsFetchError, getMainSellIsFetchSuccess, getMainSellIsFixum, getMainSellIsLiber, getMainSellIsOnboardComplete, getMainSellIsOnboardCompleting, getMainSellIsOnboardLinkFetchSuccess, getMainSellIsReuse, getMainSellIsReuseError, getMainSellLiberBalance, getMainSellOnboardLink, getMainSellReuseErrorMessage, getMainSellSellFilterNotLiber, getMainSellSellsFilterFixum, getMainSellSellsFilterLiber } from 'src/app/redux/main-sell/selectors';
import { IUnitGla } from 'src/app/redux/unit/reducer';
import { getUnitGla } from 'src/app/redux/unit/selectors';

@Component({
  selector: 'app-main-sell',
  templateUrl: './main-sell.component.html',
  styleUrls: ['./main-sell.component.css'],
  animations: [
    transformFormAbove,
    transformFromBelow
  ]
})
export class MainSellComponent implements OnInit, OnDestroy {
  isLiber: Observable<boolean>;
  isFixum: Observable<boolean>;
  isAmount: Observable<boolean>;
  fixumBalance: Observable<number>;
  liberBalance: Observable<number>;
  unitFormControl: FormControl;
  unit: number;
  amountFormControl: FormControl;
  amount: string;
  priceFormControl: FormControl;
  price: number;
  errorStateMatcher: MyErrorStateMatcher;
  isFetch: Observable<boolean>;
  isFetchSuccess: SubscriptionLike;
  isFetchError: SubscriptionLike;
  fetchErrorMessage: Observable<string>;
  sells: Observable<List<IMainSellSellSuccess>>;
  selllsFixum: Observable<List<IMainSellSellSuccess>>;
  fixumSells: Observable<List<IMainSellSellSuccess>>;
  units: Observable<IUnitGla[]>;
  isOnboardCompleting: Observable<boolean>;
  isOnboardComplete: Observable<boolean>;
  onboardLinkSub: SubscriptionLike;
  onboardLink: string | null;
  isAccount: Observable<boolean>;

  countryFormControl: FormControl;
  country: string;
  isAccountCreateFetch: Observable<boolean>;
  isAccountCreateFetchSuccess: Observable<boolean>;
  isOnboardLinkFetchSuccessSub: SubscriptionLike;
  isAccountCreateFetchError: Observable<boolean>;

  isReuse: Observable<List<boolean>>;
  isReuseError: Observable<List<boolean>>;
  reuseErrorMessage: Observable<List<string>>;

  isActivateFixum: Observable<List<boolean>>;
  isActivateFixumSuccess: Observable<List<boolean>>;
  isActivateFixumError: Observable<List<boolean>>;
  isActivateFixumErrorMessage: Observable<List<string>>;

  constructor(
    private store: Store
  ) {
    this.isLiber = this.store.select(getMainSellIsLiber);
    this.isFixum = this.store.select(getMainSellIsFixum);
    this.isAmount = this.store.select(getMainSellIsAmount);
    this.fixumBalance = this.store.select(getMainSellFixumBalance);
    this.liberBalance = this.store.select(getMainSellLiberBalance);
    this.unitFormControl = new FormControl('', [
      Validators.required
    ]);
    this.unit = 0;
    this.amountFormControl = new FormControl('', [
      Validators.required,
      Validators.max(1000000000000000000000000000000000000000000)
    ])
    this.amount = '';
    this.priceFormControl = new FormControl('', [
      Validators.required
    ]);
    this.price = 0;
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.isFetch = this.store.select(getMainSellIsFetch);
    this.isFetchSuccess = this.store.select(getMainSellIsFetchSuccess).subscribe(res => {
      if (res) {
        this.amountFormControl = new FormControl('', [
          Validators.required
        ]);
        this.priceFormControl = new FormControl('', [
          Validators.required
        ])
      }
    })
    this.isFetchError = this.store.select(getMainSellIsFetchError).subscribe(res => {
      if (res) {
        this.amountFormControl.setErrors({ backend: true });
      }
    })
    this.fetchErrorMessage = this.store. select(getMainSellFetchErrorMessage);
    this.sells = this.store.select(getMainSellSellsFilterLiber);
    this.selllsFixum = this.store.select(getMainSellSellsFilterFixum);
    this.fixumSells = this.store.select(getMainSellSellFilterNotLiber);
    this.isOnboardCompleting = this.store.select(getMainSellIsOnboardCompleting);
    this.isOnboardComplete = this.store.select(getMainSellIsOnboardComplete);

    this.units = this.store.select(getUnitGla);
    this.onboardLink = '';
    this.onboardLinkSub = this.store.select(getMainSellOnboardLink).subscribe(res => this.onboardLink = res);
    this.isAccount = this.store.select(getMainSellIsAccount);
    this.countryFormControl = new FormControl('', [
      Validators.required
    ]);
    this.country = '';
    this.isAccountCreateFetch = this.store.select(getMainSellIsAccountCreateFetch);
    this.isAccountCreateFetchError = this.store.select(getMainSellIsAccountCreateFetchError);
    this.isAccountCreateFetchSuccess = this.store.select(getMainSellIsAccountCreateFetchSuccess);
    this.isOnboardLinkFetchSuccessSub = this.store.select(getMainSellIsOnboardLinkFetchSuccess).subscribe(res => {
      if (res) {
        window.location.href = this.onboardLink!
      }
    });
    this.isReuse = this.store.select(getMainSellIsReuse);
    this.isReuseError = this.store.select(getMainSellIsReuseError);
    this.reuseErrorMessage = this.store.select(getMainSellReuseErrorMessage);
    this.isActivateFixum = this.store.select(getMainSellActivateIsActivateFixum);
    this.isActivateFixumSuccess = this.store.select(getMainSellActivateIsActivateFixumSuccess);
    this.isActivateFixumError = this.store.select(getMainSellActivateIsActivateFixumError);
    this.isActivateFixumErrorMessage = this.store.select(getMainSellActivateIsActivateFixumErrorMessage);
   }

  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_SELL_BALANCE,
      component: 'main-sell'
    });
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_SELL_SELLS,
      component: 'main-sell'
    });
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_SELL_IS_ONBOARD_COMPLETE,
      component: 'main-sell'
    });
  }
  chooseLiber() {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_SELL_CHOOSE_LIBER,
      component: 'main-sell'
    })
  }
  chooseFixum() {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_SELL_CHOOSE_FIXUM,
      component: 'main-sell'
    })
  }
  submit() {
    this.store.dispatch<IAction<ISellSubmit>>({
      type: RDX_MAIN_SELL_FIXUM_SUBMIT,
      payload: {
        unit: this.unit,
        gla: this.amount.toString(),
        price: this.price
      },
      component: 'main-sell'
    })
  }
  neschew() {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_SELL_LIBER_SUBMIT,
      component: 'main-sell'
    });
  }
  finishOnboard() {
    window.location.href = this.onboardLink!;
  }
  onboard() {
    console.log('onbardrecv');
    this.store.dispatch<IAction<string>>({
      type: RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH,
      payload: this.country,
      component: 'main-sell'
    });
  }
  reuse(index: number, id: string) {
    this.store.dispatch<IAction<IMainSellSellReuseFetch>>({
      type: RDX_MAIN_SELL_SELL_REUSE_FETCH,
      payload: {
        index: index,
        sell: id
      },
      component: 'main-sell'
    });
  }
  activate(index: number, id: string) {
    this.store.dispatch<IAction<IMainSellSellActivateFixum>>({
      type: RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM,
      payload: {
        index: index,
        sell: id
      },
      component: 'main-sell'
    });
  }
  ngOnDestroy() {
    this.isFetchSuccess.unsubscribe();
    this.isFetchError.unsubscribe();
  }
}
