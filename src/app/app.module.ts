import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { YoutubeVideosComponent } from './components/youtube-videos.component';
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
import { HeaderComponent } from './components/header/header.component';
import { ErrorPipe } from './pipes/error.pipe';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormFieldErrorsComponent } from './components/form-field-errors/form-field-errors.component';

const routes: Routes = [
  { path: 'youtube', component: YoutubeVideosComponent },
  { path: 'form', component: FormBuilderComponent },
  { path: '', pathMatch: 'full', redirectTo: 'youtube' },
];

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
    HeaderComponent,
    YoutubeVideosComponent,
    FormBuilderComponent,
    ErrorPipe,
    FormFieldErrorsComponent,
  ],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes), ReactiveFormsModule],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
