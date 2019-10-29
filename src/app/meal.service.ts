import { ITEMS } from './mock-menuItems';
import { MenuItem } from './menu-item';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor() { }

  getMenuItems(): Observable <MenuItem[]> {
    return of(ITEMS);
  }

  getMeal(id: number): Observable<MenuItem> {
    return of(ITEMS.find(meal => meal.id === id));
  }
}
