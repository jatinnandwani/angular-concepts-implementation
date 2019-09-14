import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  template: `<div>
                <ul *ngFor="let employee of employees">
                  <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
                </ul>
            </div>`,
  styles: [``]
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = [
    {"id" :1, "name" : "Ramesh", "age" : 55},
    {"id" :2, "name" : "Shobha", "age" : 50},
    {"id" :3, "name" : "Jatin", "age" : 24},
    {"id" :4, "name" : "Rahul", "age" : 28}
  ]
  constructor() { }

  ngOnInit() {
  }

}

//why service in angular?
//1 -DO NOT REPEAT YOURSELF (DRY) --> It states that if the same array
//we need in both service component and as well as employee-details component.(BOTH means both child componnent)
//2 -Single Responsiblity Principle - Array should be assign once using 
//service so that it can be used anywhere

//ADVANTAGE OF SERVICE
//shares data from a single point to multiple component.
//To Implement application logic.
//To intract with the database (External Interaction).

//Naming convention - .service.ts


//How do we use services in angular?
//Answer - Dependency Injection 
// I am making one project to use service
// what ever done here is not correct or not a way to code multiple time for the same thing