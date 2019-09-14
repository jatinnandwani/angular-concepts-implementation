import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `<div>
                <h1>service in angular 2 component</h1>
                <ul *ngFor="let employee of employees">
                  <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
                </ul>
              </div>`,
styles: [``]
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = []
  constructor( private _employeeService : EmployeeService ) { }
  
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
