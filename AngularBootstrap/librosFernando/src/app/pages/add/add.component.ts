import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  

  constructor(private data: BooksService) { }

  ngOnInit() {
   

}
}