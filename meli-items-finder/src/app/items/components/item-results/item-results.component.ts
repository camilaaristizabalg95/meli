import { Component, OnInit } from '@angular/core';

import { ItemSummaryModel } from '../../../core/models/item-summary.model'
import { Observable } from 'rxjs';
import { ItemsService } from 'src/app/core/services/items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PreloaderService } from 'src/app/core/services/preloader.service';

@Component({
  selector: 'app-item-results',
  templateUrl: './item-results.component.html',
  styleUrls: ['./item-results.component.sass']
})
export class ItemResultsComponent implements OnInit {

  items$: Observable<ItemSummaryModel[]> = this.itemsService.getItems$();
  loading$: Observable<boolean> = this.preloaderService.getLoading$();

  constructor(
    private itemsService: ItemsService,
    private routeService: ActivatedRoute,
    private route: Router,
    private preloaderService: PreloaderService
  ) { }

  ngOnInit(): void {
    this.routeService.queryParams.subscribe(
      params => this.itemsService.searchItemsByQuery(params['q'])
    )
  }

  seeItem(itemId){
    this.route.navigate(['/items', itemId])
  }

}
