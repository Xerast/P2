import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewUserService } from 'src/app/services/new-user.service';

function openNewUserForm(){
  document.getElementById("myNewUserForm")!.style.display = "block";
}

function closeNewUserForm(){
  document.getElementById("myNewUserForm")!.style.display = "none";
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private userService: NewUserService, private router: Router) { }

  ngOnInit(): void {
  }

  user = {username: "", password: ""}

  addUser(input : any){
    console.log(input)
    this.userService.addUser(input)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigateByUrl('')
        },
        err => console.log(err)
      )
  }
  newUser(){
      openNewUserForm();
    }
  cancel(){
    closeNewUserForm();
    this.router.navigateByUrl('')
  }
  
}

