import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  libros: Object;
  constructor() { }
  ngOnInit() {
    this.libros=[
      {libro: 'libro1', autor: 'autor1', precio: '9.9'},
      {libro: 'libro2', autor: 'autor2', precio: '19.9'},
      {libro: 'libro3', autor: 'autor3', precio: '7.9'}
    ];
  }

}
