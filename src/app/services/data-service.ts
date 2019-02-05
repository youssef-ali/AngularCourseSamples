import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{throwError, Observable, pipe} from 'rxjs';
import {catchError} from 'rxjs/operators'
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';


@Injectable({
  providedIn: 'root'
})
export class DataService {
//   private url; // = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private url:string, private http: HttpClient) {

   }

   getAll(){
    return this.http.get(this.url);
   }

   create(resource)
   {  
     return this.http.post(this.url,JSON.stringify(resource))
      .pipe(
        //  map(response => response),
        catchError(this.HandleError)
      );
   }

   update(resource){
     return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}));
   }

   delete(id){
    //    return throwError(new AppError()); // just to test Optimistic update
     return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError(this.HandleError)
     );
   }

   private HandleError(error:Response){
    if(error.status === 400){
      return throwError(new BadInputError(error.json()));
    }
    if(error.status === 404){
      return throwError(new NotFoundError(error));
    }
    return throwError(new AppError(error));
  }
}
