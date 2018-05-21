function init(arr1, n){
		let keyAtribute  = "";
		let nameAtribute = "";
		let attr = arr1.attributes;
		for (let key in attr) {
			keyAtribute = key;
			nameAtribute = attr[key];
		}

 	let ul = document.createElement("ul");
	let li ="";
 	document.body.insertBefore(ul, document.body.firstChild);
	for (let i = 0; i < n ; i++) {
		li = document.createElement("li");
	    li.className = arr1.className;
	    li.setAttribute(keyAtribute, nameAtribute);
	    li.innerHTML = arr1.content;
	    ul.appendChild(li);
	}
}

document.querySelector('button').addEventListener("click", listen);

 function listen() {
	let element = document.querySelector('ul');
	if(element){
		element.parentNode.removeChild(element);
		return true;
	}
	else{
		return false;
	}
}
