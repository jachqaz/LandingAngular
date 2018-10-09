import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() contacto: any = null;
  @Output() cerrar = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onCerrar() {
    this.cerrar.emit();
  }

}
