import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../services/assessment.service';
import { ActivatedRoute } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { HeaderComponent } from "../header/header.component";

@Component({
  standalone: true,
  selector: 'app-assessment',
  imports: [CommonModule, FormsModule, NgChartsModule, HeaderComponent],
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  assessments: any[] = [];
  studentId = 0;
  selectedAssessment = 0;
  marks = 0;
  report: any = null;
  progress: any[] = [];

  newAssessment = {
    title: '',
    chapter: '',
    week: 0,
    total_marks: 0,
    student_id: 0
  };

  editMode = false;
  editableAssessment: any = null;

 
    
  

  constructor(private route: ActivatedRoute, private svc: AssessmentService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.studentId = +id;
        this.newAssessment.student_id = this.studentId;
        this.fetchProgress();
        this.fetchReport();
      }
    });
    this.loadAssessments();
  }

  loadAssessments() {
    this.svc.getAssessments().subscribe(a => this.assessments = a);
  }

  submitScore() {
    this.svc.addScore({
      student_id: this.studentId,
      assessment_id: this.selectedAssessment,
      marks: this.marks
    }).subscribe(() => {
      alert('Score submitted');
      this.fetchProgress();
      this.fetchReport();
    });
  }

  fetchProgress() {
    this.svc.getProgress(this.studentId).subscribe(p => {
      this.progress = p;
     
    });
  }

  fetchReport() {
    this.svc.getReport(this.studentId).subscribe(r => this.report = r);
  }

  createAssessment() {
    this.newAssessment.student_id = this.studentId;
    this.svc.addAssessment(this.newAssessment).subscribe(() => {
      alert('Assessment created');
      this.loadAssessments();
      this.newAssessment = { title: '', chapter: '', week: 0, total_marks: 0, student_id: this.studentId };
    });
  }

  editAssessment(a: any) {
    this.editMode = true;
    this.editableAssessment = { ...a };
  }

  updateAssessment() {
    this.svc.updateAssessment(this.editableAssessment.id, this.editableAssessment).subscribe({
      next: () => {
        alert('Assessment updated');
        this.editMode = false;
        this.editableAssessment = null;
        this.loadAssessments();
      },
      error: err => {
        console.error('Update error:', err);
      }
    });
  }

  deleteAssessment(id: number) {
    if (confirm('Are you sure to delete this assessment?')) {
      this.svc.deleteAssessment(id).subscribe({
        next: () => {
          alert('Assessment deleted');
          this.loadAssessments();
        },
        error: err => {
          console.error('Delete error:', err);
        }
      });
    }
  }

  cancelEdit() {
    this.editMode = false;
    this.editableAssessment = null;
  }
}
