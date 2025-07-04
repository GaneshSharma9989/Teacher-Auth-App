import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule , Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], 
  imports: [CommonModule, FormsModule, RouterModule, RouterLink] 
})
export class LoginComponent {
  username = '';
  password = '';
  token: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const data = { username: this.username, password: this.password };

    this.auth.login(data).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        alert('login succesfull');
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        alert('Login failed: ' + err.error?.error)
      }
    });
  }
}
