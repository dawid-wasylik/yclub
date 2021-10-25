import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private resourceUrl = '';
  private document = '';
  constructor(private http: HttpClient) {}

  setUrl(url: string): void {
    this.resourceUrl = `http://localhost:3000/${url}`;
  }
  setDocumentType(type: string): void {
    this.document = `/web-api/document/${type}`;
  }
  getArticle(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.resourceUrl}`, { observe: 'response' });
  }
}
