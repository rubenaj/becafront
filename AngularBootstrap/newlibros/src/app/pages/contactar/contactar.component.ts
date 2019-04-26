import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.scss']
})
export class ContactarComponent implements OnInit {
  
  correo:any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.correo={text:'',email:'',subject:''}
    }
  
  enviar(){
    this.data.enviarCorreo(this.correo).subscribe(data =>{
       console.log(data);
   });
   }

}
