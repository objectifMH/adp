import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCarrouselPanelComponent } from './content-carrousel-panel.component';

describe('ContentCarrouselPanelComponent', () => {
  let component: ContentCarrouselPanelComponent;
  let fixture: ComponentFixture<ContentCarrouselPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCarrouselPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCarrouselPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
