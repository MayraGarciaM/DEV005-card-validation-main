const validator = {
	//Se crea una funcion flecha que va a recibir creditCardNumber y va a retornar si es valido o no
	isValid: (creditCardNumber) => {
		let total = 0; // Creamos var total que contiene la suma de todo el algoritmo
		const creditCardReverse = [...creditCardNumber].reverse(); // reversamos el num de tc para que quede al reves con la funcion reverse
		
		//Recorre todos los num de la tc se indica la posicion inicial en este caso 0 y va aumentando prgresivamente en la cant de digitos de la tc
		for (let p = 0; p < creditCardReverse.length; p++) {

			//Se valida si la posicion es par o impar con el modulo de la division 
			//Se valida las posciiones impares porque en JS las posiciones inician desde 0 y no desde 1
			if (p % 2 !== 0) { 

				let valuePositionResult = creditCardReverse[p] * 2; //Se multiplica el valor de la posicion p por 2
				//se valida si el num es mayor a 10
				//segun el algoritmo de luhn si la multi es igual a 10 se suman sus digitos
				if (valuePositionResult >= 10) {
					valuePositionResult = String(valuePositionResult);
					valuePositionResult = Number(valuePositionResult[0]) + Number(valuePositionResult[1]);
				}
				//Se suma el valor de total mas el resultado final
				total = total + valuePositionResult;
			} else {
				//Si la posicion no es impar solo se suma el numero de la posicion p
				total = total + Number(creditCardReverse[p]);
			}
		}
		//segun el algorimo el mod de la division entre total y 10 debe ser igual a cero, si es asi la tj es valida
		if (total % 10 === 0) {
			return true;
		}
		//si el modulo del total y 10 es diferente a 0 la tj es invalida
		else return false;
	},
	maskify: (creditCardNumber) => {
		if (creditCardNumber.length < 4) return creditCardNumber; // Si el numero de la tarjeta tiene menos de 4 digitos no es necesario realizar el maskify
		//Guardamos la cant. de digitos que tiene y le restamos 4 que va a ser el espacio de los ulti 4 num
		const cantidadDigitos = creditCardNumber.length - 4;
		const last4Characters = creditCardNumber.substr(-4); // Con la funcion substr tomamos los ult 4 digitos de la tj
		const maskingCharacters = '*'.repeat(cantidadDigitos) + last4Characters; // con la funcion repeat, repetimos el * n cantidad de veces y le concatenamos los ultimos 4 dig
		return (maskingCharacters); //Retornamos el num de la tj formateada
	}
}
export default validator;
