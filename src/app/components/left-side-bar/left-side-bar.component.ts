import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/popup.service';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css'],
})
export class LeftSideBarComponent implements OnInit {
  constructor(private popup: PopupService) {}

  ngOnInit(): void {}

  onAddVideoBtnClick(): void {
    this.popup.toggle();
  }
}
