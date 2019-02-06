import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers : any[];
  constructor(private followersService : GithubFollowersService) { }

  ngOnInit() {
     this.followersService.getAll()
      .subscribe(response => this.followers = (response as any));
  }

}
