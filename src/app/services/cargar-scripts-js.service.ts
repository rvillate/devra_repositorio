import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsJSService {
  constructor() { }
  CargaDesdeArchivo(archivos:string[]){
    for(let archivo of archivos) {
      let script = document.createElement('script');
      script.src = "./assets/js/"+archivo;
      script.type = 'text/javascript';
      let body = document.getElementsByTagName('body')[0];
      body.appendChild(script);
    }
  }
  CargaDesdeURL(URL:string){
    let script = document.createElement('script');
      script.src = URL;
      script.type = 'text/javascript';
      let body = document.getElementsByTagName('body')[0];
      body.appendChild(script);
  }
  
}
