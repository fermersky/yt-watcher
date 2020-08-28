import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  popupStatus: string = 'hidden';

  constructor(private popup: PopupService) {}

  ngOnInit(): void {
    this.popup.popupStatus$.subscribe((val) => {
      this.popupStatus = val;
    });
  }
}
