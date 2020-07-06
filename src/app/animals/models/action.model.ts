export enum ActionTypes {
  Create = "CREATE",
  Update = "UPDATE",
  Delete = "DELETE",
}

export interface Action {
  id: string;
  actionType: ActionTypes;
}