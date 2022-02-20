import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSizesComponent } from './pizza-sizes.component';

describe('PizzaSizesComponent', () => {
  let component: PizzaSizesComponent;
  let fixture: ComponentFixture<PizzaSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaSizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
