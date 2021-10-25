import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RippleModule } from 'primeng/ripple';
import { I18nModule } from '@app/i18n';
import { AuthModule } from '@app/auth';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './menu/menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MainComponent } from './main/main.component';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';

import { ToastModule } from 'primeng/toast';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RippleModule,
    MessagesModule,
    MessageModule,
    NgbModule,
    ToastModule,
    TableModule,
    AuthModule,
    I18nModule,
    RouterModule,
    ButtonModule,
    PanelMenuModule,
  ],
  declarations: [HeaderComponent, ShellComponent, MenuComponent, MainComponent],
  providers: [MessageService],
})
export class ShellModule {}
