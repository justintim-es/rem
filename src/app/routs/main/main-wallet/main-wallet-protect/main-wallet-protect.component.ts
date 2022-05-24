import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { List } from 'immutable';
import { Observable, SubscriptionLike } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { IAction, IDefence, IGrab, IMainWalletProtectAccount, IMainWalletProtectFetch, IOtherBid, IYourBid } from 'src/app/redux/combiner';
import { RDX_MAIN_WALLET_PROTECT_FETCH, RDX_MAIN_WALLET_PROTECT_GRAB, RDX_MAIN_WALLET_PROTECT_IS_OTHER_BID, RDX_MAIN_WALLET_PROTECT_IS_TOOLBAR_FALSE, RDX_MAIN_WALLET_PROTECT_IS_TOOLBAR_TRUE, RDX_MAIN_WALLET_PROTECT_IS_YOUR_BID } from 'src/app/redux/main-wallet-protect/actions';
import {
  getMainWalletProtectAccounts,
  getMainWalletProtectBaseDefence,
  getMainWalletProtectBlocknumber,
  getMainWalletProtectFetchErrorMessage,
  getMainWalletProtectFixumDefences,
  getMainWalletProtectIsFetchError,
  getMainWalletProtectIsLoading,
  getMainWalletProtectIsOtherBid,
  getMainWalletProtectIsOtherBidFetch,
  getMainWalletProtectIsOtherBidFetchSuccess,
  getMainWalletProtectIsToolbar,
  getMainWalletProtectIsYourBid,
  getMainWalletProtectIsYourBidFetch,
  getMainWalletProtectIsYourBidFetchSuccess,
  getMainWalletProtectLiberDefences,
  getMainWalletProtectOtherBidsFixum,
  getMainWalletProtectOtherBidsLiber,
  getMainWalletProtectYourBidsFixum,
  getMainWalletProtectYourBidsLiber} from 'src/app/redux/main-wallet-protect/selectors';
@Component({
  selector: 'app-main-wallet-protect',
  templateUrl: './main-wallet-protect.component.html',
  styleUrls: ['./main-wallet-protect.component.css']
})
export class MainWalletProtectComponent implements OnInit, OnDestroy {
  isLoading: Observable<boolean>;
  baseDefence: Observable<string>;
  liberDefences: Observable<IDefence[]>;
  fixumDefences: Observable<IDefence[]>;
  firstIndex: string;
  firstIndexFormControl: FormControl;
  lastIndex: string;
  lastIndexFormControl: FormControl;
  errorStateMatcher: MyErrorStateMatcher;
  isYourBidFetch: Observable<boolean>;
  isOtherBidFetch: Observable<boolean>;
  isYourBidFetchSuccess: Observable<boolean>;
  isOtherBidFetchSuccess: Observable<boolean>;
  isFetchError: Observable<boolean>;
  fetchErrorMessage: Observable<string>;
  otherBidsLiber: Observable<List<IOtherBid>>;
  otherBidsFixum: Observable<List<IOtherBid>>;
  yourBidsFixum: Observable<List<IYourBid>>;
  yourBidsLiber: Observable<List<IYourBid>>;
  isToolbar: Observable<boolean>;
  isYourBid: Observable<boolean>;
  isOtherBid: Observable<boolean>;
  blockNumber: Observable<number[]>;
  routeSub: SubscriptionLike;
  gladiator: string;
  isSell: boolean;
  sellId: string | null;
  gladiatorIndex: number;
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {
    this.gladiator = '';
    this.isSell = false;
    this.sellId = '';
    this.gladiatorIndex = 0;
    this.routeSub = this.activatedRoute.paramMap.subscribe(res => {
      this.gladiator = res.get('gladiator')!;
      this.sellId = res.get('sellId');
      this.gladiatorIndex = parseInt(res.get('index')!)
    })
    this.firstIndex = "[]";
    this.firstIndexFormControl = new FormControl('', [
      Validators.required
    ]);
    this.lastIndex = "[]";
    this.lastIndexFormControl = new FormControl('', [
      Validators.required
    ]);
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.isLoading = this.store.select(getMainWalletProtectIsLoading);
    this.baseDefence = this.store.select(getMainWalletProtectBaseDefence);
    this.fixumDefences = this.store.select(getMainWalletProtectFixumDefences)
    this.liberDefences = this.store.select(getMainWalletProtectLiberDefences);
    this.isYourBidFetch = this.store.select(getMainWalletProtectIsYourBidFetch);
    this.isOtherBidFetch = this.store.select(getMainWalletProtectIsOtherBidFetch);
    this.isYourBidFetchSuccess = this.store.select(getMainWalletProtectIsYourBidFetchSuccess);
    this.isOtherBidFetchSuccess = this.store.select(getMainWalletProtectIsOtherBidFetchSuccess);
    this.isFetchError = this.store.select(getMainWalletProtectIsFetchError);
    this.fetchErrorMessage = this.store.select(getMainWalletProtectFetchErrorMessage);
    this.otherBidsLiber = this.store.select(getMainWalletProtectOtherBidsLiber);
    this.otherBidsFixum = this.store.select(getMainWalletProtectOtherBidsFixum);
    this.yourBidsLiber = this.store.select(getMainWalletProtectYourBidsLiber);
    this.yourBidsFixum = this.store.select(getMainWalletProtectYourBidsFixum);
    this.isToolbar = this.store.select(getMainWalletProtectIsToolbar);
    this.isYourBid = this.store.select(getMainWalletProtectIsYourBid);
    this.isOtherBid = this.store.select(getMainWalletProtectIsOtherBid);
    this.blockNumber = this.store.select(getMainWalletProtectBlocknumber);
  }

  ngOnInit(): void {
    this.refresh();
  }
  your() {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_WALLET_PROTECT_IS_YOUR_BID,
      component: 'main-wallet-protect'
    });
  }
  other() {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_WALLET_PROTECT_IS_OTHER_BID,
      component: 'main-wallet-protect'
    });
  }
  refresh() {
    this.store.dispatch<IAction<IMainWalletProtectFetch>>({
      type: RDX_MAIN_WALLET_PROTECT_FETCH,
      payload: {
        index: this.gladiatorIndex,
        gladiator: this.gladiator
      },
      component: 'main-wallet-protect'
    });
  }
  grab() {
    this.store.dispatch<IAction<IGrab>>({
      type: RDX_MAIN_WALLET_PROTECT_GRAB,
      payload: {
        firstIndex: JSON.parse(this.firstIndex),
        lastIndex: JSON.parse(this.lastIndex),
        rationemIndex: this.gladiatorIndex
      },
      component: 'main-wallet-protect'
    })
  }
  toolbar() {
    this.store.dispatch<IAction<string>>({
      type: RDX_MAIN_WALLET_PROTECT_IS_TOOLBAR_TRUE,
      component: 'main-wallet-protect'
    })
  }
  closeToolbar() {
    this.store.dispatch<IAction<string>>({
      type: RDX_MAIN_WALLET_PROTECT_IS_TOOLBAR_FALSE,
      component: 'main-wallet-protect'
    })
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
