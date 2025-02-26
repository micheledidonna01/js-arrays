const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[4];
console.log('Esercizio 1: ',fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

for (i = 0; i < teachers.length; i++) {
  if (i === 4) {
    teachers[i] = 'Patrick';
    console.log('Esercizio 2: ', teachers[i]);
  }
}

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log('Esercizio 3:')
console.log(lastTeacher);
console.log(teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log('Esercizio 4:')
console.log(firstTeacher);
console.log(teachers);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log('Esercizio 5: ', teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah');
console.log('Esercizio 6: ', teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex

for(i=0; i<teachers.length; i++){
  if(teachers[i] === 'Lewis'){
    const lewisIndex = i;
    console.log('Esercizio 7: L\'indice è', lewisIndex);
  }
}

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

const isTeachersEmpty = teachers.length > 0;

  if(isTeachersEmpty){
    console.log('L\'array è pieno', isTeachersEmpty);
  }else{
    console.log('L\'array è vuoto', isTeachersEmpty);
  }

console.log(`Esercizio 8: l'array contiene: ${teachers.length} elementi`);