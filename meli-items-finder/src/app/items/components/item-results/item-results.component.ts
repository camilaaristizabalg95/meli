import { Component, OnInit } from '@angular/core';

import { ItemSummaryModel } from '../../../core/models/item-summary.model'
import { Observable } from 'rxjs';
import { ItemsService } from 'src/app/core/services/items/items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PreloaderService } from 'src/app/core/services/preloader/preloader.service';

@Component({
  selector: 'app-item-results',
  templateUrl: './item-results.component.html',
  styleUrls: ['./item-results.component.sass']
})
export class ItemResultsComponent implements OnInit {

  /**
   * Obtiene el último valor emitido para
   * la lista de resultados.
   */
  items$: Observable<ItemSummaryModel[]> = this.itemsService.getItems$();
  /**
   * Obtiene el último valor emitido para
   * el preloader (indica si la petición ya
   * fue resuelta y en base a eso muestra o
   * esconde el skeleton)
   */
  loading$: Observable<boolean> = this.preloaderService.getLoading$();

  constructor(
    private itemsService: ItemsService,
    private routeService: ActivatedRoute,
    private route: Router,
    private preloaderService: PreloaderService
  ) { }

  /**
   * Obtiene el parametro search (que fue el ingresado
   * en la barra de búsqueda) y llama al servicio
   * itemsService para realizar la petición de búsqueda
   * de items por query.
   */
  ngOnInit(): void {
    this.routeService.queryParams.subscribe(
      params => this.itemsService.searchItemsByQuery(params['search'])
    )
  }

  /**
   * Navega a la vista de descripcioón de un item.
   * @param itemId Id del item del cual se desea ver más información
   */
  seeItem(itemId){
    this.route.navigate(['/items', itemId])
  }

}
