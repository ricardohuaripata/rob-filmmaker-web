import { Component, OnInit } from '@angular/core';
import { FotoCategoria } from '../interfaces/foto-categoria';
import { FotosService } from '../services/fotos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.scss',
})
export class FotosComponent implements OnInit {
  fotosCategorias: FotoCategoria[] = [];

  constructor(private fotosService: FotosService) {}
  ngOnInit(): void {
    this.fotosService.getFotos().subscribe((data: FotoCategoria[]) => {
      this.fotosCategorias = data;
    });
  }
}
