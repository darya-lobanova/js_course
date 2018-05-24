const arr1 = [1, 13, -3, 0];

let sumArray = 0;
let min = arr1[0];
let max = arr1[0];
  for (let i = 0; i < arr1.length; i++) {
	sumArray += arr1[i];
     if (arr1[i] < min) {
    min = arr1[i];
  }
    if (arr1[i] > max) {
    max = arr1[i];
    }
}

let a = sumArray / arr1.length;
console.log(sumArray);
console.log(a);
console.log(min);
console.log(max);

const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };
let arrValue = obj1['value'];
let keys = obj1['ignore'];
let nextArr = [];
for(let i = 0; i < arrValue.length; i++){
  if(i >= obj1['from'] && i <= obj1['to']){
      if(keys.includes(i)==false){
        nextArr.push(arrValue[i]);
      }
  }
}
 console.log(nextArr.join(', '));