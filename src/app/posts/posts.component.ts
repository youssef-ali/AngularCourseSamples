import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';
import { throwError } from 'rxjs';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit  {

  posts : any[];
  //form: FormGroup;
  constructor(private service: PostService) { 
    
  }

  ngOnInit(){
    this.service.getAll()
    .subscribe(
      response =>{
        this.posts = (response as any[]);
      }, 
      error=>{
        alert("Unexpected error");
        console.log(error);
      });
  }
  

  createPost(input: HTMLInputElement){
    let post: any = {title: input.value};
    input.value = '';
    this.service.create(post)
      .subscribe(
        response => {
            post.id = (response as any).id; // when post variable be declared as any
            // post['id'] = (response as any).id; // when post variable be not declared as any
            this.posts.splice(0,0,post);
        },
        (error: AppError) =>{
          if(error instanceof BadInputError)
            {
              // this.form.setErrors(error.originalError); // in case there is form
            }
          else{
            alert("Unexpected error");
            console.log(error);  
          }
        })
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(response => {
        console.log(response);
      });

        // this.http.put(this.url + '/' + post.id, JSON.stringify(post))
        //   .subscribe(response => {
        //     console.log(response);
        //   });
  }

  deletePost(post){
    this.service.delete(post.id)
      .subscribe(
        response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1); 
      },
      (error: AppError) =>{
        if(error instanceof NotFoundError)
          // handling expected errors
          alert('This post has already been deleted.');
         else{   
           throw error;              
        // ------ commented to use global AppErrorHandler
        //   // handling unexpected errors
        //   alert("Unexpected error");
        //   console.log(error);  
         }
      });
  }

}
