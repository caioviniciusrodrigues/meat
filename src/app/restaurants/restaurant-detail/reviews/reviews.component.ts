import { Component, OnInit } from '@angular/core';

import { RestaurantService } from '../../restaurant.service';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any[]>;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    console.log('PADRAO PARENT ', this.route.parent.snapshot.params['id']); //PEGAR O ID NA ROTA PAI
    this.reviews = this.restaurantService.reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
