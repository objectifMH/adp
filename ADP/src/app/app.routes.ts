import { Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './features/home/home.component';
import { ProductListComponent } from './features/product-list/product-list.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductListComponent }, // Product list page
  { path: '404', component: HomeComponent }, // Page dédiée pour les 404 à faire
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection par défaut si aucun chemin n'est fourni
  { path: '**', redirectTo: '404' }, // Wildcard pour rediriger vers une page d'erreur
];
