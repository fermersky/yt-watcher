import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { IVideo } from './interfaces';

@Injectable({ providedIn: 'root' })
export class VideosService {
  private videos: IVideo[] = [];

  private reqSubject = new Subject<string>();
  public videoRequested$: Observable<string>;

  private plSubject = new Subject<IVideo>();
  public videoPlayerAttached$: Observable<IVideo>;

  constructor() {
    this.videoRequested$ = this.reqSubject.asObservable();
    this.videoPlayerAttached$ = this.plSubject.asObservable();
  }

  addFromUrl(url: string): void {
    const { v } = this.getParamsFromUrl(url);
    const videoId = v;

    this.videos.push({ videoId, status: 'onPlay', title: '', player: {} });
    this.reqSubject.next(videoId);
  }

  attachPlayer(videoId: string, player: any): void {
    const index = this.videos.findIndex((v) => v.videoId === videoId);
    const { title } = player.playerInfo.videoData;

    this.videos[index] = { ...this.videos[index], player, title };

    this.plSubject.next(this.videos[index]);
  }

  play(videoId: string): void {
    const index = this.videos.findIndex((v) => v.videoId === videoId);

    this.videos[index].status = 'onPlay';
    this.videos[index].player.playVideo();
  }

  pause(videoId: string): void {
    const index = this.videos.findIndex((v) => v.videoId === videoId);

    this.videos[index].status = 'onPause';
    this.videos[index].player.pauseVideo();
  }

  stop(videoId: string): void {
    const index = this.videos.findIndex((v) => v.videoId === videoId);

    this.videos[index].status = 'onStop';
    this.videos[index].player.stopVideo();
  }

  private getParamsFromUrl(url: string): any {
    const paramsString = url.split('?')[1];
    const paramsArray = paramsString.split('&');

    const paramsMap = {};

    for (const param of paramsArray) {
      const [key, value] = param.split('=');
      paramsMap[key] = value;
    }

    return paramsMap;
  }
}
