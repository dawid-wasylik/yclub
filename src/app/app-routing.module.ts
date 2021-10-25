import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ENTITIES_ROUTES } from './entities/entities-routing.module';
import { SubmitApplicationComponent } from './entities/orders/submit-application/submit-application.component';
import { MainComponent } from './shell/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [...ENTITIES_ROUTES],
  },
  {
    path: 'submit-application',
    component: SubmitApplicationComponent,
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
