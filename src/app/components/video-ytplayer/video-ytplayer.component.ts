import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-ytplayer',
  templateUrl: './video-ytplayer.component.html',
  styleUrls: ['./video-ytplayer.component.css'],
})
export class VideoYTPlayerComponent implements AfterViewInit {
  @Input() videoId: string;
  @Output() playerInstantiated = new EventEmitter<any>();

  player: any = {};

  constructor() {}

  ngAfterViewInit(): void {
    this.player = new (window as any).YT.Player(`video-${this.videoId}`, {
      height: '200',
      width: '300',
      videoId: this.videoId,
      events: {
        onReady: () => this.onPlayerReady(),
      },
    });
  }

  onPlayerReady(): void {
    this.player.playVideo();
    this.playerInstantiated.emit(this.player);
  }
}
