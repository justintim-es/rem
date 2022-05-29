import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAction, IMainSellSellBalance, IMainSellSellBalanceSuccess, IMainSellSellRationem, IMainSellSellRationemSuccess, IRationem } from '../combiner';
import { RDX_MAIN_SELL_ISCHIN_PUSH } from '../main-sell-ischin/actions';
import { getTokenToken } from '../token/selector';
import {
  rdxMainSellBalance,
  rdxMainSellCreateAccountFetch,
  rdxMainSellCreateAccountFetchSuccess,
  rdxMainSellFixumSubmit,
  rdxMainSellIsOnboardComplete,
  rdxMainSellLiberSubmit,
  rdxMainSellLiberSubmitSuccess,
  rdxMainSellSellBalance,
  rdxMainSellSellLatestPayment,
  rdxMainSellSellRationem,
  rdxMainSellSellReuseFetch,
  rdxMainSellSells,
  rdxMainSellSellsSuccess,
  rdxMainSellSubmit,
  RDX_MAIN_SELL_BALANCE_ERROR,
  RDX_MAIN_SELL_BALANCE_SUCCESS,
  RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH,
  RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH_ERROR,
  RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH_SUCCESS,
  RDX_MAIN_SELL_FIXUM_SUBMIT,
  RDX_MAIN_SELL_FIXUM_SUBMIT_ERROR,
  RDX_MAIN_SELL_FIXUM_SUBMIT_SUCCESS,
  RDX_MAIN_SELL_IS_ONBOARD_COMPLETE_ERROR,
  RDX_MAIN_SELL_IS_ONBOARD_COMPLETE_SUCCESS,
  RDX_MAIN_SELL_LIBER_SUBMIT,
  RDX_MAIN_SELL_LIBER_SUBMIT_ERROR, RDX_MAIN_SELL_LIBER_SUBMIT_SUCCESS, RDX_MAIN_SELL_ONBOARD_LINK_FETCH_ERROR, RDX_MAIN_SELL_ONBOARD_LINK_FETCH_SUCCESS, RDX_MAIN_SELL_SELLS, RDX_MAIN_SELL_SELLS_ERROR, RDX_MAIN_SELL_SELLS_SUCCESS, RDX_MAIN_SELL_SELL_BALANCE, RDX_MAIN_SELL_SELL_BALANCE_ERROR, RDX_MAIN_SELL_SELL_BALANCE_SUCCESS, RDX_MAIN_SELL_SELL_LATEST_PAYMENT, RDX_MAIN_SELL_SELL_LATEST_PAYMENT_SUCCESS, RDX_MAIN_SELL_SELL_RATIONEM, RDX_MAIN_SELL_SELL_RATIONEM_ERROR, RDX_MAIN_SELL_SELL_RATIONEM_SUCCESS, RDX_MAIN_SELL_SELL_REUSE_FETCH_ERROR, RDX_MAIN_SELL_SELL_REUSE_FETCH_SUCCESS } from './actions';
import { IMainSellSellLatestPayment, IMainSellSellLatestPaymentSuccess, IMainSellSellReuseFetchError } from './interfaces';
import { getMainSellIsLiber } from './selectors';

