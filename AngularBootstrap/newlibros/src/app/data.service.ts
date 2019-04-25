
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  //lo incluimos en el  constructor para realizar la llamada
  
  constructor(private http: HttpClient) { }
   data = Array;
   firstClick() {
    return console.log('clicked');
  }

  getLibros(){
    return this.http.get("http://localhost:8080/libros");
  }//esto es un servicio para acceder a los libros 

  getUsers() {

    // var data=[
    //   {id: '1', titulo: 'libro1', Precio: '9.9'},
    //   {id: '2', titulo: 'libro2', Precio: '19.9'},
    //   {id: '3', titulo: 'libro3', Precio: '7.9'}
    // ];
    return this.data;
  }
}
