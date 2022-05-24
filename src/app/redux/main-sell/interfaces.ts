export interface IMainSellIsOnboardCompleteSuccess {
  is: boolean;
  link?: string;
  isAccount: boolean;
}
export interface IMainSellSellLatestPayment {
  sell: string;
  index: number;
}
export interface IMainSellSellLatestPaymentSuccess {
  index: number;
  price: number;
  average: number
}
export interface IMainSellSellReuseFetch {
  index: number;
  sell: string;
}
export interface IMainSellSellReuseFetchError {
  index: number;
  error: string;
}
