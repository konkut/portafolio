"use strict";

let calc1 = document.getElementById("calcular1");
let msg = document.getElementById("mensaje");
let desc1 = document.getElementById("desc1");
let desc2 = document.getElementById("desc2");


calc1.addEventListener("click",(e)=>{
	e.preventDefault();

	let c1 = document.getElementById("calculo1");
	let m1 = document.getElementById("medida1");
	let por1 = document.getElementById("porcentaje1");
	let medLargo1 = parseInt(document.getElementById("largo1").value);
	let medAncho1 = parseInt(document.getElementById("ancho1").value);

	let c2 = document.getElementById("calculo2");
	let m2 = document.getElementById("medida2");
	let por2 = document.getElementById("porcentaje2");
	let medLargo2 = parseInt(document.getElementById("largo2").value);
	let medAncho2 = parseInt(document.getElementById("ancho2").value);


	let val1 = medLargo2 / medLargo1;
	let res1 = val1 * medAncho1;

	let val2 = medAncho2 / medAncho1;
	let res2 = val2 * medLargo1;

	
	if (isNaN(medLargo1) || isNaN(medLargo1)) {
		msg.innerHTML = `<span style="color:red">ERROR NO ES UN NUMERO LA HOJA PRINCIPAL</span>`;
		return;
	}
	if (!isNaN(medLargo1) && !isNaN(medAncho1) ) {
		c1.innerHTML = `${(val1).toFixed(3)}`;
		m1.innerHTML = `${medLargo2} 	x    ${(res1).toFixed(3)}`;
		por1.innerHTML = `${(val1*100).toFixed(0)}%`;
	}	
	
	if (isNaN(medLargo2) || isNaN(medLargo2)) {
		msg.innerHTML = `<span style="color:red">ERROR NO ES UN NUMERO LA HOJA A DIMENSIONAR</span>`;	
		return;
	}
	if (!isNaN(medLargo2) && !isNaN(medAncho2) ) {
		c2.innerHTML = `${(val2).toFixed(3)}`;
		m2.innerHTML = `${(res2).toFixed(3)}    X   ${medAncho2}`;
		por2.innerHTML = `${(val2*100).toFixed(0)}%`;
	}
	
	

	let aproximado = 5000;
	let resultado1 = medAncho2 - res1;
	let resultado2 = medLargo2 - res2;
	

	if (resultado1 >= 0 && resultado2 >= 0){
		if(resultado1 < aproximado) aproximado = resultado1;	
		if(resultado2 < resultado1) aproximado = resultado2;	
	}else {
		if(resultado1 >= 0 && resultado2 < 0) {
			aproximado = resultado1;	
		}else{
			if(resultado2 >= 0 && resultado1 < 0) {
				aproximado = resultado2;	
			}else{
				if(resultado1 < -2 && resultado2 < -2) {
					if(resultado1 < aproximado) aproximado = resultado1;	
					if(resultado2 < resultado1) aproximado = resultado2;	
				}else{
					msg.innerHTML= "Error de calculo";
				}
			}
		}
	}
	
	
	if (resultado1 == aproximado){
		por1.classList.remove("bg-danger");
		por1.classList.add("bg-success");

	}
	if (resultado2 == aproximado){
		por2.classList.remove("bg-danger");
		por2.classList.add("bg-success");
	}

	if(resultado1 <= 0) desc1.innerHTML = `SOBRESALE LA HOJA ${(resultado1*-1).toFixed(2)}cm DE ANCHO`;
	else desc1.innerHTML = `ESPACIO EN BLANCO ${(resultado1).toFixed(2)}cm DE ANCHO`;
	
	if(resultado2 <= 0) desc1.innerHTML = `SOBRESALE LA HOJA ${(resultado2*-1).toFixed(2)}cm DE LARGO`;
	else desc2.innerHTML = `ESPACIO EN BLANCO ${(resultado2).toFixed(2)}cm DE LARGO`;
	

});







