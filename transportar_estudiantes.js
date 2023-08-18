// solucion de el problema de transportacion de estudiantes actividad UVM 
// By Jose Antonio Nicasio Software Engineer.
const CAPACIDAD_GRANDE = 50;
const CAPACIDAD_PEQUEÑO = 40;
const COSTO_GRANDE = 900;
const COSTO_PEQUEÑO = 700;
const MAX_CONDUCTORES = 18;
const TOTAL_ESTUDIANTES = 800;

// Función para calcular el costo total
const calcularCosto = (numGrandes, numPequeños) => {
    return (numGrandes * COSTO_GRANDE) + (numPequeños * COSTO_PEQUEÑO);
}

// Función para calcular el total de estudiantes transportados
const estudiantesTransportados = (numGrandes, numPequeños) => {
    return (numGrandes * CAPACIDAD_GRANDE) + (numPequeños * CAPACIDAD_PEQUEÑO);
}

// Función para verificar las restricciones
const verificarRestricciones = (numGrandes, numPequeños) => {
    if(numGrandes + numPequeños > MAX_CONDUCTORES) {
        return false;
    }
    if(estudiantesTransportados(numGrandes, numPequeños) < TOTAL_ESTUDIANTES) {
        return false;
    }
    return true;
}

// Comprobación para 16 autobuses grandes y 0 autobuses pequeños
const numGrandes = 16;
const numPequeños = 0;

if(verificarRestricciones(numGrandes, numPequeños)) {
    console.log(`Costo para ${numGrandes} autobuses grandes y ${numPequeños} autobuses pequeños: $${calcularCosto(numGrandes, numPequeños)}`);
} else {
    console.log('La combinación de autobuses no cumple con las restricciones.');
}


// Comprobacion maximo costo

// Función para verificar las restricciones
const verificarRestriccionesParaMaximoCosto = (numGrandes, numPequeños) => {
    if(numGrandes + numPequeños > MAX_CONDUCTORES) {
        return false;
    }
    if(estudiantesTransportados(numGrandes, numPequeños) < TOTAL_ESTUDIANTES) {
        return false;
    }
    return true;
}

// Función para encontrar la combinación de autobuses que maximiza el costo
const maximoCosto = () => {
    let maxCost = 0;
    let combinacion = {};

    // Itera sobre todas las combinaciones posibles de autobuses
    for(let i = 0; i <= MAX_CONDUCTORES; i++) {
        for(let j = 0; j <= MAX_CONDUCTORES - i; j++) {
            if(verificarRestricciones(i, j)) {
                const costoActual = calcularCosto(i, j);
                if(costoActual > maxCost) {
                    maxCost = costoActual;
                    combinacion = { grandes: i, pequeños: j };
                }
            }
        }
    }
    return {
        costo: maxCost,
        ...combinacion
    };
}

const resultado = maximoCosto();
console.log(`La combinación que maximiza el costo utiliza ${resultado.grandes} autobuses grandes y ${resultado.pequeños} autobuses pequeños con un costo total de: $${resultado.costo}`);
