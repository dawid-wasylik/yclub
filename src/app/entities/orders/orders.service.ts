import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private resourceUrl = '';
  private document = '';
  constructor(private http: HttpClient) {}

  setUrl(url: string): void {
    this.resourceUrl = `http://localhost:3000/${url}`;
  }
  getOrders(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.resourceUrl}`, { observe: 'response' });
  }
  sendApplication(params: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.resourceUrl}`, params, { observe: 'response' });
  }
  getOneOrders(id: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
  sendAnswer(params: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.resourceUrl}`, params, { observe: 'response' });
  }
}
