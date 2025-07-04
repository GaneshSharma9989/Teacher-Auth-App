import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/users/');
  }
}
 

