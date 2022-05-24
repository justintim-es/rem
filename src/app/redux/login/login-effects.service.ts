import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { delay, map, mergeMap, switchMap } from 'rxjs/operators';
import { aschax } from 'src/app/aschax';
import { RDX_TOKEN_SET } from '../token/action';
import { rdxLoginFetch, rdxLoginFetchSuccess, RDX_LOGIN_FETCH_ERROR, RDX_LOGIN_FETCH_SUCCESS, RDX_LOGIN_IS_ROUTE_THROUGH_TRUE } from './actions';

@Injectable({
  providedIn: 'root'
})
export class LoginEffectsService {

  constructor(
    private actions: Actions,
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLoginFetch),
      switchMap(ac => aschax.post('/api/login', ac.payload).then(res => {
        return {
          type: RDX_LOGIN_FETCH_SUCCESS,
          payload: res.data,
          component: ac.component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_LOGIN_FETCH_ERROR,
          payload: err.response?.data,
          component: ac.component
        }
      }))
    )
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLoginFetchSuccess),
      delay(500),
      mergeMap(ac => {
        return [
          {
            type: RDX_LOGIN_IS_ROUTE_THROUGH_TRUE,
            component: ac.component
          },
          {
            type: RDX_TOKEN_SET,
            payload: ac.payload,
            component: ac.component
          }
        ];
      })
    )
  })
}
