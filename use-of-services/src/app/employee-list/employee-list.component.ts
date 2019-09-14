import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  template: `<div>
            <h1>Service In Angular 1 component</h1>
            <ul *ngFor="let employee of employees">
              <li>{{employee.name}}</li>
            </ul>
            </div>`,
  styles: [`
            h1{
                color:red;
            }`]
})
export class EmployeeListComponent implements OnInit {
  public employees = []

  constructor( private _employeeService: EmployeeService ) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}

// Use of servie is done 
// ng g s service name // Cli command to make service
// Injector is needed in service because decorater is there in component 
// @component but in service we dont have thats why injector is needed
// using injector we can use of another dependancy 
