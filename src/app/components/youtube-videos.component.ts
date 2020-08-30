import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  template: `
    <app-page>
      <app-left-side-bar></app-left-side-bar>
      <app-right-side-bar></app-right-side-bar>
    </app-page>

    <app-popup>
      <app-popup-yt-content></app-popup-yt-content>
    </app-popup>
  `,
})
export class YoutubeVideosComponent {
  constructor() {}
}
