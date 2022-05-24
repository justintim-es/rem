import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAction } from 'src/app/redux/combiner';
import { RDX_MAIN_BUY_DEFENCES_FETCH } from 'src/app/redux/main-buy-defences/actions';
import { IMainBuyDefencesDefence } from 'src/app/redux/main-buy-defences/interfaces';
import { getMainBuyDefencesFixum, getMainBuyDefencesIsFetch, getMainBuyDefencesIsFetchError, getMainBuyDefencesIsFetchSuccess, getMainBuyDefencesLiber } from 'src/app/redux/main-buy-defences/selectors';

@Component({
  selector: 'app-main-buy-defences',
  templateUrl: './main-buy-defences.component.html',
  styleUrls: ['./main-buy-defences.component.css']
})
export class MainBuyDefencesComponent implements OnInit {
  routeSub: SubscriptionLike;
  rationem: string;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: Observable<boolean>;
  liber: Observable<IMainBuyDefencesDefence[]>;
  fixum: Observable<IMainBuyDefencesDefence[]>;
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) { 
    this.rationem = '';
    this.routeSub = this.activatedRoute.paramMap.subscribe(res => {
      this.rationem = res.get('rationem')!;
    })
    this.store.dispatch<IAction<string>>({
      type: RDX_MAIN_BUY_DEFENCES_FETCH,
      payload: this.rationem,
      component: 'main-buy-defences'
    })
    this.isFetch = this.store.select(getMainBuyDefencesIsFetch);
    this.isFetchSuccess = this.store.select(getMainBuyDefencesIsFetchSuccess);
    this.isFetchError = this.store.select(getMainBuyDefencesIsFetchError);
    this.liber = this.store.select(getMainBuyDefencesLiber);
    this.fixum = this.store.select(getMainBuyDefencesFixum);
  }

  ngOnInit(): void {
  }

}
