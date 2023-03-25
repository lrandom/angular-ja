import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {
  constructor(private http: HttpClient) {
  }

  getRestaurants(): Observable<any> {
    return this.http.get(environment.apiUrl + "restaurants")
  }
}
