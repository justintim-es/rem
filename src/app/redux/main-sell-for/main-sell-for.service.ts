import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { RDX_MAIN_SELL_SELLS } from '../main-sell/actions';
import { getMainSellSellsId } from '../main-sell/selectors';
import { getTokenToken } from '../token/selector';
import { rdxMainSellForFetch, rdxMainSellForFetchSuccess, RDX_MAIN_SELL_FOR_FETCH_ERROR, RDX_MAIN_SELL_FOR_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MainSellForService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellForFetch),
      mergeMap((ischin) => of(ischin).pipe(
        withLatestFrom(this.store.select(getTokenToken), this.store.select(getMainSellSellsId(ischin.payload!.index))),
      )),
      switchMap(ac => aschax.post('/api/sell/activate/' + ac[2], {
        price: ac[0].payload!.price
      }, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_SELL_FOR_FETCH_SUCCESS,
          payload: ac[0].payload,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_SELL_FOR_FETCH_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    )
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellForFetchSuccess),
      map(ac => {
        return {
          type: RDX_MAIN_SELL_SELLS,
          component: ac.component
        }
      })
    )
  })
}
