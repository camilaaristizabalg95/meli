import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { ItemSummaryModel, ItemModel } from '../../models/item-summary.model';
import { HttpService } from '../http/http.service';
import { RequestModel } from '../../models/request.model';
import { ItemResultModel } from '../../models/item-result.model';
import { BreadcrumbsService } from '../breadcrumbs/breadcrumbs.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Servicio encargado de manejar todo
 * lo relacionado con los valores de
 * items
 */
export class ItemsService {

  /**
   * Stream que emite el último valor
   * establecido para el resultado (listado) 
   * de items
   */
  private items$: BehaviorSubject<ItemSummaryModel[]> = new BehaviorSubject([])
  /**
   * Stream que emite el último valor
   * establecido para el item consultado
   * por id
   */
  private item$: BehaviorSubject<ItemSummaryModel> = new BehaviorSubject(null)

  constructor(
    private httpService: HttpService,
    private breadcrumbsService: BreadcrumbsService
  ) { }

  /**
   * Dispara la petición http para realizar
   * la búsqueda de items por query y cambia
   * el valor de la lista de resultados.
   * 
   * Edita los breadcrumbs del aplicativo de
   * acuerdo a las categoriías recibidas
   * 
   * @param query Término que se desa buscar
   */
  searchItemsByQuery(query){
    const request: RequestModel = {
      params:`items?q=${query}&limit=4`
    }

    this.httpService.getRequest(request).pipe(
      map(data => data as ItemResultModel),
      map(data => ({...{},items: [...data.items], categories: data.categories}))
    ).subscribe(data => {
      this.breadcrumbsService.editBreadcrumbs(data.categories)
      this.items$.next(data.items)
    }
    )

  }

  /**
   * Dispara la petición http para realizar
   * la búsqueda de un item dado un id y cambia
   * el valor del item.
   * 
   * Edita los breadcrumbs del aplicativo de
   * acuerdo a las categoriías recibidas
   * @param id Id del item a buscar
   */
  searchItemById(id){
    
    const request: RequestModel = {
      params:`items/${id}`
    }

    this.httpService.getRequest(request).pipe(
      map(data => data as ItemModel),
      map(data => data.item)
    ).subscribe(data => {
      this.breadcrumbsService.editBreadcrumbs(data.categories)
      this.item$.next(data)
    })

  }

  /**
   * @returns el stream de items$
   */
  getItems$(){
    return this.items$
  }

  /**
   * @returns el stream de item$ 
   */
  getItemInfo$(){
    return this.item$
  }
}
