import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'technique-label',
  templateUrl: './technique-label.component.html',
  styleUrls: ['./technique-label.component.css']
})
export class TechniqueLabelComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
    console.log("component");
    
  }

}
