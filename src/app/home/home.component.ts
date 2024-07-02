import { Component } from '@angular/core';
import { PublicacionesComponent } from "../publicaciones/publicaciones.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [PublicacionesComponent]
})
export class HomeComponent {

}
