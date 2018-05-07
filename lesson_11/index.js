 let a = 2;
 let b = 8;
 let operation = "pow";
  let res;

 switch (operation) {
     
	case "add":
    		res = a + b;
		console.log(res);
	break;
	case "sub":
      		res = a - b;
		console.log(res);
		break;

 	case "mult":
      		res = a * b;
		console.log(res);
		break;

	case "div":
	 if (b !== 0) {
      			res = a / b;
			console.log(res);
 		} 
		else {
			console.log("can not be divided by zero");
		}
	break;

	case "pow":
     		res = Math.pow(a, b);
		console.log(res);
		break;
	default:
 	console.log( "Please enter correct data" )
 }