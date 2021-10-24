import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {
  invokeEvent: Subject<any> = new Subject(); 

  addUser(input : any) { 
    this.invokeEvent.next(someValue)  
  }
}
