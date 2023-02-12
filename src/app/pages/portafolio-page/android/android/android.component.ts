import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.scss']
})
export class AndroidComponent implements OnInit {

  constructor(private router: Router) { }

  goToVelocimetroWearos1() {  
    this.router.navigate(['apps/android/velocimetro-wearos']);
  }
  
  ngOnInit(): void {
  }

}
