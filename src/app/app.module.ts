import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Location } from '../providers/location';
import { UserProvider } from '../providers/user-provider';
import { Camera } from '@ionic-native/camera';
import { CameraProvider } from '../providers/camera-provider';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { DetailsPage } from '../pages/Properties/details/details';
import { SearchPage } from '../pages/Properties/search/search';
import { LoginPage } from '../pages/Authentication/login/login';
import { LocationPage } from '../pages/Properties/location/location';
import { AgentPage } from '../pages/Users/agent/agent';
import { AccountPage } from '../pages/Users/account/account';
import { SignupPage } from '../pages/Authentication/signup/signup';
import { ResetPassPage } from '../pages/Authentication/resetpass/resetpass';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
    apiKey: "AIzaSyADvf-8iub07hHe67w7R1NFgMxQRayVT0o",
    authDomain: "eezehome-d20bb.firebaseapp.com",
    databaseURL: "https://eezehome-d20bb.firebaseio.com",
    projectId: "eezehome-d20bb",
    storageBucket: "eezehome-d20bb.appspot.com",
    messagingSenderId: "138364263789"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    SearchPage,
    LoginPage,
    LocationPage,
    AgentPage,
    AccountPage,
    SignupPage,
    ResetPassPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule 

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    SearchPage,
    LoginPage,
    LocationPage,
    AgentPage,
    AccountPage,
    SignupPage,
    ResetPassPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    GoogleMaps,
    Geolocation,
    UserProvider,
    CameraProvider,
    Location,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
