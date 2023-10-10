import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  mostrarBotonesAdicionales: boolean = false;

  constructor() { }

  ngOnInit() {}

  mostrarBotones() {
    this.mostrarBotonesAdicionales = true;
  }

  accionBoton(numero: number) {
    // Puedes agregar acciones personalizadas para cada botón aquí
    console.log('Botón ' + numero + ' presionado.');
  }

}
