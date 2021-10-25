import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';

export const HOME_ROUTES: Routes = [Shell.childRoutes([{ path: '', component: HomeComponent }])];
