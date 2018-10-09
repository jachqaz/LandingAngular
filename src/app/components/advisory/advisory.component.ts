import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      email: new FormControl('',
        [
          Validators.required,
          Validators.email])
    });
  }

  onCrear() {
    this.service.addContacto(this.form.value);
    this.initForm();
  }


}
