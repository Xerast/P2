import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';
import { Comment } from 'src/app/model/comment';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  posts: Post[] = [];
  comments: Comment[] = [];

  food = "https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/unhealthiest-foods-planet.jpg"
  constructor(private postService: PostService, private router: Router) { }

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
          console.log(this.posts);
        },
        err => console.log(err)
      )
    
  }

  gotoComment(){
    // this.router.navigateByUrl(`/comment`)
    document.getElementById("commentForm")!.style.display = "block";
  }
  
  cancel(){
    document.getElementById("commentForm")!.style.display = "none";
  }

  addComment(input: any){
    document.getElementById("commentForm")!.style.display = "none";
  }

  getComments(post: any){
    return post.comment;
  }
  

}
