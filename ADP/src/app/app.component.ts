import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CarrouselComponent } from './features/carrousel/carrousel.component';
import { ContentCarrouselPanelComponent } from './features/content-carrousel-panel/content-carrousel-panel.component';
import { CategoryComponent } from './features/category/category.component';
import { SelectionComponent } from './features/selection/selection.component';
import { ServicesAvantagesComponent } from './features/services-avantages/services-avantages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaqComponent } from './features/faq/faq.component';
import { BrandCarrouselComponent } from './features/brand-carrousel/brand-carrousel.component';
import { EngagementComponent } from './features/engagement/engagement.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    CarrouselComponent,
    ContentCarrouselPanelComponent,
    CategoryComponent,
    SelectionComponent,
    ServicesAvantagesComponent,
    FontAwesomeModule,
    FaqComponent,
    BrandCarrouselComponent,
    EngagementComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ADP';
}
