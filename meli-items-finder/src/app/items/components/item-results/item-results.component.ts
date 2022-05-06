import { Component, OnInit } from '@angular/core';

import { ItemSummaryModel } from '../../../core/models/item-summary.model'

@Component({
  selector: 'app-item-results',
  templateUrl: './item-results.component.html',
  styleUrls: ['./item-results.component.sass']
})
export class ItemResultsComponent implements OnInit {

  items: ItemSummaryModel[] = [
    {
      id: '1',
      title: 'Apple test test test',
      price: {
          currency: 'USD', 
          amount: 2000, 
          decimals: 1
      },
      city: 'Mendoza',
      picture: '../../../../assets/images/35084-63981-IMG_1020-xl.jpeg',
      free_shipping: true,
      condition: 'Completo Unico!'
    },
    {
      id: '2',
      title: 'Apple test test 2',
      price: {
          currency: 'USD', 
          amount: 3500.12, 
          decimals: 1
      },
      city: 'Ciudad Federal',
      picture: '../../../../assets/images/35084-63981-IMG_1020-xl.jpeg',
      free_shipping: false,
      condition: 'Renewed'
    },
    {
      id: '2',
      title: 'Apple test test 2',
      price: {
          currency: 'USD', 
          amount: 3500.12, 
          decimals: 1
      },
      city: 'Ciudad Federal',
      picture: '../../../../assets/images/35084-63981-IMG_1020-xl.jpeg',
      free_shipping: false,
      condition: 'Renewed'
    },
    {
      id: '2',
      title: 'Apple test test 2',
      price: {
          currency: 'USD', 
          amount: 3500.12, 
          decimals: 1
      },
      city: 'Ciudad Federal',
      picture: '../../../../assets/images/35084-63981-IMG_1020-xl.jpeg',
      free_shipping: false,
      condition: 'Renewed'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('buenas')
  }

}
