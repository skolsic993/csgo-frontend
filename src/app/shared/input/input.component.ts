import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() id!: string;
  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() inputType!: string;

  constructor() {}

  ngOnInit(): void {}

  public showErrors() {
    const { dirty, touched, errors } = this.control;

    return dirty && touched && errors;
  }
}
