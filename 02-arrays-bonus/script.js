const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for (i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
  console.log(reversedTeachers);
}
console.log(`Esercizio 1: ${reversedTeachers}`);
//const reversedTeachers = teachers.reverse();

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (i = 0; i < teachers.length; i++) {
  const currentTeacher = teachers[i];
  if (currentTeacher.length >= 5) {
    longNames.push(currentTeacher);
    console.log(longNames);
  } else {
    console.log(`${teachers[i]} ha meno di 5 caratteri`);
  }
}
console.log(`Esercizio 2: ${longNames}`);
//const longNames = teachers.filter(teacher => teacher.lenght >= 5);

// 3. Rimuovi 'Ed' dall'array teachers
const elementToRemoveIndex = teachers.indexOf('Ed');
if (elementToRemoveIndex >= 0) {
  teachers.splice(elementToRemoveIndex, 1);
}
console.log(`Esercizio 3: ${teachers}`);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;
for (i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    isFabioPresent = true;
    console.log('Fabio è presente');
  }
}
console.log('Esercizio 4:', isFabioPresent);
//const isFabioPresent = teachers.includes('Fabio') >= 0;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e salvala nella variabile teachersString
let teachersString = '';

for (i = 0; i < teachers.length; i++) {
  if (i === teachers.length - 1) {
    teachersString += `${teachers[i]}. `;
    console.log(teachersString);
  } else {
    teachersString += `${teachers[i]}, `;
    console.log(teachersString);
  }
}

console.log('Esercizio 5:', teachersString);

//const teachersString = teachers.join(',');