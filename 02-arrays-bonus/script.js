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
for(i=teachers.length - 1; i>=0; i--){
  reversedTeachers.push(teachers[i]);
  console.log(reversedTeachers);
}
console.log(`Esercizio 1: ${reversedTeachers}`);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for(i=0; i<teachers.length; i++){
  if(teachers[i].length >= 5){
    longNames.push(teachers[i]);
    console.log(longNames);
  }else{
    console.log(`${teachers[i]} ha meno di 5 caratteri`);
  }
}
console.log(`Esercizio 2: ${longNames}`);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1,1);
console.log(`Esercizio 3: ${teachers}`);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false; 
for(i=0; i<teachers.length; i++){
  if(teachers[i] === 'Fabio'){
    isFabioPresent = true;
    console.log('Esercizio 4:', isFabioPresent);
  }
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = '';

for(i=0; i<teachers.length; i++){
  if(i === teachers.length - 1){
    teachersString+= `${teachers[i]}. `;
    console.log(teachersString);
  }else{
    teachersString+= `${teachers[i]}, `;
    console.log(teachersString);
  }
}

console.log('Esercizio 5:', teachersString);