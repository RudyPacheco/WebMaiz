import { Component } from '@angular/core';
import { alimentacionModel } from 'src/app/models/alimentacion.model';
import { cargarDatos } from 'src/app/services/cargarDatos.service';

@Component({
  selector: 'app-principal-importancia',
  templateUrl: './principal-importancia.component.html',
  styleUrls: ['./principal-importancia.component.css']
})
export class PrincipalImportanciaComponent {
  definicion:string="Desde los antiguos mayas el maíz ha sido uno de los componentes básicos en nuestra dieta, ha sido sustento sagrado de nuestro pueblo, ya que con su producción se asentaron nuestras comunidades; se generaron ciencia, tecnología, arte, pero, sobre todo, se estableció una sagrada comunión con la madre naturaleza y se tejieron profundos lazos de familiaridad en la sociedad, refiere el historiador e investigador Luis Villar Anleu.";
  
  alimentacion:alimentacionModel[]=[];

  constructor(private cargar:cargarDatos){
    this.cargar.cargarAlimentacion().subscribe((created:alimentacionModel[])=>{
      this.alimentacion=created;
    })
  }
}
