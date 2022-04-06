import { createReducer, on } from "@ngrx/store";
import { rdxOnboardFetch, rdxOnboardFetchError, rdxOnboardFetchSuccess } from "./actions";

export interface IOnboardReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchErrorMessage: string
}
export const onboardInitial: IOnboardReducer = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false,
    fetchErrorMessage: ''
}
export const onboardReducer = createReducer(
    onboardInitial,
    on(rdxOnboardFetch, (state: IOnboardReducer) => {
        return { 
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            isFetchError: false,
            fetchErrorMessage: ''
        }
    }),
    on(rdxOnboardFetchSuccess, (state: IOnboardReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true
        }
    }),
    on(rdxOnboardFetchError, (state: IOnboardReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true,
            fetchErrorMessage: action.payload!
        }
    }),
)