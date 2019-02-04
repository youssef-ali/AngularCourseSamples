import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

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
    this.service.getPosts()
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
    this.service.createPost(post)
      .subscribe(
        response => {
            post.id = (response as any).id; // when post variable be declared as any
            // post['id'] = (response as any).id; // when post variable be not declared as any
            this.posts.splice(0,0,post);
        },
        (error: Response) =>{
          if(error.status === 400)
            {
              //this.form.setErrors(error.json()); // in case there is form
            }
          else{
            alert("Unexpected error");
            console.log(error);  
          }
        })
  }

  updatePost(post){
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      });

        // this.http.put(this.url + '/' + post.id, JSON.stringify(post))
        //   .subscribe(response => {
        //     console.log(response);
        //   });
  }

  deletePost(post){
    this.service.deletePost(post.id)
      .subscribe(
        response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1); 
      },
      (error: Response) =>{
        if(error.status === 404)
        // handling expected errors
          alert('This post has already been deleted.');
        else{
          // handling unexpected errors
          alert("Unexpected error");
          console.log(error);  
        }
      });
  }

}
