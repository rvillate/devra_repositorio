import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { PortafolioPageComponent } from './portafolio-page/portafolio-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogPagesComponent } from './blog-page/blog-pages.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Page404NotFoundComponent } from './page404-not-found/page404-not-found.component';
import { IMCCorporalComponent } from './apps/imc-corporal/imc-corporal.component';



@NgModule({
  declarations: [
    ServicesComponent,
    PortafolioPageComponent,
    AboutPageComponent,
    BlogPagesComponent,
    ContactPageComponent,
    HomePageComponent,
    Page404NotFoundComponent,
    IMCCorporalComponent,
    //HomeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
  ]
})
export class PagesModule { }
