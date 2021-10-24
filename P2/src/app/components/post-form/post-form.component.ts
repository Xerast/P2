import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Post} from 'src/app/model/post';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';


function openForm(){
  document.getElementById("myForm")!.style.display = "block";
}

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postData : Post | any;

  constructor(private postService: PostService, private route: Router) { }

  ngOnInit() {
    openForm();
  }

  addPost(input : any){
    this.postService.addPost(input)
      .subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )
  }

  cancel(){
    this.route.navigateByUrl('/post');
  }

}
