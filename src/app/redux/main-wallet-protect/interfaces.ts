import { IOtherBid, IYourBid } from "../combiner";

export interface IMainWalletProtectGrabYour {
  firstIndex: number[];
  lastIndex: number[];
  rationemIndex: number;
}
export interface IMainWalletProtectGrabYourSuccess {
  fixumDefences: IYourBid[];
  liberDefences: IYourBid[];
}
export interface IMainWalletProtectGrabOtherSuccess {
  fixumDefences: IOtherBid[];
  liberDefences: IOtherBid[];
}
