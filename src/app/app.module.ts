import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { PageComponent } from './components/page/page.component';
import { ButtonComponent } from './components/button/button.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [AppComponent, LeftSideBarComponent, RightSideBarComponent, PageComponent, ButtonComponent, PopupComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
