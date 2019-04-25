import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }
  // data = Array;
  // firstClick() {
  //   return console.log('clicked');
  // }
  // getUsers() {

  //   var data=[
  //     {id: '1', titulo: 'libro1', Precio: '9.9'},
  //     {id: '2', titulo: 'libro2', Precio: '19.9'},
  //     {id: '3', titulo: 'libro3', Precio: '7.9'}
  //   ];
  //   return this.data;
  // }
  getLibros(){
    return this.http.get("http://localhost:8080/libros");
  }
  postLibros(libro){
    return this.http.post("http://localhost:8080/libros", libro);
  }

}
