import { List } from "immutable";

export interface IAction<T> {
  type: string;
  payload?: T;
  component: string;
}
export interface IActionCreator<T> {
  payload?: T;
  component: string
}
export interface ISellFetch {
  email: string;
  password: string;
}
export interface ISellLoginFetch {
  email: string;
  password: string;
}
export interface IBuyFetch {
  email: string;
  password: string;
}
export interface ITransfer {
  transactionId: number;
  date: Date;
  _id: string;
}
export interface IMainWalletResponse {
  public: string;
  gladiator: string;
  liberBalance: number;
  fixumBalance: number;
  rationem: IRationem;
  button: string;
  transactions: ITransfer[];
}
export interface ITransferFetch {
  publicKey: string;
  amount: number;
}
export interface IError {
  code: number;
  message: string;
  english: string;
}
export interface IBalanceResponse {
  fixum: number;
  liber: number;
}
export interface IWalletTransaction {
  date: Date;
  id: string;
}
export interface IMainWalletTransactionData {
  includi: boolean;
  priorTxIds: string[];
  indicatione: number;
  obstructionumNumerus: number[];
}
export interface IMainWalletTransaction {
  data: IMainWalletTransactionData;
  scriptum: any;
}
export interface IWalletTransactionResponse {
  date: Date;
  id: string;
  transaction: IMainWalletTransaction;
}
export interface IRationemData {
  includi: boolean;
  index: number;
  indicatione?: number;
  obstructionumNumerus?: number[];
  defensio?: string;
}
export interface IRationem {
  data?: IRationemData;
  scriptum: any;
  gladiatorId: string;
}
export interface ISellSubmit {
  unit: number;
  gla: string;
  price: number;
}
export interface IDefence {
  defence: string;
  bid: number;
}
export interface IGrab {
  firstIndex: string[];
  lastIndex: string[];
  rationemIndex: number;
}
export interface IYourBid {
  defensio: string;
  yourBid: number;
  probationem: number;
  other: IOtherBid;
  index: number;
}
export interface IOtherBid {
  defensio: string;
  summaBid: number;
  probationem: string;
  your: IYourBid;
  index: number;
}
export interface IGrabSuccess {
  index: number;
  probationem: string;
  rationemIndex: number;
  liber: boolean;
}
export interface IGrabSuccessYour {
  index: number;
  your: IYourBid;
}
export interface IGrabSuccessOther {
  index: number;
  other: IOtherBid;
}
export interface IMainWalletProtectFetchSuccess {
  baseDefence: string;
  liberDefences: IDefence[];
  fixumDefences: IDefence[];
  blocknumber: number[];
}
export interface IMainWalletProtectBurnFetch {
  gla: number;
  index: number;
}
export interface IMainWalletProtectBurnSellFetch {
  gla: number;
  index: number;
  sellId: string;
}
export interface IMainWalletProtectBurnFetchError {
  message: string;
  index: number;
}
export interface IMainSellRationemData {
  includi: boolean;
  index: number;
  indicatione: boolean;
  obstructionumNumerus: number[];
  defensio: string;
}
export interface IMainSellRationem {
  data: IMainSellRationemData;
  scriptum: any;
  gladiator?: string;
  rationemIndex: number;
}
export interface IMainSellSellSuccessPayment {
  price: number;
  isSold: boolean;
}
export interface IMainSellSellSuccess {
  _id: string;
  liber: boolean;
  isActive: boolean;
  isBalance: boolean;
  gla: string;
  fixumPrice: number;
  average: number;
  date: Date;
  public: string;
  rationemId: string;
  rationem: IMainSellRationem;
  payment: IMainSellSellSuccessPayment;
  balance?: number;
}
export interface IMainSellSellBalance {
  index: number;
  public: string;
}
export interface IMainSellSellBalanceSuccess {
  index: number;
  balance: number;
}
export interface IMainSellSellRationem {
  rationem: string;
  index: number;
}
export interface IMainSellSellRationemSuccess {
  index: number;
  rationem: IMainSellRationem;

}
export interface IMainWalletProtectAccount {
  publicKey: string;
  gladiator: string;
  isBase: boolean;
}
export interface IMainSellIschinFetch {
  index: number;
  to: string;
  gla: string;
  unit: string;
  ischid: string;
}
export interface IMainSellIschinFetchError {
  index: number;
  message: string;
}
export interface IMainSellIsCompleteSuccess {
  is: boolean;
  link?: string;
}
export interface IMainBuyOfferPayment {
  url: string;
  gla: number;
  price: number;
  average: number;
}
export interface IMainBuyOffer {
  price: number;
  gladiatorId: string;
  payment: IMainBuyOfferPayment;
  rationemId: string;
  liberDefences: List<IMainBuyOfferDefence>;
  fixumDefences: List<IMainBuyOfferDefence>;
}
export interface IMainBuyFetchSuccess {
  lg: IMainBuyOffer[];
  lp: IMainBuyOffer[];
  la: IMainBuyOffer[];
  fg: IMainBuyOffer[];
  fp: IMainBuyOffer[];
  fa: IMainBuyOffer[];
}
export interface IMainBuyFetchRationem {
  index: number;
  offer: string;
  rationem: string;
}
export interface IMainBuyFetchRationemSuccess {
  index: number;
  rationemIndex: number;
  offer: string;
  gladiator: string;
}
export interface IMainBuyOfferDefence {
  defence: string;
  bid: number;
}
export interface IMainBuyFetchDefencesSuccess {
  index: number;
  liberDef: IMainBuyOfferDefence[];
  fixumDef: IMainBuyOfferDefence[];
  offer: string;
}
export interface IMainBuyFetchRationemError {
  index: number;
  message: string;
}
export interface IMainBuyFetchDefencesError {
  index: number;
  message: string;
}
export interface IMainWalletProtectFetch {
  gladiator: string;
  index: number;
}
