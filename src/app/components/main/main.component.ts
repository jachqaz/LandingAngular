import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'Contactos';
  contactos: any[];
  ciudades = ['todo', 'bogota', 'cali', 'medellin', 'Otra Ciudad'];
  contacto = null;
  contactoEditar = null;

  constructor(private servicio: FirebaseService) {
  }

  ngOnInit() {
    this.servicio.getContactos()
      .valueChanges().subscribe(contactos => this.contactos = contactos);

  }

  onClick(contacto) {
    this.contacto = contacto;
  }

  cerrarDetalles() {
    this.contacto = null;
  }

  onEditar(contacto) {
    this.contactoEditar = contacto;
  }

  cerrarEdicion() {
    this.contactoEditar = null;
  }
}

