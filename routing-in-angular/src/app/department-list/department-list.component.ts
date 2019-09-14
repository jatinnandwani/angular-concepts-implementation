import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `<div><h1>Department list</h1>
              <ul class="badges">
              <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor = "let department of departments">
              <span class="badge">{{department.id}}</span> {{department.name}}</li>
              </ul>
              </div>`,
  styles: [`
        h1{
          color:red;
        }
        .item li.selected {
          color:pink;
          }`]
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  departments = [
        {"id": "1","name":"angular"},
        {"id": "2","name":"node"},
        {"id": "3","name":"MongoDB"},
        {"id": "4","name":"Ruby"},
        {"id": "5","name":"Bootsrap"}
  ]  
  constructor( private router: Router, private route : ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap ) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id; 
  });
  }

  onSelect(department){
    //this.router.navigate(['/department',department.id]);
    this.router.navigate([department.id] , { relativeTo : this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
