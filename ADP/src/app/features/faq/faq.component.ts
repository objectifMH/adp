import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faq',
  imports: [FontAwesomeModule], // Ajout du module FontAwesome
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  faqItems = [
    {
      id: 1,
      question: "Quels sont les horaires d'ouverture ?",
      answer: 'Nous sommes ouverts du lundi au samedi, de 10h à 20h.',
      isOpen: true,
    },
    {
      id: 2,
      question: 'Proposez-vous des livraisons à domicile ?',
      answer:
        'Oui, nous offrons un service de livraison dans tout Paris. Les frais de livraison dépendent de votre adresse.',
      isOpen: false,
    },
    {
      id: 3,
      question: 'Acceptez-vous les cartes de crédit ?',
      answer:
        'Oui, nous acceptons les cartes de crédit (Visa, MasterCard) ainsi que les paiements en espèces.',
      isOpen: false,
    },
    {
      id: 4,
      question: 'Puis-je annuler une commande ?',
      answer:
        "Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.",
      isOpen: false,
    },
    {
      id: 5,
      question: 'Puis-je annuler une commande ?',
      answer:
        "Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.",
      isOpen: false,
    },
    {
      id: 6,
      question: 'Puis-je annuler une commande ?',
      answer:
        "Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.",
      isOpen: false,
    },
    {
      id: 7,
      question: 'Puis-je annuler une commande ?',
      answer:
        "Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.Vous pouvez annuler une commande avant qu'elle ne soit préparée. Contactez-nous dès que possible pour annuler.",
      isOpen: false,
    },
  ];

  toggleAnswer(id: number) {
    const item = this.faqItems.find((item) => item.id === id);
    if (item) {
      item.isOpen = !item.isOpen;
    }
  }
}
