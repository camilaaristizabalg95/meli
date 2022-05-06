import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { ItemSummaryModel, ItemModel } from '../models/item-summary.model';
import { HttpService } from './http.service';
import { RequestModel } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items$: BehaviorSubject<ItemSummaryModel[]> = new BehaviorSubject([])
  private item$: BehaviorSubject<ItemModel> = new BehaviorSubject(null)

  constructor(
    private httpService: HttpService
  ) { }

  searchItemsByQuery(query){
    //Call to api
    //TO DELETE
    const request: RequestModel ={
      params:`items?q=${query}`
    }
    this.httpService.getRequest(request).pipe(
      map(data => data as ItemSummaryModel[])
    ).subscribe(data => this.items$.next(data))
  }

  searchItemById(id){
    //Call to api
    //TO DELETE
    // this.item$.next(this.items.find(item => item.id === id))
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
