import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import axios, { AxiosError } from 'axios';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { getTokenToken } from '../token/selector';
import { rdxMainBuyDefencesFetch, rdxMainBuyDefencesFetchSuccess, RDX_MAIN_BUY_DEFENCES_DEFENCE_SUCCESS, RDX_MAIN_BUY_DEFENCES_FETCH_ERROR, RDX_MAIN_BUY_DEFENCES_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MainBuyDefencesService {

  constructor(
    private store: Store,
    private actions: Actions
  ) { }
  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainBuyDefencesFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/api/sell/rationem/' + ac[0].payload, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_BUY_DEFENCES_FETCH_SUCCESS,
          payload: res.data,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_BUY_DEFENCES_FETCH_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    )
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainBuyDefencesFetchSuccess),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => axios.all([
        aschax.get(`/api/wallet/defensiones/true/${ac[0].payload!.rationemIndex}/${ac[0].payload!.gladiator}`, {
          headers: {
            'x-auth-token': ac[1]
          }
        }), 
        aschax.get(`/api/wallet/defensiones/false/${ac[0].payload!.rationemIndex}/${ac[0].payload!.gladiator}`, {
          headers: {
            'x-auth-token': ac[1]
          }
        })
      ]).then(res => {
        return {
          type: RDX_MAIN_BUY_DEFENCES_DEFENCE_SUCCESS,
          payload: {
            liber: res[0].data,
            fixum: res[1].data
          },
          component: ac[0].component
        }
      }))
    )
  })
}

