import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faShieldAlt,
  faHandshake,
  faLeaf,
  faRocket,
  faLightbulb,
  faRecycle,
  faStar,
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
      icon: faRecycle,
      title: 'Anti-Gaspillage',
      description:
        'Nous récupérons les invendus pour leur donner une seconde vie.',
    },
    /** {
      id: 2,
      icon: faLeaf,
      title: 'Engagement Écoresponsable',
      description:
        'Nous réduisons le gaspillage et privilégions une logistique durable.',
    },*/
    {
      id: 3,
      icon: faShieldAlt,
      title: 'Produits de Qualité',
      description: 'Nous travaillons avec des marques d’alcool reconnues.',
    },
    {
      id: 4,
      icon: faHandshake,
      title: 'Transparence et Confiance',
      description: 'Nous garantissons une traçabilité claire des produits.',
    },
    {
      id: 5,
      icon: faStar,
      title: 'Satisfaction Client',
      description: 'Nos clients bénéficient de services et produits vérifiés.',
    },
  ];
}
