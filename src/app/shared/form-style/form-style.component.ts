import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-style',
  templateUrl: './form-style.component.html',
  styleUrls: ['./form-style.component.scss'],
})
export class FormStyleComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() formLink!: string;
  @Input() joinUs!: string;

  constructor() {}

  ngOnInit(): void {}
}
