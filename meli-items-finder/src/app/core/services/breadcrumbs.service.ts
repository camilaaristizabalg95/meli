import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { BreadcrumbModel } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  private breadcrumbs$: BehaviorSubject<BreadcrumbModel[]> = new BehaviorSubject([]);
  private breadcrumbs: BreadcrumbModel[] = []

  constructor() { 
    this.breadcrumbs$.next(this.breadcrumbs)
  }

  getBreadcrumbs$(){
    console.log(this.breadcrumbs)
    return this.breadcrumbs$
  }

  editBreadcrumbs(breadcrumb: BreadcrumbModel){
    this.breadcrumbs.push(breadcrumb)
    console.log(this.breadcrumbs)
    this.breadcrumbs$.next(this.breadcrumbs)
  }

  clearBreadcrumbs(){
    this.breadcrumbs.length = 0;
    this.breadcrumbs$.next(this.breadcrumbs)
  }
}