import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogPagesComponent } from './pages/blog-page/blog-pages.component';
import { PortafolioPageComponent } from './pages/portafolio-page/portafolio-page.component';
import { Page404NotFoundComponent } from './pages/page404-not-found/page404-not-found.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { IMCCorporalComponent } from './pages/apps/imc-corporal/imc-corporal.component';

const routes: Routes = [
  
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'portfolio', component: PortafolioPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'blog', component: BlogPagesComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'apps/IMC-Corporal', component: IMCCorporalComponent},
  
  {path: '**', component: Page404NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
