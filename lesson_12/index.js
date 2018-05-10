const arr1 = [1, 13, -3, 0];


let sum = arr1.reduce((sum, current) => sum + current, 0);
let a = sum / arr1.length;
let min = Math.max(...arr1);
let max = Math.min(...arr1);
console.log(sum);
console.log(a);
console.log(min);
console.log(max);



const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };
 let arrValue = obj1['value'];
 let ignore = obj1['ignore'];

 let nextArr = arrValue.filter(function(number) {
   return number != arrValue[ignore];
 });

 let newMas = nextArr.slice(obj1['from'], obj1['to']);

 console.log(newMas.join(', '));