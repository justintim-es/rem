import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { IAction, IError, ITransferFetch } from 'src/app/redux/combiner';
import { RDX_MAIN_WALLET_BALANCE } from 'src/app/redux/main-wallet/actions';
import { getMainWalletFixum, getMainWalletIsFetch, getMainWalletLiber } from 'src/app/redux/main-wallet/selectors';
import { RDX_TRANSFER_LIBER_FETCH } from 'src/app/redux/transfer/actions';
import { getTransferFetchError, getTransferIsFetch, getTransferIsFetchError, getTransferIsFetchSuccess } from 'src/app/redux/transfer/selectors';

@Component({
  selector: 'app-main-wallet-send',
  templateUrl: './main-wallet-send.component.html',
  styleUrls: ['./main-wallet-send.component.css']
})
export class MainWalletSendComponent implements OnInit, OnDestroy {
  activatedRouteSub: SubscriptionLike;
  addressPublicKey: string;
  addressFormControl: FormControl;
  amount: number;
  amountFormControl: FormControl;
  errorStateMatcher: MyErrorStateMatcher;
  fixum: Observable<number>;
  liber: Observable<number>;
  isLiber: boolean;
  isFetch: Observable<boolean>;
  isFetchSuccessSub: SubscriptionLike;
  isFetchErrorSub: SubscriptionLike;
  isError: Observable<IError>

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {
    this.addressPublicKey = '';
    this.addressFormControl = new FormControl('', [
      Validators.required
    ])
    this.amount = 0;
    this.amountFormControl = new FormControl('', [
      Validators.required
    ]);
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.isLiber = false;
    this.liber = this.store.select(getMainWalletLiber);
    this.fixum = this.store.select(getMainWalletFixum);
    this.activatedRouteSub = this.activatedRoute.paramMap.subscribe(res => {
      this.isLiber = Boolean(JSON.parse(res.get('liber')!));
    });
    this.isFetch = this.store.select(getTransferIsFetch);
    this.isFetchSuccessSub = this.store.select(getTransferIsFetchSuccess).subscribe(res => {
      if (res) {
        this.addressFormControl = new FormControl('', [
          Validators.required
        ]);
        this.amountFormControl = new FormControl('', [
          Validators.required
        ]);
      }
    })
    this.isFetchErrorSub = this.store.select(getTransferIsFetchError).subscribe(res => {
      if (res) {
        this.store.select(getTransferFetchError).subscribe((res: IError) => {
          switch (res.code) {
            case 0: {
              this.addressFormControl.setErrors({ backend: true });
              break;
            }
            case 1: {
              this.amountFormControl.setErrors({ backend: true });
              break;
            }
            case 2: {
              this.addressFormControl.setErrors({ backend: true });
            }
          }
        })
      }
    });
    this.isError = this.store.select(getTransferFetchError);
  }

  ngOnInit(): void {
  }
  transferLiber() {
    this.addressFormControl.setErrors({ backend: null });
    this.amountFormControl.setErrors({ backend: null });
    this.store.dispatch<IAction<ITransferFetch>>({
      type: RDX_TRANSFER_LIBER_FETCH,
      payload: {
        publicKey: this.addressPublicKey,
        amount: this.amount
      },
      component: 'main-wallet-send'
    })
  }
  transferFixum() {
    this.store.dispatch<IAction<ITransferFetch>>({
      type: RDX_TRANSFER_LIBER_FETCH,
      payload: {
        publicKey: this.addressPublicKey,
        amount: this.amount
      },
      component: 'main-wallet-send'
    })
  }
  refresh() {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_WALLET_BALANCE,
      component: 'main-wallet-send'
    });
  }
  ngOnDestroy() {
    this.activatedRouteSub.unsubscribe();
  }
}
