import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './historia/principal/principal.component';
import { HeaderComponent } from './extras/header/header.component';
import { HeaderPagComponent } from './extras/header-pag/header-pag.component';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalImportanciaComponent } from './importancia/principal-importancia/principal-importancia.component';
import { PrincipalNutricionComponent } from './nutricion/principal-nutricion/principal-nutricion.component';
import { PrincipalGastronomiaComponent } from './gastronomia/principal-gastronomia/principal-gastronomia.component';
import { PrincipalSiembraComponent } from './siembra/principal-siembra/principal-siembra.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    HeaderPagComponent,
    PrincipalImportanciaComponent,
    PrincipalNutricionComponent,
    PrincipalGastronomiaComponent,
    PrincipalSiembraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
