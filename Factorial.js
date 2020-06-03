let total = num => {  //recibe numero por teclado (incompleto)
if (num < 0) num = num * -1;  // condicion para factorial
	if (num <= 0) return 1;
let total= 1;

while (num > 1) {
    total = total * num;
    num--;
}
return total; //retorna resultado de multipliación wn condición while
}
for (let x = 0; x <= 5; x++) {
	console.log(`El factorial de ${x} es ${total(x)}`);  //contador hasta igual a numero ingresado, aún sin igualar a numero ya que el ejercicio está incompleto porque no recibe de teclado
}

//Ejercicio incompleto, falta ingresar por teclado
