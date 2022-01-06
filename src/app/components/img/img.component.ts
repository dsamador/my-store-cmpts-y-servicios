import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = '../../../assets/default.png';

  constructor() {
    /* Antes de renderizar */
    /* importante no correr cosas async, este constructor corre solo una vez */
    console.log('constructor', 'imgValue =>', this.img)
  }
  ngOnChanges(): void {
    //corre antes de renderizar y durante el renderizado
    //vigila los cambios en los @Inputs, es un escuchador
    console.log('ngOnchanges', 'imgValue =>', this.img)
  }
  ngOnInit(): void {
    //antes del render, se pueden hacer llamadas async, corre una sola vez
    console.log('ngOnInit', 'imgValue =>', this.img)
  }
  ngAfterViewInit(){
    //despues de que el html de los hijos de este componente se han renderizado,
    //normalmente aqui se ponen a los hijos cuando queremos hacer algo de logica
    console.log('ngOnInit', 'imgValue =>', this.img)
  }
  ngOnDestroy(){
    //Evento que se ejecuta cuando se elimina el componente
  }


  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }

}
