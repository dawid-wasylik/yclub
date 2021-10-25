import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ConfirmationService, SharedModule } from 'primeng/api';
import { UsersComponent } from './users.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [UsersComponent, AddEditUserComponent],
  imports: [
    CommonModule,
    TranslateModule,
    DynamicDialogModule,
    ButtonModule,
    CardModule,
    ConfirmPopupModule,
    TableModule,
    BadgeModule,
    UsersRoutingModule,
    RouterModule,
    SharedModule,
  ],
  providers: [ConfirmationService],
})
export class UsersModule {}
