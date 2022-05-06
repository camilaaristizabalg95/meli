import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExtInfoComponent } from './item-ext-info.component';

describe('ItemExtInfoComponent', () => {
  let component: ItemExtInfoComponent;
  let fixture: ComponentFixture<ItemExtInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemExtInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemExtInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
