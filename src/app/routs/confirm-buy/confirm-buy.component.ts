import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAction } from 'src/app/redux/combiner';
import { RDX_CONFIRM_BUY_FETCH } from 'src/app/redux/confirm-buy/actions';
import { getConfirmBuyFetchErrorMessage, getConfirmBuyIsFetch, getConfirmBuyIsFetchError, getConfirmBuyIsFetchSuccess } from 'src/app/redux/confirm-buy/selectors';

@Component({
  selector: 'app-confirm-buy',
  templateUrl: './confirm-buy.component.html',
  styleUrls: ['./confirm-buy.component.css']
})
export class ConfirmBuyComponent implements OnInit, OnDestroy {
  activatedRouteSub: SubscriptionLike;
  isFetch: Observable<boolean>;
  isFetchSuccessSub: SubscriptionLike;
  isFetchError: Observable<boolean>;
  fetchErrorMessage: Observable<string>;
  constructor(
    private router: Router,
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRouteSub = this.activatedRoute.paramMap.subscribe(res => {
      this.store.dispatch<IAction<any>>({
        type: RDX_CONFIRM_BUY_FETCH,
        payload: res.get('token')!,
        component: 'confirm-buy'
      })
    });
    this.isFetch = this.store.select(getConfirmBuyIsFetch);
    this.isFetchSuccessSub = this.store.select(getConfirmBuyIsFetchSuccess).subscribe(res => {
      if (res) {
        this.router.navigate(['/login']);
      }
    });
    this.isFetchError = this.store.select(getConfirmBuyIsFetchError);
    this.fetchErrorMessage = this.store.select(getConfirmBuyFetchErrorMessage);
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.activatedRouteSub.unsubscribe();
  }

}
