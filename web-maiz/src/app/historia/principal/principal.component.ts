import { Component } from '@angular/core';
import { alimentacionModel } from 'src/app/models/alimentacion.model';
import { cargarDatos } from 'src/app/services/cargarDatos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  historia:string="";
  alimentacion:alimentacionModel[]=[];

  constructor(private cargar:cargarDatos){
    this.cargar.cargarAlimentacion().subscribe((created:alimentacionModel[])=>{
      this.alimentacion=created;
    })
  }


}
