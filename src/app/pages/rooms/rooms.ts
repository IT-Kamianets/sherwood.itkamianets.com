import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class RoomsComponent {
  rooms = [
    {
      name: 'Двомісний Стандарт',
      price: 'від 700 грн',
      description: 'Затишний номер для двох з усім необхідним для комфортного відпочинку.',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Двомісний Напівлюкс',
      price: 'від 1200 грн',
      description: 'Покращений номер з терасою та видом на ліс. Ортопедичні матраци.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Сімейний Люкс',
      price: 'від 2000 грн',
      description: 'Двокімнатний котедж з балконом, ідеально підходить для відпочинку всією родиною.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Елітний Котедж (Апартаменти)',
      price: 'від 5200 грн',
      description: '180 кв. м. розкоші: 3 спальні, камін, кухня та приватна зона барбекю.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
    }
  ];
}
