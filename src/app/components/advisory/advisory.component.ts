import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FirebaseService} from '../../services/firebase.service';


@Component({
  selector: 'app-advisory',
  templateUrl: './advisory.component.html',
  styleUrls: ['./advisory.component.css']
})
export class AdvisoryComponent implements OnInit {

  form: FormGroup;

  constructor(
    private service: FirebaseService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      nombre: '',
      apellidos: '',
      telefono: '',
      ciudad: '',
      email: ''
    });
  }

  onCrear() {
    this.service.addContacto(this.form.value);
    this.initForm();
  }


}
