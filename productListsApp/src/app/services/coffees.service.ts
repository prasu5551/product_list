import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../product/store/models/products';

@Injectable({
  providedIn: 'root'
})
export class CoffeesService {
  private url = 'https://random-data-api.com/api/coffee/random_coffee?size=50&response_type=json';

  constructor(private http: HttpClient) { }

  getCoffees(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url);
  }
}
