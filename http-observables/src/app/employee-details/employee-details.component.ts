import { Component, OnInit } from '@angular/core';
import { EmployeeNewService } from '../employee-new.service';
@Component({
  selector: 'app-employee-details',
  template: `<div>
              <h1>Employee details component- HTTP</h1>
              <h3>{{errorMsj}}</h3>  
              <ul *ngFor = "let employee of employees">
                  <li>{{employee.name}} - {{employee.age}}</li>
              </ul>
              </div>`,
  styles: []
})

export class EmployeeDetailsComponent implements OnInit {

  public employees = []
  public errormsj;

  constructor( private  _employeeNewService : EmployeeNewService ) { }

  ngOnInit() {
    this._employeeNewService.getEmployees()
    .subscribe(data => this.employees = data,
      error => this.errorMsj = error);
   }

}
