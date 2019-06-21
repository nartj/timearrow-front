import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }


  public logout(){
    localStorage.removeItem('access_token');
    this.router.navigate(['/']);
  }
}
