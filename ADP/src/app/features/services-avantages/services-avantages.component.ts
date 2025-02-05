import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTruck,
  faCreditCard,
  faHeadset,
  faUndo,
  faGift,
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
      icon: faTruck,
      title: 'Livraison Rapide en IDF',
      description: 'Livraison en 24h à Paris et en 48h en Île-de-France.',
    },
    {
      id: 2,
      icon: faCreditCard,
      title: 'Paiement Flexible',
      description: 'Payez en ligne ou à la livraison selon votre préférence.',
    },
    {
      id: 3,
      icon: faHeadset,
      title: 'Service Client Réactif',
      description:
        'Contactez-nous par téléphone ou par mail pour toute question.',
    },
    {
      id: 4,
      icon: faUndo,
      title: 'Retour et Remplacement Faciles',
      description: 'Un problème ? On s’occupe de l’échange ou du retour.',
    },
    {
      id: 5,
      icon: faGift,
      title: 'Offres Exclusives',
      description: 'Des réductions et promotions sur nos meilleurs alcools.',
    },
  ];
}
