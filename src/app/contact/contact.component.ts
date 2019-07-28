import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  sub: Subscription;
  constructor(private ar: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.ar.params.subscribe( data => {
      console.log(data);
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
