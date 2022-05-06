import { Component, OnInit, Input } from '@angular/core';

import { PriceModel } from '../../../core/models/item-summary.model'

@Component({
  selector: 'item-purchase-info',
  templateUrl: './item-purchase-info.component.html',
  styleUrls: ['./item-purchase-info.component.sass']
})
export class ItemPurchaseInfoComponent implements OnInit {

  @Input('condition') condition: string;
  @Input('soldQuantity') soldQuantity: number;
  @Input('title') title: string;
  @Input('price') price: PriceModel;

  constructor() { }

  ngOnInit(): void {
  }

}
