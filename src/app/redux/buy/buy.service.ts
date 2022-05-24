import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { delay, map, switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { rdxBuyFetch, rdxBuyFetchSuccess, RDX_BUY_FETCH_ERROR, RDX_BUY_FETCH_SUCCESS, RDX_BUY_IS_PLEASE_TRUE } from './actions';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyFetch),
      switchMap(ac => aschax.post('/api/create/send-email-buy', ac.payload).then(res => {
        return {
          type: RDX_BUY_FETCH_SUCCESS,
          component: ac.component
        };
      }).catch((err: AxiosError) => {
        return {
          type: RDX_BUY_FETCH_ERROR,
          component: ac.component
        }
      }))
    )
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyFetchSuccess),
      delay(750),
      map(ac => {
        return {
          type: RDX_BUY_IS_PLEASE_TRUE,
          component: ac.component
        }
      })
    )
  })
}
