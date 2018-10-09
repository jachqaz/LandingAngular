import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FirebaseService} from '../../services/firebase.service';


@Component({
  selector: 'app-editar',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Output() cerrar = new EventEmitter();
  form: FormGroup;
  contactoOriginal: any;

  constructor(
    private service: FirebaseService,
    private fb: FormBuilder) {
  }

  @Input() set contacto(valor) {
    this.crearFormulario();
    if (valor) {
      this.contactoOriginal = valor;
      // alert(valor.toString());
      this.form.patchValue({
        nombre: valor.nombre,
        apellidos: valor.apellidos,
        telefono: valor.telefono,
        ciudad: valor.ciudad,
        email: valor.email
      });
    }
  }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.fb.group({
      nombre: '',
      apellidos: '',
      telefono: '',
      ciudad: '',
      email: ''
    });
  }

  onGuardar() {
    this.service.updateContacto(this.contactoOriginal.key, this.form.value);
    this.onCancelar();
  }

  onCancelar() {
    this.contactoOriginal = null;
    this.cerrar.emit();
  }

}
