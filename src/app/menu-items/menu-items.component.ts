import { MealService } from './../meal.service';
import { MenuItem } from './../menu-item';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  menuItems: MenuItem[];


  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.mealService.getMenuItems()
      .subscribe(menuItems => this.menuItems = menuItems);
  }
}
