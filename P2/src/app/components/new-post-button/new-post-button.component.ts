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
    var idRest: number;
    idRest = 1;
    const postData = new Post(idRest,newPost.value.title, newPost.value.postImage, newPost.value.recommend, newPost.value.stars);
    console.log(postData);
  }

  cancel(){
    closeForm();
  }

}
