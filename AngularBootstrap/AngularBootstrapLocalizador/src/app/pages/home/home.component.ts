import { Component, OnInit, ViewChild } from '@angular/core';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';

@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 reorder: boolean;
 list: any;
 text: string;
 constructor() {
   this.text = "";
   this.list = localStorage.getItem('places-list');
   if (this.list) this.list = JSON.parse(this.list);
   else this.list = [];
  }
 ngOnInit() {
 }
 async add(event?) {
   navigator.geolocation.getCurrentPosition(pos => {
     let url = "https://maps.google.com/maps?&z=15&t=k&q="+pos.coords.latitude+" "+pos.coords.longitude;
     if (event) {
       let reader = new FileReader();
       reader.onload = (data:any) => {
         this.list.unshift({name:this.text,img:data.target.result,url:url});
         this.save();
       }
       reader.readAsDataURL(event.target.files[0]);
     }
     else {
     }
   });
 }
 save() {
   localStorage.setItem('places-list', JSON.stringify(this.list));
   this.text = "";
 }
 delete(item) {
   this.list.splice(item, 1);
   this.save();
 }

}