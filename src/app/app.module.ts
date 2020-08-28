import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { PageComponent } from './components/page/page.component';
import { ButtonComponent } from './components/button/button.component';
import { PopupComponent } from './components/popup/popup.component';
import { PopupYtContentComponent } from './components/popup-yt-content/popup-yt-content.component';
import { VideoYTPlayerComponent } from './components/video-ytplayer/video-ytplayer.component';
import { VideosContainerComponent } from './components/videos-container/videos-container.component';
import { VidRootDirective } from './directives/vid-root.directive';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    PageComponent,
    ButtonComponent,
    PopupComponent,
    PopupYtContentComponent,
    VideoYTPlayerComponent,
    VideosContainerComponent,
    VidRootDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
