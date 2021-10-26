import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';
import { Comment } from 'src/app/model/comment';
import { User } from 'src/app/model/user';
<<<<<<< HEAD
=======
import { UpdateCommentsService } from 'src/app/services/comments.service';
>>>>>>> 473349f0cbd285c803b61ddf328398759f2a83dc

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  posts: Post[] = [];
  comments: Comment[] = [];
<<<<<<< HEAD
=======
  id = {value: 0};
>>>>>>> 473349f0cbd285c803b61ddf328398759f2a83dc

  food = "https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/unhealthiest-foods-planet.jpg"
  constructor(private postService: PostService, private commentService: UpdateCommentsService, private router: Router) { }

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
    
    document.getElementById("commentForm")!.style.display = "block";
    
    
  }
  
  cancel(){
    document.getElementById("commentForm")!.style.display = "none";
  }

  addComment(input: any){
    console.log(input);
    this.commentService.addComment(input)
      .subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )
    
  }

  getComments(post: any){
    return post.comment;
  }
   getId(post: any){
     console.log(post.id);
     return post.id;
   }


}


