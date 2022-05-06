import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPurchaseInfoComponent } from './item-purchase-info.component';

describe('ItemPurchaseInfoComponent', () => {
  let component: ItemPurchaseInfoComponent;
  let fixture: ComponentFixture<ItemPurchaseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPurchaseInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPurchaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
