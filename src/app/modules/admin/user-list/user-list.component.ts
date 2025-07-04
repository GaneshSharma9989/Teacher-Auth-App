import { Component,OnInit  } from '@angular/core';
import { UserService } from '../../../../app/core/services/user.service';
import { Inject, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res;
        console.log('Users:', res);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
}
