import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/core/services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  query = "";

  constructor(
    public itemsService: ItemsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  search(){
    this.router.navigate(['items'],{queryParams: {q:this.query}})
  }

}
