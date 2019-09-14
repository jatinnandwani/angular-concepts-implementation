import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: `
              <div>
                <h1>
                  ng for
                </h1>
              </div>
              
              <!-- <div *ngFor="let color of colors; index as i">
                <h1>{{i}} {{color}}</h1>
              </div>
              
              <div *ngFor="let color of colors; first as f">
                <h1>{{f}} {{color}}</h1>
              </div> -->
              
              
              <div *ngFor="let color of colors; odd as o">
                <h1>{{o}} {{color}}</h1>
              </div>`,
  styles: [`
          h1{
            color:red;
          }
          `]
})
export class NgforComponent implements OnInit {

  public colors=["red","blue","green","yellow"];

  constructor() { }

  ngOnInit() {
  }

}
