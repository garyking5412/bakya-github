import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductServicesService {
  constructor(private http: HttpClient) {}
  getFromApi(url: string): Observable<any> {
    return this.http.get(url);
  }
  post(url: string, item: any): Observable<any> {
    return this.http.post(url, item);
  }
  put(url: string, item: any): Observable<any> {
    return this.http.put(url, item);
  }
}
