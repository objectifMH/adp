import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCarrouselComponent } from './brand-carrousel.component';

describe('BrandCarrouselComponent', () => {
  let component: BrandCarrouselComponent;
  let fixture: ComponentFixture<BrandCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandCarrouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
