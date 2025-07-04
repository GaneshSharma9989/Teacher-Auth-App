import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  newStudent = {
    id: null,
    name: '',
    class_name: '',
    section: ''
  };

  students: any[] = [];
  classFilter = '';
  sectionFilter = '';
  statusFilter = '';
  currentPage = 1;
  totalPages = 1;
  classOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  sectionOptions = ['A', 'B', 'C', 'D'];


  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadFilteredStudents();
  }

  addStudent() {
    this.studentService.addStudent(this.newStudent).subscribe({
      next: (res) => {
        alert('Student added!');
        this.newStudent = { id: null, name: '', class_name: '', section: '' };
        this.loadFilteredStudents();
      },
      error: (err) => {
        console.error('Add Error:', err);
        alert('Failed to add student');
      }
    });
  }

  editStudent(student: any) {
    this.newStudent = { ...student };
  }

  updateStudent() {
    this.studentService.updateStudent(this.newStudent).subscribe({
      next: (res) => {
        alert('Student updated!');
        this.newStudent = { id: null, name: '', class_name: '', section: '' };
        this.loadFilteredStudents();
      },
      error: (err) => {
        console.error('Update Error:', err);
        alert('Failed to update student');
      }
    });
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          alert('Student deleted!');
          this.loadFilteredStudents();
        },
        error: (err) => {
          console.error('Delete Error:', err);
          alert('Failed to delete student');
        }
      });
    }
  }

  clearForm() {
    this.newStudent = { id: null, name: '', class_name: '', section: '' };
  }

  loadFilteredStudents(): void {
    this.studentService.getFilteredStudents(
      this.classFilter,
      this.sectionFilter,
      this.currentPage
    ).subscribe({
      next: (res: any) => {
        this.students = res.students;
        this.totalPages = res.pages;
        this.currentPage = res.current;
      },
      error: (err: any) => {
        console.error('Error loading students:', err);
      }
    });
  }

  onFilterChange() {
    this.currentPage = 1;
    this.loadFilteredStudents();
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadFilteredStudents();
    }
  }
}




































