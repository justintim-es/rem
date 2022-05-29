import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { getTokenToken } from '../token/selector';
import { rdxMainSellSellActivateFixum, RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM_ERROR, RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MainSellActivateService {

  constructor(
    private store: Store,
    private actions: Actions
  ) { }

  activateFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellSellActivateFixum),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/api/sell/activate/' + ac[0].payload!.sell, null, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM_SUCCESS,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    )
  })
}
