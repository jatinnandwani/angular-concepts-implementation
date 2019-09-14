import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  template: `<div>
                  <h1>Service In Angular</h1>
                  <ul *ngFor="let employee of employees">
                    <li>{{employee.name}}</li>
                  </ul>
            </div>
            `,
  styles: [`
            h1{
                color:red;
            }`]
})
export class ServiceComponent implements OnInit {

  public employees = [
    {"id" :1,"name" : "Ramesh","age" : 55},
    {"id" :2,"name" : "Shobha","age" : 50},
    {"id" :3,"name" : "Jatin","age" : 24},
    {"id" :4,"name" : "Rahul","age" : 28}
  ]
  constructor() { }

  ngOnInit() {
  }

}
