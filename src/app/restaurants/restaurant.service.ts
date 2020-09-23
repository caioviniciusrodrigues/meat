import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

import { environment } from '../../environments/environment.prod';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ErrorHandler } from '../app.error';

@Injectable()
export class RestaurantService {

  url = environment.baseUrl;

  constructor( private http: Http ) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${ this.url }/restaurants`)
      .map( response => response.json())
      .catch(ErrorHandler.handleError);
  }

}
