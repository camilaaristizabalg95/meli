import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/core/services/items/items.service';
import { Observable } from 'rxjs';
import { ItemSummaryModel } from 'src/app/core/models/item-summary.model';
import { PreloaderService } from 'src/app/core/services/preloader/preloader.service';

@Component({
  selector: 'item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.sass']
})
export class ItemDescriptionComponent implements OnInit {

  /**
   * Obtiene el último valor emitido para la información
   * de un item dado un id. 
   */
  item$: Observable<ItemSummaryModel> = this.itemsService.getItemInfo$();
   /**
   * Obtiene el último valor emitido para
   * el preloader (indica si la petición ya
   * fue resuelta y en base a eso muestra o
   * esconde el skeleton)
   */
  loading$: Observable<boolean> = this.preloaderService.getLoading$();

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private preloaderService: PreloaderService
  ) { }

  /**
   * Obtiene el path param id de la ruta
   * para ejecutar la busqueda de un item por id
   * llamando al servicio itemsService
   */
  ngOnInit(): void {
    this.route.params.subscribe(pathParams => this.itemsService.searchItemById(pathParams['id']))
  }

}
