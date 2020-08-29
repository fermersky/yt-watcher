import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/videos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private videos: VideosService) {}

  ngOnInit(): void {}
}
