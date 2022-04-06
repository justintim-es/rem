import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { switchMap } from 'rxjs/operators';
import { aschax } from 'src/app/aschax';
import { rdxConfirmFetch, RDX_CONFIRM_FETCH_ERROR, RDX_CONFIRM_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class ConfirmEffectsService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxConfirmFetch),
      switchMap(ac => aschax.get('/api/create/link/' + ac.payload).then(res => {
        return {
          type: RDX_CONFIRM_FETCH_SUCCESS,
          payload: res.data,
          component: ac.component
        };
      }).catch((err: AxiosError) => {
        return {
          type: RDX_CONFIRM_FETCH_ERROR,
          payload: err.response?.data,
          component: ac.component
        };
      }))
    )
  })
}
