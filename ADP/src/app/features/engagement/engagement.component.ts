import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faShieldAlt,
  faHandshake,
  faLeaf,
  faRocket,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-engagement',
  imports: [FontAwesomeModule], // Ajout du module FontAwesome
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './engagement.component.html',
  styleUrl: './engagement.component.scss',
})
export class EngagementComponent {
  // Icônes FontAwesome
  faShieldAlt = faShieldAlt;
  faHandshake = faHandshake;
  faLeaf = faLeaf;
  faRocket = faRocket;
  faLightbulb = faLightbulb;

  // Liste des engagements
  commitments = [
    {
      id: 1,
      icon: faShieldAlt,
      title: 'Sécurité des Données',
      description:
        'Nous protégeons vos données avec les normes les plus strictes.',
    },
    {
      id: 2,
      icon: faHandshake,
      title: 'Service Client 24/7',
      description: 'Notre équipe est disponible à tout moment pour vous aider.',
    },
    {
      id: 3,
      icon: faLeaf,
      title: 'Engagement Écologique',
      description: 'Nous nous engageons à réduire notre empreinte carbone.',
    },
    {
      id: 4,
      icon: faRocket,
      title: 'Livraison Rapide',
      description: 'Nous livrons vos commandes en moins de 48 heures.',
    },
    {
      id: 5,
      icon: faLightbulb,
      title: 'Innovation Continue',
      description:
        'Nous améliorons constamment nos services pour vous offrir le meilleur.',
    },
  ];
}
