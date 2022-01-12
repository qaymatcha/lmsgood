import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-viewclasses',
  templateUrl: './viewclasses.component.html',
  styleUrls: ['./viewclasses.component.css']
})
export class ViewclassesComponent implements OnInit {

  constructor() { }
  public data: Record<string, any>[] = [];
  public stddata: Record<string,any>[] =[];

  ngOnInit(): void {
    this.viewClasses();
  }

  async viewClasses(): Promise<void>{
    var classes = await axios.get('http://localhost:3000/admin/classes', {responseType: 'json'});
    this.data = classes.data;
      
  }
}
