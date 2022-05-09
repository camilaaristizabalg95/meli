import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Servicio encargado de manejar el preloader de
 * la aplicación. 
 */
export class PreloaderService {

  /**
   * Stream que emite el valor actual del
   * preloader del aplicativo.
   * true -> Petición completada
   * false -> Petición en progreso 
   */
  private loading$: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor() { }

  /**
   * Establece el valor del stream
   * a true
   */
  setLoading(){
    this.loading$.next(true);
  }

  /**
   * Establece el valor del stream
   * a false
   */
  clearLoading(){
    this.loading$.next(false);
  }

  /**
   * Función que se utiliza para obtener el 
   * stream de loading$
   */
  getLoading$(){
    return this.loading$;
  }
}
