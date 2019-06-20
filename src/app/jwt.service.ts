import { Injectable } from '@angular/core';
import { tap, last } from 'rxjs/operators';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class JwtService {

    private apiUrlUser = "http://localhost:81/user";
    private apiUrlLogin = "http://localhost:81/login";

    constructor(
      private httpClient: HttpClient,
      private router: Router
    ) { }

    register(email:string, username:string, password:string, firstname:string, lastname:string) {   
      var parameter = JSON.stringify({"username":username, "password":password, "email":email, "firstName":firstname, "lastName":lastname});

      return this.httpClient.post<{access_token: string}>
      (this.apiUrlUser, 
        parameter)
        /*.pipe(tap(res => {
          this.login(email, password)
        }))*/
    }

    login(email:string, password:string){
      var parameter = JSON.stringify({"email":email, "password":password});
      const requestOptions: Object = {
        responseType: 'text'
      }


      return this.httpClient.post<string>
      (this.apiUrlLogin,
        parameter,
        requestOptions
        )
        .pipe(first())
        .subscribe(
        data => {
          localStorage.setItem('access_token', data);
          this.router.navigate(['/']);
        });
    }

    logout() {
      localStorage.removeItem('access_token');
    }

    public get loggedIn(): boolean{
      return localStorage.getItem('access_token') !==  null;
    }
}