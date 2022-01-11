import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUser(username: string, password: string): Observable<any> {
    return this.http.get(
      `http://localhost:3000/users?username=${username}&password=${password}`
    );
  }
  post(url: string, item: any): Observable<any> {
    return this.http.post(url, item);
  }
}
