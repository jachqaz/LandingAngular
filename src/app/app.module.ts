// MODULES
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';
// FIREBASE
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '../../node_modules/angularfire2/database';
// COMPONENTS
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ContentComponent} from './components/content/content.component';
import {LoginComponent} from './components/login/login.component';
import {AdvisoryComponent} from './components/advisory/advisory.component';
import {HomeComponent} from './components/home/home.component';
import {MainComponent} from './components/main/main.component';
import {DetailsComponent} from './components/details/details.component';
import {EditComponent} from './components/edit/edit.component';
import {FirebaseService} from './services/firebase.service';
import {ReviewsComponent} from './components/reviews/reviews.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    AdvisoryComponent,
    HomeComponent,
    MainComponent,
    DetailsComponent,
    EditComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatSliderModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
