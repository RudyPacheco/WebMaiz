import { Component } from '@angular/core';
import { nutricionModel } from 'src/app/models/nutricion.model';
import { cargarDatos } from 'src/app/services/cargarDatos.service';

@Component({
  selector: 'app-principal-nutricion',
  templateUrl: './principal-nutricion.component.html',
  styleUrls: ['./principal-nutricion.component.css']
})
export class PrincipalNutricionComponent {
  alimentacion:nutricionModel[]=[];

  constructor(private cargar:cargarDatos){
    this.cargar.cargarNutricion().subscribe((created:nutricionModel[])=>{
      this.alimentacion=created;
    })
  }
}
