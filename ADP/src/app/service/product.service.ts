import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  constructor() {
    console.log('ProductService initialisé');
  }

  /** 
  products: Signal<Product[]> = toSignal(
    this.http.get<Product[]>('/assets/products.json'),
    { initialValue: [] }
  );

  getProducts(): Signal<Product[]> {
    return this.products;
  }

  */
}
