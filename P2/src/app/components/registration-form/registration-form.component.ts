import { Component, OnInit } from '@angular/core';
import { NewUserService } from 'src/app/services/new-user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private userService: NewUserService) { }

  ngOnInit(): void {
  }

  addUser(){
    
  }
}
