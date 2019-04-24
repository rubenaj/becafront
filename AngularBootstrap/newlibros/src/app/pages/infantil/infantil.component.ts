import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infantil',
  templateUrl: './infantil.component.html',
  styleUrls: ['./infantil.component.scss']
})
export class InfantilComponent implements OnInit {

  librosInfantil: Object;
  constructor() { }
  ngOnInit() {
    this.librosInfantil=[
      {libro: 'libro1', autor: 'autor1', precio: '9.9'},
      {libro: 'libro2', autor: 'autor2', precio: '19.9'},
      {libro: 'libro3', autor: 'autor3', precio: '7.9'}
    ];
  }

}
