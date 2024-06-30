import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FotoCategoria } from '../interfaces/foto-categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FotosService {
  private jsonUrl = 'fotos.json';

  constructor(private http: HttpClient) {}

  getFotos(): Observable<FotoCategoria[]> {
    return this.http.get<FotoCategoria[]>(this.jsonUrl);
  }
}
