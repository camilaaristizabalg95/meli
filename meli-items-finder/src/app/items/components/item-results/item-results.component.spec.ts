import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemResultsComponent } from './item-results.component';

describe('ItemResultsComponent', () => {
  let component: ItemResultsComponent;
  let fixture: ComponentFixture<ItemResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
