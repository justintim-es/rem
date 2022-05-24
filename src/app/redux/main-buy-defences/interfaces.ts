export interface IMainBuyDefencesFetchSuccess {
    data: any;
    scriptum: any;
    gladiator: string;
    rationemIndex: number;
}
export interface IMainBuyDefencesDefence {
  defence: string;
  bid: number;
}
export interface IMainBuyDefencesDefenceSuccess {
  liber: IMainBuyDefencesDefence[];
  fixum: IMainBuyDefencesDefence[];
}