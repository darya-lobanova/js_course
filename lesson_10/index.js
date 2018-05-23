const myAge = 21;
let year = 'лет';

	if (((myAge % 10 >= 5 || (myAge % 100 >= 11 && myAge % 100 <= 19)) || myAge % 10 == 0)) {
  		year = " лет";
} 

	else if  ( myAge % 10 == 1) {
  		year = "год";
}

	else {
		year = "года";
}

console.log(`Мой возраст ${myAge} ${year}`);