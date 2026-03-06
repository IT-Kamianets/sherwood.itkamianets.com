import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class GalleryComponent {
  photos: string[] = [
    'image/17.jpg',
    'image/18.jpg',
    'image/19.jpg',
    'image/16.jpg',
    'image/9.jpg',
    'image/11.jpg',
    'image/4.jpg',
    'image/5.jpg',
    'image/1.jpg',
    'image/2.jpg',
    'image/3.jpg',
    'image/6.jpg',
    'image/7.jpg',
    'image/8.jpg',
    'image/10.jpg',
    'image/12.jpg',
    'image/13.jpg',
    'image/14.jpg',
    'image/15.jpg'
  ];

  currentIndex = signal<number | null>(null);
  selectedPhoto = computed(() => {
    const index = this.currentIndex();
    return index !== null ? this.photos[index] : null;
  });

  openPhoto(index: number) {
    this.currentIndex.set(index);
  }

  closePhoto() {
    this.currentIndex.set(null);
  }

  nextPhoto(event: Event) {
    event.stopPropagation();
    const current = this.currentIndex();
    if (current !== null) {
      this.currentIndex.set((current + 1) % this.photos.length);
    }
  }

  prevPhoto(event: Event) {
    event.stopPropagation();
    const current = this.currentIndex();
    if (current !== null) {
      this.currentIndex.set((current - 1 + this.photos.length) % this.photos.length);
    }
  }
}
