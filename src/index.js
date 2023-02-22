import validator from './validator.js';
var inputNumeroTarjeta = document.getElementById('numero-tarjeta');
inputNumeroTarjeta.addEventListener('keypress', function (e){
	if (!soloNumeros(event)){
  	e.preventDefault();
  }
})
function soloNumeros(e){
    var key = e.charCode;
    return key >= 48 && key <= 57;
}
var btnValidarTarjeta = document.getElementById("validar-tarjeta");
btnValidarTarjeta.addEventListener ("click", ()=>{
    const numeroTarjeta=inputNumeroTarjeta.value
   if(numeroTarjeta != "" ||numeroTarjeta.length ==16){
    document.getElementById("n-tarjeta").innerHTML=validator.maskify(numeroTarjeta)
    if(validator.isValid(numeroTarjeta)){
        document.getElementById("mensaje-valido").style.display="block";
        inputNumeroTarjeta.value=""
    }
    else{
        document.getElementById("mensaje-erroneo").style.display="block";  
        document.getElementById("mensaje-erroneo").innerHTML="Tu tarjeta es invalida!";
    }
   }else{
    document.getElementById("mensaje-erroneo").style.display="block";
    document.getElementById("mensaje-erroneo").innerHTML="Porfavor complete el numero de tarjeta!";
   }
    setTimeout(() => {
        document.getElementById("mensaje-valido").style.display="none";
        document.getElementById("mensaje-erroneo").style.display="none";
    },"5000")
})