import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { switchMap } from 'rxjs/operators';
import { aschax } from 'src/app/aschax';
import { rdxOnboardFetch, RDX_ONBOARD_FETCH_ERROR, RDX_ONBOARD_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class OnboardService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOnboardFetch),
      switchMap(ac => aschax.post('/api/create/onboarded/' + ac.payload).then(res => {
        return {
          type: RDX_ONBOARD_FETCH_SUCCESS,
          component: ac.component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_ONBOARD_FETCH_ERROR,
          payload: err.response?.data,
          componennt: ac.component
        }
      }))
    )
  })
}
