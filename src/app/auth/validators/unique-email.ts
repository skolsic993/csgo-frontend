import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueEmail implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: AbstractControl) => {
    const { value } = control;

    return this.authService.emailAvailable(value).pipe(
      map((value) => {
        return null;
      }),
      catchError((err) => {
        return err.error.message
          ? of({ nonUniqueEmail: true })
          : of({ noConnection: true });
      })
    );
  };
}
