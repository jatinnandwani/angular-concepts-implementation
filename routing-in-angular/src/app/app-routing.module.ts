import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';


const routes: Routes = [
    { path : '' , redirectTo: '/department-list', pathMatch: 'full'},
    { path : 'department-list' , component : DepartmentListComponent},
    { path : 'employee', component : EmployeeListComponent},
    { path : 'department-list/:id',component : DepartmentDetailsComponent},
    { path : "**", component :PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,EmployeeListComponent,PageNotFoundComponent,DepartmentDetailsComponent]


//path : "**" (Wild card route), we are giving the routing configuration if the url not 
//it will redirect to page not found component and most important it should 
//be given in the last otherwise it will redirect to page not found 
//the correct url also, beacuse it check the routes object from the top to
//bottom


//path : '', if we want to give the component by default
//The preferred solution to give default is by redirect to url  
//pathMatch = 'prefix' tells the router to match the redirect route
//when the remaining URL begins with the redirect route's prefix path.
//pathMatch: 'full' means, that the whole URL path needs to match


//25 lecture continues
//Routes parameteres
//Like i am having list of
//Angular, node, mongoDb, Ruby, Bootstrap
// When i click on angular it should angular details
// when i click on node, it should open node details