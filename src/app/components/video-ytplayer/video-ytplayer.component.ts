import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video-ytplayer',
  templateUrl: './video-ytplayer.component.html',
  styleUrls: ['./video-ytplayer.component.css'],
})
export class VideoYTPlayerComponent implements AfterViewInit {
  @Input() videoId: string;

  constructor() {}

  ngAfterViewInit(): void {
    const player = new (window as any).YT.Player(`video-${this.videoId}`, {
      height: '200',
      width: '300',
      videoId: this.videoId,
      events: {
        onReady: this.onPlayerReady,
      },
    });
  }

  onPlayerReady(e): void {
    e.target.playVideo();
  }
}
