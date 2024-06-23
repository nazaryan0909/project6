// Խնդիր 1: Օբյեկտի հատկությունների ցուցադրում 
// Նկարագրություն: Գրել ֆունկցիա, որը տրված օբյեկտի բոլոր հատկությունների անվանումները  
 // և արժեքները կցուցադրի console-ում։

// function Hatkutyun(obj) {
//     for(let key in obj){
//         console.log(key)
//         console.log(obj[key])
//       }
//     }
//   const person = {
//     name: 'Edgar',
//     age: 30,
//     city: 'Tashir',
//     occupation: 'Cragravorox'
//   };
//    Hatkutyun(person);

// Խնդիր 2: Հատկությունների քանակի հաշվարկ 
// Նկարագրություն: Գրել ֆունկցիա, որը կհաշվարկի տրված օբյեկտի հատկությունների քանակը։

// function hashvark(obj) {
//     let count = 0;
//     for (let prop in obj) {
//         count++
//     }
  
//     return count;
//   }

//   const person = {
//     name: 'Armen',
//     age: 30,
//     city: 'New York',
//     occupation: 'Bjishk'
//   }
  
//   const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020
//   }
  
//   console.log(hashvark(person));
//   console.log(hashvark(car)); 
  
// Խնդիր 4: Օբյեկտի պատճենում 
// Նկարագրություն: Գրել ֆունկցիա, որը կվերադարձնի նոր օբյեկտ, որը պատճեն է տրված օբյեկտի։
// function copyObject(obj){
//     let obj1 = {}
//     for(let key in obj){
//         obj1[key] = obj[key]
//     }
//     return obj1
    
// }
// console.log(copyObject({name: 'Alen', age: 15}))

// Գրել ֆունկցիա , որը պարզում է տրված օբյեկտը դատարկ է , թե ոչ։

// function empty(obj){
//     let count = 0;
//     for(let key in obj){
//      count++
//     }
//     if(count == 0){
//         return true;
//     }
//     return false;
// }

// console.log(empty({}))