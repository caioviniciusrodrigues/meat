import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment.prod';
import { ErrorHandler } from '../app.error';
import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from './restaurant-detail/menu-item/menu-item.model';




@Injectable()
export class RestaurantService {

  private url = environment.baseUrl;

  constructor( private http: Http ) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${ this.url }/restaurants`)
      .map( response => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${this.url}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${this.url}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get(`${this.url}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

}
