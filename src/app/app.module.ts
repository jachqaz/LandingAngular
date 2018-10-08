// MODULES
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {MatButtonModule, MatCardModule, MatInputModule, MatMenuModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import {DetallesComponent} from './components/test/detalles/detalles.component';
import {EditarComponent} from './components/test/editar/editar.component';
import {FirebaseService} from './services/firebase.service';


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
    DetallesComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,

  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
