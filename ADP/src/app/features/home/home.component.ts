import { Component } from '@angular/core';
import { CarrouselComponent } from '../carrousel/carrousel.component';
import { BrandCarrouselComponent } from '../brand-carrousel/brand-carrousel.component';
import { CategoryComponent } from '../category/category.component';
import { SelectionComponent } from '../selection/selection.component';
import { ContentCarrouselPanelComponent } from '../content-carrousel-panel/content-carrousel-panel.component';
import { ServicesAvantagesComponent } from '../services-avantages/services-avantages.component';
import { FaqComponent } from '../faq/faq.component';
import { EngagementComponent } from '../engagement/engagement.component';

@Component({
  selector: 'app-home',
  imports: [
    CarrouselComponent,
    BrandCarrouselComponent,
    CategoryComponent,
    SelectionComponent,
    ContentCarrouselPanelComponent,
    ServicesAvantagesComponent,
    FaqComponent,
    EngagementComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
