import {
  Component,
  Input,
  AfterViewInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-video-ytplayer',
  template: `<div class="app-yt-video"><div [id]="'video-' + videoId"></div></div>`,
  styles: [
    `
      .app-yt-video {
        padding: 10px;
        border: 2px dotted rgb(177, 177, 177);
        border-radius: 15px;
        margin: 20px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
      playerVars: { autoplay: 1, controls: 0 },
      events: {
        onReady: () => this.onPlayerReady(),
      },
    });
  }

  onPlayerReady(): void {
    this.playerInstantiated.emit(this.player);
  }
}
