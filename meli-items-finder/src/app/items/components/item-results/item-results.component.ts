import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-results',
  templateUrl: './item-results.component.html',
  styleUrls: ['./item-results.component.sass']
})
export class ItemResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('buenas')
  }

}
