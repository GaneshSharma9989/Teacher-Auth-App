import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(data: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login/`, data);
}

  register(data: { username: string, email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register/`, data);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}







