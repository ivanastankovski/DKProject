import { MealService } from './../meal.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.mealService.getMenuItems()
      .subscribe(menuItems => this.menuItems = menuItems.slice(0, 4));
  }

}
