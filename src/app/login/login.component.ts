import { Component, OnInit } from '@angular/core';
import { JwtService } from '../jwt.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  email: string;
  password: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private jwtService: JwtService
  ) {
    if (this.jwtService.loggedIn) { 
      this.router.navigate(['/']);
    }
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }


    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.email = this.loginForm.controls['email'].value;
      this.password = this.loginForm.controls["password"].value;

      this.loading = true;
      this.jwtService.login(this.email, this.password);
  }
}