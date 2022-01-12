import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-teacherviewassignments',
  templateUrl: './teacherviewassignments.component.html',
  styleUrls: ['./teacherviewassignments.component.css']
})
export class TeacherviewassignmentsComponent implements OnInit {

  constructor() { }
  public data: Record<string, any>[] = [];

  ngOnInit(): void {
    this.viewAssignments();
  }

  async viewAssignments(): Promise<void>{
    var classes = await axios.get('http://localhost:3000/teacher/assignments', {responseType: 'json'});
    this.data = classes.data;
      
  }

}
