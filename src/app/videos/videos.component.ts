import { Component, OnInit } from '@angular/core';
import { Video } from '../interfaces/video';
import { ActivatedRoute } from '@angular/router';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [SafeUrlPipe],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})
export class VideosComponent implements OnInit {
  videos: Video[] = [];

  constructor(private route: ActivatedRoute) {
    this.videos = this.route.snapshot.data['videos'];
  }

  ngOnInit(): void {}
}
