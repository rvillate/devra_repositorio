import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
//import { HomeComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';
import { CargarScriptsJSService } from './services/cargar-scripts-js.service';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],exports:[
    AppComponent
  ],
  providers: [
    CargarScriptsJSService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
