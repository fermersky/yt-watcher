import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { IVideo } from './interfaces';

@Injectable({ providedIn: 'root' })
export class VideosService {
  public videos: IVideo[] = [];

  private subject = new Subject<string>();
  public videoAttached$: Observable<string>;

  constructor() {
    this.videoAttached$ = this.subject.asObservable();
  }

  addFromUrl(url: string): void {
    const { v } = this.getParamsFromUrl(url);
    const videoId = v;

    this.subject.next(videoId);
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
