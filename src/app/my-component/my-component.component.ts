import { Component, OnInit ,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'] ,
  encapsulation:ViewEncapsulation.None
})
export class MyComponentComponent implements OnInit {
  name: string;


  constructor() {
    this.name = 'David Shukrun';
   }
   seyHello() {
    console.log('Hello ,' + this.name)
  }
  ngOnInit() {
  }

}
