import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-right-side-bar',
  template: `
    <div class="app-right-side">
      <app-videos-container></app-videos-container>
    </div>
  `,
  styles: [
    `
      .app-right-side {
        min-height: 100vh;
        background: #181818;
        padding: 0 30px;
      }
    `,
  ],
})
export class RightSideBarComponent implements OnInit {
  constructor(private videos: VideosService) {}

  ngOnInit(): void {}
}
