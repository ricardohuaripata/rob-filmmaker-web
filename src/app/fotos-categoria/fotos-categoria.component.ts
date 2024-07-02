import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotoCategoria } from '../interfaces/foto-categoria';

@Component({
  selector: 'app-fotos-categoria',
  standalone: true,
  imports: [],
  templateUrl: './fotos-categoria.component.html',
  styleUrl: './fotos-categoria.component.scss',
})
export class FotosCategoriaComponent implements OnInit {
  fotoCategoria: FotoCategoria | undefined;

  constructor(private route: ActivatedRoute) {
    this.fotoCategoria = this.route.snapshot.data['fotoCategoria'];
  }

  ngOnInit(): void {}
}
