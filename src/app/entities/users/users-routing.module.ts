import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UsersComponent } from './users.component';
const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'new',
        component: AddEditUserComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

export const USERS_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./users.module').then((m) => m.UsersModule),
  },
];
