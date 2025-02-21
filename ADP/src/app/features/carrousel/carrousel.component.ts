import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrousel',
  imports: [RouterModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss',
})
export class CarrouselComponent implements OnInit, OnDestroy {
  @Input() slides: any[] = []; // Les slides sont maintenant passées en entrée
  @Input() currentSlide: number = 0; // La slide active est passée en entrée

  slidesMock = [
    {
      image: '/landing5.webp',
      title: 'Sélection Prestige',
      description: 'Découvrez nos alcools premium.',
      ctaText1: 'Explorer',
      ctaLink1: '/selection',
    },
    {
      image: '/landing6.webp',
      title: 'Soirée Étudiante',
      description: "L'ambiance parfaite pour vos événements BDE.",
      ctaText1: 'Découvrir',
      ctaLink1: '/soiree-etudiante',
    },
    {
      image: '/landing1.webp',
      title: 'Nouveaux whiskies',
      description: 'Dégustez nos single malt.',
      ctaText1: 'Explorer',
      ctaLink1: '/whisky',
    },
    {
      image: '/banner.jpg',
      title: 'ADP votre cave en ligne',
      description:
        'Alcool rare, bonnes affaires.<br>Découvrez notre sélection exclusive.',
      ctaText1: 'Découvrir',
      ctaLink1: '/products',
    },

    {
      image: '/landing2.webp',
      title: 'Les vodkas Belvedere',
      description:
        'À travers sa collection de vodkas, Belvedere offre une variété de saveurs distinctives, reflets du terroir et de son savoir-faire.',
      ctaText1: 'Découvrir',
      ctaLink1: '/champagne',
    },
    {
      image: '/ruinart.jpg',
      title: 'La maison Ruinart',
      description:
        'Depuis 1729, la Maison Ruinart est le plus ancienne Maison de Champagne.',
      ctaText1: 'Découvrir',
      ctaLink1: '/champagne',
    },
    {
      image: '/landing2.webp',
      title: 'Nouveaux whiskies',
      description: 'Dégustez nos single malt.',
      ctaText1: 'Explorer',
      ctaLink1: '/whisky',
    },
    {
      image: '/Blanc_ruinart.avif',
      title: 'Ruinart blanc de blancs',
      description:
        'La cuvée Ruinart Blanc de Blancs est un vin délicat entre fraîcheur et rondeur',
      ctaText1: 'Découvrir',
      ctaLink1: '/champagne',
    },
  ];

  //currentSlide = 0;
  private interval: any;

  ngOnInit() {
    if (this.slides.length == 0) {
      this.slides = this.slidesMock;
    }
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 8000); // Change de slide toutes les 3 secondes
  }

  stopAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
