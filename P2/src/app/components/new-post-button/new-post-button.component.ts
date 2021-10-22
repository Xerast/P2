import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post-button',
  templateUrl: './new-post-button.component.html',
  styleUrls: ['./new-post-button.component.css']
})
export class NewPostButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newPost(){
    this.router.navigateByUrl(`/post-form`);
  }

}
