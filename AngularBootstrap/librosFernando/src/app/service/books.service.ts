import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  list:any[] = [
    { id: 1, title:'Cuentos para ser escuchados', author:'Fernando Ruiz Rico', price:3.99, img:'https://images-na.ssl-images-amazon.com/images/I/41Xs%2BVAP-3L._SX331_BO1,204,203,200_.jpg', url:'https://www.amazon.es/dp/8461700511' },
    { id: 1, title:'Cuentos para ser compartidos', author:'Fernando Ruiz Rico', price:3.99, img:'https://images-na.ssl-images-amazon.com/images/I/41eWDLASNJL._SX331_BO1,204,203,200_.jpg', url:'https://www.amazon.es/dp/8409041294' },
    { id: 1, title:'La pandilla digital contra el profesor analógico', author:'Fernando Ruiz Rico', price:3.99, img:'https://images-na.ssl-images-amazon.com/images/I/518Kv-ZvfUL._SX331_BO1,204,203,200_.jpg', url:'https://www.amazon.es/dp/1719898235' }
  ];
  constructor() {
    var storage = localStorage.getItem('books-list');
    if (storage) this.list = JSON.parse(storage);
  }
  add(book:any) {
    this.list.unshift(book);
    this.save();
  }
  delete(item:number) {
    this.list.splice(item, 1);
    this.save();
  }  
  save() {
    localStorage.setItem('books-list', JSON.stringify(this.list));
  }
}