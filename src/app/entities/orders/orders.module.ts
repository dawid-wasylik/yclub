import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { OrdersRoutingModule } from './orders-routing.module';
import { ConfirmationService, SharedModule } from 'primeng/api';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { OrdersComponent } from './orders.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';

import { DialogModule } from 'primeng/dialog';
import { SubmitApplicationComponent } from './submit-application/submit-application.component';
@NgModule({
  declarations: [OrdersComponent, SubmitApplicationComponent],
  imports: [
    CommonModule,
    TranslateModule,
    DynamicDialogModule,
    ButtonModule,
    CardModule,
    InputTextareaModule,
    FormsModule,
    DialogModule,
    TooltipModule,
    DividerModule,
    NgbModule,
    ScrollPanelModule,
    ReactiveFormsModule,
    ConfirmPopupModule,
    InputTextModule,
    TableModule,
    BadgeModule,
    OrdersRoutingModule,
    RouterModule,
    SharedModule,
  ],
  providers: [ConfirmationService, DialogModule],
})
export class OrdersModule {}
