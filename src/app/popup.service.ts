import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PopupService {
  public popupStatus: 'visible' | 'hidden';

  constructor() {}

  toggle(): void {
    this.popupStatus = this.popupStatus === 'visible' ? 'hidden' : 'visible';
  }
}
