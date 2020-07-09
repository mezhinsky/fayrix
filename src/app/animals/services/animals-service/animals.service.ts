import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CowModel } from '../../models/cow.model';
import { environment } from '../../../../environments/environment';


const API =  environment.production ? 'https://fayrix.mezhinsky.com' : 'http://localhost:3000';


@Injectable({
  providedIn: 'root',
})

export class AnimalsService {
  constructor(private http: HttpClient) {}

  public getList() {
    return this.http.get(`${API}/items`);
  }

  public updateItem(id: string, item: CowModel) {
    return this.http.patch(`${API}/items/${id}`, item);
  }

  public createItem(item: CowModel) {
    return this.http.post<CowModel>(`${API}/items`, item);
  }

  public deleteItem(id: string) {
    return this.http.delete(`${API}/items/${id}`);
  }
}
