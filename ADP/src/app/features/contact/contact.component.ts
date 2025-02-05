import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactComponent {
  // Icônes FontAwesome
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faSpinner = faSpinner;

  // Informations de contact
  contactInfos = [
    { id: 1, icon: faPhone, text: '+33 1 23 45 67 89' },
    { id: 2, icon: faEnvelope, text: 'contact@alcoldepot.com' },
    { id: 3, icon: faMapMarkerAlt, text: "123 Rue de l'Exemple, 75001 Paris" },
  ];

  // Formulaire réactif
  contactForm: FormGroup;

  // État de chargement
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Soumission du formulaire
  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      // Simuler un envoi de formulaire
      setTimeout(() => {
        this.isLoading = false;
        alert(
          'Merci pour votre message ! Nous vous répondrons dès que possible.'
        );
        this.contactForm.reset();
      }, 2000);
    } else {
      alert('Veuillez remplir correctement tous les champs.');
    }
  }
}
