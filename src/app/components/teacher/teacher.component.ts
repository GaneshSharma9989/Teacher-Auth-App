import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'; // ✅ Correct path
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teachers: any[] = []; 

  constructor(private userService: UserService) {} 

  ngOnInit(): void {
    this.userService.getTeachers().subscribe(
      (res: any) => {  
        this.teachers = res;
      },
      (err: any) => {  
        console.error('Error fetching teachers:', err);
      }
    );
  }
}
