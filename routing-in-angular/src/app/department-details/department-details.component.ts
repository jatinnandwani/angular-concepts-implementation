import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router, ParamMap  } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <p>
      department-details works!
    </p>
    <h3>You selected department with = {{departmentId}}</h3>
    <p><a (click) = "goPrevious()">Previous</a></p>
    <p><a (click) = "goNext()">Next</a></p> 
    <p><a (click) = "goToDepartment()">Back</a></p>
    `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  public  departmentId;

  constructor(private route: ActivatedRoute, private router : Router ) { }

  

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    this.route.paramMap.subscribe((params : ParamMap ) => {
        let id = parseInt(params.get('id'));
        this.departmentId = id; 
    });
  }

  goPrevious(){
    let PreviousId = this.departmentId - 1;
    this.router.navigate(['/department', PreviousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department', nextId]);
  }

  goToDepartment(){
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/department', { id : selectedId, test : 'testvalue' }]); 
    this.router.navigate(['../', {id : selectedId}], { relativeTo : this.route});
  }


}
