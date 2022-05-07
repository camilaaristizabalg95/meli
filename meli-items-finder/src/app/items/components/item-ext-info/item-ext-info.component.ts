import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item-ext-info',
  templateUrl: './item-ext-info.component.html',
  styleUrls: ['./item-ext-info.component.sass']
})
export class ItemExtInfoComponent implements OnInit {

  @Input('image') image;
  @Input('description') description;

  showMore = false;

  constructor() { }

  ngOnInit(): void {
  }

}
