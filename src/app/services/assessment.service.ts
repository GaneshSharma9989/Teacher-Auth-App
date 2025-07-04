import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASE = 'http://127.0.0.1:8000/api';
@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
constructor(private http: HttpClient) { }

getAssessments(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE}/assessments/`);
  }

  addScore(payload: { student_id: number; assessment_id: number; marks: number; }): Observable<any> {
    return this.http.post(`${BASE}/scores/`, payload);
  }

  getProgress(studentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${BASE}/progress/${studentId}/`);
  }

  getReport(studentId: number): Observable<any> {
    return this.http.get<any>(`${BASE}/report/${studentId}/`);
  }

addAssessment(assessment: {
    title: string;
    chapter: string;
    week: number;
    total_marks: number;
  }): Observable<any> {
    return this.http.post(`${BASE}/assessments/`, assessment);
  }
updateAssessment(id: number, updatedAssessment: any): Observable<any> {
    return this.http.put(`${BASE}/assessments/${id}/`, updatedAssessment);
  }
deleteAssessment(id: number): Observable<any> {
    return this.http.delete(`${BASE}/assessments/${id}/`);
  }
getAssessmentById(id: number): Observable<any> {
    return this.http.get(`${BASE}/assessments/${id}/`);
  }








































}
