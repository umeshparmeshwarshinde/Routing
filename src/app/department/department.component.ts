import { Component, OnInit } from '@angular/core';
import {Department} from '../models/Department';
import {Router, ActivatedRoute ,ParamMap } from '@angular/router';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  selectedId;
  constructor(private router:Router,private route :ActivatedRoute) { }
  deptList:Department[]=[
    {id:1,name:"Information Technology"},
    {id:2,name:"Computer Science"},
    {id:3,name:"Electronic"}
  ]
  ngOnInit(): void {
    //Angular Tutorial - 28 - Relative Navigation  -> vimp topic you guys need to check if you face any problem
    this.route.paramMap.subscribe((parms: ParamMap) => {
      let id = parseInt(parms.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(deprtmentObj){
    console.log('onSelect ');
    this.router.navigate(['depts',deprtmentObj.id]);
  }
  isSelected(deprtmentObj){
    return this.selectedId===deprtmentObj.id;
  }

}
