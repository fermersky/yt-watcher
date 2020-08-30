import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-handler',
  templateUrl: './video-handler.component.html',
  styleUrls: ['./video-handler.component.css'],
})
export class VideoHandlerComponent implements OnInit {
  @Input() videoTitle: string;
  @Input() videoStatus: string;

  @Output() onPlay = new EventEmitter();
  @Output() onPause = new EventEmitter();
  @Output() onStop = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  togglePlay(): void {
    if (this.videoStatus === 'onPlay') {
      this.onPause.emit();
    } else if (this.videoStatus === 'onPause') {
      this.onPlay.emit();
    }
  }

  stop(): void {
    this.onStop.emit();
  }
}
