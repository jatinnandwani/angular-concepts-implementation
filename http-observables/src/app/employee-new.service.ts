import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Iemployee } from './employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class EmployeeNewService {

  private _url : string = "/assets/data/employees.json";
  constructor(private http: HttpClient) { }


  getEmployees() : Observable<Iemployee[]>{
    return this.http.get<Iemployee[]>(this._url)
           .pipe(catchError(this.errorHandler));

  }

  errorHandler(error : HttpErrorResponse){
    return Observable.throw(error.message || "Server Error" );
  }
}

// if i change the url error will gonnaa occur and i can see that in ui