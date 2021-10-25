import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateCommentsService } from 'src/app/services/comments.service';


function openForm(){
  document.getElementById("myForm")!.style.display = "block";
}

function closeForm(){
  document.getElementById("myForm")!.style.display = "none";
}

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private router: Router, private commentService: UpdateCommentsService) { }

  ngOnInit(): void {
  }
  newComment(){
    openForm();
  }
  addComment(input: any){

  }
  cancel(){
    closeForm();
  }
}
