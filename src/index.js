import validator from './validator.js';
// Se toma el elemento numero-tarjeta por el Id
const inputNumeroTarjeta = document.getElementById('numero-tarjeta');

// Se agrega un evento listener tipo keypress al input de numero-tarjeta
inputNumeroTarjeta.addEventListener('keypress', (e) => {
   // Se valida que la tecla presionada sean correspondientes a la tecla con el cod asignado a numero 	
  if (!soloNumeros(e)) e.preventDefault(); // e.preventDefault es para continuar el flujo normal
})

// La funcion solo numeros validara que la key de la tecla este entre 48 y 57 "solo los numeros"
function soloNumeros(e) {
	const key = e.charCode; // charCode es el cod de la tecla
	return key >= 48 && key <= 57;
}

// Tomamos el elemento btn por el id validar-tarjeta
const btnValidarTarjeta = document.getElementById("validar-tarjeta");

// Se agrega un evento listener de tipo click al btn
btnValidarTarjeta.addEventListener("click", () => {

	const numeroTarjeta = inputNumeroTarjeta.value; // Tomamos el numero de tarjeta desde el input numero-tarjeta

	// Validamos que el numero de tarjeta no este vacio o que tenga 16 caracteres
	if (numeroTarjeta !== "" || numeroTarjeta.length === 16) {

		document.getElementById("n-tarjeta").innerHTML = validator.maskify(numeroTarjeta); //Usamos la funcion maskyfy para mostrar los ultimos 4 dig de la tj

		//Validamos con la funcion isValid el numero de tc
		if (validator.isValid(numeroTarjeta)) {

			// Tomamos un elemento por el Id mensaje-valido y en la propiedad de estilo display se la cambiamos a block
			document.getElementById("mensaje-valido").style.display = "block"; 
			inputNumeroTarjeta.value = ""; // Eliminamos el numero de tarjeta del input (limpiar el formulario)
		}
		else {

			// Tomamos un elemento por el ID mensaje-erroneo y en la propiedad de estilo display la camabiamos a block
			document.getElementById("mensaje-erroneo").style.display = "block";

		    // Tomamos un elemento por el Id mensaje-erroneo y con la propiedad .innerHTML ingresamos un texto
			document.getElementById("mensaje-erroneo").innerHTML = "Tu tarjeta es invalida!"; 
		}
	} else {
		// Tomamos un elemento por el ID mensaje-erroneo y en la propiedad de estilo display la camabiamos a block
		document.getElementById("mensaje-erroneo").style.display = "block";
		// Tomamos un elemento por el Id mensaje-erroneo y con la propiedad .innerHTML ingresamos un texto
		document.getElementById("mensaje-erroneo").innerHTML = "Porfavor complete el numero de tarjeta!";
	}
	// Agregamos un setTimeout con un tiempo de 5 seg para que oculte los msj
	setTimeout(() => {
		document.getElementById("mensaje-valido").style.display = "none";
		document.getElementById("mensaje-erroneo").style.display = "none";
	}, "5000")
})