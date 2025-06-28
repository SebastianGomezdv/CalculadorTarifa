let valor = 0
const TARIFA_BASE = 2800;

let tipoPasajero = prompt('Por favor Ingrese un Número: \n1. Estudiante \n2. Adulto Mayor \n3. Trabajador \n4. Turista');

if (tipoPasajero == 1) {
    valor = TARIFA_BASE * 50 / 100
    console.log(`El valor de la tarifa para Estudiantes es: $${valor}`)
} else if (tipoPasajero == 2) {
    valor = TARIFA_BASE * 60 / 100
    console.log(`El valor de la tarifa para Adultos Mayores es: $${valor}`)
} else if (tipoPasajero == 3) {
    valor = TARIFA_BASE
    console.log(`El valor de la tarifa para Trabajadores es: $${valor}`)
} else if (tipoPasajero == 4) {
    valor = TARIFA_BASE * 110 / 100
    console.log(`El valor de la tarifa para Turistas es: $${valor}`)
} else {
    console.log('Tipo de pasajero no reconocido.');
}

let horaDia = prompt('¿Qué hora es? \n-Digita la hora sin los minutos por favor.');
let mañanaTarde = prompt('¿Es \n1. AM  \n2. PM \n (Digita 1 o 2)');

if (horaDia >= 6 && horaDia <= 9 && mañanaTarde == 2) {
    valor = valor + (valor * 10 / 100)
    console.log(`El cargo adicional ha sido cargado por hora pico, tu tarifa ahora es: $${valor}`)
} else if (horaDia <= 5 && horaDia >= 10) {
    console.log('No se aplicó cargo por hora pico');
}

let cantidadTransbordos = prompt('¿Cuántos transbordos se hicieron?');

if (cantidadTransbordos == 1) {
    valor = valor - 300
    console.log(`Por 1 transbordo se aplicó un descuento de 300 pesos, tu tarifa ahora es: $${valor}`)
} else if (cantidadTransbordos == 2) {
    valor = valor - 500
    console.log(`Por 2 transbordos se aplicó un descuento de 500 pesos, tu tarifa ahora es: $${valor}`)
} else {
    console.log('No se aplicó descuento por transbordos');
}
