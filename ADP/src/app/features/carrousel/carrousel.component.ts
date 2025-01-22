import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrousel',
  imports: [RouterModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss',
})
export class CarrouselComponent implements OnInit, OnDestroy {
  slides = [
    {
      image: '/banner.jpg',
      title: 'ADP votre cave en ligne',
      description:
        'Alcool rare, bonnes affaires.<br>Découvrez notre sélection exclusive.',
      ctaText1: 'Découvrir',
      ctaLink1: '/products',
    },
    {
      image: '/back_light.jpg',
      title: 'Nouveaux whiskies',
      description: 'Dégustez nos single malt.',
      ctaText1: 'Explorer',
      ctaLink1: '/whisky',
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
        'Depuis 1729, la Maison Ruinart est le plus ancienne Maison de Champagne.',
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
