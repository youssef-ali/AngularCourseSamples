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
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {

   }

   getPosts(){
    return this.http.get(this.url);
   }

   createPost(post)
   {  
     return this.http.post(this.url,JSON.stringify(post))
      .pipe(
        catchError(
          (error: Response, caught)=>{
            if(error.status === 400){
              return throwError(new BadInputError(error.json()));
            }
            return throwError(new AppError(error.json()));
          }
        )
      );
   }

   updatePost(post){
     return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
   }
   deletePost(id){
     return this.http.delete(this.url + 'abc/' + id)
      .pipe(
        catchError(
          (error:Response, caught)=>{
            // if(error.status === 404){
            //   return throwError(new NotFoundError(error));
            // }
            return throwError(new AppError(error));
          }
        )
     );
   }
}
