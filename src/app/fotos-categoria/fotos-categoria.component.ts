import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotoCategoria } from '../interfaces/foto-categoria';
import { GalleriaModule } from 'primeng/galleria';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-fotos-categoria',
  standalone: true,
  imports: [GalleriaModule, MatGridListModule],
  templateUrl: './fotos-categoria.component.html',
  styleUrl: './fotos-categoria.component.scss',
})
export class FotosCategoriaComponent implements OnInit {
  fotoCategoria: FotoCategoria | undefined;
  displayCustom: boolean = false;
  activeIndex: number = 0;

  constructor(private route: ActivatedRoute) {
    this.fotoCategoria = this.route.snapshot.data['fotoCategoria'];
  }

  ngOnInit(): void {}

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
