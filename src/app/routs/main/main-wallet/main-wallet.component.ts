import { Component, OnInit } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { IAction, IRationem, IWalletTransactionResponse } from 'src/app/redux/combiner';
import { RDX_MAIN_WALLET_DEFEND, RDX_MAIN_WALLET_FETCH } from 'src/app/redux/main-wallet/actions';
import { getMainWalletButton, getMainWalletFixum, getMainWalletGladiator, getMainWalletIsDefending, getMainWalletIsFetch, getMainWalletLiber, getMainWalletPublic, getMainWalletRationem, getMainWalletTransfers } from 'src/app/redux/main-wallet/selectors';

@Component({
  selector: 'app-main-wallet',
  templateUrl: './main-wallet.component.html',
  styleUrls: ['./main-wallet.component.css']
})
export class MainWalletComponent implements OnInit {
  isFetch: Observable<boolean>;
  public: Observable<string>;
  liber: Observable<number>;
  fixum: Observable<number>;
  transfers: Observable<List<IWalletTransactionResponse>>;
  isDefending: Observable<boolean>;
  button: Observable<string>;
  gladiator: Observable<string>;
  rationem: Observable<IRationem>;
  constructor(
    private store: Store
  ) {
    this.isFetch = this.store.select(getMainWalletIsFetch);
    this.public = this.store.select(getMainWalletPublic);
    this.liber = this.store.select(getMainWalletLiber);
    this.fixum = this.store.select(getMainWalletFixum);
    this.transfers = this.store.select(getMainWalletTransfers);
    this.isDefending = this.store.select(getMainWalletIsDefending);
    this.button = this.store.select(getMainWalletButton);
    this.gladiator = this.store.select(getMainWalletGladiator);
    this.rationem = this.store.select(getMainWalletRationem);
  }

  ngOnInit(): void {
    this.fetch();
  }
  fetch() {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_WALLET_FETCH,
      component: 'main-wallet'
    });
  }
  defend() {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_WALLET_DEFEND,
      component: 'main-wallet'
    });
  }

}
