import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../interfaces/video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private jsonUrl = 'videos.json';

  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.jsonUrl);
  }
}
