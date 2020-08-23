import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  departmentId;
  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId=id;
    this.route.paramMap.subscribe((parms: ParamMap) => {
      let id = parseInt(parms.get('id'));
      this.departmentId = id;
    })

  }
  goNext() {
    let next = this.departmentId + 1;
    this.router.navigate(['/depts', next]);
  }
  goPrevious() {
    let previous = this.departmentId - 1;
    this.router.navigate(['/depts', previous]);
  }
  gotoDepartment(){
    //optional route
    let selectedId =this.departmentId ? this.departmentId:null;
    this.router.navigate(['/dep',{id:selectedId}])
  }

}
