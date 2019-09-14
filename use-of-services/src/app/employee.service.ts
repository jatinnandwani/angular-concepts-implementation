import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
        {"id" :1, "name" : "Ramesh", "age" : 55},
        {"id" :2, "name" : "Shobha", "age" : 50},
        {"id" :3, "name" : "Jatin", "age" : 24},
        {"id" :4, "name" : "Rahul", "age" : 28}
    ];
  }
}
