let total = num => {  //recibe numero por teclado (incompleto)
if (num < 0) num = num * -1;  
	if (num <= 0) return 1;
let total= 1;

while (num > 1) {
    total = total * num;
    num--;
}
return total; 
}
for (let x = 0; x <= 5; x++) {
	console.log(`El factorial de ${x} es ${total(x)}`);  
}

//Ejercicio incompleto, falta ingresar por teclado

//@utor Andrés Monge