/*Creado por Daniel Sarmiento en 2017, prueba de evaluacion de javascript UF1305.*/
/*Funcion del boton 1*/
function palindromo() {
	var palabra = da.value; /*Internet explorer no soporta la propiedad .value*/
	palabra = palabra.replace(/\s/g,'');
	var minus = palabra.toLowerCase();
	var palabraAlReves = minus.split("").reverse().join(""); /*Transformar palabra al reves*/
	if (minus === "") { /*Cuando el campo es introducido vacio*/
		alert("No dejes este campo vacio o introduzcas espacios.");
	}
	else if (minus == palabraAlReves) { /*Si la palabra es igual a la palabra girada.*/
		alert("Si es un palíndromo.");
	return(true); /*Es capicua/palindromo.*/
	}
	else {
		alert("No es un palíndromo.");
	return(false); /*No es capicua/palindromo.*/
	}
}
/*Funcion del boton 2*/
function propiedades() {
	w3r.type;
	w3r.hreflang;
	w3r.rel;
	w3r.target;
	w3r.href;
	propiedadess.innerHTML = ('<strong>Estas son las propiedades del enlace a:</strong> <br><br>' + '<strong>Type:</strong>' + w3r.type + '.' + '<br>' + '<strong>Hreflang:</strong>' + w3r.hreflang + '.' + '<br>' + '<strong>Rel:</strong>' + w3r.rel + '.' + '<br>' + '<strong>Target:</strong>' + w3r.target +  '.' + '<br>' +'<strong>Href:</strong>' + w3r.href + '.');
}	/*Plasmar en el navegador sus propiedades*/

/*El boton 1 funciona en todos lo navegadores menos internet explorer porque no 
reconoce la propiedad .value y el boton2 funciona en todos los navegadores*/