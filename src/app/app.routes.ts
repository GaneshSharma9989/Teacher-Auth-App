import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { StudentsComponent } from './components/students/students.component';
import { UserListComponent } from './modules/admin/user-list/user-list.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeacherComponent } from './components/teacher/teacher.component';
export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: 'students', component: StudentsComponent },
   { path: 'dashboard', component: DashboardComponent },
   { path: 'teacher', component: TeacherComponent },
  { path: '', redirectTo: 'assessment', pathMatch: 'full' },
  { path: 'assessment', component: AssessmentComponent },
  { path: 'progress/:id', component: AssessmentComponent }, 
  { path: 'users', component: UserListComponent }
];
