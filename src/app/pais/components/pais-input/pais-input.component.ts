import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  termino:string = "";
  

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter<string>();

  @Input() placeholder:string = ""

  debouncer : Subject<string> = new Subject();

  constructor() { }

  ngOnInit(){

    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit( this.termino );
    });
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada(){
    this.debouncer.next( this.termino );
  }
}
