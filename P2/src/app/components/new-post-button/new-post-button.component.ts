import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Post} from 'src/app/model/post';
import {CreatePostService} from 'src/app/services/create-post.service'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


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

  constructor(private router: Router) { }

  ngOnInit(): void{
  }

  newPost(){
    openForm();
  }

  onsubmit(newPost : NgForm){
    console.log(newPost.value);
    const postData = new Post(newPost.value.id,newPost.value.title, newPost.value.body, newPost.value.res_url, newPost.value.rest_id, newPost.value.recommend, newPost.value.rating);
  }

  cancel(){
    closeForm();
  }

}
