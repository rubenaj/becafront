class Serie
{
  private titulos:string;
  private numCapitulo:number;
  
  constructor(titulo:string, numCapitulo:number)
  {
      this.titulos=titulo;
      this.numCapitulo=numCapitulo;
  }
  gettitulo(){
      return this.titulos;
  }
  settitulo(titulo:string){
      return this.titulos=titulo;
  }
  getnumCapitulo(){
      return this.numCapitulo;
  }
  setnumCapitulo(numCapitulo: number){
      return this.numCapitulo=numCapitulo;
  }

  var arraySeries:serie[]=[];

  function guardar()
  {
      var titulo:string = (<HTMLInputElement>document.getElementById("titulo")).value;
      var numCapitulo:number = parseInt(<HTMLInputElement>document.getElementById("numCapitulo")).value;

      //var serie=new serie(titulo,numCapitulo);
      arraySeries.push(serie);

  }
  
window.onload = function(){
var btn_guardar=(<HTMLInputElement>document.getElementById("btn_guardar"));
btn_guardar.addEventListener('click',arraySeries);
}
/*var modo=

  function arraySerie(){

    let titulo;
    let numCapitulo;
  }*/
}
