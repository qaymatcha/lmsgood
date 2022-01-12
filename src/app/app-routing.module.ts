import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {StudentComponent} from "./student/student.component";
import {AdminComponent} from "./admin/admin.component";
import {TeacherPlatformComponent} from "./teacher-platform/teacher-platform.component";
import {StudentPlatformComponent} from "./student-platform/student-platform.component";
import {ClassPlatformComponent} from "./class-platform/class-platform.component";
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { ViewteachersComponent } from './viewteachers/viewteachers.component';
import { AddteachersComponent } from './addteachers/addteachers.component';
import { ViewclassesComponent } from './viewclasses/viewclasses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherviewassignmentsComponent } from './teacherviewassignments/teacherviewassignments.component';
import { TeacheraddassignmentComponent } from './teacheraddassignment/teacheraddassignment.component';
import { StudentviewassignmentComponent } from './studentviewassignment/studentviewassignment.component';
import { WebcamSnapshotComponent } from './webcam-snapshot/webcam-snapshot.component';

const routes: Routes = [
  //{path: '#', component: HomeComponent},
  {path: 'webcam-snapshot', component: WebcamSnapshotComponent},

  {path: 'teacher', component: TeacherComponent},
  {path: 'student', component: StudentComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/teacherplatform', component: TeacherPlatformComponent}, 
  {path: 'admin/studentplatform', component: StudentPlatformComponent}, 
  {path: 'admin/classplatform', component: ClassPlatformComponent},
  {path: 'admin/studentplatform/viewstudents', component: ViewstudentsComponent},
  {path: 'admin/studentplatform/addstudents', component: AddstudentsComponent},
  {path: 'admin/teacherplatform/viewteachers', component: ViewteachersComponent}, 
  {path: 'admin/teacherplatform/addteachers', component: AddteachersComponent}, 
  {path: 'admin/classplatform/viewclasses', component: ViewclassesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'teacher/viewassignments', component: TeacherviewassignmentsComponent},
  {path: 'teacher/addassignments', component: TeacheraddassignmentComponent},
  {path: 'student/viewassignments', component: StudentviewassignmentComponent},
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/webcam-snapshot'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
