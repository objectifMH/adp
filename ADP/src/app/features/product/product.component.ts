import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  product: Product = {
    id: 36,
    name: 'Ruinart Blanc Magnum',
    image: '/bouteille/champagne-ruinart-blan-de-blancs-magnum.jpg', // Placeholder en attendant une vraie image
    link: '/bouteille/ruinart-blanc-magnum',
    price: 99.99,
    description: 'Bouteille de champagne Ruinart Blanc en format magnum, 1.5L.',
    categoryId: 4, // Champagne
    promotion: true,
    discountPercentage: 10,
    volume: '1.5L',
    stock: 10,
    rating: 4.8,
    reviews: 20,
    brand: 'Ruinart',
    sku: 'RBM12345',
    tags: ['champagne', 'alcool', 'luxe'],
    availableSizes: ['1.5L'],
    weight: 1500,
    dimensions: { width: 15, height: 30, depth: 15 },
    color: 'gold',
    material: 'glass',
    releaseDate: '2023-06-01',
    expirationDate: '2025-06-01',
    nutritionFacts: {
      calories: 90,
      fat: 0,
      carbohydrates: 2,
      protein: 0,
    },
    allergens: ['sulfites'],
    relatedProducts: [35, 37],
    isFeatured: true,
    isNew: false,
    features: [
      { name: 'Type', value: 'Champagne blanc' },
      { name: 'Origine', value: 'France' },
      { name: 'Teneur en alcool', value: '12%' },
      {
        name: 'Conservation',
        value: 'À conserver dans un endroit frais et sec',
      },
      { name: 'Millésime', value: 'Non-millésimé' },
    ],
    reviewsList: [
      {
        id: 1,
        author: 'Sophie M.',
        rating: 5,
        comment: 'Excellent champagne, parfait pour les occasions spéciales.',
        date: '15/01/2024',
      },
      {
        id: 2,
        author: 'Jean D.',
        rating: 4,
        comment: 'Très bon rapport qualité/prix, je recommande.',
        date: '22/02/2024',
      },
      {
        id: 3,
        author: 'Michel L.',
        rating: 5,
        comment:
          'Un champagne exceptionnel avec des bulles fines et délicates.',
        date: '10/03/2024',
      },
    ],
  };

  tabs = [
    { id: 'details', label: 'Détails' },
    { id: 'features', label: 'Caractéristiques' },
    // { id: 'reviews', label: 'Avis' },
  ];

  selectedSize = '';
  quantity = 1;
  activeTab = 'details';

  ngOnInit(): void {
    // Initialiser la taille sélectionnée avec la première taille disponible
    if (this.product.availableSizes && this.product.availableSizes.length > 0) {
      this.selectedSize = this.product.availableSizes[0];
    }
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  incrementQuantity(): void {
    if (this.quantity < this.product.stock) {
      this.quantity++;
    }
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  getStars(rating: number): string[] {
    const stars: string[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('full');
      } else if (i === fullStars && hasHalfStar) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }

    return stars;
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }

  getDiscountedPrice(): number {
    if (!this.product.promotion) return this.product.price;
    const discount =
      this.product.price * (this.product.discountPercentage / 100);
    return Number((this.product.price - discount).toFixed(2));
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
  }

  addToCart(): void {
    if (this.product.stock === 0) return;

    const cartItem = {
      productId: this.product.id,
      name: this.product.name,
      size: this.selectedSize,
      quantity: this.quantity,
      price: this.getDiscountedPrice(),
      originalPrice: this.product.price,
      image: this.product.image,
    };

    console.log('Added to cart:', cartItem);
    // Implement actual cart logic here
  }
}
