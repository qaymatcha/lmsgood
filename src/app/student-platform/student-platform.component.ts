import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {config} from "rxjs";

@Component({
  selector: 'app-student-platform',
  templateUrl: './student-platform.component.html',
  styleUrls: ['./student-platform.component.css']
})
export class StudentPlatformComponent implements OnInit {

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
