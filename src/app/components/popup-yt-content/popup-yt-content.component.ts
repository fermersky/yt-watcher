import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/popup.service';

@Component({
  selector: 'app-popup-yt-content',
  templateUrl: './popup-yt-content.component.html',
  styleUrls: ['./popup-yt-content.component.css'],
})
export class PopupYtContentComponent implements OnInit {
  constructor(private popup: PopupService) {}

  ngOnInit(): void {}

  onAddClick(): void {
    this.popup.toggle();
  }

  onCancelClick(): void {
    this.popup.toggle();
  }
}
