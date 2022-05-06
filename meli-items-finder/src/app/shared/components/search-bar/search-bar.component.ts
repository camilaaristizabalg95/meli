import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  query = "";

  constructor() { }

  ngOnInit(): void {
  }

  test(){
    console.log('query', this.query)
  }

}
