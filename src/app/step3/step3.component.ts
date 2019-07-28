import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  step1Data: string;
  step2Data: string;
  constructor() { }

  ngOnInit() {
    this.step1Data = sessionStorage.getItem('step1');
    this.step2Data = sessionStorage.getItem('step2');
  }

}
