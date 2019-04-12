function addParrafo()
           {
              let divRespuesta = document.getElementById("respuesta");
              let parrafo = document.getElementsByTagName("p");
              let newParrafo = document.createElement("p");
              let textoParrafo=document.createTextNode("parrafo "+(parrafo.length+1));
              newParrafo.appendChild(textoParrafo);
              let buscaBoton = document.getElementById("añadir");
              divRespuesta.insertBefore(newParrafo, buscaBoton);
           }

           function eliminar()
           {
			let parrafodelete = this;   
			let divRespuesta = document.getElementById("respuesta"); 
			divRespuesta.removeChild(parrafodelete);
			
           }

           function lanzar()
           {
              let divRespuesta = document.getElementById("respuesta");
              let titulo = document.getElementsByName("titulo")[0].value;
              let parrafo = document.getElementsByName("numero")[0].value;
              console.log(titulo);
              console.log(parrafo);
              parrafo = +parrafo;
              // let titulo = miFormulario.titulo.value;
              // let parrafo = miFormulario.parrafo.value;
              let h1=document.createElement("h1");
              let textoH1=document.createTextNode(titulo);
              h1.appendChild(textoH1);
              divRespuesta.appendChild(h1);

              for(let i = 1; i<=parrafo;i++){
                  let parrafos=document.createElement("p");
                  let textoParrafo=document.createTextNode("parrafo "+i);
                  parrafos.appendChild(textoParrafo);
				  divRespuesta.appendChild(parrafos);
				  parrafos.addEventListener("click",eliminar);
              }

              let boton = document.createElement("input");
              boton.setAttribute("type","button");
              boton.value="añadir";
              boton.id="añadir";
              boton.addEventListener("click",addParrafo);
              divRespuesta.appendChild(boton);
           }


			function validar()
			{
				let titulo=miFormulario.titulo.value;
				let numero=miFormulario.numero.value;

				if(/^\s+$/.test(numero)|| numero=="" || numero.length==0)
					return false;

				if(!/^[a-z]{5-20}$/.test(titulo))
				{
					alert("El titulo debe ser letra A a Z y de 5 a 20 caracteres");
					body.style.blackgroundColor= "red";
					return false;
				};

				if (!/^([1-9]|10)$/.test(numero))
				{
					alert("El número debe estar entre 1 y 10");
				};

				miFormulario.btn_lanzar.style.display="block";
				miFormulario.btn_lanzar.onclick=lanzar;
				miFormulario.btn_lanzar.disabled="true";
				
				
			}
			
			
            window.onload = function() {

				miFormulario.btn_lanzar.style.display="block";
				miFormulario.btn_lanzar.onclick=lanzar;
				let titulo=miFormulario.titulo;
				let numero=miFormulario.numero;
				titulo.onblur=validar;
				numero.onblur=validar;

			};			