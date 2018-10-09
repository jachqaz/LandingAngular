import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.service.getReviews()
      .subscribe(reviews => this.reviews = reviews);
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      nombre: '',
      opinion: '',
      puntaje: ''
    });
  }

  onCrear() {
    this.service.addReview(this.form.value);
    this.initForm();
  }
}
