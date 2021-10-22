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
    var idRest: number;
    idRest = 1;
    const postData = new Post(idRest,newPost.value.title, newPost.value.postImage, newPost.value.recommend, newPost.value.stars);
    
  }

  cancel(){
    this.route.navigateByUrl('/post');
  }

}
