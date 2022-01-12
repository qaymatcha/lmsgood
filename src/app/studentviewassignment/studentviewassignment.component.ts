import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-studentviewassignment',
  templateUrl: './studentviewassignment.component.html',
  styleUrls: ['./studentviewassignment.component.css']
})
export class StudentviewassignmentComponent implements OnInit {

  constructor() { }
  public data: Record<string, any>[] = [];


  ngOnInit(): void {
    this.viewAssignments();
  }

  async viewAssignments(): Promise<void>{
    var classes = await axios.get('http://localhost:3000/student/assignments', {responseType: 'json'});
    this.data = classes.data;
      
  }


}
