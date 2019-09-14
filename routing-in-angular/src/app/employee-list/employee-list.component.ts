import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `<div>
                <h1>employee list works</h1>
            </div>`,
  styles: [`
              h1{
                color:blue;
              }
          `]
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
