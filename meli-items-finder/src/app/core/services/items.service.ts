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

    const request: RequestModel = {
      params:`items?q=${query}`
    }

    this.httpService.getRequest(request).pipe(
      map(data => data as ItemSummaryModel[])
    ).subscribe(data => this.items$.next(data))

  }

  searchItemById(id){
    
    const request: RequestModel = {
      params:`items/${id}`
    }

    this.httpService.getRequest(request).pipe(
      map(data => data as ItemModel)
    ).subscribe(data => this.item$.next(data))

  }

  getItems$(){
    return this.items$
  }

  getItemInfo$(){
    return this.item$
  }
}
