import { Component, OnInit } from '@angular/core';
import { JwtService } from '../jwt.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  email:string;
  username:string;
  firstname:string;
  lastname:string;
  password:string;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private jwtService: JwtService
  ) { 
    // redirect to home if already logged in
    if (this.jwtService.loggedIn) { 
      this.router.navigate(['/']);
    }    
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    //assign forms values to variables
    this.email = this.registerForm.controls['email'].value;
    this.username = this.registerForm.controls["username"].value;
    this.firstname = this.registerForm.controls["firstname"].value;
    this.lastname = this.registerForm.controls["lastname"].value;
    this.password = this.registerForm.controls["password"].value;

    //send register request
    this.loading = true;
     await this.jwtService.register(this.email, this.username, this.password, this.firstname, this.lastname)
      .pipe(first())
      .subscribe(
        data => {
            this.jwtService.login(this.email, this.password);
            this.router.navigate(['/']);
          },
        error => {
            this.loading = false;
        });

    


  }
}