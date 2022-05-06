import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/core/services/items.service';
import { Observable } from 'rxjs';
import { ItemSummaryModel } from 'src/app/core/models/item-summary.model';

@Component({
  selector: 'item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.sass']
})
export class ItemDescriptionComponent implements OnInit {

  item$: Observable<ItemSummaryModel> = this.itemsService.getItemInfo$()

  constructor(
    public itemsService: ItemsService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(pathParams => this.itemsService.searchItemById(pathParams['id']))
  }

}
