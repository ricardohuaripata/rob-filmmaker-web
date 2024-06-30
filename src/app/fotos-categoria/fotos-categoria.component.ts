import { Component, OnInit } from '@angular/core';
import { Foto } from '../interfaces/foto';
import { ActivatedRoute, Router } from '@angular/router';
import { FotosService } from '../services/fotos.service';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fotosService: FotosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.fotosService
      .getFotos()
      .subscribe((fotosCategorias: FotoCategoria[]) => {
        this.fotoCategoria = fotosCategorias.find(
          (fotoCategoria) => fotoCategoria.id === id
        );
        if (!this.fotoCategoria) {
          this.router.navigate(['/fotos']);
        }
      });
  }
}
