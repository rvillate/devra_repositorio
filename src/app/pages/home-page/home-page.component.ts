import { Component, OnInit } from '@angular/core';
import { CargarScriptsJSService } from 'src/app/services/cargar-scripts-js.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(_CargarJS:CargarScriptsJSService) 
  {
    _CargarJS.CargaDesdeArchivo(["home/RGraph.common.core.js"])
    _CargarJS.CargaDesdeArchivo(["home/RGraph.rose.js"])
    
  }

  ngOnInit() {}
  

}
