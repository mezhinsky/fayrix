import * as fromActions from '../actions/cows-list.actions';
import { CowModel } from '../../models/cow.model';

import { updateItemInObject, deleteItemInObject, addItemInObject } from '../../../utils/data';

export interface CowsListState {

  offset: number;
  limit: number;
	total: number;
	loading: boolean;
	error: boolean;
	items: Record<string, CowModel>

}

export const initialState: CowsListState = {

	offset: 0,
	limit: 100,
	total: null,
	loading: false,
	error: false,
	items: null,
};



export function RtfReducer(
  state = initialState,
  action: fromActions.CowsListActions
): CowsListState {
  switch (action.type) {

    case fromActions.GET_COWS_LIST: {
      return {
        ...state,
				loading: true,
				error: false,
      };
    }

    case fromActions.GET_COWS_LIST_SUCCESS: {
      return {
				...state,
				items: action.response.result.reduce((map, obj) => { map[obj.cowId] = obj; return map }, {}),
				total: action.response.total,
				loading: false,
      };
    }

    case fromActions.GET_COWS_LIST_ERROR: {
      return {
				...state,
				loading: false,
				error: true,
      };
    }

    case fromActions.UPDATE_COW: {
      return {
        ...state,
        items: updateItemInObject(state.items, action.cow, String(action.cowId)),
      };
    }

    case fromActions.DELETE_COW: {
      return {
        ...state,
        items: deleteItemInObject(state.items, action.cowId),
      };
    }

    case fromActions.ADD_COW: {
      return {
        ...state,
        items: addItemInObject(state.items, action.cow),
      };
    }

    default:
      return state;
  }
}


export const getItems = (state: CowsListState) => state.items;
export const getIds = (state: CowsListState) => state.items ? Object.keys(state.items) : null;
export const getError = (state: CowsListState) => state.error;
export const getLoading = (state: CowsListState) => state.loading;
