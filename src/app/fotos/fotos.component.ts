import { Component, OnInit } from '@angular/core';
import { FotoCategoria } from '../interfaces/foto-categoria';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.scss',
})
export class FotosComponent implements OnInit {
  fotosCategorias: FotoCategoria[] = [];

  constructor(private route: ActivatedRoute) {
    this.fotosCategorias = this.route.snapshot.data['fotosCategorias'];
  }
  ngOnInit(): void {}
}