@Injectable({
  providedIn: 'root'
})
export class MainSellService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  balance = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellBalance),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/api/wallet/balance', {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_SELL_BALANCE_SUCCESS,
          payload: res.data,
          component: ac[0].component
        };
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_SELL_BALANCE_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    )
  })


  submit = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellSubmit),
      withLatestFrom(this.store.select(getMainSellIsLiber)),
      map(ac => {
        if (ac[1] == true) {
          return {
            type: RDX_MAIN_SELL_LIBER_SUBMIT,
            payload: ac[0].payload!,
            component: ac[0].component
          }
        } else {
          return {
            type: RDX_MAIN_SELL_FIXUM_SUBMIT,
            payload: ac[0].payload!,
            component: ac[0].component
          }
        }
      })
    )
  })
  liberSubmit = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellLiberSubmit),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/api/sell/create-lgla', null, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_SELL_LIBER_SUBMIT_SUCCESS,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_SELL_LIBER_SUBMIT_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      })
    ));
  })
  liberSubmitSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellLiberSubmitSuccess),
      map(ac => {
        let reschet: IAction<any> = {
          type: RDX_MAIN_SELL_SELLS,
          component: ac.component
        };
        return reschet;
      })
    )
  });
  fixumSubmit = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellFixumSubmit),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/api/sell/create-fgla', ac[0].payload, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_SELL_FIXUM_SUBMIT_SUCCESS,
          component: ac[0].component
        }
      }).catch(((err: AxiosError) => {
        return {
          type: RDX_MAIN_SELL_FIXUM_SUBMIT_ERROR,
          componenet: ac[0].component
        }
      })))
    )
  })
  sells = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellSells),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/api/sell/sells', {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_SELL_SELLS_SUCCESS,
          payload: res.data,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_SELL_SELLS_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    )
  })
  sellsSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellSellsSuccess),
      mergeMap(ac => {
        let aschacs: IAction<any>[] = [];
        for (let i = 0; i < ac.payload!.length; i++) {
          const aschac: IAction<IMainSellSellRationem> = {
            type: RDX_MAIN_SELL_SELL_RATIONEM,
            payload: {
              index: i,
              rationem: ac.payload![i].rationemId
            },
            component: ac.component
          };
          aschacs.push(aschac);
          const aschacc: IAction<IMainSellSellBalance> = {
            type: RDX_MAIN_SELL_SELL_BALANCE,
            payload: {
              public: ac.payload![i].public,
              index: i,
            },
            component: ac.component
          }
          aschacs.push(aschacc);
          const aschaccc: IAction<any> = {
            type: RDX_MAIN_SELL_ISCHIN_PUSH,
            component: ac.component
          }
          aschacs.push(aschaccc);
          const aschacccc: IAction<IMainSellSellLatestPayment> = {
            type: RDX_MAIN_SELL_SELL_LATEST_PAYMENT,
            payload: {
              index: i,
              sell: ac.payload![i]._id,
            },
            component: ac.component
          };
          aschacs.push(aschacccc);
        }
        return aschacs;
      })
    )
  })
  sellRationem = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellSellRationem),
      withLatestFrom(this.store.select(getTokenToken)),
      mergeMap(ac => aschax.get('/api/sell/rationem/' + ac[0].payload!.rationem, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        let reschet: IAction<IMainSellSellRationemSuccess> = {
          type: RDX_MAIN_SELL_SELL_RATIONEM_SUCCESS,
          payload: {
            index: ac[0].payload!.index,
            rationem: res.data,
          },
          component: ac[0].component
        };
        return reschet;
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_SELL_SELL_RATIONEM_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    )
  })
  sellBalance = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellSellBalance),
      withLatestFrom(this.store.select(getTokenToken)),
      mergeMap(ac => aschax.get('/api/wallet/liber-balance/' + ac[0].payload!.public, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        let aschac: IAction<IMainSellSellBalanceSuccess> = {
          type: RDX_MAIN_SELL_SELL_BALANCE_SUCCESS,
          payload: {
            index: ac[0].payload!.index,
            balance: res.data.statera
          },
          component: ac[0].component
        };
        return aschac;
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_SELL_SELL_BALANCE_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    )
  })
  sellLatestPayment = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellSellLatestPayment),
      withLatestFrom(this.store.select(getTokenToken)),
      mergeMap(ac => aschax.get('/api/sell/last-payment/' + ac[0].payload!.sell, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        console.log(res.data);
        let reschet: IAction<IMainSellSellLatestPaymentSuccess> = {
          type: RDX_MAIN_SELL_SELL_LATEST_PAYMENT_SUCCESS,
          payload: {
            index: ac[0].payload!.index,
            average: res.data.average,
            price: res.data.price
          },
          component: ac[0].component
        };
        return reschet;
      }))
    )
  })
  isOnboardComplete = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellIsOnboardComplete),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/api/sell/is-onboard-complete', {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_SELL_IS_ONBOARD_COMPLETE_SUCCESS,
          payload: res.data,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_SELL_IS_ONBOARD_COMPLETE_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    )
  })
  createAccountFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellCreateAccountFetch),
      switchMap(ac => aschax.get('/api/create/new/' + ac.payload).then(res => {
        return {
          type: RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH_SUCCESS,
          payload: res.data,
          component: ac.component
        };
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH_ERROR,
          payload: err.response?.data,
          component: ac.component
        };
      }))
    );
  })
  createAccountFetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellCreateAccountFetchSuccess),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/api/create/buy-to-sell-link/' + ac[0].payload!, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_SELL_ONBOARD_LINK_FETCH_SUCCESS,
          payload: res.data,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_SELL_ONBOARD_LINK_FETCH_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    );
  })
  reuseFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellSellReuseFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/api/sell/reuse-sell/' + ac[0].payload!.sell, null, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        let reschet: IAction<number> = {
          type: RDX_MAIN_SELL_SELL_REUSE_FETCH_SUCCESS,
          payload: ac[0].payload!.index,
          component: ac[0].component
        }
        return reschet;
      }).catch((err: AxiosError) => {
        let reschet: IAction<IMainSellSellReuseFetchError> = {
          type: RDX_MAIN_SELL_SELL_REUSE_FETCH_ERROR,
          payload: {
            index: ac[0].payload!.index,
            error: err.response?.data
          },
          component: ac[0].component
        }
        return reschet;
      }))
    )
  })

}


