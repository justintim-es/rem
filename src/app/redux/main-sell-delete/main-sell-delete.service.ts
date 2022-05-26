import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAction } from '../combiner';
import { getTokenToken } from '../token/selector';
import { rdxMainSellDeleteFetch, RDX_MAIN_SELL_DELETE_FETCH_ERROR, RDX_MAIN_SELL_DELETE_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MainSellDeleteService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellDeleteFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.delete('/api/sell/cancel/' + ac[0].payload!.sell, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        let reschet: IAction<any> = {
          type: RDX_MAIN_SELL_DELETE_FETCH_SUCCESS,
          component: ac[0].component
        };
        return reschet;
      }).catch((err: AxiosError) => {
        let reschet: IAction<any> = {
          type: RDX_MAIN_SELL_DELETE_FETCH_ERROR,
          component: ac[0].component
        };
        return reschet;
      }))
    )
  })

}
