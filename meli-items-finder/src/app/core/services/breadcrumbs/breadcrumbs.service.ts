import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { BreadcrumbModel } from '../../models/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})

/**
 * Servicio encargado del manejo de la navegación
 * breadcrumbs del aplicativo
 */
export class BreadcrumbsService {

  /**
   * Stream que emite el valor actual
   * de la lista de breadcrumbs del aplicativo
   */
  private breadcrumbs$: BehaviorSubject<BreadcrumbModel[]> = new BehaviorSubject([]);

  constructor() { 
    this.breadcrumbs$.next([])
  }

  /**
   * @returns Retorna el stream de breadcrumbs$
   */
  getBreadcrumbs$(){
    return this.breadcrumbs$
  }

  /**
   * Dada una lista de breadcrumbs las
   * establece como proximo valor
   * del stream breadcrumbs$
   * @param breadcrumbs lista de breadcrumbs nuevos
   */
  editBreadcrumbs(breadcrumbs: BreadcrumbModel[]){
    this.clearBreadcrumbs()
    this.breadcrumbs$.next([...breadcrumbs])
  }

  /**
   * Limpia los breadcrumbs del aplicativo
   */
  clearBreadcrumbs(){
    this.breadcrumbs$.next([])
  }
}
