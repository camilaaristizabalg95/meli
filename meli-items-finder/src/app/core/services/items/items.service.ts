import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { ItemSummaryModel, ItemModel } from '../../models/item-summary.model';
import { HttpService } from '../http/http.service';
import { RequestModel } from '../../models/request.model';
import { ItemResultModel } from '../../models/item-result.model';
import { BreadcrumbsService } from '../breadcrumbs/breadcrumbs.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items$: BehaviorSubject<ItemSummaryModel[]> = new BehaviorSubject([])
  private item$: BehaviorSubject<ItemSummaryModel> = new BehaviorSubject(null)

  constructor(
    private httpService: HttpService,
    private breadcrumbsService: BreadcrumbsService
  ) { }

  searchItemsByQuery(query){
    const request: RequestModel = {
      params:`items?q=${query}&limit=4`
    }

    this.httpService.getRequest(request).pipe(
      map(data => data as ItemResultModel),
      map(data => ({...{},items: [...data.items], categories: data.categories}))
    ).subscribe(data => {
      this.breadcrumbsService.editBreadcrumbs(data.categories)
      this.items$.next(data.items)
    }
    )

  }

  searchItemById(id){
    
    const request: RequestModel = {
      params:`items/${id}`
    }

    this.httpService.getRequest(request).pipe(
      map(data => data as ItemModel),
      map(data => data.item)
    ).subscribe(data => {
      this.breadcrumbsService.editBreadcrumbs(data.categories)
      this.item$.next(data)
    })

  }

  getItems$(){
    return this.items$
  }

  getItemInfo$(){
    return this.item$
  }
}