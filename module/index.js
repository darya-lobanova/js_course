let o = 'a';
function itsMe(o) {
	if (o = undefined){
		a = darya-lobanova;
	}
	return `It's me, ${a}`;
}


//////////////////////////////////////////////////////////////////////////





let a = 10;
let b = 2;
// let comp = "div";
// function compare(a, b){
// 	switch (comp) {

// 		case "more":
// 			return (a > b);
// 			break;

// 		case "less":
// 			return (a < b);
// 			break;
// 		case "equal":
// 			return (a == b);
// 			break;
// 		case "nn":
// 			return (NaN);
// 			break;
// 		default:
// 		return ( "Please enter correct data" );				
// 	}
// }
function compare(a, b){
	if (a > b) {
		return (`${a} > ${b}`);
	} 	
	else if (a < b){
		return (`${a} < ${b}`);
	}
	else if (a == b){
		return (`${a} == ${b}`);
	}
	else if (a === NaN, b === NaN){
		return ("NaN");	
	}
} 



//////////////////////////////////////////////////////////////////////////

function row(c, d, e, f){
	
	let i = [c, d, e];
	let j;
	if (f == "<"){
		i.sort(function (c, d) {
			return c - d;
	})

		j = i.join(' < ');
	}	
}	


//////////////////////////////////////////////////////////////////////////

function fact(m){
	let result = 1;

	while (m--) {
  		result *= m + 1;
	}
}

/////////////////////////////////////////////////////////////////////////

function matrixDiff(){

}

////////////////////////////////////////////////////////////////////////

function strangeSearch(l){
	let l = ['Bill', 'Kill', 'Song']
	let div1 = document.createElement('div');
	div1.innerText = 'Bill';
	div2.innerText = 'Kill';
	div3.innerText = 'Song';

	let div2 = document.createElement('div');
	let div3 = document.createElement('div');
	let button = document.createElement('button');
	button.setAttribute('id', `go`);
	button.innerText = 'Search';
}