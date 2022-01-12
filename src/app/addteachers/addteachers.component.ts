import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { NgModule } from '@angular/core';
import { Teacher } from './teacher_model';
import{Router} from '@angular/router';

@Component({
  selector: 'app-addteachers',
  templateUrl: './addteachers.component.html',
  styleUrls: ['./addteachers.component.css']
})
export class AddteachersComponent implements OnInit {

  constructor(private router: Router) { }
  name: string = ""; 
  designation: string = ""; 
  teacher: Teacher = new Teacher (); 

  ngOnInit(): void {
    this.addTeacher();
  }


  async addTeacher(){
    let res = await axios.post('http://localhost:3000/admin/addteacher',{
        "name": this.teacher.name,
        "designation": this.teacher.designation
      }); 

    this.router.navigateByUrl('admin/teacherplatform');
    
  }
}
