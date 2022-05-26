import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAction } from 'src/app/redux/combiner';
import { RDX_MAIN_PAYOUT_FETCH } from 'src/app/redux/main-payout/actions';
import { getMainPayoutBalanceAvailable, getMainPayoutBalancePending, getMainPayoutIsFetch } from 'src/app/redux/main-payout/selectors';

@Component({
  selector: 'app-main-payout',
  templateUrl: './main-payout.component.html',
  styleUrls: ['./main-payout.component.css']
})
export class MainPayoutComponent implements OnInit {
  isFetch: Observable<boolean>;
  balanceAvailable: Observable<number>;
  balancePending: Observable<number>;

  constructor(
    private store: Store
  ) {
    this.isFetch = this.store.select(getMainPayoutIsFetch);
    this.balanceAvailable = this.store.select(getMainPayoutBalanceAvailable);
    this.balancePending = this.store.select(getMainPayoutBalancePending);
  }

  ngOnInit(): void {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_PAYOUT_FETCH,
      component: 'main-payout'
    });
  }

}
