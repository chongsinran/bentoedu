import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';

import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgxEpicVideoPlayerModule } from 'ngx-epic-video-player';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,AppRoutingModule, HttpClientModule,NgxEpicVideoPlayerModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: LocationStrategy,
      useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
