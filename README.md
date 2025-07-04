 STUDENT ASSESSMENT TRACKING SYSTEM (Angular 19)

This Angular 19 application is the frontend for a Student Assessment & Progress Tracking System.
It connects to a Django REST API backend using JWT-based authentication.

==================================================
FEATURES IMPLEMENTED IN ANGULAR
==================================================

1. USER AUTHENTICATION
- Teacher Registration and Login using JWT Tokens
- Token stored in localStorage for session management
- After login, teachers can access the dashboard

2. STUDENT MANAGEMENT
- Add / Edit / Delete Students
- Assign class and section to each student
- View students with:
-> Pagination
-> Class & Section filters
- Display students in a styled table using SCSS

3. ASSESSMENT MODULE
- Create assessments (Title, Chapter, Week, Total Marks)
- Assign marks to students for a selected assessment
- View all created assessments
- Edit and delete assessments

4. WEEKLY PROGRESS TRACKING
- Show student-wise scorecard (weekly)
- Displayed using Bar Chart (ng2-charts)


5. REPORTING MODULE
- Shows all assessments taken by a student
- Displays total marks, marks obtained, and percentage
- Summarized report for a student
- Styled using SCSS

6. ADMIN PANEL (Handled in Angular via Teacher Dashboard)
- No separate admin login, teacher acts as admin
- Admin/Teacher can:
-> View list of all teachers (from /api/users/?role=teacher)
-> View all students and perform CRUD operations
-> Manage assessments and scores
-> View progress reports

7. ROUTING AND DASHBOARD NAVIGATION
- Teacher Dashboard with navigation to:
-> Student Management
-> Assessments
-> Scores
-> Progress
-> Reports
-> Logout

8. STYLING
- Each component styled using SCSS
- Responsive design using CSS Grid and Flexbox
- Charts are responsive and fit card layouts

10. LOGOUT FUNCTIONALITY
- Clears JWT token
- Navigates to login page


==================================================
SAMPLE ROUTES
==================================================

- /register → Teacher Registration
- /login → Teacher Login
- /dashboard → Main dashboard after login
- /students → List/Add/Edit/Delete Students
- /assessments → Create/View/Edit/Delete Assessments
- /scores → Submit student marks
- /progress/:id → View weekly performance of a student
- /report/:id → View detailed report with percentages
- /teachers → View all teachers
- /logout → Clear session and redirect to login


==================================================
MODULES AND LIBRARIES USED
==================================================

- Angular 19 (Standalone Components)
- Angular Router
- Angular Forms
- ng2-charts (Bar Chart)
- JWT Token Interceptor for Authorization
- SCSS for Component Styling


==================================================
IMPORTANT NOTES
==================================================

- Backend API built with Django handles role-based data
- Only teacher login is implemented in Angular (no separate admin login)
- Admin operations (viewing teachers, students, scores) are available in dashboard

This project demonstrates Angular frontend integration with a Django REST API backend, complete with authentication, CRUD, pagination, charts, and user role-based dashboard functionality.
