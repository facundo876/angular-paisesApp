import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  public termino: string = "Hola mundo!"
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar(){
    this.hayError = false;

    this.paisService.buscarPais( this.termino )
    .subscribe( paises => {
      console.log( paises );
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = []
    })
  }
}
