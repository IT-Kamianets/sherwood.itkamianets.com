import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { RoomsComponent } from './pages/rooms/rooms';
import { RestaurantComponent } from './pages/restaurant/restaurant';
import { GalleryComponent } from './pages/gallery/gallery';
import { ContactsComponent } from './pages/contacts/contacts';
import { SpaComponent } from './pages/spa/spa';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'spa', component: SpaComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '' }
];
