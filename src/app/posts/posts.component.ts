import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {

  posts : any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { 
    http.get(this.url)
      .subscribe(response =>{
        this.posts = (response as any[]);
    });
  }
  

  createPost(input: HTMLInputElement){
    let post: any = {title: input.value};
    input.value = '';
    this.http.post(this.url,JSON.stringify(post))
      .subscribe(response => {
        post.id = (response as any).id; // when post variable be declared as any
        // post['id'] = (response as any).id; // when post variable be not declared as any
        this.posts.splice(0,0,post);
    })
  }

  updatePost(post){
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      .subscribe(response => {
        console.log(response);
      });

        // this.http.put(this.url + '/' + post.id, JSON.stringify(post))
        //   .subscribe(response => {
        //     console.log(response);
        //   });
  }

  deletePost(post){
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1); 
      });
  }

}
