import { Component, OnInit, Input, AfterViewInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'rectangular-skeleton',
  templateUrl: './rectangular-skeleton.component.html',
  styleUrls: ['./rectangular-skeleton.component.sass']
})
export class RectangularSkeletonComponent implements OnInit, AfterViewInit {

  /**
   * Obtiene todos lo children del componente 
   * que tengan una variable de template #skeleton
   */
  @ViewChildren('skeleton') skeletons;

  /**
   * @param width Width que se quiere establecer en el
   * skeleton
   * @param height Height que se quiere establecer en
   * el skeleton
   * @param count Numero de skeletons rectangulares que
   * se quieren crear
   */
  @Input('width') width: string;
  @Input('height') height: number;
  @Input('count') count: number;

  /**
   * Variable temporal para crear un iterable para
   * recorrer con la directiva *ngFor en el template
   */
  items:number[] = [];

  constructor() {
   }

   /**
    * Crea el iterable con la cantidad de skeletons
    * que se quieren crear
    */
  ngOnInit(): void {
    this.items.length = this.count
  }

  /**
   * Después de que se creen los elementos (children) se establecen
   * el width y height custom ingresados como Inputs al
   * componente
   */
  ngAfterViewInit(){

    this.skeletons._results.forEach(
      skeleton => skeleton.nativeElement.setAttribute('style', `width: ${this.width}; height: ${this.height};`)
    )

  }

}
