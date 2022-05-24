import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { IAction, IMainBuyOffer } from 'src/app/redux/combiner';
import { RDX_MAIN_BUY_FETCH } from 'src/app/redux/main-buy/actions';
import { getMainBuyIsFetch, getMainBuyIsFetchError, getMainBuyIsFetchSuccess, getMainBuyOffersFA, getMainBuyOffersFG, getMainBuyOffersFP, getMainBuyOffersLA, getMainBuyOffersLG, getMainBuyOffersLP } from 'src/app/redux/main-buy/selectors';

@Component({
  selector: 'app-main-buy',
  templateUrl: './main-buy.component.html',
  styleUrls: ['./main-buy.component.css']
})
export class MainBuyComponent implements OnInit {
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: Observable<boolean>;
  offersLP: Observable<List<IMainBuyOffer>>;
  offersLG: Observable<List<IMainBuyOffer>>;
  offersLA: Observable<List<IMainBuyOffer>>;
  offersFP: Observable<List<IMainBuyOffer>>;
  offersFG: Observable<List<IMainBuyOffer>>;
  offersFA: Observable<List<IMainBuyOffer>>;
  constructor(
    private store: Store
  ) {
    this.isFetch = this.store.select(getMainBuyIsFetch);
    this.isFetchSuccess = this.store.select(getMainBuyIsFetchSuccess);
    this.isFetchError = this.store.select(getMainBuyIsFetchError);
    this.offersLP = this.store.select(getMainBuyOffersLP);
    this.offersLG = this.store.select(getMainBuyOffersLG);
    this.offersLA = this.store.select(getMainBuyOffersLA);
    this.offersFP = this.store.select(getMainBuyOffersFP);
    this.offersFG = this.store.select(getMainBuyOffersFG);
    this.offersFA = this.store.select(getMainBuyOffersFA);
   }

  ngOnInit(): void {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_BUY_FETCH,
      component: 'main-buy'
    })
  }

}
