import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  template: `<div>
                <h1 *ngIf="displayName; then thenBlock; else elseBlock">just checking</h1>
            </div>  
                
            <ng-template #elseBlock>
                  <h1>Else part</h1>
            </ng-template>


            <ng-template #thenBlock>
                  <h1>Then part</h1>
            </ng-template>
            `,
  styles: [`
            h1{
               color:blue;
              }
          `]
})
export class LearningComponent implements OnInit {
  
  displayName = false;

  constructor() { }

  ngOnInit() {
  }

}
