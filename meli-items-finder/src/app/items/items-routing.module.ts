import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemResultsComponent } from './components/item-results/item-results.component';
import { ItemDescriptionComponent } from './components/item-description/item-description.component';

/**
 * Rutas dentro del módulo /items
 */
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component:ItemResultsComponent },
      { path: ':id',  component: ItemDescriptionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
