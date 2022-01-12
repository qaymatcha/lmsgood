import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {config} from "rxjs";

@Component({
  selector: 'app-viewteachers',
  templateUrl: './viewteachers.component.html',
  styleUrls: ['./viewteachers.component.css']
})
export class ViewteachersComponent implements OnInit {

  constructor() { }
  public data: Record<string, any>[] = [];

  ngOnInit(): void {
    this.viewTeachers();
  }

  async viewTeachers(): Promise<void>{
    var teachers = await axios.get('http://localhost:3000/admin/teachers', {responseType: 'json'});
    this.data = teachers.data;
      
  }
}
