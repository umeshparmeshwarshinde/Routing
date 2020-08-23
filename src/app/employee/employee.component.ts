import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empList:Employee[]=[
    {id:1,name:"Umesh Shinde",age:30},
    {id:2,name:"Sagar Soman",age:26},
    {id:3,name:"Rohit Gaikwad",age:25}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
