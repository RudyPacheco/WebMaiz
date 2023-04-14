import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { alimentacionModel } from "../models/alimentacion.model";
import { nutricionModel } from "../models/nutricion.model";
import { gastronomiaModel } from "../models/gastronomia.model";

@Injectable({
    providedIn:'root'
})


export class cargarDatos{

    readonly APY_URL = "http://localhost/webMaiz/peticion.php";



    constructor(private httpClient: HttpClient) {  }


    public cargarHistoria(): Observable<string>{
        return this.httpClient.get<string>(this.APY_URL);      
    }

    public cargarAlimentacion(): Observable<alimentacionModel[]>{
        return this.httpClient.get<alimentacionModel[]>(this.APY_URL+"?Importancia");      
    }

    public cargarNutricion(): Observable<nutricionModel[]>{
        return this.httpClient.get<nutricionModel[]>(this.APY_URL+"?Alimentacion");      
    }

    public cargarGastronomia(): Observable<gastronomiaModel[]>{
        return this.httpClient.get<gastronomiaModel[]>(this.APY_URL+"?Gastronomia");      
    }


}   



