import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //paso  9.2

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  firstClick() {
    console.log('clicked');
  }
}
