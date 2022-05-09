import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemResultsComponent } from './components/item-results/item-results.component';
import { ItemDescriptionComponent } from './components/item-description/item-description.component';
import { ItemPurchaseInfoComponent } from './components/item-purchase-info/item-purchase-info.component';
import { ItemExtInfoComponent } from './components/item-ext-info/item-ext-info.component';
import { ItemsRoutingModule } from './items-routing.module';



@NgModule({
  declarations: [
    ItemCardComponent, 
    ItemResultsComponent, 
    ItemDescriptionComponent, 
    ItemPurchaseInfoComponent, 
    ItemExtInfoComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
