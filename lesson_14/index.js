function add (str = '❤🇺🇦') {
	let sum = 0;
		 for (let i = 0; i < string.length; i += 2) {
		   sum += string.charCodeAt(i) + string.charCodeAt(i + 1);
		 }
		 return sum / (string.length / 2);
		}



function clearNumbers(array) {

		for (let x = 0; x < array.length; x++) {
			for (let y = 0; y < array[x].length; y++) {
				if (typeof array[x][y] !== 'number') {
					array[x].splice(y, 1);
					y -= 1; 
				}
			}
		}
		return array;
}



function revers(rev) {
    let array = [];
    
	    for (let i = 0; i < arguments.length; i++) {
	    	
	        array.push(arguments[i].split("").reverse().join(""));
	    }
		
	    return arr.reverse();;
}



function splitArray(arr, c) {
	
		let newarr = [];

		while(arr.length) {
	    newarr.push(arr.splice(0, c));
	}
		return newarr;
}