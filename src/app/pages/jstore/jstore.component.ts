import { Observable } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/Post';

@Component({
  selector: 'app-jstore',
  templateUrl: './jstore.component.html',
  styleUrls: ['./jstore.component.scss']
})
export class JstoreComponent implements OnInit {

  posts:Post[] = [];

  constructor(private postService:PostService){
    let postsObservable:Observable<Post[]>;
    postsObservable = postService.getAll();

    postsObservable.subscribe((serverPosts) => {
      this.posts = serverPosts;
    })
  }

  // constructor(){ }

  ngOnInit(): void {
  }

}
