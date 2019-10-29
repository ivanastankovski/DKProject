import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: MealDetailComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'menu', component: MenuItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
