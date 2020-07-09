import {Action, UPDATE} from '@ngrx/store';
import { CowsListResponse } from '../../models/cows.response.model';
import { CowModel } from '../../models/cow.model';

export const GET_COWS_LIST = '[animals:cows] GET_COWS_LIST';
export const GET_COWS_LIST_SUCCESS = '[animals:cows] GET_COWS_LIST_SUCCESS';
export const GET_COWS_LIST_ERROR = '[animals:cows] GET_COWS_LIST_ERROR';

export const ADD_COW = '[animals:cows] ADD_COW';
export const ADD_COW_SUCCESS = '[animals:cows] ADD_COW_SUCCESS';
export const ADD_COW_ERROR = '[animals:cows] ADD_COW_ERROR';

export const UPDATE_COW = '[animals:cows] UPDATE_COW';
export const UPDATE_COW_SUCCESS = '[animals:cows] UPDATE_COW_SUCCESS';
export const UPDATE_COW_ERROR = '[animals:cows] UPDATE_COW_ERROR';

export const DELETE_COW = '[animals:cows] DELETE_COW';
export const DELETE_COW_SUCCESS = '[animals:cows] DELETE_COW_SUCCESS';
export const DELETE_COW_ERROR = '[animals:cows] DELETE_COW_ERROR';

export class GetCowsListAction implements Action {
  readonly type = GET_COWS_LIST;
  constructor() {}
}

export class GetCowsListSuccessAction implements Action {
  readonly type = GET_COWS_LIST_SUCCESS;
  constructor(public response: CowModel[]) {}
}

export class GetCowsListErrorAction implements Action {
  readonly type = GET_COWS_LIST_ERROR;
  constructor(public error: any) {}
}

export class AddCowAction implements Action {
  readonly type = ADD_COW;
  constructor(public cow: CowModel) {}
}

export class AddCowSuccessAction implements Action {
  readonly type = ADD_COW_SUCCESS;
  constructor(public response: CowModel) {}
}

export class AddCowErrorAction implements Action {
  readonly type = ADD_COW_ERROR;
  constructor(public error: any) {}
}

export class updateCowAction implements Action {
  readonly type = UPDATE_COW;
  constructor(public cowId: string, public cow: CowModel) {}
}

export class updateCowSuccessAction implements Action {
  readonly type = UPDATE_COW_SUCCESS;
  constructor(public cow: CowModel) {}
}

export class updateCowErrrorAction implements Action {
  readonly type = UPDATE_COW_ERROR;
  constructor(public error: any) {}
}

export class deleteCowAction implements Action {
  readonly type = DELETE_COW;
  constructor(public cowId: string) {}
}

export class deleteCowSuccessAction implements Action {
  readonly type = DELETE_COW_SUCCESS;
  constructor(public cowId: string) {}
}

export class deleteCowErrorAction implements Action {
  readonly type = DELETE_COW_ERROR;
  constructor(public error: any) {}
}

export type CowsListActions =
		GetCowsListAction
  | GetCowsListSuccessAction
  | GetCowsListErrorAction

  | AddCowAction
  | AddCowSuccessAction
  | AddCowErrorAction

  | updateCowAction
  | updateCowSuccessAction
  | updateCowErrrorAction

  | deleteCowAction
  | deleteCowSuccessAction
  | deleteCowErrorAction
    ;
