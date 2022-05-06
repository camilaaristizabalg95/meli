import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: string[] = ['home', 'test1', 'test2', 'test3']

  constructor() { }

  ngOnInit(): void {
  }

}
