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