import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideosService } from 'src/app/videos.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  constructor(private videos: VideosService) {}

  ngOnInit(): void {}

  playAll(): void {
    this.videos.playAll();
  }

  pauseAll(): void {
    this.videos.pauseAll();
  }

  stopAll(): void {
    this.videos.stopAll();
  }

  ngOnDestroy(): void {}
}
