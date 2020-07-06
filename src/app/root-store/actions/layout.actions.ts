import { Action } from '@ngrx/store';

export const BTN_PRESSED = '[Layout] BTN_PRESSED';

export class BtnAction implements Action {
  readonly type = BTN_PRESSED;
  constructor() {}
}


export type LayoutActions =
  | BtnAction
  ;
