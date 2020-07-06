import { CowModel } from './cow.model';

export interface CowsListResponse {
  offset: number;
  limit: number;
	total: number;
	loading: boolean;
	error: boolean;
	result: CowModel[]
}