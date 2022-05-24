import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAction, IMainWalletTransaction } from '../combiner';
import { getMainWalletTransferPrevTxIds } from '../main-wallet/selectors';
import { getTokenToken } from '../token/selector';
import { rdxMainWalletPrevTransactionFetch, rdxMainWalletPrevTransactionFetchOne, RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_ERROR, RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_ONE, RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MainWalletPrevTransactionService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletPrevTransactionFetch),
      mergeMap((ischin) => of(ischin).pipe(
        withLatestFrom(this.store.select(getMainWalletTransferPrevTxIds(ischin.payload!)))
      )),
      mergeMap(ac => {
        console.log('ala', ac[1]);
        let aschacs: IAction<string>[] = [];
        for (let i = 0; i < ac[1].length; i++) {
          aschacs.push({
            type: RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_ONE,
            payload: ac[1][i],
            component: ac[0].component
          })
        };
        return aschacs;
      })
    )
  })
  fetchOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletPrevTransactionFetchOne),
      withLatestFrom(this.store.select(getTokenToken)),
      mergeMap(ac => aschax.get('/api/transfer/transaction/' + ac[0].payload!, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        let reschet: IAction<IMainWalletTransaction> = {
          type: RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_SUCCESS,
          payload: res.data,
          component: ac[0].component
        };
        return reschet;
      }).catch((err: AxiosError) => {
        let reschet: IAction<any> = {
          type: RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        };
        return reschet;
      }))
    )
  })
}
