import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangularSkeletonComponent } from './rectangular-skeleton.component';

describe('RectangularSkeletonComponent', () => {
  let component: RectangularSkeletonComponent;
  let fixture: ComponentFixture<RectangularSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectangularSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangularSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
