import { Component, OnInit } from '@angular/core';
import { Video } from '../interfaces/video';
import { VideosService } from '../services/videos.service';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})
export class VideosComponent implements OnInit {
  videos: Video[] = [];

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.videosService.getVideos().subscribe((data: Video[]) => {
      this.videos = data;
      console.log(this.videos);
    });
  }
}
