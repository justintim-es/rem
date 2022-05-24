import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createEffects } from '@ngrx/effects/src/effects_module';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { getTokenToken } from '../token/selector';
import { rdxMainPayoutFetch, RDX_MAIN_PAYOUT_FETCH_ERROR, RDX_MAIN_PAYOUT_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MainPayoutService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainPayoutFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/api/payout/balance', {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_PAYOUT_FETCH_SUCCESS,
          payload: res.data.balance,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_PAYOUT_FETCH_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    )
  })
}
