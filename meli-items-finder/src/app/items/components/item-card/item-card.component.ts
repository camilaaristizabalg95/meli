import { Component, OnInit, Input } from '@angular/core';
import { ItemSummaryModel } from '../../../core/models/item-summary.model';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent implements OnInit {

  @Input('item') item: ItemSummaryModel;

  constructor() { }

  ngOnInit(): void {
  }

}
