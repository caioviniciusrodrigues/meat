import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private serviceRestaurant: RestaurantService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.serviceRestaurant.restaurantById(this.route.snapshot.params['id'])
      .subscribe( restaurant => this.restaurant = restaurant );
  }

}
