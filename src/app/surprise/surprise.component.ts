import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
@Component({
  selector: 'app-surprise',
  templateUrl: './surprise.component.html',
  styleUrls: ['./surprise.component.css']
  
})
export class SurpriseComponent implements OnInit {

  currentRate = 0;
  constructor() { }

  ngOnInit(): void {
    
  }

}
