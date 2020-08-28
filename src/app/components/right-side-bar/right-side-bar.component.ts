import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../videos.service';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.css'],
})
export class RightSideBarComponent implements OnInit {
  constructor(private videos: VideosService) {}

  ngOnInit(): void {}
}
