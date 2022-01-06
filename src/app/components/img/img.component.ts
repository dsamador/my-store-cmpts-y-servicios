import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img') set changeImg(newImg: string){
    this.img = newImg;
    //code
    console.log('change just img =>', this.img)
  }
  @Input() alt: string = '';

  @Output() loaded = new EventEmitter<string>();

  imageDefault = '../../../assets/default.png';
  counter = 0;
  counterFn: number | undefined;



  constructor() {
    /* Antes de renderizar */
    /* importante no correr cosas async, este constructor corre solo una vez */
    console.log('constructor', 'imgValue =>', this.img)
  }
  ngOnChanges(changes: SimpleChanges): void {
    //corre antes de renderizar y durante el renderizado
    //vigila los cambios en todos los @Inputs, es un escuchador
    //si queremos saber granularmente los cambios en los inputs toca hacer
    //uso de un set
    console.log('ngOnchanges', 'imgValue =>', this.img);
    console.log('changes', changes)
  }
  ngOnInit(): void {
    //antes del render, se pueden hacer llamadas async, corre una sola vez
    console.log('ngOnInit', 'imgValue =>', this.img)
    this.counterFn = window.setInterval(()=> {
      this.counter += 1;
      console.log('run counter')
    }, 1000);
  }
  ngAfterViewInit(){
    //despues de que el html de los hijos de este componente se han renderizado,
    //normalmente aqui se ponen a los hijos cuando queremos hacer algo de logica
    console.log('ngOnInit', 'imgValue =>', this.img)
  }
  ngOnDestroy(){
    //Evento que se ejecuta cuando se elimina el componente, es util para eliminar
    //procesos que no se destruyen al destruir el componente en el html
    window.clearInterval(this.counterFn);
  }


  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }

}
