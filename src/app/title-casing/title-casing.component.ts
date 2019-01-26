import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-casing',
  templateUrl: './title-casing.component.html',
  styleUrls: ['./title-casing.component.css']
})
export class TitleCasingComponent implements OnInit {

  tileCasingValue: string;
  
  constructor() { 
  }
  
  ngOnInit() {
  }

}
