import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test',
  template: `    
                 <!--<h2>{{parentData}}</h2>-->
                 <h2>{{name}}</h2>
                 <button (click)="fireEvent()">Send Event</button>
              `,
  styles: []
})
export class TestComponent implements OnInit {

  //@Input() public parentData;
  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();
  
  fireEvent(){
        this.childEvent.emit('This is new send from child');
  }
  constructor() { }

  ngOnInit() {
  }

}



// *IMPORTANT NOTES*
//Component Interaction 
//This means how component talks to each other there can be a scenario that
//Parent component output has to send to child component 
//Or vice versa
//So in this we have two components one which i made and another one by default
//test component which i made 



// video talks 
// sending data from parent component to child component
// From root component ie' app component to test component we have to use 
// input 
// From the child to root we have to use events like Event Emitter 
// *IMPORTANT NOTES*