import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { RDX_BUY_FETCH_SUCCESS } from '../buy/actions';
import { IError } from '../combiner';
import { getTokenToken } from '../token/selector';
import { rdxTransferFixumFetch, rdxTransferLiberFetch, RDX_TRANSFER_FIXUM_FETCH_ERROR, RDX_TRANSFER_FIXUM_FETCH_SUCCESS, RDX_TRANSFER_LIBER_FETCH_ERROR, RDX_TRANSFER_LIBER_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetchLiber = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxTransferLiberFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/api/transfer/liber-tx', ac[0].payload, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_TRANSFER_LIBER_FETCH_SUCCESS,
          payload: res.data,
          component: ac[0].component
        };
      }).catch((err: AxiosError<IError>) => {
        return {
          type: RDX_TRANSFER_LIBER_FETCH_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      })))
  })
  fetchFixum = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxTransferFixumFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/api/transfer/fixum-tx', ac[0].payload, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_TRANSFER_FIXUM_FETCH_SUCCESS,
          payload: res.data,
          component: ac[0].component
        }
      }).catch((err: AxiosError<IError>) => {
        return {
          type: RDX_TRANSFER_FIXUM_FETCH_ERROR,
          payload: err.response?.data,
          comonent: ac[0].component
        }
      }))
    );
  });
}

