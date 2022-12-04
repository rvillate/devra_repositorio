import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  statusCheckbox: boolean = false;
  currentPage:string = "home";
  constructor(private dataServices:DataService) 
  {
   }

  ngOnInit(): void {  }

  UpdateCurrentPageVar(currentPage: string) {
    
    this.dataServices.currentPage=currentPage;
    this.statusCheckbox=true;

    this.currentPage=currentPage;

    //Modificar un valor de una etiqueta
    const area = document.getElementById('check') as HTMLInputElement;
    area.checked = false;

    
    
}

}
