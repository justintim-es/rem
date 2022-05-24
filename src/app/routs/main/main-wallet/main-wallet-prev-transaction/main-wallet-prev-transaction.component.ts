import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { List } from 'immutable';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAction, IMainWalletTransaction, IWalletTransaction } from 'src/app/redux/combiner';
import { RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH } from 'src/app/redux/main-wallet-prev-transaction/actions';
import { getMainWalletPrevTransactionIsTransactions, getMainWalletPrevTransactionTransactions } from 'src/app/redux/main-wallet-prev-transaction/selectors';

@Component({
  selector: 'app-main-wallet-prev-transaction',
  templateUrl: './main-wallet-prev-transaction.component.html',
  styleUrls: ['./main-wallet-prev-transaction.component.css']
})
export class MainWalletPrevTransactionComponent implements OnInit, OnDestroy {
  index: number;
  activatedRouteSub: SubscriptionLike;
  isTransactions: Observable<boolean>;
  transactions: Observable<List<IMainWalletTransaction>>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.index = 0;
    this.activatedRouteSub = this.activatedRoute.paramMap.subscribe(res => {
      this.index = parseInt(res.get('index')!);
    });
    this.isTransactions = this.store.select(getMainWalletPrevTransactionIsTransactions);
    this.transactions = this.store.select(getMainWalletPrevTransactionTransactions);
  }

  ngOnInit(): void {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH,
      payload: this.index,
      component: 'main-wallet-prev-transaction'
    });
  }
  ngOnDestroy(): void {
    this.activatedRouteSub.unsubscribe();
  }

}
