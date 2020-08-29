import { Component, OnInit, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { VideosService } from 'src/app/videos.service';
import { SubSink } from 'subsink';
import { VidRootDirective } from 'src/app/directives/vid-root.directive';
import { VideoYTPlayerComponent } from '../video-ytplayer/video-ytplayer.component';

@Component({
  selector: 'app-videos-container',
  templateUrl: './videos-container.component.html',
  styleUrls: ['./videos-container.component.css'],
})
export class VideosContainerComponent implements OnInit, OnDestroy {
  @ViewChild(VidRootDirective, { static: true }) vidRootDir: VidRootDirective;

  private subs = new SubSink();

  constructor(private videos: VideosService, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.insertLoadedIframeScript();

    const viewContainerRef = this.vidRootDir.viewContainerRef;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(VideoYTPlayerComponent);

    this.subs.sink = this.videos.videoRequested$.subscribe((videoId) => {
      const componentRef = viewContainerRef.createComponent(componentFactory);
      componentRef.instance.videoId = videoId;
      componentRef.instance.playerInstantiated.subscribe((player) =>
        this.playerInstantiated(videoId, player)
      );
    });
  }

  private playerInstantiated(videoId: string, player: any): void {
    this.videos.attachPlayer(videoId, player);
  }

  private insertLoadedIframeScript(): void {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
