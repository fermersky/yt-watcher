import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PopupService {
  private popupStatus: 'visible' | 'hidden';

  private subject = new Subject<string>();
  public popupStatus$: Observable<string>;

  constructor() {
    this.popupStatus$ = this.subject.asObservable();
  }

  toggle(): void {
    this.popupStatus = this.popupStatus === 'visible' ? 'hidden' : 'visible';
    this.subject.next(this.popupStatus);
  }
}
