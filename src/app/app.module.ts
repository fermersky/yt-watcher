import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './components/right-side-bar.component';
import { PageComponent } from './components/page.component';
import { ButtonComponent } from './components/button/button.component';
import { PopupComponent } from './components/popup/popup.component';
import { PopupYtContentComponent } from './components/popup-yt-content/popup-yt-content.component';
import { VideoYTPlayerComponent } from './components/video-ytplayer.component';
import { VideosContainerComponent } from './components/videos-container.component';
import { VidRootDirective } from './directives/vid-root.directive';
import { VideoHandlersListContainerComponent } from './components/video-handlers-list-container.component';
import { VideoHandlerComponent } from './components/video-handler/video-handler.component';

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
    VideoHandlersListContainerComponent,
    VideoHandlerComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
