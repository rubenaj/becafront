import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.scss']
})
export class TerrorComponent implements OnInit {



  librosTerror: Object;
  constructor() { }
  ngOnInit() {
    this.librosTerror=[
      {libro: 'libro1', autor: 'autor1', precio: '9.9'},
      {libro: 'libro2', autor: 'autor2', precio: '19.9'},
      {libro: 'libro3', autor: 'autor3', precio: '7.9'}
    ];
  }

}
