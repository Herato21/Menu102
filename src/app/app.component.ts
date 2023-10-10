import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Perfil', url: '/perfil', icon: 'person-circle'},
    { title: 'Contacto', url: '/contacto', icon: 'call' },
    { title: 'Catálogo', url: '/catalogo', icon: 'book' },
    { title: 'Galería', url: '/galeria', icon: 'images'},
    { title: 'Ajustes', url: '/ajustes', icon: 'construct'},
  ];
 // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
