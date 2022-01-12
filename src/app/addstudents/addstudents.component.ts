import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { NgModule } from '@angular/core';
import { Student } from './student_model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {
  
  constructor(private router: Router) { }
  
  name: string = ""; 
  rollno: string = ""; 
  student: Student = new Student (); 
   
  
  ngOnInit(): void {
  }

  async addStudent(){
    let res = await axios.post('http://localhost:3000/admin/addstudent',{
        "name": this.student.name,
        "rollno": this.student.rollno
      }); 
    this.router.navigateByUrl('admin/studentplatform');
    
  }
}
