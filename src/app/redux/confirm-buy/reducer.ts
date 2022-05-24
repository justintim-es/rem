import { createReducer, on } from "@ngrx/store";
import { rdxConfirmBuyFetch, rdxConfirmBuyFetchError, rdxConfirmBuyFetchSuccess } from "./actions";

export interface IConfirmBuy {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchErrorMessage: string;
}
export const confirmBuyInitial: IConfirmBuy = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false,
    fetchErrorMessage: ''
}
export const confirmBuyReducer = createReducer(
    confirmBuyInitial,
    on(rdxConfirmBuyFetch, (state: IConfirmBuy) => {
        return { 
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            isFetchError: false,
            fetchErrorMessage: ''
        }   
    }),
    on(rdxConfirmBuyFetchSuccess, (state: IConfirmBuy) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true,
        }
    }),
    on(rdxConfirmBuyFetchError, (state: IConfirmBuy, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true,
            fetchErrorMessage: action.payload!
        }
    })
)