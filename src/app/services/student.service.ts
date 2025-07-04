import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://127.0.0.1:8000/api/students';  

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {}

 
  getAllStudents(): Observable<any> {
    return this.http.get(BASE_URL + '/');
  }

  
  getStudentById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/?id=${id}`);
  }

  
  getFilteredStudents(className: string, section: string, page: number): Observable<any> {
    return this.http.get<any>(
      `${BASE_URL}/list/?class=${className}&section=${section}&page=${page}`
    );
  }

 
  addStudent(student: any): Observable<any> {
    return this.http.post(BASE_URL + '/', student);
  }

  
  updateStudent(student: any): Observable<any> {
    return this.http.put(BASE_URL + '/', student);
  }

  
  deleteStudent(id: number): Observable<any> {
    return this.http.request('DELETE', BASE_URL + '/', {
      body: { id }
    });
  }
}
