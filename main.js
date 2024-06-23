// Խնդիր 1: Օբյեկտի հատկությունների ցուցադրում 
// Նկարագրություն: Գրել ֆունկցիա, որը տրված օբյեկտի բոլոր հատկությունների անվանումները  
 // և արժեքները կցուցադրի console-ում։

function Hatkutyun(obj) {
    for(let key in obj){
        console.log(key)
        console.log(obj[key])
      }
    }
  const person = {
    name: 'Edgar',
    age: 30,
    city: 'Tashir',
    occupation: 'Cragravorox'
  };
   Hatkutyun(person);



// function hashvark(obj) {
//     let count = 0;
//     for (let prop in obj) {
//       if (obj.arjeq(prop)) {
//         count++;
//       }
//     }
  
//     return count;
//   }

//   const person = {
//     name: 'Armen',
//     age: 30,
//     city: 'New York',
//     occupation: 'Bjishk'
//   };
  
//   const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020
//   };
  
//   console.log(hashvark(person));
//   console.log(hashvark(car)); 
  