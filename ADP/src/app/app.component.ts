import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CarrouselComponent } from './features/carrousel/carrousel.component';
import { ContentCarrouselPanelComponent } from './features/content-carrousel-panel/content-carrousel-panel.component';
import { CategoryComponent } from './features/category/category.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    CarrouselComponent,
    ContentCarrouselPanelComponent,
    CategoryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ADP';
}
