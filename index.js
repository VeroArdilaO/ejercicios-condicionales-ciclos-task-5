/*Dada una lista de estudiantes donde 
cada estudiante tiene un nombre, edad, 
y una lista de notas, muestra los nombres
de los estudiantes en consola que en su
promedio hayan sacado 3.0 o más.
notes: [(1 + 1 + 1) / 3]*/

const students = [
  { name: "Luisa", age: 15, notes: [1, 1, 1] },

  { name: "Eduardo", age: 17, notes: [4, 5, 2] },

  { name: "Catalina", age: 16, notes: [5, 5, 5] },

  { name: "Monica", age: 15, notes: [2, 2, 2] },

  { name: "Miguel", age: 21, notes: [3, 1, 2] },

  { name: "Tomas", age: 17, notes: [1, 2, 5] }
];

for (let i = 0; i < students.length; i++) {
  let sumaNotas = 0;
  for (let j = 0; j < students[i].notes.length; j++) {
    sumaNotas = sumaNotas + students[i].notes[j];
  }
  if (sumaNotas / students[i].notes.length >= 3) {
    console.log(
      "Los estudiantes que pasaron la materia son " + students[i].name
    );
  }
}

/* Dada una lista de números mostrar en consola solo los 
números impares, pero si se encuentra un número 
múltiplo de 5 terminar el ciclo. */

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < 15; i++) {
  if (numberList[i] % 2 !== 0) {
    console.log(numberList[i] + " Es un numero impar");
  }
  if (numberList[i] % 5 === 0) {
    break;
    //console.log(numberList[i] + ' Soy un múltiplo de 5')
  }
}

/* Genera un número aleatorio entre 1 y 10 y muéstralos 
en consola hasta que encuentres el número 6. */

let random = true;

while (random) {
  let RandomNumber = Math.round(Math.random() * 10 + 1);
  if (RandomNumber === 6) {
    random === false;
    console.log(`El numero es: ${RandomNumber}`);
    break;
  } else {
    console.log(`El numero es: ${RandomNumber}`);
  }
}
