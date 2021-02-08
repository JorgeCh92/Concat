const concat = (a, b) => {
    return [...a, ...b];
};

console.log(concat(["perro", "gato", "serpiente", "cocodrilo"], ["coche", "avión", "bus", "tren"]));


//Múltiples arrays de entrada
const concat2 = (...a) => {
    return a.reduce((a, b) => [...a, ...b]);
};

console.log(concat2(["perro", "gato", "serpiente", "cocodrilo"], ["coche", "avión", "bus", "tren"], ["mesa", "silla", "sofá"], 
    ["televisión", "ordenador"]));