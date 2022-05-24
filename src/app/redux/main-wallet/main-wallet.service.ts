import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import axios from 'axios';
import { getTokenToken } from '../token/selector';
import { rdxMainWalletBalance, rdxMainWalletDefend, rdxMainWalletDefendSuccess, rdxMainWalletFetch, rdxMainWalletFetchSuccess, rdxMainWalletIsDefended, rdxMainWalletTransaction, RDX_MAIN_WALLET_BALANCE_ERROR, RDX_MAIN_WALLET_BALANCE_SUCCESS, RDX_MAIN_WALLET_DEFEND_ERROR, RDX_MAIN_WALLET_DEFEND_SUCCESS, RDX_MAIN_WALLET_FETCH_ERROR, RDX_MAIN_WALLET_FETCH_SUCCESS, RDX_MAIN_WALLET_IS_DEFENDED, RDX_MAIN_WALLET_IS_DEFENDED_ERROR, RDX_MAIN_WALLET_IS_DEFENDED_SUCCESS, RDX_MAIN_WALLET_TRANSACTION, RDX_MAIN_WALLET_TRANSACTION_ERROR, RDX_MAIN_WALLET_TRANSACTION_SUCCESS } from './actions';
import { IAction, IWalletTransactionResponse } from '../combiner';

@Injectable({
  providedIn: 'root'
})
export class MainWalletService {

  constructor(
    private store: Store,
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => axios.all([
        aschax.get('/api/wallet/base', {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
        aschax.get('/api/wallet/balance', {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
        aschax.get('/api/transfer', {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
        aschax.get('/api/wallet/is-defended', {
          headers: {
            'x-auth-token': ac[1]
          }
        })
      ]).then(res => {
        console.log('response');
        return {
          type: RDX_MAIN_WALLET_FETCH_SUCCESS,
          payload: {
            public: res[0].data.public,
            gladiator: res[0].data.gladiatorId,
            liberBalance: res[1].data.liber,
            fixumBalance: res[1].data.fixum,
            transactions: res[2].data,
            button: res[3].data.message,
            rationem: res[3].data.rationem
          },
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        console.log(err);
        return {
          type: RDX_MAIN_WALLET_FETCH_ERROR,
          payload: err.response?.data.message,
          component: ac[0].component
        }
      }))
    );
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletFetchSuccess),
      withLatestFrom(this.store.select(getTokenToken)),
      mergeMap(ac => {
        let aschacs: IAction<any>[] = [];
        for (let i = 0; i < ac[0].payload!.transactions.length; i++) {
          aschacs.push({
            type: RDX_MAIN_WALLET_TRANSACTION,
            payload: {
              date: ac[0].payload!.transactions[i].date,
              id: ac[0].payload!.transactions[i].transactionId
            },
            component: ac[0].component
          })
        }
        return aschacs;
      })
    )
  })
  balance = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletBalance),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/api/wallet/balance', {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_WALLET_BALANCE_SUCCESS,
          payload: res.data,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_WALLET_BALANCE_ERROR,
          component: ac[0].component
        }
      })));
  })
  transaction = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletTransaction),
      withLatestFrom(this.store.select(getTokenToken)),
      mergeMap(ac => aschax.get('/api/transfer/transaction/' + ac[0].payload!.id, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        let reschet: IAction<IWalletTransactionResponse> = {
          type: RDX_MAIN_WALLET_TRANSACTION_SUCCESS,
          payload: {
            date: ac[0].payload!.date,
            id: ac[0].payload!.id,
            transaction: res.data
          },
          component: ac[0].component
        }
        return reschet;
      }).catch((err: AxiosError) => {
        console.log(err);
        return {
          type: RDX_MAIN_WALLET_TRANSACTION_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    );
  })
  defend = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletDefend),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/api/wallet/defend', null, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_WALLET_DEFEND_SUCCESS,
          payload: res.data,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_WALLET_DEFEND_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    );
  })
  defendSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletDefendSuccess),
      map(ac => {
        return {
          type: RDX_MAIN_WALLET_IS_DEFENDED,
          component: ac.component
        }
      })
    )
  })
  isDefended = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletIsDefended),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/api/wallet/is-defended', {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        console.log(res.data);
        return {
          type: RDX_MAIN_WALLET_IS_DEFENDED_SUCCESS,
          payload: {
            button: res.data.message,
            rationem: res.data.rationem
          },
          component: ac[0].component
        };
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_WALLET_IS_DEFENDED_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    )
  })



}
