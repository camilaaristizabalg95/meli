import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'src/app/core/services/breadcrumbs/breadcrumbs.service';
import { Observable } from 'rxjs';
import { BreadcrumbModel } from 'src/app/core/models/breadcrumb.model';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs$: Observable<BreadcrumbModel[]> = this.breadcrumbsService.getBreadcrumbs$()

  constructor(
    public breadcrumbsService: BreadcrumbsService
  ) { }

  ngOnInit(): void {
  }

  navigateTo(link: string){
    console.log(`Navigate to ${link} ⛵️`)
  }

}
