import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Post} from 'src/app/model/post';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';


function openForm(){
  console.log("inside openform")
  document.getElementById("myForm")!.style.display = "block";
}

function closeForm(){
  document.getElementById("myForm")!.style.display = "none";
}

@Component({
  selector: 'app-new-post-button',
  templateUrl: './new-post-button.component.html',
  styleUrls: ['./new-post-button.component.css']
})
export class NewPostButtonComponent implements OnInit {
  postData : Post | any;

  constructor(private router: Router,
    private postService: PostService) { }

  ngOnInit(): void{
  }

  newPost(){
    openForm();
  }

  addPost(input : any){
    console.log(input)
    this.postService.addPost(input)
      .subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )
  }

  cancel(){
    closeForm();
  }

}
