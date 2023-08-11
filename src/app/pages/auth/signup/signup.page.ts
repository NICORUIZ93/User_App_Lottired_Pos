import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninPage } from '../signin/signin.page';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  registrationForm!: FormGroup;
  component = SigninPage;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private login: LoginService
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      firstLastName: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      termsConditions: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.login.signup(this.registrationForm.value);
      console.log(this.registrationForm.value);
    }
  }
}
