import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];

  img : string = "assets/images/restaurantlikes.png";

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getImage(){
    
  }
  getPosts(){
    this.postService.getPosts()
      .subscribe(
        res => {
          this.posts = res;
        },
        err => console.log(err)
      )
    
  }

  

}
