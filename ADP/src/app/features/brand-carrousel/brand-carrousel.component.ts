import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-brand-carrousel',
  imports: [CommonModule],
  templateUrl: './brand-carrousel.component.html',
  styleUrl: './brand-carrousel.component.scss',
})
export class BrandCarrouselComponent {
  brands = [
    { id: 1, name: 'Absolut', image: 'brands/absolut.png' },
    { id: 2, name: 'Belvedere', image: 'brands/belvedere.png' },
    { id: 3, name: 'Chivas', image: 'brands/chiva.png' },
    { id: 4, name: 'Coca-Cola', image: 'brands/coca.png' },
    { id: 5, name: 'Heineken', image: 'brands/heineken.png' },
    { id: 6, name: 'Jack Daniel"s', image: 'brands/jackd.png' },
    { id: 7, name: 'Moet & Chandon', image: 'brands/moet.svg' },
    { id: 8, name: 'Ruinart', image: 'brands/ruinart.png' },
  ];

  trackById(index: number, brand: any): number {
    return brand.id;
  }
}
