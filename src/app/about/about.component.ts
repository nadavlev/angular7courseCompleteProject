import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit() {
  }

  navigate(){
    this.rout.navigate(['/contact/9']);
  }

}
