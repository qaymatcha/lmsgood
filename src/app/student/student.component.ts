import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  user:any;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')??'');
  }

}
