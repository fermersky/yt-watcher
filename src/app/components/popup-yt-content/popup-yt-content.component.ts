import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PopupService } from 'src/app/popup.service';
import { VideosService } from 'src/app/videos.service';

@Component({
  selector: 'app-popup-yt-content',
  templateUrl: './popup-yt-content.component.html',
  styleUrls: ['./popup-yt-content.component.css'],
})
export class PopupYtContentComponent implements OnInit {
  @ViewChild('urlField') urlField: ElementRef;
  constructor(private popup: PopupService, private videos: VideosService) {}

  ngOnInit(): void {}

  onAddClick(): void {
    const url = this.urlField.nativeElement.value;

    if (!url) return;

    this.videos.addFromUrl(url);

    this.toggleAndClear();
  }

  onCancelClick(): void {
    this.toggleAndClear();
  }

  toggleAndClear(): void {
    this.popup.toggle();
    this.urlField.nativeElement.value = '';
  }
}
