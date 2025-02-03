import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTruck,
  faCreditCard,
  faHeadset,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services-avantages',
  templateUrl: './services-avantages.component.html',
  styleUrls: ['./services-avantages.component.scss'],
  imports: [FontAwesomeModule], // Ajout du module FontAwesome
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServicesAvantagesComponent {
  // Icônes FontAwesome
  faTruck = faTruck; // Icône pour la livraison
  faCreditCard = faCreditCard; // Icône pour le paiement
  faHeadset = faHeadset; // Icône pour le support client
  faUndo = faUndo; // Icône pour les retours

  // Exemple de données pour les services
  services = [
    {
      id: 1,
      icon: this.faTruck, // Utilisation de l'icône FontAwesome
      title: 'Livraison Rapide',
      description: 'Livraison en 24h à Paris et en 48h en France.',
    },
    {
      id: 2,
      icon: this.faCreditCard, // Utilisation de l'icône FontAwesome
      title: 'Paiement Sécurisé',
      description: 'Paiement 100% sécurisé avec cryptage SSL.',
    },
    {
      id: 3,
      icon: this.faHeadset, // Utilisation de l'icône FontAwesome
      title: 'Support Client',
      description: 'Assistance 7j/7 par téléphone et email.',
    },
    {
      id: 4,
      icon: this.faUndo, // Utilisation de l'icône FontAwesome
      title: 'Retour Facile',
      description: 'Retours gratuits sous 30 jours.',
    },
  ];
}
