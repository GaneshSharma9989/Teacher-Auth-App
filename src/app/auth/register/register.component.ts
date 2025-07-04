import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
[x: string]: any;
username = '';
  email = '';
  password = '';
successMessage: string | null = null;
  errorMessage: string | null = null;
constructor(private auth: AuthService) {}
register() {
    const data = { username: this.username, email: this.email, password: this.password };
    this.auth.register(data).subscribe({
      next: (res) => alert('Registered successfully'),
      error: (err) => alert('Error: ' + err.error.error)
    });
  }
}
