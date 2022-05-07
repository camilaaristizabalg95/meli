import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'src/app/core/services/breadcrumbs.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private breadcrumbsService: BreadcrumbsService
  ) { }

  ngOnInit(): void {
    this.breadcrumbsService.clearBreadcrumbs();
  }

}
