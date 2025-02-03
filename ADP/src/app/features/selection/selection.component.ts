import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-selection',
  imports: [RouterModule, CurrencyPipe],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss',
})
export class SelectionComponent {
  @Input() recommendations: any[] = [];

  // Mock de données si aucune donnée n'est fournie
  recommendationsMock = [
    {
      id: 10,
      name: 'Jack Daniels',
      image: '/bouteille/jack_daniels.png',
      link: '/bouteille/jack-daniels',
      price: 27.99,
      description: 'Whisky Jack Daniels Old No. 7 70cl, icône du Tennessee.',
    },
    {
      id: 2,
      name: 'Ruinart Brut',
      image: '/bouteille/ruinart_brut.png',
      link: '/bouteille/ruinart-brut',
      price: 45.99,
      description:
        'Bouteille de champagne Ruinart Brut 75cl, élégance et finesse.',
    },
    {
      id: 3,
      name: 'Moët & Chandon Ice',
      image: '/bouteille/moet_chandon_ice_imperial.jpg',
      link: '/bouteille/moet-chandon-ice-imperial',
      price: 49.99,
      description:
        'Bouteille de champagne Moët & Chandon Ice Impérial 75cl, à déguster sur glace.',
    },
    {
      id: 4,
      name: 'Absolut',
      image: '/bouteille/absolut_70cl.jpg',
      link: '/bouteille/absolut',
      price: 19.99,
      description: 'Bouteille de vodka Absolut 70cl, pure et authentique.',
    },
    {
      id: 5,
      name: 'Desperados Red',
      image: '/bouteille/desperados_red_33cl.jpg',
      link: '/bouteille/desperados-red',
      price: 2.49,
      description:
        'Bière Desperados Red 33cl, saveur unique avec une touche fruitée.',
    },
    {
      id: 6,
      name: 'Belvedere Magnum',
      image: '/bouteille/belvedere magnum.jpg',
      link: '/bouteille/belvedere-magnum',
      price: 79.99,
      description:
        'Vodka Belvedere en format Magnum 1,75L, idéale pour les grandes occasions.',
    },
    {
      id: 7,
      name: 'Belvedere',
      image: '/bouteille/belvedere_70cl.jpg',
      link: '/bouteille/belvedere',
      price: 39.99,
      description: 'Vodka Belvedere 70cl, une référence de qualité premium.',
    },
    {
      id: 8,
      name: 'Chivas Regal',
      image: '/bouteille/chivas_1l.jpg',
      link: '/bouteille/chivas',
      price: 34.99,
      description:
        'Whisky Chivas Regal 12 ans 1L, un classique équilibré et riche.',
    },
    {
      id: 9,
      name: 'Grey Goose',
      image: '/bouteille/grey_goose.jpg',
      link: '/bouteille/grey-goose',
      price: 44.99,
      description:
        'Vodka Grey Goose 70cl, reconnue pour sa douceur exceptionnelle.',
    },
    {
      id: 10,
      name: "Jus d'ananas",
      image: '/bouteille/jus_ananas.jpg',
      link: '/bouteille/jus-ananas',
      price: 4.99,
      description: "Bouteille de jus d'ananas 1L, fraîche et naturelle.",
    },
    /** 
    {
      id: 10,
      name: 'CRISTALINE 50CL',
      image: '/bouteille/CRISTALINE 50CL.jpg',
      link: '/bouteille/cristaline-50cl',
    },
   
     * 
     * {
      id: 9,
      name: 'coca',
      image: '/bouteille/coca.jpg',
      link: '/bouteille/coca',
    },{
      id: 11,
      name: 'Desperados red',
      image: '/bouteille/Desperados red.jpg',
      link: '/bouteille/desperados-red',
    },
    {
      id: 12,
      name: 'Desperados',
      image: '/bouteille/Desperados.jpg',
      link: '/bouteille/desperados',
    },
    {
      id: 13,
      name: 'Eristoff',
      image: '/bouteille/Eristoff.jpg',
      link: '/bouteille/eristoff',
    },
    {
      id: 14,
      name: 'freixenet',
      image: '/bouteille/freixenet.jpg',
      link: '/bouteille/freixenet',
    },
    {
      id: 15,
      name: "Grant's",
      image: "/bouteille/Grant's.jpg",
      link: '/bouteille/grants',
    },
    {
      id: 16,
      name: 'grey-goose magnum 40 150CL 110€',
      image: '/bouteille/grey-goose magnum 40 150CL 110€.jpg',
      link: '/bouteille/grey-goose-magnum',
    },
    {
      id: 17,
      name: 'grey-goose',
      image: '/bouteille/grey-goose.jpg',
      link: '/bouteille/grey-goose',
    },
    {
      id: 18,
      name: 'heineken',
      image: '/bouteille/heineken-25cl.jpg',
      link: '/bouteille/heineken',
    },
    {
      id: 19,
      name: 'Jack Daniels honey',
      image: '/bouteille/Jack Daniels honey.jpg',
      link: '/bouteille/jack-daniels-honey',
    },
    {
      id: 20,
      name: 'Jack daniels',
      image: '/bouteille/jack_daniels.png',
      link: '/bouteille/jack-daniels',
    },
    {
      id: 20,
      name: 'Damoiseau Cubis',
      image: '/bouteille/damoiseau_cubis.webp',
      link: '/bouteille/damoiseau-cubis',
    },
    {
      id: 21,
      name: 'Saint James',
      image: '/bouteille/saint_james.webp',
      link: '/bouteille/saint-james',
    }, **/
  ];

  constructor() {
    // Si aucune recommandation n'est passée, on utilise le mock
    if (this.recommendations.length === 0) {
      this.recommendations = this.recommendationsMock;
    }
  }
}
