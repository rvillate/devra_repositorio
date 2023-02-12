import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio-page',
  templateUrl: './portafolio-page.component.html',
  styleUrls: ['./portafolio-page.component.scss']
})
export class PortafolioPageComponent implements OnInit {

  constructor(private router: Router) { }

  goToVelocimetroWearos1() {  
    this.router.navigate(['/apps/android']);
  }
  
  ngOnInit(): void {
  }

}
