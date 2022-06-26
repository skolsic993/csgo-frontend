import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  authForm: FormGroup = new FormGroup(
    {
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
          Validators.email,
        ],
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    },
  );

  constructor(
    private primengConfig: PrimeNGConfig,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    this.authService.signin(this.authForm.value).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        err.error && this.authForm.setErrors({ credentials: true })
        }
      })
  }

}
