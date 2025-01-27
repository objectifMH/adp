import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-carrousel-panel',
  imports: [RouterModule],
  templateUrl: './content-carrousel-panel.component.html',
  styleUrl: './content-carrousel-panel.component.scss',
})
export class ContentCarrouselPanelComponent implements OnInit, OnDestroy {
  slides: any[] = [
    {
      image: '/blancdeb_ruinart.avif',
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
    {
      image: '/belvedere.webp',
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
        'Depuis 1729, la Maison Ruinart est la plus ancienne Maison de Champagne.',
      ctaText1: 'Découvrir',
      ctaLink1: '/champagne',
    },
  ];

  currentSlide = 0;
  private interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    console.log('Démarrage du carrousel automatique');
    this.interval = setInterval(() => {
      this.nextSlide();
      console.log('Slide suivante', this.currentSlide);
    }, 8000);
  }

  stopAutoSlide() {
    console.log('Arrêt du carrousel automatique');
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
