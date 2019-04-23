import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  appTitle: string = 'My Webk Site';
  // OR (either will work)
  // appTitle = 'My Web Site';
  constructor() { }

  ngOnInit() {
  }

}
