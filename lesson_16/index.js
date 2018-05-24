const n = 10;

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const numbers = document.getElementById('numbers');
const second = document.getElementById('second');
const seconds = document.getElementById('seconds');
const x1 = document.getElementById('x1');
const x2 = document.getElementById('x2');
const x3 = document.getElementById('x3');


for (let i = 1; i <= n; i += 1) {
	let span = document.createElement('span');
	span.setAttribute('id', `span_${i}`);
	span.appendChild(document.createTextNode(i));
	numbers.insertBefore(span, numbers.children[i]);
	if (i < n){
		numbers.insertBefore(document.createTextNode(', '), numbers.children[i + 1])
	}
}

let num = 0;
let counter = 0;
let interval;
let speed = 1000;
let check = false;

second.appendChild(document.createTextNode(num));
seconds.appendChild(document.createTextNode('s'));

function count () {
	let interval = setInterval(function() {
		num += 1;
		second.innerHTML = num;
		if (num === 1) {
			seconds.innerHTML = '';
		} else {
			seconds.innerHTML = 's';
		}

		if (counter < n) {
			counter += 1;
			document.getElementById(`span_${counter}`).style.backgroundColor = 'lightblue';
		} else if (counter === n) {
			counter += n + 1;
			document.getElementById(`span_${counter - n - 1}`).style.backgroundColor = 'lightpink';
			counter -= 1;
		} else if (counter > n + 1) {
			counter -= 1;
			document.getElementById(`span_${counter - n}`).style.backgroundColor = 'lightpink';
		} else if (counter === n + 1) {
			counter = 0;
			document.getElementById(`span_${counter + 1}`).style.backgroundColor = 'lightblue';
			counter += 1;
		}
	}, speed)
	start.setAttribute('disabled', 'true');

	stop.addEventListener('click', function(){
		counter = 0;
		clearInterval(interval);
		second.innerHTML = 0;		
		start.removeAttribute('disabled');
		second.innerHTML = 0;
		num = 0;
		let numb = numbers.children;
		for (let i = 1; i < numb.length - 1; i++ ) {
			numb[i].style.backgroundColor = 'white';
		}
		letS.innerHTML = 's';
		startB.removeAttribute('disabled');
		check = false;
	})

	pause.addEventListener('click', function() {
		clearInterval(interval);
		start.removeAttribute('disabled');
	})
}
start.addEventListener('click', count);


x1.addEventListener('click', function(){
	speed = 1000;
	clearInterval(interval);
	if (num > 0 && check === false) count();
});
x2.addEventListener('click', function(){
	speed = 500;
	clearInterval(interval);
	if (num > 0 && check === false) count();
});
x3.addEventListener('click', function(){
	speed = 1000 / 3;
	clearInterval(interval);
	if (num > 0 && check === false) count();
})
