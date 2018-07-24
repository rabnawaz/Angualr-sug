
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
 


@Component({
  selector: 'app-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit{
    items: any;
    constructor(private Auth: AuthService){}

    ngOnInit(){
        const self = this;
        this.Auth.getUserDetails('','', function(data) {
            self.items = data;
        });
    }

    loginUser(event){
        event.preventDefault()
        const target = event.target
        const username = target.querySelector('#username').value
        const password = target.querySelector('#password').value

        this.Auth.getUserDetails(username , password, null)
        
        //console.log("username and password" , username , password)
        //console.log($event.target.value);
        
    }


}