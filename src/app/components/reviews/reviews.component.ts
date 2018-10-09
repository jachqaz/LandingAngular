import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  form: FormGroup;
  reviews;

  constructor(
    private service: FirebaseService,
  ) {
  }

  ngOnInit() {
    this.service.getReviews()
      .subscribe(reviews => this.reviews = reviews);
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      opinion: new FormControl('', Validators.required),
      puntaje: new FormControl()
    });
  }

  onCrear() {
    this.service.addReview(this.form.value);
    this.initForm();
  }
}
