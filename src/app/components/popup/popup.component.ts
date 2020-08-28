import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopupService } from '../../popup.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit, OnDestroy {
  popupStatus = 'hidden';
  subs = new SubSink();

  constructor(private popup: PopupService) {}

  ngOnInit(): void {
    this.subs.sink = this.popup.popupStatus$.subscribe((val) => {
      this.popupStatus = val;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
