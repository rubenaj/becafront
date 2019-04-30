import { BooksService } from 'src/app/service/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  search: string='';
  list: any;
  constructor(private bookList:BooksService) { }

  ngOnInit() {
    this.list = this.bookList.list;
  }

}
