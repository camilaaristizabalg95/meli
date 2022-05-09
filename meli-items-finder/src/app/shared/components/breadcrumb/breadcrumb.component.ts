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

  /**
   * Obtiene el último valor de los  breadcrumbs del app a
   * través de un stream enviado por el servicio
   * breadcrumbsService. Este valor será el mostrado
   * en pantalla
   */
  breadcrumbs$: Observable<BreadcrumbModel[]> = this.breadcrumbsService.getBreadcrumbs$()

  constructor(
    public breadcrumbsService: BreadcrumbsService
  ) { }

  ngOnInit(): void {
  }

  /**
   * Navega al link del breadcrumb clickeado
   * @param link Link del breadcrumb
   */
  navigateTo(link: string){
    console.log(`Navigate to ${link} ⛵️`)
  }

}
