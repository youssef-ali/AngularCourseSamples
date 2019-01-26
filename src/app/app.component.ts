import { Component } from '@angular/core';
import { FavoritChangedEventArgs } from './favorite/favorite.component';
import { tweet } from './twitter-like/twitter-like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title : 'hello-world By Youssef',
    isFavorite: true,
  }

  onFavoriteChanged(eventArgs: FavoritChangedEventArgs){
    console.log("Favorite is changed: ", eventArgs);
  }
  
  // Twitter like assignment - section 5
  tweet ={
          body : 'This is the body of a tweet...',
          isLiked: false,
          likesCount:99
        };
        onChangeLike(eventArgs: tweet){
          this.tweet.isLiked = eventArgs.isLiked;
          this.tweet.likesCount = eventArgs.likesCount;
        }
}
