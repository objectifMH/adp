// product.interface.ts
export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface NutritionFacts {
  calories: number;
  fat: number;
  carbohydrates: number;
  protein: number;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  link: string;
  price: number;
  description: string;
  categoryId: number;
  promotion: boolean;
  discountPercentage: number;
  volume: string;
  stock: number;
  rating: number;
  reviews: number;
  brand: string;
  sku: string;
  tags: string[];
  availableSizes: string[];
  weight: number;
  dimensions: Dimensions;
  color: string;
  material: string;
  releaseDate: string;
  expirationDate: string;
  nutritionFacts: NutritionFacts;
  allergens: string[];
  relatedProducts: number[];
  isFeatured: boolean;
  isNew: boolean;
  reviewsList?: ProductReview[];
  features?: Feature[];
}

export interface ProductReview {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface Feature {
  name: string;
  value: string;
}
