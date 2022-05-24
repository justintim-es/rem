import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, empty, Observable, SubscriptionLike } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { IAction, IMainWalletProtectBurnFetch, IMainWalletProtectBurnSellFetch } from 'src/app/redux/combiner';
import { RDX_MAIN_WALLET_PROTECT_BURN_FETCH_FIXUM, RDX_MAIN_WALLET_PROTECT_BURN_FETCH_LIBER, RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_FIXUM, RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_LIBER } from 'src/app/redux/main-wallet-protect-burn/actions';
import { getMainWalletProtectBurnFetchErrorMessage, getMainWalletProtectBurnIsFetch, getMainWalletProtectBurnIsFetchError, getMainWalletProtectBurnIsFetchSuccess } from 'src/app/redux/main-wallet-protect-burn/selectors';
import { getMainWalletProtectIsFetchError } from 'src/app/redux/main-wallet-protect/selectors';

@Component({
  selector: 'app-main-wallet-protect-burn',
  templateUrl: './main-wallet-protect-burn.component.html',
  styleUrls: ['./main-wallet-protect-burn.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainWalletProtectBurnComponent implements OnInit, AfterViewInit {
  @Input() ischin: number | undefined;
  @Input() liber: boolean | undefined;
  formControl: FormControl;
  gla: number;
  isFetch: Observable<boolean | undefined>;
  isFetchSuccess: SubscriptionLike | undefined;
  isFetchError: SubscriptionLike | undefined;
  fetchErrorMessage: Observable<string>;
  errorStateMatcher: MyErrorStateMatcher;
  routeSub: SubscriptionLike;
  sellId: string | null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.sellId = '';
    this.routeSub = this.activatedRoute.paramMap.subscribe(res => {
      this.sellId = res.get('sell') as string;
    });
    this.gla = 0;
    this.formControl = new FormControl('');
    this.fetchErrorMessage = this.store.select(getMainWalletProtectBurnFetchErrorMessage);
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.isFetch = empty();
  }

  ngOnInit(): void {

  }
  burn() {
    if(this.sellId != 'null') {
      if(this.liber) {
        this.store.dispatch<IAction<IMainWalletProtectBurnSellFetch>>({
          type: RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_LIBER,
          payload: {
            gla: this.gla,
            index: this.ischin!,
            sellId: this.sellId!
          },
          component: 'main-wallet-protect-burn'
        })
      } else {
        this.store.dispatch<IAction<IMainWalletProtectBurnSellFetch>>({
          type: RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_FIXUM,
          payload: {
            gla: this.gla,
            index: this.ischin!,
            sellId: this.sellId!
          },
          component: 'main-wallet-protect-burn'
        })
      }
    } else {
      if(this.liber) {
        this.store.dispatch<IAction<IMainWalletProtectBurnFetch>>({
          type: RDX_MAIN_WALLET_PROTECT_BURN_FETCH_LIBER,
          payload: {
            gla: this.gla,
            index: this.ischin!
          },
          component: 'main-wallet-protect-burn'
        })
      } else {
        this.store.dispatch<IAction<IMainWalletProtectBurnFetch>>({
          type: RDX_MAIN_WALLET_PROTECT_BURN_FETCH_FIXUM,
          payload: {
            gla: this.gla,
            index: this.ischin!
          },
          component: 'main-wallet-protect-burn'
        })
      }
    }
  }
  ngAfterViewInit(): void {
    this.isFetch = this.store.select(getMainWalletProtectBurnIsFetch(this.ischin!));
    this.isFetchSuccess = this.store.select(getMainWalletProtectBurnIsFetchSuccess(this.ischin!)).subscribe(res => {
      if (res) {
        this.gla = 0;
      }
    });
    this.isFetchError = this.store.select(getMainWalletProtectBurnIsFetchError(this.ischin!)).subscribe(res => {
      if (res) {
        this.formControl.setErrors({ backend: true });
      }
    });
  }
}
