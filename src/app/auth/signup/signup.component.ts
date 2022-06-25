import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { UniqueEmail } from './../validators/unique-email';
import { MatchPassword } from './../validators/match-password';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Z0-9]+$/),
      ]),
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
          Validators.email,
        ],
        [this.uniqueEmail.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  constructor(
    private matchPassword: MatchPassword,
    private uniqueEmail: UniqueEmail,
    private primengConfig: PrimeNGConfig,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    this.authService.signup(this.signUpForm.value).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        !err.status
          ? this.signUpForm.setErrors({ noConnection: true })
          : this.signUpForm.setErrors({ unknownError: true });
      },
    });
  }
}
