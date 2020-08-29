import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { VideosService } from 'src/app/videos.service';
import { VidRootDirective } from 'src/app/directives/vid-root.directive';
import { SubSink } from 'subsink';
import { IVideo } from 'src/app/interfaces';
import { VideoHandlerComponent } from './video-handler/video-handler.component';

@Component({
  selector: 'app-video-handlers-list-container',
  template: `<ng-template appVidRoot></ng-template>`,
})
export class VideoHandlersListContainerComponent implements OnInit, OnDestroy {
  @ViewChild(VidRootDirective, { static: true }) vidRootDir: VidRootDirective;
  private subs = new SubSink();

  constructor(private videos: VideosService, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    const viewContainerRef = this.vidRootDir.viewContainerRef;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(VideoHandlerComponent);

    this.subs.sink = this.videos.videoPlayerAttached$.subscribe((video: IVideo) => {
      const componentRef = viewContainerRef.createComponent(componentFactory);

      componentRef.instance.videoTitle = video.title;
      componentRef.instance.videoStatus = video.status;

      componentRef.instance.onPlay.subscribe((_) => this.onPlayHandler(video.videoId));
      componentRef.instance.onPause.subscribe((_) => this.onPauseHandler(video.videoId));
      componentRef.instance.onStop.subscribe((_) => this.onStopHandler(video.videoId));
    });
  }

  private onPlayHandler(videoId: string): void {
    this.videos.play(videoId);
  }

  private onPauseHandler(videoId: string): void {
    this.videos.pause(videoId);
  }

  private onStopHandler(videoId: string): void {
    this.videos.stop(videoId);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
