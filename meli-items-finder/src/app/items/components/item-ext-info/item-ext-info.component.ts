import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item-ext-info',
  templateUrl: './item-ext-info.component.html',
  styleUrls: ['./item-ext-info.component.sass']
})
export class ItemExtInfoComponent implements OnInit {

  /**
   * @param image Respresenta la imagen del item,
   * si ésta está vacía entonces establece la
   * imagen placeholder.
   * @param description Represeta la descripción
   * extendida del item. 
   */
  @Input('image') image;
  @Input('description') description;

  /**
   * Variable utilizada en el template para expndir o
   * reducir la descripción (text-vanish)
   */
  showMore = false;

  constructor() { }

  ngOnInit(): void {
  }

}
