import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment_model';
import { Router }from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-teacheraddassignment',
  templateUrl: './teacheraddassignment.component.html',
  styleUrls: ['./teacheraddassignment.component.css']
})
export class TeacheraddassignmentComponent implements OnInit {

  constructor(private router: Router) { }
  assignment: Assignment = new Assignment();

  ngOnInit(): void {

  }

  async addAssignment(){
    let res = await axios.post('http://localhost:3000/teacher/addAssignment',{
        "title": this.assignment.title,
        "question": this.assignment.question
      }); 
    this.router.navigateByUrl('teacher');
    
  }

}
