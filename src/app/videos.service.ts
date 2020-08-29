import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { IVideo } from './interfaces';

@Injectable({ providedIn: 'root' })
export class VideosService {
  public videos: IVideo[] = [];

  private subject = new Subject<string>();
  public videoRequested$: Observable<string>;

  constructor() {
    this.videoRequested$ = this.subject.asObservable();
  }

  addFromUrl(url: string): void {
    const { v } = this.getParamsFromUrl(url);
    const videoId = v;

    this.videos.push({ videoId, status: 'onPlay', title: '', player: {} });
    this.subject.next(videoId);
  }

  attachPlayer(videoId: string, player: any): void {
    const index = this.videos.findIndex((v) => v.videoId === videoId);
    const { title } = player.playerInfo.videoData;

    this.videos[index] = { ...this.videos[index], player, title };
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
