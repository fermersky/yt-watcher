import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-handler',
  templateUrl: './video-handler.component.html',
  styleUrls: ['./video-handler.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoHandlerComponent implements OnInit {
  @Input() videoTitle: string;
  @Input() videoStatus: 'onPlay' | 'onPause' | 'onStop';

  @Output() onPlay = new EventEmitter();
  @Output() onPause = new EventEmitter();
  @Output() onStop = new EventEmitter();

  private actionsMap: any = {};

  constructor() {
    this.actionsMap.onPlay = () => this.onPlay.emit();
    this.actionsMap.onPause = () => this.onPause.emit();
  }

  ngOnInit(): void {}

  togglePlay(): void {
    if (this.videoStatus === 'onPlay') {
      this.onPause.emit();
      this.videoStatus = 'onPause';
    } else if (this.videoStatus === 'onPause') {
      this.onPlay.emit();
      this.videoStatus = 'onPlay';
    }
  }

  stop(): void {
    this.onStop.emit();
    this.videoStatus = 'onPause';
  }
}
