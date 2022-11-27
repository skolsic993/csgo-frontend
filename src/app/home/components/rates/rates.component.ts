import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss'],
})
export class RatesComponent implements OnInit {
  @Input() title: string;
  @Input() rate: string;
  @Input() average: string;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
