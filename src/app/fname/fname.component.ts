import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fname',
  templateUrl: './fname.component.html',
  styleUrls: ['./fname.component.css']
})
export class FnameComponent implements OnInit {
names = ['java','css','html','php','javascript','jquery'];
  constructor() { }

  ngOnInit() {
  }

}
