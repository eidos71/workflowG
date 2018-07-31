import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wfg-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }

  sayHello(){
    return "Hello world!";
  }

}
