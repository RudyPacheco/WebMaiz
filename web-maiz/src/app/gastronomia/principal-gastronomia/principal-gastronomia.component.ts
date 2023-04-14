import { Component } from '@angular/core';
import { gastronomiaModel } from 'src/app/models/gastronomia.model';
import { cargarDatos } from 'src/app/services/cargarDatos.service';

@Component({
  selector: 'app-principal-gastronomia',
  templateUrl: './principal-gastronomia.component.html',
  styleUrls: ['./principal-gastronomia.component.css']
})
export class PrincipalGastronomiaComponent {
  alimentacion:gastronomiaModel[]=[];

  constructor(private cargar:cargarDatos){
    this.cargar.cargarGastronomia().subscribe((created:gastronomiaModel[])=>{
      this.alimentacion=created;
    })
  }
}
