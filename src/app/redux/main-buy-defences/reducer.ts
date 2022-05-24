import { createReducer, on } from "@ngrx/store";
import { rdxMainBuyDefencesDefenceSuccess, rdxMainBuyDefencesFetch, rdxMainBuyDefencesFetchError, rdxMainBuyDefencesFetchSuccess } from "./actions";
import { IMainBuyDefencesDefence } from "./interfaces";

export interface IMainBuyDefencesReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    liber: IMainBuyDefencesDefence[];
    fixum: IMainBuyDefencesDefence[];
}
export const mainBuyDefencesInitial: IMainBuyDefencesReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  liber: [], 
  fixum: []
}
export const mainBuyDefencesReducer = createReducer(
  mainBuyDefencesInitial,
  on(rdxMainBuyDefencesFetch, (state: IMainBuyDefencesReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false
    }
  }),
  on(rdxMainBuyDefencesFetchError, (state: IMainBuyDefencesReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true
    }
  }),
  on(rdxMainBuyDefencesDefenceSuccess, (state: IMainBuyDefencesReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      liber: action.payload!.liber,
      fixum: action.payload!.fixum
    }
  })
)
