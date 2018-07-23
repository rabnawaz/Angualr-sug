
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
 


@Component({
  selector: 'app-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit{
    
    constructor(private Auth: AuthService){}

    ngOnInit(){

    }

    loginUser(event){
        event.preventDefault()
        const target = event.target
        const username = target.querySelector('#username').value
        const password = target.querySelector('#password').value

        this.Auth.getUserDetails(username , password)
        
        //console.log("username and password" , username , password)
        //console.log($event.target.value);
        
    }


}