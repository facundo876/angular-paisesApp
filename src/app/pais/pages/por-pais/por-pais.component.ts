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

  public termino: string = ""
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ){
    this.hayError = false;

    this.termino = termino;
    this.paisService.buscarPais( this.termino )
    .subscribe( paises => {
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = []
    })
  }

  sugerencia(termino:string ){
    console.log("sigerencia:" + termino)
  }
}
