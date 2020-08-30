import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideosService } from 'src/app/videos.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private videos: VideosService) {}

  playAll(): void {
    this.videos.playAll();
  }

  pauseAll(): void {
    this.videos.pauseAll();
  }

  stopAll(): void {
    this.videos.stopAll();
  }
}
