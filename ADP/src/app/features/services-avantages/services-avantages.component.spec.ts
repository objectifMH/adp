import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAvantagesComponent } from './services-avantages.component';

describe('ServicesAvantagesComponent', () => {
  let component: ServicesAvantagesComponent;
  let fixture: ComponentFixture<ServicesAvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesAvantagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesAvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
