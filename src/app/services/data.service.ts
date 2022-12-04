import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentPage: string = "N/A";
  constructor() { }
}
