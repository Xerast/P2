import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Post} from 'src/app/model/post';
import {CreatePostService} from 'src/app/services/create-post.service'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


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

  constructor(private postService: CreatePostService, private route: Router) { }

  ngOnInit() {
    openForm();
  }

  onsubmit(newPost : NgForm){
    console.log(newPost.value);
    const postData = new Post(newPost.value.id,newPost.value.title, newPost.value.body, newPost.value.res_url, newPost.value.rest_id, newPost.value.recommend, newPost.value.rating);
  }

}
