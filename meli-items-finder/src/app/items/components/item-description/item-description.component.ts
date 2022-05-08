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

  item$: Observable<ItemSummaryModel> = this.itemsService.getItemInfo$();
  loading$: Observable<boolean> = this.preloaderService.getLoading$();

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private preloaderService: PreloaderService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(pathParams => this.itemsService.searchItemById(pathParams['id']))
  }

}
