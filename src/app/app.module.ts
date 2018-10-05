// MODULES
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
// FIREBASE
import {AngularFireModule} from 'angularfire2';
// import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
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
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
