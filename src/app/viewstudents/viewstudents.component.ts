import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {config} from "rxjs";

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  constructor() { }


  public data: Record<string, any>[] = [];

  ngOnInit(): void {
    this.viewStudents();
  }

  async viewStudents(): Promise<void>{
    var students = await axios.get('http://localhost:3000/admin/students', {responseType: 'json'});
    this.data = students.data;
      
  }

}
