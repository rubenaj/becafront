import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.scss']
})
export class NuevoLibroComponent implements OnInit {
  libro:any;
  libros:any;
  id:any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.libro={id:0,titulo:'',autor:'',precio:0}
    this.data.getLibros().subscribe( data => {
      this.libros =data;
      this.id = this.libros[this.libros.length-1].id;
      console.log(this.id);
    })
  }
  enviar(){
    this.libro.id=this.id+1;
    this.data.postLibros(this.libro).subscribe(data =>{
      console.log(data);
    });
  }

}
