import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { BreadcrumbModel } from '../../models/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  private breadcrumbs$: BehaviorSubject<BreadcrumbModel[]> = new BehaviorSubject([]);

  constructor() { 
    this.breadcrumbs$.next([])
  }

  getBreadcrumbs$(){
    return this.breadcrumbs$
  }

  editBreadcrumbs(breadcrumbs: BreadcrumbModel[]){
    this.clearBreadcrumbs()
    this.breadcrumbs$.next([...breadcrumbs])
  }

  clearBreadcrumbs(){
    this.breadcrumbs$.next([])
  }
}
