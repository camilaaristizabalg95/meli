import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ItemSummaryModel, ItemModel } from '../models/item-summary.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items$: BehaviorSubject<ItemSummaryModel[]> = new BehaviorSubject([])
  private item$: BehaviorSubject<ItemModel> = new BehaviorSubject(null)

  items: ItemModel[] = [
    {
      id: '1',
      title: 'Apple 1',
      price: {
          currency: 'USD', 
          amount: 2000, 
          decimals: 1
      },
      city: 'Mendoza',
      picture: '../../../../assets/images/35084-63981-IMG_1020-xl.jpeg',
      free_shipping: true,
      condition: 'Completo Unico!',
      description: "Lorem ipsum dolor sit amet. Rem facere rerum eos commodi illo ex dolor totam in galisum repudiandae id dolorem molestias vel assumenda praesentium. Sit culpa corporis vel blanditiis voluptatibus et atque quaerat ut ullam expedita qui dignissimos doloribus.",
      sold_quantity: 1234
    },
    {
      id: '2',
      title: 'sAmsung 3',
      price: {
          currency: 'USD', 
          amount: 3500.12, 
          decimals: 1
      },
      city: 'Ciudad Federal',
      picture: '../../../../assets/images/35084-63981-IMG_1020-xl.jpeg',
      free_shipping: false,
      condition: 'Renewed',
      description: "Lorem ipsum dolor sit amet. Rem facere rerum eos commodi illo ex dolor totam in galisum repudiandae id dolorem molestias vel assumenda praesentium. Sit culpa corporis vel blanditiis voluptatibus et atque quaerat ut ullam expedita qui dignissimos doloribus.",
      sold_quantity: 1000
    },
    {
      id: '3',
      title: 'Xiomi',
      price: {
          currency: 'USD', 
          amount: 3500.12, 
          decimals: 1
      },
      city: 'Ciudad Federal',
      picture: '../../../../assets/images/35084-63981-IMG_1020-xl.jpeg',
      free_shipping: false,
      condition: 'Renewed',
      description: "Lorem ipsum dolor sit amet. Rem facere rerum eos commodi illo ex dolor totam in galisum repudiandae id dolorem molestias vel assumenda praesentium. Sit culpa corporis vel blanditiis voluptatibus et atque quaerat ut ullam expedita qui dignissimos doloribus.",
      sold_quantity: 500
    },
    {
      id: '4',
      title: 'Ipod',
      price: {
          currency: 'USD', 
          amount: 3500.12, 
          decimals: 1
      },
      city: 'Ciudad Federal',
      picture: '../../../../assets/images/35084-63981-IMG_1020-xl.jpeg',
      free_shipping: false,
      condition: 'Renewed',
      description: "Lorem ipsum dolor sit amet. Rem facere rerum eos commodi illo ex dolor totam in galisum repudiandae id dolorem molestias vel assumenda praesentium. Sit culpa corporis vel blanditiis voluptatibus et atque quaerat ut ullam expedita qui dignissimos doloribus.",
      sold_quantity: 1
    },
  ]

  constructor() { }

  searchItemsByQuery(query){
    //Call to api
    //TO DELETE
    this.items$.next(this.items.filter(item => item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())))
  }

  searchItemById(id){
    //Call to api
    //TO DELETE
    this.item$.next(this.items.find(item => item.id === id))
  }

  getItems$(){
    return this.items$
  }

  getItemBasicInfo(){

  }

  getItemDescription(){

  }

  getItemInfo$(){
    return this.item$
  }
}
