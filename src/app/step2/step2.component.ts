import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  saveAndContinue(text: string) {
    console.log(text);
    sessionStorage.setItem('step2', text);
    this.router.navigate(['/step3']);
  }
}
