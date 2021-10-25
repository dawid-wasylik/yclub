import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '@shared';
import { ArticleComponent } from './article/article.component';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TableModule } from 'primeng/table';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    SharedModule,
    ButtonModule,
    ConfirmPopupModule,
    CardModule,
    BadgeModule,
    TableModule,
  ],
  declarations: [ArticleComponent],
})
export class EntitesModule {}
