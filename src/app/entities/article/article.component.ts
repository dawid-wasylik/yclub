import { Component, OnInit } from '@angular/core';
import { Logger } from '@app/@shared';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  log = new Logger('[Article]');
  data: any;
  constructor(private service: ArticleService) {}

  ngOnInit(): void {
    this.service.setUrl('article');
    this.getArticle();
  }
  getArticle(): void {
    this.service.getArticle().subscribe((resp) => {
      this.data = resp.body;
      this.log.debug(resp);
    });
  }
}
