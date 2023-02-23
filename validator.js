const validator = {
	isValid: (creditCardNumber) => {
		let total = 0;
		const creditCardReverse = [...creditCardNumber].reverse();
		for (let p = 0; p < creditCardReverse.length; p++) {
			if (p % 2 !== 0) {
				let valuePositionResult = creditCardReverse[p] * 2;
				if (valuePositionResult >= 10) {
					valuePositionResult = String(valuePositionResult);
					valuePositionResult = Number(valuePositionResult[0]) + Number(valuePositionResult[1]);
				}
				total = total + valuePositionResult;
			} else {
				total = total + Number(creditCardReverse[p]);
			}
		}
		if (total % 10 === 0) {
			return true;
		}
		else return false;
	},
	maskify: (creditCardNumber) => {
		if (creditCardNumber.length < 4) return creditCardNumber;
		const cantidadDigitos = creditCardNumber.length - 4;
		const last4Characters = creditCardNumber.substr(-4);
		const maskingCharacters = '*'.repeat(cantidadDigitos) + last4Characters;
		return (maskingCharacters);
	}
}
export default validator;
