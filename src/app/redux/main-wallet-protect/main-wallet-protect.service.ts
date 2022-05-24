import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { AxiosError } from 'axios';
import {
  rdxMainWalletProtectFetch,
  rdxMainWalletProtectGrab, rdxMainWalletProtectGrabOther, rdxMainWalletProtectGrabOtherSuccess, rdxMainWalletProtectGrabOtherYour, rdxMainWalletProtectGrabYour, rdxMainWalletProtectGrabYourOther, rdxMainWalletProtectGrabYourSuccess, RDX_MAIN_WALLET_PROTECT_DEFENCES_ERROR, RDX_MAIN_WALLET_PROTECT_DEFENCES_SUCCESS, RDX_MAIN_WALLET_PROTECT_FETCH_ERROR, RDX_MAIN_WALLET_PROTECT_FETCH_SUCCESS, RDX_MAIN_WALLET_PROTECT_GRAB_OTHER, RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_ERROR, RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_SUCCESS, RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR, RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR_ERROR, RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR_SUCCESS, RDX_MAIN_WALLET_PROTECT_GRAB_YOUR, RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_ERROR, RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER, RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER_ERROR, RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER_SUCCESS, RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_SUCCESS } from './actions';
import { RDX_MAIN_WALLET_IS_DEFENDED } from '../main-wallet/actions';
import { getTokenToken } from '../token/selector';
import { aschax } from 'src/app/aschax';
import { getMainWalletProtectIsYourBid } from './selectors';
import { IAction, IGrabSuccess, IMainWalletProtectFetchSuccess } from '../combiner';
import axios from 'axios';
import { IMainWalletProtectGrabOtherSuccess } from './interfaces';
import { RDX_MAIN_WALLET_PROTECT_BURN_PUSH_FIXUM, RDX_MAIN_WALLET_PROTECT_BURN_PUSH_LIBER } from '../main-wallet-protect-burn/actions';
@Injectable({
  providedIn: 'root'
})
export class MainWalletProtectService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }
  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => axios.all([
        aschax.get('/api/wallet/base-defensio/' + ac[0].payload!.index + '/' + ac[0].payload!.gladiator, {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
        aschax.get('/api/wallet/defensiones/true/' + ac[0].payload!.index + '/' + ac[0].payload!.gladiator, {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
        aschax.get('/api/wallet/defensiones/false/' + ac[0].payload!.index + '/' + ac[0].payload!.gladiator, {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
        aschax.get('/api/block/number', {
          headers: {
            'x-auth-token': ac[1]
          }
        }),

      ]).then(res => {
        let reschet: IAction<IMainWalletProtectFetchSuccess> = {
          type: RDX_MAIN_WALLET_PROTECT_FETCH_SUCCESS,
          payload: {
            baseDefence: res[0].data,
            liberDefences: res[1].data,
            fixumDefences: res[2].data,
            blocknumber: res[3].data.numerus
          },
          component: ac[0].component
        }
        return reschet;
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_WALLET_PROTECT_FETCH_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        };
      }))
    )
  })
   grab = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectGrab),
      withLatestFrom(this.store.select(getMainWalletProtectIsYourBid)),
      map(ac => {
        if (ac[1]) {
          return {
            type: RDX_MAIN_WALLET_PROTECT_GRAB_YOUR,
            payload: ac[0].payload,
            component: ac[0].component
          }
        } else {
          return {
            type: RDX_MAIN_WALLET_PROTECT_GRAB_OTHER,
            payload: ac[0].payload,
            component: ac[0].component
          }
        }
      })
    )
  })
  grabYour = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectGrabYour),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/api/block/your-bid/', ac[0].payload!, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_SUCCESS,
          payload: res.data,
          component: ac[0].component
        };
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        };
      }))
    )
  })
  // grabOtherSuccess = createEffect(() => {
  //   return this.actions.pipe(
  //     ofType(rdxMainWalletProtectGrabOtherSuccess),
  //     mergeMap(ac => {
  //       let aschacs: IAction<any>[] = [];
  //     })
  //   )
  // })
  grabYourSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectGrabYourSuccess),
      mergeMap(ac => {
        let aschacs: IAction<any>[] = [];
        for (let i = 0; i < ac.payload!.fixumDefences.length; i++) {
          aschacs.push({
            type: RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER,
            payload: {
              index: i,
              probationem: ac.payload!.fixumDefences[i].probationem,
              rationemIndex: ac.payload!.fixumDefences[i].index,
              liber: false
            },
            component: ac.component
          });
          aschacs.push({
            type: RDX_MAIN_WALLET_PROTECT_BURN_PUSH_FIXUM,
            component: ac.component
          })
        }
        for (let i = 0; i < ac.payload!.liberDefences.length; i++) {
          aschacs.push({
            type: RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER,
            payload: {
              index: i,
              probationem: ac.payload!.liberDefences[i].probationem,
              rationemIndex: ac.payload!.liberDefences[i].index,
              liber: true
            },
            component: ac.component
          });
          aschacs.push({
            type: RDX_MAIN_WALLET_PROTECT_BURN_PUSH_LIBER,
            component: ac.component
          })
        }
        return aschacs;
      })
    )
  })
  grabYourOther = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectGrabYourOther),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get(`/api/block/other-bid/false/${ac[0].payload!.rationemIndex}/${ac[0].payload!.probationem}`, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER_SUCCESS,
          payload: {
            index: ac[0].payload!.index,
            other: res.data,
            probationem: ac[0].payload!.probationem,
            rationemIndex: ac[0].payload!.rationemIndex
          },
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    );
  })
  grabOther = createEffect(() => {
    return this.actions.pipe(
       ofType(rdxMainWalletProtectGrabOther),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/api/block/other-bid', ac[0].payload!, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        let reschet: IAction<IMainWalletProtectGrabOtherSuccess>
        return {
          type: RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_SUCCESS,
          payload: res.data,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    );
  })

  grabOtherSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectGrabOtherSuccess),
      mergeMap(ac => {
        let aschacs: IAction<IGrabSuccess>[] = [];
        for (let i = 0; i < ac.payload!.fixumDefences.length; i++) {
          aschacs.push({
            type: RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR,
            payload: {
              index: i,
              probationem: ac.payload!.fixumDefences[i].probationem,
              rationemIndex: ac.payload!.fixumDefences[i].index,
              liber: true
            },
            component: ac.component
          });
          aschacs.push({
            type: RDX_MAIN_WALLET_PROTECT_BURN_PUSH_FIXUM,
            component: ac.component
          });
        }
        for (let i = 0; i < ac.payload!.liberDefences.length; i++) {
          aschacs.push({
            type: RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR,
            payload: {
              index: i,
              probationem: ac.payload!.liberDefences[i].probationem,
              rationemIndex: ac.payload!.liberDefences[i].index,
              liber: false
            },
            component: ac.component
          });
          aschacs.push({
            type: RDX_MAIN_WALLET_PROTECT_BURN_PUSH_LIBER,
            component: ac.component
          });
        }
        return aschacs;
      })
    )
  })
  grabOtherYour = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainWalletProtectGrabOtherYour),
      withLatestFrom(this.store.select(getTokenToken)),
      mergeMap(ac => axios.all([
        aschax.get(`/api/block/your-bid/true/${ac[0].payload!.rationemIndex}/${ac[0].payload!.probationem}`, {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
        aschax.get(`/api/block/your-bid/false/${ac[0].payload!.rationemIndex}/${ac[0].payload!.probationem}`, {
          headers: {
            'x-auth-token': ac[1]
          }
        })
      ]).then(res => {
        return {
          type: RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR_SUCCESS,
          payload: {
            index: ac[0].payload!.index,
            yourLiber: res[0].data,
            yourFixum: res[1].data
          },
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    )
  })
}
