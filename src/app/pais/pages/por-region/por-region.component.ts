import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin: 3px
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['EU',
  'EFTA',
  'CARICOM',
  'PA',
  'AU',
  'USAN',
  'EEU',
  'AL',
  'ASEAN',
  'CAIS',
  'CEFTA',
  'NAFTA',
  'SAARC'];
  regionActiva:string = '';
  public hayError: boolean = false;
  paises:Country[] = [];

  constructor( private paisService: PaisService ) { }

  getCssClass( region:string ): string{
    return ( region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  ngOnInit(): void {
  }

  activarRegion( region:string ){

    if( region == this.regionActiva ) { return; }

    this.regionActiva = region;
    this.hayError = false;
    
    this.buscar( region ); 

  }
  
  private buscar( region: string ){

    this.paises = [];

    this.paisService.buscarRegion( region )
    .subscribe( paises => { this.paises = paises });
  }

}
