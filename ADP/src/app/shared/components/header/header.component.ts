import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  isMenuOpen = false; // État du menu (fermé par défaut)

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Utilisation de Renderer2 pour manipuler le DOM après l'initialisation de la vue
    this.setHeaderOpacity(); // Appel initial pour gérer le cas où la page est chargée déjà scrollée
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    console.log('Dans hoslitener header component ');
    this.setHeaderOpacity();
  }

  private setHeaderOpacity() {
    // Utilisation de Renderer2 pour plus de sécurité et de performance
    const header = this.el.nativeElement.querySelector('header');

    // console.log(window.pageXOffset, window);
    if (header) {
      if (window.pageYOffset > header.clientHeight) {
        this.renderer.addClass(header, 'opacity_true');
      } else {
        this.renderer.removeClass(header, 'opacity_true');
      }
    }
  }

  // Fonction pour basculer l'état du menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
