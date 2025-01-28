import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  @Input() categories: any[] = []; // Les catégories sont passées en entrée

  // Données mockées pour les catégories
  categoriesMock = [
    {
      id: 1,
      name: 'Whisky',
      image: '/categorie/whisky.webp',
      link: '/whisky',
    },
    {
      id: 2,
      name: 'Vodka',
      image: '/categorie/vodka.webp',
      link: '/vodka',
    },
    {
      id: 3,
      name: 'Champagne',
      image: '/categorie/champagne.webp',
      link: '/champagne',
    },
    {
      id: 4,
      name: 'Vin',
      image: '/categorie/vin.jpg',
      link: '/vin',
    },
    {
      id: 5,
      name: 'Fournitures',
      image: '/categorie/fourniture.jpg',
      link: '/fournitures',
    },
  ];

  constructor() {
    // Si aucune catégorie n'est passée en entrée, on utilise les données mockées
    if (this.categories.length === 0) {
      this.categories = this.categoriesMock;
    }
  }
}
