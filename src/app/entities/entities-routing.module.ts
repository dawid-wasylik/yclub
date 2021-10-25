import { Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { HOME_ROUTES } from '../home/home-routing.module';
import { ORDERS_ROUTES } from './orders/orders-routing.module';
import { USERS_ROUTES } from './users/users-routing.module';

export const ENTITIES_ROUTES: Routes = [Shell.childRoutes([...HOME_ROUTES, ...USERS_ROUTES, ...ORDERS_ROUTES])];
