import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss',
})
export class CarrouselComponent implements OnInit, OnDestroy {
  slides = [
    {
      image: '/banner.jpg',
      title: 'Offre spéciale -30%',
      description: 'Découvrez nos vins sélectionnés !',
    },
    {
      image: '/back_light.jpg',
      title: 'Nouveaux whiskies',
      description: 'Dégustez nos single malt.',
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
