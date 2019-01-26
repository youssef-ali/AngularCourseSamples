import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'twitter-like',
  templateUrl: './twitter-like.component.html',
  styleUrls: ['./twitter-like.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom 
})
export class TwitterLikeComponent implements OnInit {

  // tweet ={
  //   body : 'Here is the body of a tweet...',
  //   isLiked: false,
  //   likesCount:0
  // };

  @Input("isActive") isActive: boolean;
  @Input("likesCount") likesCount: number;
  @Output("change") changeLike = new EventEmitter();

  
   clickLike(){
    this.isActive = !this.isActive;
    this.likesCount = this.isActive? ++this.likesCount : --this.likesCount;
    this.changeLike.emit({isLiked: this.isActive, likesCount: this.likesCount});
  }
  constructor() { }

  ngOnInit() {
  }

}

export interface tweet {
    body : string,
    isLiked: boolean,
    likesCount: number
};
