import { Component, OnInit } from '@angular/core';
import { EmployeeNewService } from '../employee-new.service';

@Component({
  selector: 'app-employee-list',
  template: `<div>
                    <h1>Employee list component- HTTP</h1>
                    <h3>{{errorMsj}}</h3>
                    <ul *ngFor = "let employee of employees">
                      <li>{{employee.name}} - {{employee.age}}</li>
                    </ul>
            </div>`,
   styles: [`
                h1{
                    color:red;
                }`
              ]
})
export class EmployeeListComponent implements OnInit {

  public employees = []
  public errorMsj;
  constructor( private  _employeeNewService : EmployeeNewService ) { }

  ngOnInit() {
   this._employeeNewService.getEmployees()
   .subscribe(data => this.employees = data,
              error => this.errorMsj = error);
  }

}
