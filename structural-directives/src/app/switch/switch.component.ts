import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  template: `
            <div [ngSwitch] = "color">
            <h1 *ngSwitchCase="'red'">Switched Red</h1>
            <h1 *ngSwitchCase="'green'">Switched Green</h1>
            <h1 *ngSwitchCase="'blue'">Switched Blue</h1>
            <h1 *ngSwitchDefault>Switched Default</h1>
            </div>`,
  styles: [`
            h1{
              color:red;
            }
          `]
})
export class SwitchComponent implements OnInit {

  public color = "yello";
  constructor() { }

  ngOnInit() {
  }

}
