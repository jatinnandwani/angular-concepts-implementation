import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `<div>
                <h1>PIPES CONCEPT</h1>
                <h2>{{ name }}</h2>
                <h2>{{ name | lowercase }}</h2>
                <h2>{{ name | uppercase }}</h2>
                <h2>{{ message | titlecase }}</h2>
                <h2>{{ name | slice:3:5 }}</h2>
                <h2>{{ company | json }}</h2>
      <!-- number pipes -->
      <!-- minimum digits we want.minimum digits at decimal place - maximum digits at decimal place -->
                <h2>{{5.678 | number:'1.2-3'}}</h2>
                <h2>{{5.678 | number:'3.4-5'}}</h2>
                <h2>{{5.678 | number:'3.1-2'}}</h2>
      <!-- Percent pipes -->
                <h2>{{0.25 | percent }}</h2>
      <!-- Percent pipes -->
                <h2>{{0.25 | currency }}</h2>     
                <h2>{{0.25 | currency:'INR' }}</h2>
                <h2>{{0.25 | currency:'INR' : 'code' }}</h2>
      <!-- Date pipes -->
                <h2>{{ date }}</h2>
                <h2>{{ date | date:'short'}}</h2> 
                <h2>{{ date | date:'shortDate'}}</h2>
                <h2>{{ date | date:'shortTime'}}</h2>                  
              </div>`,
  styles: [``]
})
export class PipesComponent implements OnInit {
  public name="POSTMAN";
  public message="I want to be at";
  public company ={
                      "firstname" : "jatin",
                      "lastname" : "nandwani"
                  }

  public date = new Date;
  constructor() { }

  ngOnInit() {
  }

}


//Important Points
//Pipes concept - It helps us to transform the data before showing into view
//this can be done by build in pipes (by default which comes in angular)
// 5* point to be noted Pipes will transform the data only for view not the actual value
