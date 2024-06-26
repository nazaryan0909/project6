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

// let obj = {
//     x:{
//         y:{
//             z:"hello",
//             age:40
//         }
//     }
// }

// let path = "x.y.z"
// console.log(path.split("."))

// function pathInObject(obj, path){
//     let obj1 = object 
//     let arr = path.split(".")
//     for(let i = 0; i < arr.length; i++){
//         if(obj1[arr[i]] === undefined){
//             return false
//         }else {
//             obj1= obj1[arr[i]]
//         }
//     }
//     return true
// }

// Խնդիր 1: 0-ից մինչև 1 թվի գեներացիա 
// Գեներացնել պատահական թիվ 0-ից մինչև 1 միջակայքում:

// let randomNumber = Math.random();
// console.log(randomNumber);

// Խնդիր 2: 0-ից մինչև 100 ամբողջական թվի գեներացիա 
// Գեներացնել պատահական ամբողջական թիվ 0-ից մինչև 100 միջակայքում:


// let randomInteger = Math.floor(Math.random() * 101); 
// console.log(randomInteger);

// function getRandomInteger(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// let m = 5;
// let n = 10;
// let randomInt = getRandomInteger(m, n);
// console.log(randomInt);
// function RandomElementFromArr(arr){
//     let index = Math.floor(Math.random() * arr.length)
//     return arr[index]
// }
// console.log(RandomElementFromArr(["Alen", "Sevak", "Taguhi", "Lyusi"]))

// Խնդիր 5: Պատահական տառ 
// Գեներացնել պատահական տառ (A-Z):

// function RandomLetter(){
// let x = "ABCDEFGJKLMNOPQRZ"
// let index = Math.floor(Math.random() * x.length)
// return x[index]
// }
// console.log(RandomLetter())

// console.log(String.fromCharCode(1381))

function RandomNumberFrom65to90(){

    let randomInteger = Math.floor(Math.random() * (90 - 65 + 1) + 65)
    console.log(randomInteger)
    return String.fromCharCode(randomInteger)
}
console.log(RandomNumberFrom65to90())
