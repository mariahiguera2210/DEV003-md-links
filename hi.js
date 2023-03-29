
// let number = [1,2,3,4,5,6,7,8,9,10];

// let suma = 0;
  
// for (let i = 1; i < number.length ; i++) {
//   if (number[i] % 3 === 0 || number[i] % 5 === 0){
//       suma += number[i]
//       console.log('suma += i: ', suma);
      
//   }
  
// }

// console.log('suma: ', suma);

const num = (123456789);
const newArray = []


const digits  = num.toString().split('')
const realDigits = digits.map(Number)

console.log('este es realDigits: ' , realDigits)
for (let i = 0; i < realDigits.length; i++){
    newArray.push(realDigits[i]*realDigits[i]);
    newArray.replace(',', '');
    
};


console.log(newArray)




    //recorrido que me busque en orden los numeros 
    // buscar dentro del mismo array el duplicado
    //retornar un nuevo array
  


  
