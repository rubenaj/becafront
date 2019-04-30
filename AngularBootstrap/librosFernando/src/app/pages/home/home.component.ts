import { BooksService } from './../../service/books.service';
import { BooksService } from 'src/app/service/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  
})
export class HomeComponent implements OnInit {

  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(public books: BooksService) { }
  console.log( this.Books.list)
  ngOnInit() {
  }

}
