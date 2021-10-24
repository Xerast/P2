import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SignInData } from 'src/app/model/signInData';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
    //@ViewChild(RegistrationFormComponent) child: any;
    signInData: SignInData | any;
    
    constructor(private authenticactionService: AuthenticationService, private router: Router) { }

    ngOnInit()  {

    }
    newUser() {
        this.router.navigateByUrl(`/register`)
    }
    onsubmit(signInForm: NgForm){
        console.log(signInForm.value);
        const signInData = new SignInData(signInForm.value.username, signInForm.value.password)
        this.authenticactionService.authenticate(signInForm.value)
            .subscribe(
                resp => {
                    this.router.navigateByUrl(`/post`);
                },
                error => console.log(error)
            )
    }
}
