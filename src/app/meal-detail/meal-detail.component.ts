import { MealService } from './../meal.service';
import { MenuItem } from './../menu-item';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {
  @Input() meal: MenuItem;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private mealService: MealService
    ) {}

  ngOnInit() {
    this.getMeal();
  }

  getMeal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mealService.getMeal(id)
      .subscribe(meal => this.meal = meal);
  }

  goBack() {
    this.location.back();
  }

}
