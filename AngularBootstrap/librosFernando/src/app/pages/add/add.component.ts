import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/service/books.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
 
  book:any =  { id: 0, title:'', author:'', price:0, img:'', url:'' };

  constructor(private books: BooksService) { }

  ngOnInit() {
   }
   add(){
    console.log(this.book);
    this.books.add(this.book);
  }
}