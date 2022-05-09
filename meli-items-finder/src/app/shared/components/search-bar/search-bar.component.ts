import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/core/services/items/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  /**
   * ngModel para bindear (double binding) el valor 
   * del template con el de la clase.
   */
  query = "";

  constructor(
    public itemsService: ItemsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Cuando se ejecuta la busqueda (enter en el input)
   * o click en el icono de búsqueda se navega a la ruta
   * /items?search=:q que se encargaraá de la busqueda
   * de los items que se relacionen con ese quey
   */
  search(){
    this.router.navigate(['items'],{queryParams: {search:this.query}})
  }

}
