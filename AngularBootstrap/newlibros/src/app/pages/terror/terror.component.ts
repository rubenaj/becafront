import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/data.service';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.scss']
})
export class TerrorComponent implements OnInit {
  librosTerror:any;
  constructor(private data:DataService) { }
  ngOnInit() {
    // this.librosTerror=[
    //   {libro: 'libro1', autor: 'autor1', precio: '9.9'},
    //   {libro: 'libro2', autor: 'autor2', precio: '19.9'},
    //   {libro: 'libro3', autor: 'autor3', precio: '7.9'}
    // ];
    
    this.data.getLibros().subscribe(data => {
      this.librosTerror = data;
    })
    }
  }


