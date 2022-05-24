import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAction, IMainWalletProtectBurnFetchError } from '../combiner';
import { getMainWalletProtectIsYourBid, getMainWalletProtectOtherBidsProbationemFixum, getMainWalletProtectOtherBidsProbationemLiber, getMainWalletProtectYourBidsProbationemFixum, getMainWalletProtectYourBidsProbationemLiber } from '../main-wallet-protect/selectors';
import { getTokenToken } from '../token/selector';
import {
  rdxMainWalletProtectBurnFetchFixum,
  rdxMainWalletProtectBurnFetchLiber,
  rdxMainWalletProtectBurnOtherFetchLiber,
  rdxMainWalletProtectBurnSellFetchFixum,
  rdxMainWalletProtectBurnSellFetchLiber,
  rdxMainWalletProtectBurnSellOtherFetchFixum,
  rdxMainWalletProtectBurnSellOtherFetchLiber,
  rdxMainWalletProtectBurnSellYourFetchFixum,
  rdxMainWalletProtectBurnSellYourFetchLiber,
  rdxMainWalletProtectBurnYourFetchFixum,
  rdxMainWalletProtectBurnYourFetchLiber,
  RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_FIXUM,
  RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_LIBER,
  RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_SUCCESS_LIBER,
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_ERROR_FIXUM,
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_ERROR_LIBER,
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_FIXUM,
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_LIBER,
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_ERROR_FIXUM,
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_FIXUM, RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_LIBER, RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_SUCCESS_FIXUM, RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_ERROR_FIXUM, RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_ERROR_LIBER, RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_FIXUM, RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_LIBER, RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_SUCCESS_FIXUM, RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_SUCCESS_LIBER } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MainWalletProtectBurnService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }
  fetchLiber = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectBurnFetchLiber),
      withLatestFrom(this.store.select(getMainWalletProtectIsYourBid)),
      map(ac => {
        if (ac[1]) {
          return {
            type: RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_LIBER,
            payload: ac[0].payload!,
            component: ac[0].component
          }
        } else {
          return {
            type: RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_LIBER,
            payload: ac[0].payload!,
            component: ac[0].component
          }
        }
      })
    )
  })
  fetchFixum = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectBurnFetchFixum),
      withLatestFrom(this.store.select(getMainWalletProtectIsYourBid)),
      map(ac => {
        if (ac[1]) {
          return {
            type: RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_FIXUM,
            payload: ac[0].payload!,
            component: ac[0].component
          }
        } else {
          return {
            type: RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_FIXUM,
            payload: ac[0].payload!,
            component: ac[0].component
          }
        }
      })
    )
  })
  yourFetchLiber = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectBurnYourFetchLiber),
      mergeMap((ischin) => of(ischin).pipe(
        withLatestFrom(this.store.select(getTokenToken), this.store.select(getMainWalletProtectYourBidsProbationemLiber(ischin.payload!.index))),
      )),
      switchMap(ac => aschax.post('/api/transfer/burn-liber', {
        probationem: ac[2],
        gla: ac[0].payload!.gla
      }, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_SUCCESS_LIBER,
          payload: ac[0].payload!.index,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        let reschet: IAction<IMainWalletProtectBurnFetchError> = {
          type: RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_ERROR_LIBER,
          payload: {
            index: ac[0].payload!.index,
            message: err.response?.data.english,
          },
          component: ac[0].component
        };
        return reschet;
      }))
    )
  })
  yourFetchFixum = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectBurnYourFetchFixum),
      mergeMap((ischin) => of(ischin).pipe(
        withLatestFrom(this.store.select(getTokenToken), this.store.select(getMainWalletProtectYourBidsProbationemFixum(ischin.payload!.index))),
      )),
      switchMap(ac => aschax.post('/api/transfer/burn-fixum', {
        probationem: ac[2],
        gla: ac[0].payload!.gla
      }, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_SUCCESS_FIXUM,
          payload: ac[0].payload!.index,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        let reschet: IAction<IMainWalletProtectBurnFetchError> = {
          type: RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_ERROR_FIXUM,
          payload: {
            index: ac[0].payload!.index,
            message: err.response?.data.english,
          },
          component: ac[0].component
        };
        return reschet;
      }))
    )
  })
  otherFetchLiber = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectBurnOtherFetchLiber),
      mergeMap((ischin) => of(ischin).pipe(
        withLatestFrom(this.store.select(getTokenToken), this.store.select(getMainWalletProtectOtherBidsProbationemLiber(ischin.payload!.index)))
      )),
      switchMap(ac => aschax.post('/api/transfer/burn-liber', {
        probationem: ac[2],
        gla: ac[0].payload!.gla
      }, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_SUCCESS_LIBER,
          payload: ac[0].payload!.index,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        let reschet: IAction<IMainWalletProtectBurnFetchError> = {
            type: RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_ERROR_LIBER,
            payload: {
              message: err.response?.data.english,
              index: ac[0].payload!.index
            },
            component: ac[0].component
        }
        return reschet;
      }))
    )
  })
  sellFetchFixum = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectBurnSellFetchFixum),
      withLatestFrom(this.store.select(getMainWalletProtectIsYourBid)),
      map(ac => {
        if (ac[1]) {
          return {
            type: RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_FIXUM,
            payload: ac[0].payload!,
            component: ac[0].component
          }
        } else {
          return {
            type: RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_FIXUM,
            payload: ac[0].payload!,
            component: ac[0].component
          }
        }
      })
    )
  });
  sellFetchLiber = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectBurnSellFetchLiber),
      withLatestFrom(this.store.select(getMainWalletProtectIsYourBid)),
      map(ac => {
        if (ac[1]) {
          return {
            type: RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_LIBER,
            payload: ac[0].payload!,
            component: ac[0].component
          }
        } else {
          return {
            type: RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_LIBER,
            payload: ac[0].payload!,
            component: ac[0].component
          }
        }
      })
    )
  })
  sellYourFetchFixum = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectBurnSellYourFetchFixum),
      mergeMap((ischin) => of(ischin).pipe(
        withLatestFrom(this.store.select(getTokenToken), this.store.select(getMainWalletProtectYourBidsProbationemFixum(ischin.payload!.index))),
      )),
      switchMap(ac => aschax.post('/api/transfer/burn-4-sell-fixum', {
        probationem: ac[2],
        gla: ac[0].payload!.gla.toString(),
        id: ac[0].payload!.sellId
      }, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        let reschet: IAction<number> = {
          type: RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_SUCCESS_FIXUM,
          payload: ac[0].payload!.index,
          component: ac[0].component
        };
        return reschet;
      }).catch((err: AxiosError) => {
        let reschet: IAction<IMainWalletProtectBurnFetchError> = {
          type: RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_ERROR_FIXUM,
          payload: {
            message: err.response?.data.english,
            index: ac[0].payload!.index
          },
          component: ac[0].component
        };
        return reschet;
      }))
    )
  })
  sellYourFetchLiber = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectBurnSellYourFetchLiber),
      mergeMap((ischin) => of(ischin).pipe(
        withLatestFrom(this.store.select(getTokenToken), this.store.select(getMainWalletProtectYourBidsProbationemLiber(ischin.payload!.index))),
      )),
      switchMap(ac => aschax.post('/api/transfer/burn-4-sell-liber', {
        probationem: ac[2],
        gla: ac[0].payload!.gla.toString(),
        id: ac[0].payload!.sellId
      }, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        let reschet: IAction<number> = {
          type: RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_SUCCESS_FIXUM,
          payload: ac[0].payload!.index,
          component: ac[0].component
        };
        return reschet;
      }).catch((err: AxiosError) => {
        let reschet: IAction<IMainWalletProtectBurnFetchError> = {
          type: RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_ERROR_FIXUM,
          payload: {
            message: err.response?.data.english,
            index: ac[0].payload!.index
          },
          component: ac[0].component
        };
        return reschet;
      }))
    )
  })
  sellOtherFetchFixum = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectBurnSellOtherFetchFixum),
      mergeMap((ischin) => of(ischin).pipe(
        withLatestFrom(this.store.select(getTokenToken), this.store.select(getMainWalletProtectOtherBidsProbationemFixum(ischin.payload!.index))),
      )),
      switchMap(ac => aschax.post('/api/transfer/burn-4-sell-fixum', {
        probationem: ac[2],
        gla: ac[0].payload!.gla.toString(),
        id: ac[0].payload!.sellId
      }, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        let reschet: IAction<number> = {
          type: RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_SUCCESS_FIXUM,
          payload: ac[0].payload!.index,
          component: ac[0].component
        };
        return reschet;
      }).catch((err: AxiosError) => {
        console.log(err);
        let reschet: IAction<IMainWalletProtectBurnFetchError> = {
          type: RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_ERROR_FIXUM,
          payload: {
            message: err.response?.data.english,
            index: ac[0].payload!.index
          },
          component: ac[0].component
        };
        return reschet;
      }))
    )
  })
  sellOtherFetchLiber = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectBurnSellOtherFetchLiber),
      mergeMap((ischin) => of(ischin).pipe(
        withLatestFrom(this.store.select(getTokenToken), this.store.select(getMainWalletProtectOtherBidsProbationemFixum(ischin.payload!.index))),
      )),
      switchMap(ac => aschax.post('/api/transfer/burn-4-sell-liber', {
        probationem: ac[2],
        gla: ac[0].payload!.gla.toString(),
        id: ac[0].payload!.sellId
      }, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        let reschet: IAction<number> = {
          type: RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_SUCCESS_LIBER,
          payload: ac[0].payload!.index,
          component: ac[0].component
        };
        return reschet;
      }).catch((err: AxiosError) => {
        console.log(err);
        let reschet: IAction<IMainWalletProtectBurnFetchError> = {
          type: RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_ERROR_LIBER,
          payload: {
            message: err.response?.data.english,
            index: ac[0].payload!.index
          },
          component: ac[0].component
        };
        return reschet;
      }))
    )
  })
}

