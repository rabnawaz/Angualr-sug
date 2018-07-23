import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    myData : any;
    constructor(private http: Http){

    }
    
    getUserDetails(username, password){
        this.http.get('http://localhost/SugarApi.php', {})
        .subscribe(
        (data) => {
            data = JSON.parse(data['_body']);
            //console.log(data); 
            this.myData = data;

           console.log("My data", data);
        },
        err => console.log(err), // error
        () => console.log('getUserStatus Complete') // complete
    );
    }
}