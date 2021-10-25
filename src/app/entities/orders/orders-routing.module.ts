import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { SubmitApplicationComponent } from './submit-application/submit-application.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'submit-application',
    component: SubmitApplicationComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}

export const ORDERS_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./orders.module').then((m) => m.OrdersModule),
  },
];
