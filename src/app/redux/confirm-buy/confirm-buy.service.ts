import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { switchMap } from 'rxjs/operators';
import { aschax } from 'src/app/aschax';
import { rdxConfirmBuyFetch, RDX_CONFIRM_BUY_FETCH_ERROR, RDX_CONFIRM_BUY_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class ConfirmBuyService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxConfirmBuyFetch),
      switchMap(ac => aschax.post('/api/create/confirm-buy/' + ac.payload).then(res => {
        return {
          type: RDX_CONFIRM_BUY_FETCH_SUCCESS,
          component: ac.component
        };
      }).catch((err: AxiosError) => {
        return {
          type: RDX_CONFIRM_BUY_FETCH_ERROR,
          payload: err.response?.data,
          component: ac.component
        }
      }))
    );
  })
}
