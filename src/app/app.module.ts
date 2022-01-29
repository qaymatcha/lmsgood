import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { StudentPlatformComponent } from './student-platform/student-platform.component';
import { TeacherPlatformComponent } from './teacher-platform/teacher-platform.component';
import { ClassPlatformComponent } from './class-platform/class-platform.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { ViewteachersComponent } from './viewteachers/viewteachers.component';
import { AddteachersComponent } from './addteachers/addteachers.component';
import { ViewclassesComponent } from './viewclasses/viewclasses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherviewassignmentsComponent } from './teacherviewassignments/teacherviewassignments.component';
import { TeacheraddassignmentComponent } from './teacheraddassignment/teacheraddassignment.component';
import { StudentviewassignmentComponent } from './studentviewassignment/studentviewassignment.component';
import { HelloComponent } from './webcam-snapshot/hello.component';
import { WebcamSnapshotModule } from './webcam-snapshot/webcam-snapshot.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    AdminComponent,
    HomeComponent,
    StudentPlatformComponent,
    TeacherPlatformComponent,
    ClassPlatformComponent,
    ViewstudentsComponent,
    AddstudentsComponent,
    ViewteachersComponent,
    AddteachersComponent,
    ViewclassesComponent,
    DashboardComponent,
    TeacherviewassignmentsComponent,
    TeacheraddassignmentComponent,
    StudentviewassignmentComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WebcamSnapshotModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
